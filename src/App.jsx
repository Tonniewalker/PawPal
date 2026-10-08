import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Adopt from './pages/Adopt'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Settings from './pages/Settings'
import { ACTIONS, APP_NAME, AWAY_NOTICE_MS, FULL } from './config'
import { applyTime, createDog, formatDuration, getLevel, HOUR, MINUTE } from './dogLogic'
import { clearAll, loadDiary, loadDog, saveDiary, saveDog } from './storage'

// ===== ทำงานครั้งเดียวตอนเปิดแอป =====
// 1) Load ข้อมูลน้องหมาจาก localStorage
// 2) เอาเวลาตอนนี้ลบกับ lastUpdated → รู้ว่าผู้ใช้หายไปนานแค่ไหน
// 3) ลดค่าอิ่ม/น้ำ/ความสุข ตามเวลาที่หายไป
function startUp() {
  const saved = loadDog()
  if (!saved) return { dog: null, welcome: null }

  const now = Date.now()
  const dog = applyTime(saved, now)
  const awayMs = now - saved.lastUpdated
  const welcome = awayMs >= AWAY_NOTICE_MS ? { awayMs, before: saved, after: dog } : null
  return { dog, welcome }
}

function newEntry(type, text) {
  return { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, type, text, at: Date.now() }
}

export default function App() {
  const navigate = useNavigate()

  // useState(ฟังก์ชัน) = เรียกฟังก์ชันนั้นแค่ครั้งแรกครั้งเดียว
  const [start] = useState(startUp)
  const [dog, setDog] = useState(start.dog)
  const [welcome, setWelcome] = useState(start.welcome)
  const [diary, setDiary] = useState(() => {
    const list = loadDiary()
    if (!start.welcome) return list
    return [newEntry('return', `กลับมาหลังหายไป ${formatDuration(start.welcome.awayMs)}`), ...list]
  })
  const [now, setNow] = useState(() => Date.now())

  // ===== Save: ทุกครั้งที่ dog หรือ diary เปลี่ยน ให้บันทึกลง localStorage =====
  useEffect(() => {
    if (dog) saveDog(dog)
  }, [dog])

  useEffect(() => {
    saveDiary(diary)
  }, [diary])

  // ===== ระหว่างเปิดแอปอยู่: ทุก 1 นาที ค่าจะลดลงตามเวลาจริง =====
  // (และอัปเดตทันทีตอนสลับกลับมาที่แอป เพราะมือถือมักหยุด timer ตอนแอปอยู่เบื้องหลัง)
  useEffect(() => {
    function tick() {
      const t = Date.now()
      setNow(t)
      setDog((d) => (d ? applyTime(d, t) : d))
    }
    const timer = setInterval(tick, MINUTE)
    document.addEventListener('visibilitychange', tick)
    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', tick)
    }
  }, [])

  function addDiary(...entries) {
    setDiary((list) => [...entries, ...list].slice(0, 300))
  }

  function adopt(name) {
    const t = Date.now()
    setDog(createDog(name, t))
    setNow(t)
    setDiary([newEntry('adopt', `รับ ${name} มาเลี้ยง`)])
    navigate('/')
  }

  // กดปุ่มดูแล: คืนค่า EXP ที่ได้ (หรือ null ถ้ากดไม่ได้)
  function care(key) {
    const action = ACTIONS[key]
    const current = applyTime(dog, Date.now())
    if (current[action.stat] >= FULL) return null

    const next = {
      ...current,
      [action.stat]: Math.min(100, current[action.stat] + action.amount),
      exp: current.exp + action.exp,
    }
    setDog(next)

    const before = getLevel(current.exp).level
    const after = getLevel(next.exp).level
    const entries = [newEntry(key, action.label)]
    if (after > before) entries.unshift(newEntry('levelup', `เลเวลอัปเป็น Lv.${after}`))
    addDiary(...entries)

    return { exp: action.exp, levelUp: after > before ? after : null }
  }

  function rename(name) {
    setDog((d) => ({ ...d, name }))
    addDiary(newEntry('rename', `เปลี่ยนชื่อเป็น ${name}`))
  }

  // โหมดเดโม: ย้อน lastUpdated ใน localStorage แล้วโหลดแอปใหม่
  // ผลเหมือนผู้ใช้ปิดแอปไปจริง ๆ ตามจำนวนชั่วโมงที่เลือก
  // (เลื่อนเวลาในสมุดบันทึกย้อนไปด้วย ให้ทุกอย่างตรงกัน)
  function simulateAway(hours) {
    const ms = hours * HOUR
    saveDog({ ...dog, lastUpdated: dog.lastUpdated - ms, adoptedAt: dog.adoptedAt - ms })
    saveDiary(diary.map((entry) => ({ ...entry, at: entry.at - ms })))
    window.location.hash = '/'
    window.location.reload()
  }

  function reset() {
    clearAll()
    setDog(null)
    setDiary([])
    setWelcome(null)
    navigate('/')
  }

  // ยังไม่มีน้องหมา → ไปหน้ารับเลี้ยง
  if (!dog) return <Adopt now={now} onAdopt={adopt} />

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
                dog={dog}
                now={now}
                welcome={welcome}
                onDismissWelcome={() => setWelcome(null)}
                onCare={care}
              />
            }
          />
          <Route path="/diary" element={<Diary dog={dog} diary={diary} now={now} />} />
          <Route
            path="/settings"
            element={
              <Settings
                dog={dog}
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
