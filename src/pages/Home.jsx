import { useState } from 'react'
import DogScene from '../components/DogScene'
import StatBar from '../components/StatBar'
import { ACTIONS, EXP_PER_LEVEL, FULL, STATS } from '../config'
import { formatDuration, getLevel, getMood, getStage } from '../dogLogic'

function welcomeLine(name, faceAfter) {
  if (faceAfter === 'sad') return `${name} รอจนเศร้าแล้ว รีบดูแลหน่อยนะ`
  if (faceAfter === 'hungry' || faceAfter === 'thirsty') return `${name} หิวแล้ว รีบดูแลหน่อยนะ`
  return `${name} คิดถึงนะ`
}

export default function Home({ dog, now, welcome, onDismissWelcome, onCare }) {
  const [hopKey, setHopKey] = useState(0) // เปลี่ยนค่าเพื่อให้น้องกระโดด
  const [pops, setPops] = useState([]) // ข้อความ +EXP ที่ลอยขึ้นจากปุ่ม
  const [levelUp, setLevelUp] = useState(null)

  const mood = getMood(dog)
  const { level, progress } = getLevel(dog.exp)
  const stage = getStage(level)
  const moodIsBad = mood.face === 'sad' || mood.face === 'hungry' || mood.face === 'thirsty'

  function handleCare(key) {
    const result = onCare(key)
    if (!result) return

    setHopKey((k) => k + 1)
    const id = Date.now()
    setPops((list) => [...list, { id, key, text: `+${result.exp} EXP` }])
    setTimeout(() => setPops((list) => list.filter((p) => p.id !== id)), 900)

    if (result.levelUp) {
      setLevelUp(result.levelUp)
      setTimeout(() => setLevelUp(null), 2500)
    }
  }

  return (
    <div className="space-y-4 px-5 pb-6">
      {/* ข้อความต้อนรับกลับ: โชว์ว่าเวลาที่หายไปทำให้ค่าลดลงเท่าไหร่ */}
      {welcome && (
        <section className="toast-in rounded-2xl border-2 border-sun bg-[#FFF6D9] p-4" aria-live="polite">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-lg font-bold">หายไป {formatDuration(welcome.awayMs)}</p>
              <p className="text-[15px]">{welcomeLine(dog.name, getMood(welcome.after).face)}</p>
            </div>
            <button
              type="button"
              onClick={onDismissWelcome}
              aria-label="ปิดข้อความ"
              className="-mr-1 -mt-1 rounded-full px-2 py-1 text-lg text-ink/60"
            >
              ✕
            </button>
          </div>
          <ul className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
            {STATS.map((s) => (
              <li key={s.key} className="rounded-xl bg-white/70 px-1 py-1.5">
                <span className="block text-ink/70">{s.label}</span>
                <span className="font-semibold tabular-nums">
                  {Math.round(welcome.before[s.key])} → {Math.round(welcome.after[s.key])}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <DogScene face={mood.face} level={level} scale={stage.scale} hopKey={hopKey} emoji={mood.emoji} moodLabel={mood.label} now={now}>
        {levelUp && (
          <div className="toast-in absolute inset-x-0 top-1/3 mx-auto w-max rounded-2xl border-2 border-sun-dark bg-sun px-5 py-2 text-lg font-bold">
            เลเวลอัป! ตอนนี้ Lv.{levelUp}
          </div>
        )}
      </DogScene>

      {/* ชื่อ + เลเวล + EXP */}
      <section>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-[28px] font-bold leading-tight">{dog.name}</h1>
            <p className="mt-1 flex flex-wrap items-center gap-2 text-[15px] text-ink/70">
              {stage.name}
              <span
                className={`rounded-full px-2.5 py-0.5 text-sm font-semibold ${
                  moodIsBad ? 'bg-berry/10 text-berry' : 'bg-leaf/15 text-[#3E7A2A]'
                }`}
              >
                {mood.label}
              </span>
            </p>
          </div>
          <span className="shrink-0 rounded-full border-2 border-sun-dark bg-sun px-3 py-1 text-lg font-bold">
            Lv.{level}
          </span>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-sun transition-[width] duration-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-1 text-right text-sm text-ink/60 tabular-nums">
          {progress}/{EXP_PER_LEVEL} EXP
        </p>
      </section>

      {/* ค่าสถานะ */}
      <section className="space-y-3">
        {STATS.map((s) => (
          <StatBar key={s.key} icon={s.icon} label={s.label} value={dog[s.key]} color={s.color} />
        ))}
      </section>

      {/* ปุ่มดูแล */}
      <section className="grid grid-cols-3 gap-3">
        {Object.entries(ACTIONS).map(([key, action]) => {
          const full = dog[action.stat] >= FULL
          return (
            <div key={key} className="relative">
              <button
                type="button"
                disabled={full}
                onClick={() => handleCare(key)}
                className="care-btn flex w-full flex-col items-center gap-1 rounded-2xl bg-white px-1 py-3 disabled:opacity-50"
              >
                <span className="text-3xl" aria-hidden="true">{action.icon}</span>
                <span className="text-[15px] font-semibold">{full ? action.fullText : action.label}</span>
                {!full && <span className="text-xs text-ink/60">+{action.exp} EXP</span>}
              </button>
              {pops
                .filter((p) => p.key === key)
                .map((p) => (
                  <span
                    key={p.id}
                    className="pop-up pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-bold text-sun-dark"
                  >
                    {p.text}
                  </span>
                ))}
            </div>
          )
        })}
      </section>
    </div>
  )
}
