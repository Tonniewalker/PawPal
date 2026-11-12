import { useEffect, useRef, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Splash from './components/Splash'
import Adopt from './pages/Adopt'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Settings from './pages/Settings'
import { ACTIONS, APP_NAME, AWAY_NOTICE_MS, DIARY_LIMIT, FULL } from './config'
import { applyTime, createPet, formatDuration, getLevel, HOUR, makeDiaryEntry, MINUTE } from './petLogic'
import { addDiaryEntries, loadGame, resetGame, savePet, shiftDiaryTimes } from './data'

// บันทึกข้อมูลแบบไม่ต้องรอ (UI อัปเดตไปก่อนแล้ว) ถ้าพลาดให้แจ้งใน console
function persist(promise) {
  promise.catch((err) => console.error('บันทึกข้อมูลไม่สำเร็จ', err))
}

export default function App() {
  const navigate = useNavigate()

  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'
  const [pet, setPet] = useState(null)
  const [diary, setDiary] = useState([])
  const [welcome, setWelcome] = useState(null)
  const [now, setNow] = useState(() => Date.now())

  // เก็บค่า pet ล่าสุดไว้ให้ event listener ใช้ (listener ถูกสร้างครั้งเดียว เลยอ่าน state ตรง ๆ ไม่ได้)
  const petRef = useRef(pet)
  useEffect(() => {
    petRef.current = pet
  }, [pet])
  // true = กำลังจะโหลดหน้าใหม่ ห้ามบันทึกอัตโนมัติ (ไม่งั้นจะเขียนทับข้อมูลที่เพิ่งแก้)
  const reloadingRef = useRef(false)

  // ===== ทำงานครั้งเดียวตอนเปิดแอป =====
  // 1) Load ข้อมูลสัตว์เลี้ยง
  // 2) เอาเวลาตอนนี้ลบกับ lastUpdated → รู้ว่าผู้ใช้หายไปนานแค่ไหน
  // 3) ลดค่าอิ่ม/น้ำ/ความสุข ตามเวลาที่หายไป แล้วบันทึกกลับ
  useEffect(() => {
    let cancelled = false

    loadGame()
      .then(({ pet: saved, diary: list }) => {
        if (cancelled) return
        if (saved) {
          const t = Date.now()
          const current = applyTime(saved, t)
          const awayMs = t - saved.lastUpdated
          if (awayMs >= AWAY_NOTICE_MS) {
            const entry = makeDiaryEntry('return', `กลับมาหลังหายไป ${formatDuration(awayMs)}`, t)
            list = [entry, ...list]
            persist(addDiaryEntries([entry]))
            setWelcome({ awayMs, before: saved, after: current })
          }
          persist(savePet(current))
          setPet(current)
          setNow(t)
        }
        setDiary(list)
        setStatus('ready')
      })
      .catch((err) => {
        console.error('โหลดข้อมูลไม่สำเร็จ', err)
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  // ===== ระหว่างเปิดแอปอยู่: ทุก 1 นาที ค่าจะลดลงตามเวลาจริง =====
  // (ไม่ต้องบันทึกทุกนาที เพราะคำนวณย้อนจาก lastUpdated ได้เสมอ)
  // ตอนสลับออกจากแอป → บันทึกครั้งหนึ่ง (เวลาที่ "หายไป" จะได้นับจากตอนออกจริง ๆ)
  // ตอนสลับกลับมา → อัปเดตทันที เพราะมือถือมักหยุด timer ตอนแอปอยู่เบื้องหลัง
  useEffect(() => {
    function tick() {
      const t = Date.now()
      setNow(t)
      setPet((p) => (p ? applyTime(p, t) : p))
    }
    function onVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        if (petRef.current && !reloadingRef.current) persist(savePet(applyTime(petRef.current, Date.now())))
      } else {
        tick()
      }
    }
    const timer = setInterval(tick, MINUTE)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  function addDiary(...entries) {
    setDiary((list) => [...entries, ...list].slice(0, DIARY_LIMIT))
    persist(addDiaryEntries(entries))
  }

  function updatePet(next) {
    setPet(next)
    persist(savePet(next))
  }

  function adopt(name) {
    const t = Date.now()
    const next = createPet({ name }, t)
    const entry = makeDiaryEntry('adopt', `รับ ${name} มาเลี้ยง`, t)
    setPet(next)
    setNow(t)
    setDiary([entry])
    // ล้างข้อมูลเก่าที่อาจค้างอยู่ก่อน แล้วค่อยบันทึกตัวใหม่
    persist(resetGame().then(() => Promise.all([savePet(next), addDiaryEntries([entry])])))
    navigate('/')
  }

  // กดปุ่มดูแล: คืนค่า EXP ที่ได้ (หรือ null ถ้ากดไม่ได้)
  function care(key) {
    const action = ACTIONS[key]
    const current = applyTime(pet, Date.now())
    if (current[action.stat] >= FULL) return null

    const next = {
      ...current,
      [action.stat]: Math.min(100, current[action.stat] + action.amount),
      exp: current.exp + action.exp,
    }
    updatePet(next)

    const before = getLevel(current.exp).level
    const after = getLevel(next.exp).level
    const entries = [makeDiaryEntry(key, action.label)]
    if (after > before) entries.unshift(makeDiaryEntry('levelup', `เลเวลอัปเป็น Lv.${after}`))
    addDiary(...entries)

    return { exp: action.exp, levelUp: after > before ? after : null }
  }

  function rename(name) {
    updatePet({ ...pet, name })
    addDiary(makeDiaryEntry('rename', `เปลี่ยนชื่อเป็น ${name}`))
  }

  // โหมดเดโม: ย้อน lastUpdated ในที่เก็บข้อมูล แล้วโหลดแอปใหม่
  // ผลเหมือนผู้ใช้ปิดแอปไปจริง ๆ ตามจำนวนชั่วโมงที่เลือก
  // (เลื่อนเวลาในสมุดบันทึกย้อนไปด้วย ให้ทุกอย่างตรงกัน)
  async function simulateAway(hours) {
    const ms = hours * HOUR
    const current = applyTime(pet, Date.now())
    reloadingRef.current = true
    try {
      await savePet({ ...current, lastUpdated: current.lastUpdated - ms, adoptedAt: current.adoptedAt - ms })
      await shiftDiaryTimes(ms)
    } catch (err) {
      console.error('จำลองเวลาไม่สำเร็จ', err)
      reloadingRef.current = false
      return
    }
    window.location.hash = '/'
    window.location.reload()
  }

  async function reset() {
    try {
      await resetGame()
    } catch (err) {
      console.error('ลบข้อมูลไม่สำเร็จ', err)
      return
    }
    setPet(null)
    setDiary([])
    setWelcome(null)
    navigate('/')
  }

  if (status === 'loading') return <Splash />
  if (status === 'error') {
    return <Splash message="โหลดข้อมูลไม่สำเร็จ" onRetry={() => window.location.reload()} />
  }

  // ยังไม่มีสัตว์เลี้ยง → ไปหน้ารับเลี้ยง
  if (!pet) return <Adopt now={now} onAdopt={adopt} />

  const clock = new Date(now).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="mx-auto flex min-h-screen max-w-[440px] flex-col bg-paper">
      <header className="flex items-center justify-between px-5 pb-3 pt-4">
        <span className="text-lg font-bold">🐾 {APP_NAME}</span>
        <span className="text-[15px] tabular-nums text-ink/60">{clock} น.</span>
      </header>

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                pet={pet}
                now={now}
                welcome={welcome}
                onDismissWelcome={() => setWelcome(null)}
                onCare={care}
              />
            }
          />
          <Route path="/diary" element={<Diary pet={pet} diary={diary} now={now} />} />
          <Route
            path="/settings"
            element={
              <Settings
                pet={pet}
                onRename={rename}
                onSimulateAway={simulateAway}
                onReset={reset}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  )
}
