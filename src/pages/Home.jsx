import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import TopBar, { Coin } from '../components/TopBar'
import PetAvatar from '../components/pets/PetAvatar'
import { PLATE_X, PLATE_Y, ROOMS } from '../components/rooms'
import { isInside, useDrag } from '../components/rooms/useDrag'
import { FOODS, PAT, STATS, WASH } from '../config'
import { foodCount, formatDuration, getLevel, getMood, getStage, getTimeOfDay } from '../petLogic'
import { getSpecies } from '../species'

// แปลงตำแหน่งในกรอบฉาก 390×760 เป็น % (ใช้วางปุ่มทับภาพ)
const pctX = (x) => `${(x / 390) * 100}%`
const pctBottom = (y) => `${((760 - y) / 760) * 100}%`
const TRAY_SIZE = 3

const roundBtn =
  'flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white text-3xl shadow-[0_3px_0_rgba(46,58,89,0.18)] active:translate-y-0.5'

function Sponge() {
  return (
    <svg viewBox="0 0 70 46" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="70" height="46" rx="14" fill="#FFD45C" />
      {[[14, 14], [34, 28], [52, 12], [22, 36], [56, 34]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="4" fill="#F2B21F" />
      ))}
    </svg>
  )
}

// ===== หน้าห้อง (นั่งเล่น / ครัว / ห้องน้ำ / ห้องนอน) แบบ My Talking Tom =====
// สัตว์เต็มจอ + แถบบน (เลเวล ชื่อ เหรียญ เมนู) + แถบล่าง (ปุ่มห้อง = หลอดค่า)
export default function Home({ room, pet, now, care, welcome, onDismissWelcome, notice, onDismissNotice }) {
  const R = ROOMS[room]
  const mood = getMood(pet)
  const { level, progress } = getLevel(pet.exp)
  const stage = getStage(level, pet.species)
  const time = getTimeOfDay(now)

  const petBoxRef = useRef(null)
  const petSvg = () => petBoxRef.current?.querySelector('svg')

  // ===== ปฏิกิริยาของน้อง: กระโดด, +EXP ลอยขึ้น, เลเวลอัป, พูด =====
  const [hopKey, setHopKey] = useState(0)
  const [pops, setPops] = useState([])
  const [levelUp, setLevelUp] = useState(null)
  const [say, setSay] = useState(null)
  const sayTimer = useRef(null)

  function speak(text) {
    setSay(text)
    clearTimeout(sayTimer.current)
    sayTimer.current = setTimeout(() => setSay(null), 1800)
  }

  function react(result) {
    if (!result) return
    if (result.say) speak(result.say)
    if (!result.ok) return
    setHopKey((k) => k + 1)
    if (result.exp || result.coins) {
      const id = `${Date.now()}-${Math.random()}`
      setPops((list) => [...list, { id, exp: result.exp, coins: result.coins }])
      setTimeout(() => setPops((list) => list.filter((p) => p.id !== id)), 900)
    }
    if (result.levelUp) {
      setLevelUp(result.levelUp)
      setTimeout(() => setLevelUp(null), 2500)
    }
  }

  // ===== ห้องนั่งเล่น: ลูบตัวน้อง =====
  const rubRef = useRef(null)
  const [hand, setHand] = useState(null)

  function rubStart(e) {
    if (room !== 'living') return
    e.currentTarget.setPointerCapture(e.pointerId)
    rubRef.current = { x: e.clientX, y: e.clientY, dist: 0, moved: 0, times: 0, stopped: false }
    setHand({ x: e.clientX, y: e.clientY })
  }
  function rubMove(e) {
    const r = rubRef.current
    if (!r) return
    const d = Math.hypot(e.clientX - r.x, e.clientY - r.y)
    r.dist += d
    r.moved += d
    r.x = e.clientX
    r.y = e.clientY
    setHand({ x: e.clientX, y: e.clientY })
    while (!r.stopped && r.dist >= PAT.distance) {
      r.dist -= PAT.distance
      const result = care.pat()
      react(result)
      if (result.ok) r.times += 1
      else r.stopped = true
    }
  }
  function rubEnd() {
    const r = rubRef.current
    rubRef.current = null
    setHand(null)
    if (!r) return
    if (r.times > 0) care.logPat(r.times)
    else if (r.moved < 10) {
      // แตะเฉย ๆ → น้องกระโดด
      if (pet.asleep) speak('Zzz…')
      else setHopKey((k) => k + 1)
    }
  }
  // ใช้คีย์บอร์ดได้: กด Enter ที่ตัวน้อง = ลูบ 1 ครั้ง
  function rubKey(e) {
    if (room !== 'living' || (e.key !== 'Enter' && e.key !== ' ')) return
    e.preventDefault()
    const result = care.pat()
    react(result)
    if (result.ok) care.logPat(1)
  }

  // ===== ห้องครัว: ลากอาหารไปที่ปากน้อง (โต๊ะวางได้ทีละ 3 จาน เลื่อนด้วยลูกศร) =====
  const foodKeys = Object.keys(FOODS)
  const [trayStart, setTrayStart] = useState(0)
  const trayKeys = foodKeys.slice(trayStart, trayStart + TRAY_SIZE)
  const [nearMouth, setNearMouth] = useState(false)
  const food = useDrag({
    onMove: (x, y) => setNearMouth(isInside(petSvg(), x, y)),
    onDrop: (x, y, key) => {
      setNearMouth(false)
      if (isInside(petSvg(), x, y)) react(care.feed(key))
    },
  })

  // ===== ห้องน้ำ: ลากฟองน้ำถูตัวให้เกิดฟอง แล้วกดฝักบัว =====
  const [bubbles, setBubbles] = useState([])
  const [showering, setShowering] = useState(false)
  const scrubRef = useRef(null)

  function addBubble(x, y) {
    const svg = petSvg()
    const r = svg.getBoundingClientRect()
    const bubble = { x: ((x - r.left) / r.width) * 200, y: ((y - r.top) / r.height) * 200, r: 6 + Math.random() * 5 }
    setBubbles((list) => (list.length >= WASH.maxBubbles ? list : [...list, bubble]))
  }

  const sponge = useDrag({
    onMove: (x, y, _item, isStart) => {
      if (isStart) {
        const check = care.canWash()
        scrubRef.current = { ok: check.ok, last: null, dist: 0 }
        if (!check.ok) react(check)
        return
      }
      const s = scrubRef.current
      if (!s?.ok) return
      if (!isInside(petSvg(), x, y)) {
        s.last = null
        return
      }
      if (s.last) s.dist += Math.hypot(x - s.last.x, y - s.last.y)
      s.last = { x, y }
      if (s.dist >= WASH.bubbleDistance) {
        s.dist = 0
        addBubble(x, y)
      }
    },
    onDrop: () => {
      scrubRef.current = null
    },
  })

  function shower() {
    if (showering) return
    if (bubbles.length === 0) {
      const check = care.canWash()
      react(check.ok ? { ok: false, say: 'ถูสบู่ก่อนนะ 🧽' } : check)
      return
    }
    const count = bubbles.length
    setShowering(true)
    setTimeout(() => {
      setBubbles([])
      setShowering(false)
      react(care.wash(count))
    }, 1200)
  }

  // ===== ห้องนอน: ปิดไฟนอน / เปิดไฟตื่น =====
  const sleepingHere = room === 'bedroom' && pet.asleep

  const species = getSpecies(pet.species)
  const face = nearMouth && !pet.asleep ? 'hungry' : mood.face
  const dirt = pet.clean < 50 ? (50 - pet.clean) / 50 : 0
  const dragging = food.drag ?? sponge.drag

  return (
    <div className="relative mx-auto h-dvh max-w-[440px] select-none overflow-hidden" style={{ background: R.wall }}>
      <h1 className="sr-only">{R.name}</h1>

      {/* ===== ฉาก (กรอบ 390×760 ยึดขอบล่าง) ===== */}
      <div className="absolute inset-x-0 bottom-0" style={{ aspectRatio: '390 / 760' }}>
        <svg viewBox="0 0 390 760" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <R.Back time={time} />
        </svg>

        {/* ตัวน้อง */}
        <div
          ref={petBoxRef}
          className={`absolute left-1/2 flex -translate-x-1/2 items-end justify-center ${room === 'living' ? 'cursor-grab touch-none' : ''}`}
          style={{ bottom: `${R.pet.bottom}%`, width: `${R.pet.width}%` }}
          onPointerDown={rubStart}
          onPointerMove={rubMove}
          onPointerUp={rubEnd}
          onPointerCancel={rubEnd}
          onKeyDown={rubKey}
          role={room === 'living' ? 'button' : undefined}
          tabIndex={room === 'living' ? 0 : undefined}
          aria-label={room === 'living' ? `ลูบตัว${pet.name}` : undefined}
        >
          <PetAvatar
            species={pet.species}
            face={face}
            level={level}
            scale={stage.scale}
            hopKey={hopKey}
            emoji={mood.emoji}
            moodLabel={mood.label}
            label={`${species.label} ${pet.name}`}
            dirt={dirt}
            bubbles={room === 'bathroom' ? bubbles : []}
            say={say}
          />

          {/* +EXP ลอยขึ้น */}
          {pops.map((p) => (
            <span
              key={p.id}
              className="pop-up pointer-events-none absolute left-1/2 top-[15%] flex items-center gap-1 whitespace-nowrap text-lg font-bold text-sun-dark drop-shadow"
            >
              {p.exp > 0 && <span>+{p.exp} EXP</span>}
              {p.coins > 0 && (
                <span className="flex items-center gap-0.5">
                  +{p.coins} <Coin size={18} />
                </span>
              )}
            </span>
          ))}

          {/* น้ำจากฝักบัว */}
          {showering && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              {[8, 22, 36, 50, 64, 78, 90].map((left, i) => (
                <span key={left} className="shower-drop" style={{ left: `${left}%`, animationDelay: `${i * 0.08}s` }} />
              ))}
            </div>
          )}
        </div>

        <svg viewBox="0 0 390 760" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          <R.Front time={time} lightsOn={!pet.asleep} />
        </svg>

        {/* ===== ของในแต่ละห้อง ===== */}
        {room === 'kitchen' && (
          <>
            {trayKeys.map((key, i) => {
              const f = FOODS[key]
              const count = foodCount(pet, key)
              const pos = { left: pctX(PLATE_X[i]), bottom: pctBottom(PLATE_Y - 6) }
              // หมดแล้ว → แตะเพื่อไปซื้อที่ร้าน
              if (count <= 0) {
                return (
                  <Link
                    key={key}
                    to="/shop"
                    aria-label={`${f.label}หมดแล้ว ไปซื้อที่ร้าน`}
                    className="absolute z-10 -translate-x-1/2 text-[44px] leading-none"
                    style={pos}
                  >
                    <span className="opacity-35 grayscale">{f.icon}</span>
                    <span className="absolute -bottom-3 -right-4 flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white bg-sun px-1 text-base font-bold">
                      +
                    </span>
                  </Link>
                )
              }
              return (
                <button
                  key={key}
                  type="button"
                  {...food.bind(key)}
                  onClick={(e) => e.detail === 0 && react(care.feed(key))}
                  aria-label={`ลาก${f.label}ไปให้${pet.name}กิน (มี ${count === Infinity ? 'ไม่จำกัด' : count})`}
                  className={`absolute z-10 -translate-x-1/2 touch-none text-[44px] leading-none ${food.drag?.item === key ? 'opacity-30' : ''}`}
                  style={pos}
                >
                  {f.icon}
                  <span className="absolute -bottom-3 -right-4 flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-ink bg-white px-1 text-sm font-bold tabular-nums">
                    {count === Infinity ? '∞' : count}
                  </span>
                </button>
              )
            })}
            {/* ลูกศรเลื่อนดูอาหารบนโต๊ะ (โชว์ทีละ 3 จาน) */}
            <button
              type="button"
              onClick={() => setTrayStart((n) => Math.max(0, n - 1))}
              disabled={trayStart === 0}
              aria-label="อาหารก่อนหน้า"
              className="absolute left-1 z-10 flex h-10 w-8 items-center justify-center rounded-full bg-white/90 text-xl font-bold shadow disabled:opacity-0"
              style={{ bottom: pctBottom(PLATE_Y - 4) }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setTrayStart((n) => Math.min(foodKeys.length - TRAY_SIZE, n + 1))}
              disabled={trayStart >= foodKeys.length - TRAY_SIZE}
              aria-label="อาหารถัดไป"
              className="absolute right-1 z-10 flex h-10 w-8 items-center justify-center rounded-full bg-white/90 text-xl font-bold shadow disabled:opacity-0"
              style={{ bottom: pctBottom(PLATE_Y - 4) }}
            >
              ›
            </button>
          </>
        )}

        {room === 'bathroom' && (
          <>
            <button
              type="button"
              {...sponge.bind('sponge')}
              onClick={(e) => {
                if (e.detail !== 0) return
                const check = care.canWash()
                if (!check.ok) react(check)
                else setBubbles(Array.from({ length: WASH.maxBubbles }, (_, i) => ({ x: 50 + (i % 4) * 33, y: 110 + Math.floor(i / 4) * 20 })))
              }}
              aria-label={`ลากฟองน้ำไปถูตัว${pet.name}`}
              className={`absolute z-10 h-[6%] w-[18%] touch-none ${sponge.drag ? 'opacity-30' : ''}`}
              style={{ left: pctX(22), bottom: pctBottom(658) }}
            >
              <Sponge />
            </button>
            <button type="button" onClick={shower} aria-label="เปิดฝักบัวล้างฟอง" className={`absolute bottom-[24%] right-4 z-10 bg-[#4AA3DF] ${roundBtn}`}>
              🚿
            </button>
          </>
        )}

        {room === 'bedroom' && (
          <button
            type="button"
            onClick={() => react(pet.asleep ? care.wake() : care.sleep())}
            aria-label={pet.asleep ? 'เปิดไฟ ปลุกน้อง' : 'ปิดไฟ ให้น้องนอน'}
            aria-pressed={pet.asleep}
            className={`absolute bottom-[18%] right-4 z-40 bg-sun ${roundBtn}`}
          >
            {pet.asleep ? '🌞' : '💡'}
          </button>
        )}
      </div>

      {/* ปิดไฟ = ห้องมืด */}
      {sleepingHere && <div className="pointer-events-none absolute inset-0 z-20 bg-[#141634]/55" aria-hidden="true" />}

      <TopBar level={level} progress={progress} name={pet.name} stageName={stage.name} coins={pet.coins} />

      {/* ===== การ์ดแจ้งเตือนใต้แถบบน ===== */}
      <div className="absolute inset-x-3 top-[80px] z-30 space-y-2">
        {notice && (
          <div className="toast-in flex items-center justify-between gap-3 rounded-2xl border-2 border-leaf/40 bg-white/95 px-4 py-2.5" role="status">
            <span className="text-[15px] font-semibold text-[#3E7A2A]">{notice}</span>
            <button type="button" onClick={onDismissNotice} aria-label="ปิดข้อความ" className="px-1 text-ink/60">
              ✕
            </button>
          </div>
        )}
        {welcome && (
          <section className="toast-in rounded-2xl border-2 border-sun bg-[#FFF6D9]/95 p-3" aria-live="polite">
            <div className="flex items-start justify-between gap-3">
              <p className="font-bold">
                หายไป {formatDuration(welcome.awayMs)} · {pet.name}คิดถึงนะ
              </p>
              <button type="button" onClick={onDismissWelcome} aria-label="ปิดข้อความ" className="-mr-1 -mt-1 px-2 text-ink/60">
                ✕
              </button>
            </div>
            <ul className="mt-2 grid grid-cols-4 gap-1.5 text-center text-xs">
              {STATS.map((s) => (
                <li key={s.key} className="rounded-xl bg-white/80 px-1 py-1">
                  <span className="block text-ink/70">
                    {s.icon} {s.short}
                  </span>
                  <span className="font-semibold tabular-nums">
                    {Math.round(welcome.before[s.key])}→{Math.round(welcome.after[s.key])}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {levelUp && (
        <div className="toast-in absolute inset-x-0 top-[40%] z-40 mx-auto w-max rounded-2xl border-2 border-sun-dark bg-sun px-5 py-2 text-lg font-bold" role="status">
          เลเวลอัป! ตอนนี้ Lv.{levelUp}
        </div>
      )}

      <BottomNav pet={pet} />

      {/* ของที่กำลังลาก (ตามนิ้ว) */}
      {dragging && (
        <div className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2" style={{ left: dragging.x, top: dragging.y }}>
          {dragging.item === 'sponge' ? (
            <span className="block h-[46px] w-[70px]">
              <Sponge />
            </span>
          ) : (
            <span className="text-[52px] leading-none">{FOODS[dragging.item].icon}</span>
          )}
        </div>
      )}
      {hand && (
        <span className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 text-4xl" style={{ left: hand.x, top: hand.y }} aria-hidden="true">
          🤚
        </span>
      )}
    </div>
  )
}
