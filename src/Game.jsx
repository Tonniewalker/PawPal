import { useEffect, useRef, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Splash from './components/Splash'
import { ROOMS } from './components/rooms'
import Adopt from './pages/Adopt'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Settings from './pages/Settings'
import Play from './pages/Play'
import Shop from './pages/Shop'
import { AWAY_NOTICE_MS, COINS, DIARY_LIMIT, FOODS, FULL, GAME, PAT, SLEEP, WASH } from './config'
import { applyTime, createPet, dayKey, foodCount, formatDuration, getLevel, HOUR, makeDiaryEntry, MINUTE } from './petLogic'

// บันทึกโดยไม่รอผล
function persist(promise) {
  promise.catch((err) => console.error('บันทึกข้อมูลไม่สำเร็จ', err))
}

// หน่วงเวลาบันทึก
const SAVE_DELAY_MS = 800

const ASLEEP = { ok: false, say: 'หลับอยู่ 💤 ไปปลุกที่ห้องนอนนะ' }

// ===== ตัวเกม =====
export default function Game({ store, account, notice: initialNotice }) {
  const { loadGame, savePet, addDiaryEntries, shiftDiaryTimes, resetGame } = store
  const navigate = useNavigate()

  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'
  const [pet, setPet] = useState(null)
  const [diary, setDiary] = useState([])
  const [welcome, setWelcome] = useState(null)
  const [now, setNow] = useState(() => Date.now())
  const [notice, setNotice] = useState(initialNotice) // ข้อความแจ้งเตือน

  // ค่า pet ล่าสุด
  const petRef = useRef(pet)
  useEffect(() => {
    petRef.current = pet
  }, [pet])
  // กำลังโหลดหน้าใหม่ ห้ามบันทึกอัตโนมัติ
  const reloadingRef = useRef(false)
  const saveTimerRef = useRef(null)
  // navigate ล่าสุด
  const navigateRef = useRef(navigate)
  useEffect(() => {
    navigateRef.current = navigate
  }, [navigate])

  // ===== โหลดข้อมูลตอนเปิดแอป =====
  useEffect(() => {
    let cancelled = false

    loadGame()
      .then(({ pet: saved, diary: list }) => {
        if (cancelled) return
        if (saved) {
          const t = Date.now()
          let current = applyTime(saved, t)
          const awayMs = t - saved.lastUpdated
          const entries = []
          if (awayMs >= AWAY_NOTICE_MS) {
            entries.push(makeDiaryEntry('return', `กลับมาหลังหายไป ${formatDuration(awayMs)}`, t))
            setWelcome({ awayMs, before: saved, after: current })
          }
          // โบนัสรายวัน
          if (current.lastBonusDay !== dayKey(t)) {
            current = { ...current, coins: current.coins + COINS.daily, lastBonusDay: dayKey(t) }
            entries.unshift(makeDiaryEntry('bonus', `โบนัสรายวัน +${COINS.daily} เหรียญ`, t + 1))
            setNotice((n) => n ?? `🎁 โบนัสรายวัน +${COINS.daily} เหรียญ`)
          }
          if (entries.length) {
            list = [...entries, ...list]
            persist(addDiaryEntries(entries))
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

  // ===== อัปเดตค่าตามเวลา =====
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
      // บันทึกที่ค้างอยู่ก่อนออก
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
    // วันรับเลี้ยงไม่ได้โบนัสรายวัน
    const next = { ...createPet({ name, species }, t), lastBonusDay: dayKey(t) }
    const entry = makeDiaryEntry('adopt', `รับ ${name} มาเลี้ยง`, t)
    petRef.current = next
    setPet(next)
    setNow(t)
    setDiary([entry])
    // ล้างข้อมูลเก่าก่อนบันทึก
    persist(resetGame().then(() => Promise.all([savePet(next), addDiaryEntries([entry])])))
    navigate('/')
  }

  // ===== การดูแล =====
  // คืนค่า { ok, exp, coins, levelUp } หรือ { ok: false, say }
  function current() {
    return applyTime(petRef.current, Date.now())
  }

  function applyCare(base, { add = {}, set = {}, exp = 0, bonusCoins = 0, entries = [] }) {
    const before = getLevel(base.exp).level
    const after = getLevel(base.exp + exp).level
    const coins = Math.ceil(exp * COINS.perExp) + (after - before) * COINS.levelUp + bonusCoins

    const next = { ...base, ...set, exp: base.exp + exp, coins: base.coins + coins }
    for (const [key, amount] of Object.entries(add)) next[key] = Math.min(100, Math.max(0, base[key] + amount))
    updatePet(next)

    const log = entries.map(([type, text]) => makeDiaryEntry(type, text))
    if (after > before) log.unshift(makeDiaryEntry('levelup', `เลเวลอัปเป็น Lv.${after} (+${COINS.levelUp} เหรียญ)`))
    if (log.length) addDiary(...log)

    return { ok: true, exp, coins, levelUp: after > before ? after : null }
  }

  const care = {
    // ห้องครัว: กินอาหาร
    feed(foodKey) {
      const p = current()
      if (p.asleep) return ASLEEP
      if (foodCount(p, foodKey) <= 0) return { ok: false, say: 'หมดแล้ว ไปซื้อที่ร้านนะ 🛒' }
      if (p.food >= FULL) return { ok: false, say: 'อิ่มแล้ว 😋' }
      const food = FOODS[foodKey]
      const add = { food: food.food }
      if (food.fun) add.fun = food.fun
      const set = {}
      if (food.price > 0) set.inventory = { ...p.inventory, [foodKey]: p.inventory[foodKey] - 1 }
      return applyCare(p, { add, set, exp: food.exp, entries: [['feed', `กิน${food.label}`]] })
    },
    // มินิเกม: เช็กก่อนเริ่มเล่น
    canPlay() {
      const p = current()
      if (p.asleep) return { ok: false, say: 'หลับอยู่ 💤 ปลุกที่ห้องนอนก่อนนะ' }
      if (p.energy < GAME.minEnergy) return { ok: false, say: 'เหนื่อยเกินไปแล้ว ไปนอนก่อนนะ 😴' }
      return { ok: true }
    },
    // มินิเกม: รับรางวัล
    playGame(score) {
      const p = current()
      const today = dayKey(Date.now())
      const earnedToday = p.gameDay === today ? p.gameCoinsToday : 0
      const gameCoins = Math.max(0, Math.min(score * GAME.coinsPerPoint, GAME.dailyCoinCap - earnedToday))
      const best = score > p.bestScore
      const result = applyCare(p, {
        add: { fun: GAME.fun, energy: -GAME.energyCost },
        set: { bestScore: Math.max(p.bestScore, score), gameDay: today, gameCoinsToday: earnedToday + gameCoins },
        exp: GAME.exp,
        bonusCoins: gameCoins,
        entries: [['game', `เล่นเกมรับขนม ได้ ${score} คะแนน (+${gameCoins} เหรียญ)`]],
      })
      return { ...result, gameCoins, newBest: best, capReached: earnedToday + gameCoins >= GAME.dailyCoinCap }
    },
    // ร้านค้า: ซื้ออาหาร
    buy(foodKey) {
      const p = current()
      const { price } = FOODS[foodKey]
      if (p.coins < price) return { ok: false, say: 'เหรียญไม่พอ' }
      updatePet({ ...p, coins: p.coins - price, inventory: { ...p.inventory, [foodKey]: (p.inventory[foodKey] ?? 0) + 1 } })
      return { ok: true }
    },
    // ห้องนั่งเล่น: ลูบตัว
    pat() {
      const p = current()
      if (p.asleep) return ASLEEP
      if (p.fun >= FULL) return { ok: false, say: 'พอแล้ว ขอบคุณนะ 💕' }
      return applyCare(p, { add: { fun: PAT.fun }, exp: PAT.exp })
    },
    // บันทึกการลูบลงสมุด
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
    // ห้องน้ำ: อาบน้ำ
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

  // โหมดเดโม: จำลองว่าปิดแอปไป hours ชั่วโมง
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
      <Route path="/shop" element={<Shop pet={pet} onBuy={care.buy} />} />
      <Route path="/play" element={<Play pet={pet} now={now} care={care} />} />
      <Route path="/diary" element={<Diary pet={pet} diary={diary} now={now} />} />
      <Route
        path="/settings"
        element={<Settings pet={pet} account={account} onRename={rename} onSimulateAway={simulateAway} onReset={reset} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
