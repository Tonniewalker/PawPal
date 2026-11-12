// ===== ที่เก็บข้อมูลบน Firestore =====
// โครงสร้างข้อมูล:
//   users/{uid}                 → { pet, updatedAt }
//   users/{uid}/diary/{entryId} → { type, text, at }
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  writeBatch,
} from 'firebase/firestore'
import { DIARY_LIMIT } from '../config'
import { normalizePet } from '../petLogic'
import { db } from './firebase'

// รอผลการบันทึกไม่เกิน ms
function settle(promise, ms = 2500) {
  promise.catch((err) => console.error('Firestore บันทึกไม่สำเร็จ', err))
  return Promise.race([promise, new Promise((resolve) => setTimeout(resolve, ms))])
}

// แบ่ง batch (จำกัด 500 รายการ)
async function commitInChunks(items, apply) {
  for (let i = 0; i < items.length; i += 400) {
    const batch = writeBatch(db)
    items.slice(i, i + 400).forEach((item) => apply(batch, item))
    await settle(batch.commit())
  }
}

export function createCloudStore(uid) {
  const userRef = doc(db, 'users', uid)
  const diaryRef = collection(userRef, 'diary')

  return {
    async loadGame() {
      const [userSnap, diarySnap] = await Promise.all([
        getDoc(userRef),
        getDocs(query(diaryRef, orderBy('at', 'desc'), limit(DIARY_LIMIT))),
      ])
      return {
        pet: normalizePet(userSnap.data()?.pet ?? null),
        diary: diarySnap.docs.map((d) => ({ id: d.id, ...d.data() })),
      }
    },

    savePet(pet) {
      return settle(setDoc(userRef, { pet, updatedAt: serverTimestamp() }))
    },

    addDiaryEntries(entries) {
      const batch = writeBatch(db)
      for (const { id, ...entry } of entries) {
        batch.set(id ? doc(diaryRef, String(id)) : doc(diaryRef), entry)
      }
      return settle(batch.commit())
    },

    async shiftDiaryTimes(ms) {
      const snap = await getDocs(diaryRef)
      await commitInChunks(snap.docs, (batch, d) => batch.update(d.ref, { at: d.data().at - ms }))
    },

    async resetGame() {
      const snap = await getDocs(diaryRef)
      await commitInChunks(snap.docs, (batch, d) => batch.delete(d.ref))
      await settle(deleteDoc(userRef))
    },
  }
}
