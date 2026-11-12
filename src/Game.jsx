import { useEffect, useRef, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Splash from './components/Splash'
import { ROOMS } from './components/rooms'
import Adopt from './pages/Adopt'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Settings from './pages/Settings'
import { AWAY_NOTICE_MS, DIARY_LIMIT, FOODS, FULL, PAT, SLEEP, WASH } from './config'
import { applyTime, createPet, formatDuration, getLevel, HOUR, makeDiaryEntry, MINUTE } from './petLogic'

// บันทึกข้อมูลแบบไม่ต้องรอ (UI อัปเดตไปก่อนแล้ว) ถ้าพลาดให้แจ้งใน console
function persist(promise) {
  promise.catch((err) => console.error('บันทึกข้อมูลไม่สำเร็จ', err))
}

// รอสักครู่ค่อยบันทึก: ลูบตัว/ถูสบู่รัว ๆ จะได้บันทึกครั้งเดียว ไม่ยิงขึ้นคลาวด์ทุกครั้ง
const SAVE_DELAY_MS = 800

const ASLEEP = { ok: false, say: 'หลับอยู่ 💤 ไปปลุกที่ห้องนอนนะ' }

// ตัวเกม: ใช้ที่เก็บข้อมูลตามบัญชีที่ส่งเข้ามา (Guest = localStorage / ล็อกอิน = Firestore)
// App.jsx ใส่ key ตามบัญชี เวลาเปลี่ยนบัญชีเกมจะเริ่มโหลดใหม่ทั้งหมด
export default function Game({ store, account, notice: initialNotice }) {
  const { loadGame, savePet, addDiaryEntries, shiftDiaryTimes, resetGame } = store
  const navigate = useNavigate()

  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'
  const [pet, setPet] = useState(null)
  const [diary, setDiary] = useState([])
  const [welcome, setWelcome] = useState(null)
  const [now, setNow] = useState(() => Date.now())
  const [notice, setNotice] = useState(initialNotice) // ข้อความแจ้งครั้งเดียว เช่น ย้ายข้อมูลขึ้นบัญชีแล้ว

  // ค่า pet ล่าสุด (อัปเดตทันทีตอนดูแล ไม่ต้องรอ render ใหม่ ใช้กับ event ที่มาถี่ ๆ เช่น ลูบตัว)
  const petRef = useRef(pet)
  useEffect(() => {
    petRef.current = pet
  }, [pet])
  // true = กำลังจะโหลดหน้าใหม่ ห้ามบันทึกอัตโนมัติ (ไม่งั้นจะเขียนทับข้อมูลที่เพิ่งแก้)
  const reloadingRef = useRef(false)
  const saveTimerRef = useRef(null)
  // navigate เปลี่ยนตัวทุกครั้งที่เปลี่ยนหน้า → เก็บไว้ใน ref ให้โค้ดตอนเปิดแอปใช้ได้โดยไม่ต้องรันซ้ำ
  const navigateRef = useRef(navigate)
  useEffect(() => {
    navigateRef.current = navigate
  }, [navigate])

  // ===== ทำงานครั้งเดียวตอนเปิดแอป =====
  // 1) Load ข้อมูลสัตว์เลี้ยง
  // 2) เอาเวลาตอนนี้ลบกับ lastUpdated → รู้ว่าผู้ใช้หายไปนานแค่ไหน
  // 3) เปลี่ยนค่าตามเวลาที่หายไป (หลับอยู่ = พลังงานฟื้น) แล้วบันทึกกลับ
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
          petRef.current = current
          setPet(current)
          setNow(t)
          // หลับอยู่ → เปิดแอปมาที่ห้องนอน
          if (current.asleep) navigateRef.current('/bedroom', { replace: true })
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
  }, [loadGame, savePet, addDiaryEntries])

  // ===== ระหว่างเปิดแอปอยู่: ทุก 1 นาที ค่าจะเปลี่ยนตามเวลาจริง =====
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
        clearTimeout(saveTimerRef.current)
        saveTimerRef.current = null
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
      // ออกจากเกม (เช่น เปลี่ยนบัญชี) → บันทึกที่ค้างอยู่ทันที
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current)
        saveTimerRef.current = null
        if (petRef.current) persist(savePet(petRef.current))
      }
    }
  }, [savePet])

  function addDiary(...entries) {
    setDiary((list) => [...entries, ...list].slice(0, DIARY_LIMIT))
    persist(addDiaryEntries(entries))
  }

  function updatePet(next) {
    petRef.current = next
    setPet(next)
    clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => {
      saveTimerRef.current = null
      persist(savePet(petRef.current))
    }, SAVE_DELAY_MS)
  }

  function adopt({ name, species }) {
    const t = Date.now()
    const next = createPet({ name, species }, t)
    const entry = makeDiaryEntry('adopt', `รับ ${name} มาเลี้ยง`, t)
    petRef.current = next
    setPet(next)
    setNow(t)
    setDiary([entry])
    // ล้างข้อมูลเก่าที่อาจค้างอยู่ก่อน แล้วค่อยบันทึกตัวใหม่
    persist(resetGame().then(() => Promise.all([savePet(next), addDiaryEntries([entry])])))
    navigate('/')
  }

  // ===== การดูแล =====
  // ทุกการดูแลคืนผลแบบเดียวกัน: { ok, exp, levelUp } หรือ { ok: false, say: 'ข้อความที่น้องพูด' }
  function current() {
    return applyTime(petRef.current, Date.now())
  }

  function applyCare(base, { add = {}, set = {}, exp = 0, entries = [] }) {
    const next = { ...base, ...set, exp: base.exp + exp }
    for (const [key, amount] of Object.entries(add)) next[key] = Math.min(100, base[key] + amount)
    updatePet(next)

    const before = getLevel(base.exp).level
    const after = getLevel(next.exp).level
    const log = entries.map(([type, text]) => makeDiaryEntry(type, text))
    if (after > before) log.unshift(makeDiaryEntry('levelup', `เลเวลอัปเป็น Lv.${after}`))
    if (log.length) addDiary(...log)

    return { ok: true, exp, levelUp: after > before ? after : null }
  }

  const care = {
    // ห้องครัว: กินอาหาร
    feed(foodKey) {
      const p = current()
      if (p.asleep) return ASLEEP
      if (p.food >= FULL) return { ok: false, say: 'อิ่มแล้ว 😋' }
      const food = FOODS[foodKey]
      const add = { food: food.food }
      if (food.fun) add.fun = food.fun
      return applyCare(p, { add, exp: food.exp, entries: [['feed', `กิน${food.label}`]] })
    },
    // ห้องนั่งเล่น: ลูบตัว (เรียกทุกครั้งที่ลูบได้ระยะครบ PAT.distance)
    pat() {
      const p = current()
      if (p.asleep) return ASLEEP
      if (p.fun >= FULL) return { ok: false, say: 'พอแล้ว ขอบคุณนะ 💕' }
      return applyCare(p, { add: { fun: PAT.fun }, exp: PAT.exp })
    },
    // จบการลูบ 1 รอบ → บันทึกลงสมุดครั้งเดียว
    logPat(times) {
      addDiary(makeDiaryEntry('pat', `ลูบตัว ${times} ครั้ง`))
    },
    // ห้องน้ำ: เช็กก่อนเริ่มถูสบู่
    canWash() {
      const p = current()
      if (p.asleep) return ASLEEP
      if (p.clean >= FULL) return { ok: false, say: 'สะอาดอยู่แล้ว ✨' }
      return { ok: true }
    },
    // ห้องน้ำ: ล้างฟองด้วยฝักบัว ยิ่งฟองเยอะยิ่งสะอาด
    wash(bubbles) {
      const p = current()
      const gain = bubbles * WASH.cleanPerBubble
      return applyCare(p, { add: { clean: gain }, exp: gain >= 10 ? WASH.exp : 0, entries: [['wash', 'อาบน้ำ']] })
    },
    // ห้องนอน: ปิดไฟ = นอน / เปิดไฟ = ตื่น
    sleep() {
      const p = current()
      if (p.asleep) return { ok: false }
      if (p.energy >= FULL) return { ok: false, say: 'ยังไม่ง่วงเลย' }
      return applyCare(p, { set: { asleep: true }, exp: SLEEP.exp, entries: [['sleep', 'เข้านอน']] })
    },
    wake() {
      const p = current()
      if (!p.asleep) return { ok: false }
      return applyCare(p, { set: { asleep: false }, entries: [['wake', `ตื่นนอน (พลังงาน ${Math.round(p.energy)})`]] })
    },
  }

  function rename(name) {
    updatePet({ ...current(), name })
    addDiary(makeDiaryEntry('rename', `เปลี่ยนชื่อเป็น ${name}`))
  }

  // โหมดเดโม: ย้อน lastUpdated ในที่เก็บข้อมูล แล้วโหลดแอปใหม่
  // ผลเหมือนผู้ใช้ปิดแอปไปจริง ๆ ตามจำนวนชั่วโมงที่เลือก
  // (เลื่อนเวลาในสมุดบันทึกย้อนไปด้วย ให้ทุกอย่างตรงกัน)
  async function simulateAway(hours) {
    const ms = hours * HOUR
    const p = current()
    reloadingRef.current = true
    clearTimeout(saveTimerRef.current)
    saveTimerRef.current = null
    try {
      await savePet({ ...p, lastUpdated: p.lastUpdated - ms, adoptedAt: p.adoptedAt - ms })
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
    clearTimeout(saveTimerRef.current)
    saveTimerRef.current = null
    try {
      await resetGame()
    } catch (err) {
      console.error('ลบข้อมูลไม่สำเร็จ', err)
      return
    }
    petRef.current = null
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

  return (
    <Routes>
      {Object.entries(ROOMS).map(([room, { path }]) => (
        <Route
          key={room}
          path={path}
          element={
            <Home
              room={room}
              pet={pet}
              now={now}
              care={care}
              welcome={welcome}
              onDismissWelcome={() => setWelcome(null)}
              notice={notice}
              onDismissNotice={() => setNotice(null)}
            />
          }
        />
      ))}
      <Route path="/diary" element={<Diary pet={pet} diary={diary} now={now} />} />
      <Route
        path="/settings"
        element={<Settings pet={pet} account={account} onRename={rename} onSimulateAway={simulateAway} onReset={reset} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
