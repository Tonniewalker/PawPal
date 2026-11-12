import { LOW } from '../config'
import { gaugeColor } from './rooms'

// หลอดค่าสถานะ 0–100
export default function StatBar({ icon, label, value }) {
  const shown = Math.round(value)
  const low = value < LOW

  return (
    <div className="flex items-center gap-3">
      <span className="w-6 text-center text-lg" aria-hidden="true">{icon}</span>
      <span className={`w-24 shrink-0 text-[15px] ${low ? 'font-semibold text-berry' : ''}`}>{label}</span>
      <div
        className="h-3.5 flex-1 overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={shown}
      >
        <div className="h-full rounded-full transition-[width] duration-500" style={{ width: `${shown}%`, background: gaugeColor(value) }} />
      </div>
      <span className={`w-8 text-right text-[15px] tabular-nums ${low ? 'font-semibold text-berry' : ''}`}>{shown}</span>
    </div>
  )
}
