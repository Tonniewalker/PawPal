// ===== ระบบบัญชี (Guest / Google) =====
// status: checking | welcome | migrating | conflict | guest | user | error
import { useCallback, useEffect, useRef, useState } from 'react'
import { authErrorMessage, createCloudStore, isGuest, localStore, setGuest, signInWithGoogle, signOutAccount, watchAccount } from './data'

// ย้ายข้อมูล Guest ขึ้นคลาวด์
async function moveLocalToCloud(local, cloud) {
  await cloud.resetGame()
  await cloud.savePet(local.pet)
  if (local.diary.length) await cloud.addDiaryEntries(local.diary)
  await localStore.resetGame()
  setGuest(false)
}

export function useAccount() {
  const [state, setState] = useState({ status: 'checking' })
  // ใช้ผลของการเปลี่ยนบัญชีครั้งล่าสุดเท่านั้น
  const runRef = useRef(0)

  const handleAccount = useCallback(async (account) => {
    const run = ++runRef.current
    const stale = () => run !== runRef.current

    if (!account) {
      setState(isGuest() ? { status: 'guest', store: localStore } : { status: 'welcome' })
      return
    }

    const cloud = createCloudStore(account.uid)
    try {
      const local = await localStore.loadGame()
      if (local.pet) {
        // มีสัตว์เลี้ยงของ Guest อยู่ในเครื่อง
        setState({ status: 'migrating' })
        const remote = await cloud.loadGame()
        if (stale()) return
        if (remote.pet) {
          setState({ status: 'conflict', account, store: cloud, local, remote })
          return
        }
        await moveLocalToCloud(local, cloud)
        if (stale()) return
        setState({ status: 'user', account, store: cloud, notice: `☁️ ย้าย ${local.pet.name} ขึ้นบัญชีแล้ว` })
        return
      }
      setGuest(false)
      setState({ status: 'user', account, store: cloud })
    } catch (err) {
      console.error('ย้ายข้อมูลไม่สำเร็จ', err)
      if (!stale()) setState({ status: 'error' })
    }
  }, [])

  useEffect(() => watchAccount(handleAccount), [handleAccount])

  function playAsGuest() {
    setGuest(true)
    setState({ status: 'guest', store: localStore })
  }

  // คืนข้อความ error หรือ null
  async function signIn() {
    try {
      await signInWithGoogle()
      return null
    } catch (err) {
      console.error('เข้าสู่ระบบไม่สำเร็จ', err)
      return authErrorMessage(err)
    }
  }

  async function signOut() {
    setGuest(false)
    await signOutAccount()
  }

  // choice: 'cloud' | 'local'
  async function resolveConflict(choice) {
    const { account, store, local } = state
    setState({ status: 'migrating' })
    try {
      if (choice === 'local') {
        await moveLocalToCloud(local, store)
      } else {
        await localStore.resetGame()
        setGuest(false)
      }
      setState({ status: 'user', account, store })
    } catch (err) {
      console.error('ย้ายข้อมูลไม่สำเร็จ', err)
      setState({ status: 'error' })
    }
  }

  // ยกเลิก กลับไปเล่นแบบ Guest
  async function cancelConflict() {
    runRef.current++
    await signOutAccount()
    playAsGuest()
  }

  return { ...state, playAsGuest, signIn, signOut, resolveConflict, cancelConflict }
}
