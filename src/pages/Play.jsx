import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PetAvatar from '../components/pets/PetAvatar'
import { Coin } from '../components/TopBar'
import { COINS, GAME } from '../config'
import { getLevel, getTimeOfDay } from '../petLogic'
import { getSpecies } from '../species'

// ===== มินิเกม Catch the Food =====
// ตำแหน่งเป็น % ของสนาม

const TREATS = ['🍖', '🍎', '🍪', '🥛', '🍰']
const PET_W = 26 // ความกว้างตัวน้อง
const CATCH_TOP = 74 // ช่วง y ที่รับของได้
const CATCH_BOTTOM = 90

function newItem(id, progress) {
  const r = Math.random()
  const kind = r < 0.12 ? 'coin' : r < 0.32 ? 'bad' : 'treat'
  return {
    id,
    kind,
    icon: kind === 'treat' ? TREATS[Math.floor(Math.random() * TREATS.length)] : kind === 'bad' ? '🗑️' : null,
    x: 8 + Math.random() * 84,
    y: -8,
    speed: 30 + progress * 42 + Math.random() * 8, // ยิ่งเล่นนาน ของยิ่งตกเร็ว
  }
}

function newGame() {
  return { items: [], effects: [], petX: 50, targetX: 50, coins: 0, elapsed: 0, spawnIn: 0.3, nextId: 1, hurtUntil: 0 }
}

const card = 'toast-in mx-6 w-full max-w-[360px] rounded-3xl border-2 border-line bg-white p-6 text-center shadow-lg'
const bigBtn = 'care-btn w-full rounded-2xl py-3.5 text-lg font-bold'

export default function Play({ pet, now, care }) {
  const [phase, setPhase] = useState('ready') // 'ready' | 'countdown' | 'playing' | 'done'
  const [countdown, setCountdown] = useState(3)
  const [result, setResult] = useState(null)
  const [, setFrame] = useState(0) // เปลี่ยนทุกเฟรมเพื่อวาดใหม่
  const fieldRef = useRef(null)
  const gameRef = useRef(newGame())

  // care ล่าสุด สำหรับลูปเกม
  const careRef = useRef(care)
  useEffect(() => {
    careRef.current = care
  })

  const check = care.canPlay()

  function start() {
    if (!care.canPlay().ok) return
    gameRef.current = newGame()
    setResult(null)
    setCountdown(3)
    setPhase('countdown')
  }

  // นับถอยหลัง 3 2 1
  useEffect(() => {
    if (phase !== 'countdown') return
    if (countdown === 0) {
      setPhase('playing')
      return
    }
    const t = setTimeout(() => setCountdown((n) => n - 1), 650)
    return () => clearTimeout(t)
  }, [phase, countdown])

  // ===== ลูปเกม =====
  useEffect(() => {
    if (phase !== 'playing') return
    let raf
    let last = performance.now()

    function step(t) {
      // จำกัด dt ตอนสลับแอป
      const dt = Math.min(0.05, (t - last) / 1000)
      last = t
      const g = gameRef.current
      g.elapsed += dt
      const progress = Math.min(1, g.elapsed / GAME.durationSec)

      // น้องค่อย ๆ วิ่งตามนิ้ว
      g.petX += (g.targetX - g.petX) * Math.min(1, dt * 14)

      // ปล่อยของใหม่ ยิ่งนานยิ่งถี่
      g.spawnIn -= dt
      if (g.spawnIn <= 0) {
        g.items.push(newItem(g.nextId++, progress))
        g.spawnIn = 0.72 - progress * 0.38
      }

      // ของตก + เช็กว่ารับได้ไหม
      for (const item of g.items) {
        item.y += item.speed * dt
        const inCatchZone = item.y >= CATCH_TOP && item.y <= CATCH_BOTTOM
        if (!item.caught && inCatchZone && Math.abs(item.x - g.petX) <= PET_W / 2) {
          item.caught = true
          const points = GAME.coins[item.kind]
          g.coins = Math.max(0, g.coins + points)
          g.effects.push({ id: item.id, x: item.x, y: CATCH_TOP - 6, text: points > 0 ? `+${points}` : `${points}`, good: points > 0, at: g.elapsed })
          if (points < 0) g.hurtUntil = g.elapsed + 0.6
        }
      }
      g.items = g.items.filter((i) => !i.caught && i.y < 108)
      g.effects = g.effects.filter((e) => g.elapsed - e.at < 0.7)

      if (g.elapsed >= GAME.durationSec) {
        const reward = careRef.current.playGame(g.coins)
        setResult({ ...reward, gameCoins: g.coins })
        setPhase('done')
        return
      }
      setFrame((f) => f + 1)
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [phase])

  // ===== การควบคุม =====
  function aim(e) {
    if (phase !== 'playing') return
    const rect = fieldRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    gameRef.current.targetX = Math.min(100 - PET_W / 2, Math.max(PET_W / 2, x))
  }
  useEffect(() => {
    if (phase !== 'playing') return
    function onKey(e) {
      const g = gameRef.current
      if (e.key === 'ArrowLeft') g.targetX = Math.max(PET_W / 2, g.targetX - 12)
      if (e.key === 'ArrowRight') g.targetX = Math.min(100 - PET_W / 2, g.targetX + 12)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase])

  const g = gameRef.current
  const remaining = Math.max(0, GAME.durationSec - g.elapsed)
  const hurt = phase === 'playing' && g.hurtUntil > g.elapsed
  const { level } = getLevel(pet.exp)

  return (
    <div
      ref={fieldRef}
      onPointerDown={aim}
      onPointerMove={aim}
      className={`scene scene-${getTimeOfDay(now)} relative mx-auto h-dvh max-w-[440px] touch-none select-none overflow-hidden`}
    >
      <h1 className="sr-only">Catch the Food</h1>
      <div className="sky-sun absolute right-6 top-20 h-12 w-12 rounded-full" />
      <div className="grass absolute inset-x-0 bottom-0 h-[14%] rounded-t-[50%_24px]" />

      {/* แถบบน: กลับ / เวลา / คะแนน */}
      <div className="absolute inset-x-0 top-0 z-30 flex items-center gap-2 px-3 pt-3">
        <Link to="/" aria-label="ออกจากเกม" className="care-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-xl">
          ←
        </Link>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-white/80" role="timer" aria-label={`เหลือเวลา ${Math.ceil(remaining)} วินาที`}>
          <div className="h-full rounded-full bg-sun transition-[width] duration-100" style={{ width: `${(remaining / GAME.durationSec) * 100}%` }} />
        </div>
        <span className="w-12 shrink-0 rounded-full bg-white py-1.5 text-center font-bold tabular-nums">{Math.ceil(remaining)}s</span>
        <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-lg font-bold tabular-nums" aria-label={`เหรียญ ${g.coins}`}>
          <Coin size={22} /> {g.coins}
        </span>
      </div>

      {/* ของที่ตกลงมา */}
      {g.items.map((item) => (
        <span
          key={item.id}
          data-kind={item.kind}
          className="game-item pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 text-[38px] leading-none"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
        >
          {item.kind === 'coin' ? <Coin size={38} /> : item.icon}
        </span>
      ))}

      {/* คะแนนเด้งตอนรับของ */}
      {g.effects.map((e) => (
        <span
          key={`fx-${e.id}`}
          className={`pop-up pointer-events-none absolute z-20 text-2xl font-bold drop-shadow ${e.good ? 'text-sun-dark' : 'text-berry'}`}
          style={{ left: `${e.x}%`, top: `${e.y}%` }}
        >
          {e.text}
        </span>
      ))}

      {/* ตัวน้อง */}
      <div
        className="pointer-events-none absolute bottom-[6%] z-10 flex -translate-x-1/2 justify-center"
        style={{ left: `${g.petX}%`, width: `${PET_W}%` }}
        data-testid="game-pet"
      >
        <PetAvatar species={pet.species} face={hurt ? 'sad' : 'happy'} level={level} label={`${getSpecies(pet.species).label} ${pet.name}`} />
      </div>

      {/* ===== หน้าจอก่อนเริ่ม / นับถอยหลัง / สรุปผล ===== */}
      {phase === 'ready' && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-ink/30">
          <section className={card}>
            <h2 className="text-2xl font-bold">🎮 Catch the Food</h2>
            <p className="mt-2 leading-relaxed text-ink/70">เลื่อนซ้าย-ขวาให้ {pet.name} รับอาหารที่ตกลงมา</p>
            <ul className="mt-3 grid grid-cols-3 gap-2 text-sm">
              <li className="rounded-xl bg-paper py-2">
                🍖 ขนม<br />
                <b>+{GAME.coins.treat}</b>
              </li>
              <li className="flex flex-col items-center rounded-xl bg-paper py-2">
                <Coin size={20} /> เหรียญ
                <b>+{GAME.coins.coin}</b>
              </li>
              <li className="rounded-xl bg-paper py-2">
                🗑️ ขยะ<br />
                <b className="text-berry">{GAME.coins.bad}</b>
              </li>
            </ul>
            <p className="mt-3 text-sm text-ink/60">{GAME.durationSec} วินาที</p>
            {check.ok ? (
              <button type="button" onClick={start} className={`${bigBtn} mt-4 border-sun-dark bg-sun`}>
                เริ่มเล่น
              </button>
            ) : (
              <>
                <p className="mt-4 rounded-2xl bg-berry/10 p-3 font-semibold text-berry">{check.say}</p>
                <Link to={pet.asleep ? '/bedroom' : '/'} className={`${bigBtn} mt-3 block bg-white`}>
                  {pet.asleep ? 'ไปห้องนอน' : 'กลับห้องนั่งเล่น'}
                </Link>
              </>
            )}
          </section>
        </div>
      )}

      {phase === 'countdown' && (
        <div className="absolute inset-0 z-40 flex items-center justify-center" aria-live="assertive">
          <span key={countdown} className="toast-in text-8xl font-bold text-white drop-shadow-lg">
            {countdown > 0 ? countdown : 'เริ่ม!'}
          </span>
        </div>
      )}

      {phase === 'done' && result && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-ink/30">
          <section className={card} aria-live="polite">
            <h2 className="text-2xl font-bold">หมดเวลา!</h2>
            <p className="mt-2 flex items-center justify-center gap-2 text-5xl font-bold tabular-nums">
              +{result.gameCoins} <Coin size={44} />
            </p>
            <ul className="mt-4 space-y-1.5 text-left">
              <li className="flex items-center justify-between rounded-xl bg-paper px-3 py-2">
                <span>😊 ความสุข / 🌙 พลังงาน</span>
                <span className="font-bold">
                  +{GAME.fun} / −{GAME.energyCost}
                </span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-paper px-3 py-2">
                <span>EXP</span>
                <span className="font-bold">+{result.exp}</span>
              </li>
            </ul>
            {result.levelUp && (
              <p className="mt-2 font-bold text-sun-dark">
                เลเวลอัป! ตอนนี้ Lv.{result.levelUp} (+{COINS.levelUp} เหรียญ)
              </p>
            )}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link to="/" className={`${bigBtn} block bg-white`}>
                กลับ
              </Link>
              <button type="button" onClick={() => setPhase('ready')} className={`${bigBtn} border-sun-dark bg-sun`}>
                เล่นอีก
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
