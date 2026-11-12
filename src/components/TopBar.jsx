import { useState } from 'react'
import { Link } from 'react-router-dom'

// เหรียญ (วาดเอง ไม่ใช้อิโมจิ เพราะบางเครื่องไม่มีอิโมจิเหรียญ)
export function Coin({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#FFC93C" stroke="#D9A21B" strokeWidth="2" />
      <circle cx="12" cy="12" r="6.5" fill="none" stroke="#D9A21B" strokeWidth="1.6" />
      <path d="M9 9.5 l2-1.5 v7" stroke="#B9850F" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  )
}

// วงแหวนเลเวล: ส่วนสีเหลือง = EXP ที่สะสมในเลเวลนี้
function LevelRing({ level, progress }) {
  const r = 24
  const len = 2 * Math.PI * r
  return (
    <div className="relative h-[60px] w-[60px] shrink-0" role="img" aria-label={`เลเวล ${level} (${progress}/100 EXP)`}>
      <svg viewBox="0 0 60 60" className="absolute inset-0">
        <circle cx="30" cy="30" r="28" fill="#FFFFFF" />
        <circle cx="30" cy="30" r={r} fill="none" stroke="#E7EEF5" strokeWidth="6" />
        <circle
          cx="30"
          cy="30"
          r={r}
          fill="none"
          stroke="#FFC93C"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${(len * progress) / 100} ${len}`}
          transform="rotate(-90 30 30)"
          className="transition-[stroke-dasharray] duration-500"
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center leading-none" aria-hidden="true">
        <span className="text-[10px] font-semibold text-ink/60">Lv.</span>
        <span className="text-xl font-bold">{level}</span>
      </span>
    </div>
  )
}

const pill = 'rounded-full bg-white/90 shadow-[0_3px_0_rgba(46,58,89,0.12)]'

// แถบบนของหน้าห้อง: เลเวล + ชื่อ / เหรียญ / เมนู (สมุดบันทึก, ตั้งค่า)
export default function TopBar({ level, progress, name, stageName, coins = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 flex items-start gap-2 px-3 pt-3">
      <div className={`pointer-events-auto flex min-w-0 items-center gap-2 py-1 pl-1 pr-4 ${pill}`}>
        <LevelRing level={level} progress={progress} />
        <div className="min-w-0">
          <p className="max-w-[130px] truncate text-base font-bold leading-tight">{name}</p>
          <p className="text-xs text-ink/60">{stageName}</p>
        </div>
      </div>

      <Link to="/shop" className={`pointer-events-auto ml-auto flex items-center gap-1.5 py-1.5 pl-1.5 pr-3 ${pill}`} aria-label={`มีเหรียญ ${coins} ไปร้านค้า`}>
        <Coin />
        <span className="text-base font-bold tabular-nums">{coins}</span>
      </Link>

      <div className="pointer-events-auto relative">
        <button
          type="button"
          aria-label="เมนู"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className={`flex h-11 w-11 items-center justify-center text-xl ${pill}`}
        >
          ☰
        </button>
        {menuOpen && (
          <>
            {/* แตะที่ว่างเพื่อปิดเมนู */}
            <button type="button" aria-label="ปิดเมนู" className="fixed inset-0 cursor-default" onClick={() => setMenuOpen(false)} />
            <nav className="toast-in absolute right-0 top-12 w-44 overflow-hidden rounded-2xl border-2 border-line bg-white shadow-lg">
              <Link to="/diary" className="flex items-center gap-2 px-4 py-3 font-semibold hover:bg-paper">
                <span aria-hidden="true">📖</span> สมุดบันทึก
              </Link>
              <Link to="/settings" className="flex items-center gap-2 border-t-2 border-line px-4 py-3 font-semibold hover:bg-paper">
                <span aria-hidden="true">⚙️</span> ตั้งค่า
              </Link>
            </nav>
          </>
        )}
      </div>
    </div>
  )
}
