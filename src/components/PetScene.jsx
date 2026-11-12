import PetAvatar from './pets/PetAvatar'
import { getTimeOfDay } from '../petLogic'
import { getSpecies } from '../species'

// ดาวตอนกลางคืน (ตำแหน่งเป็น %)
const STARS = [
  [12, 14], [28, 30], [44, 10], [70, 22], [86, 36], [58, 40], [20, 46],
]

// ฉากท้องฟ้า + สนามหญ้า + สัตว์เลี้ยง (ท้องฟ้าเปลี่ยนตามเวลาจริง: กลางวัน/เย็น/กลางคืน)
export default function PetScene({ species, face, level, scale, hopKey, emoji, moodLabel, now, children, className = 'h-64' }) {
  const time = getTimeOfDay(now)

  return (
    <div className={`scene scene-${time} relative overflow-hidden rounded-[28px] ${className}`}>
      {/* พระอาทิตย์ / พระจันทร์ */}
      <div className="sky-sun absolute right-6 top-6 h-12 w-12 rounded-full" />
      {time === 'night' && STARS.map(([x, y]) => (
        <span key={`${x}-${y}`} className="star" style={{ left: `${x}%`, top: `${y}%` }} />
      ))}

      {/* สนามหญ้า */}
      <div className="grass absolute inset-x-0 bottom-0 h-20 rounded-t-[50%_24px]" />

      {/* สัตว์เลี้ยง (ยืนบนหญ้า) */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center">
        <div className="flex w-52 items-end justify-center">
          <PetAvatar
            species={species}
            face={face}
            level={level}
            scale={scale}
            hopKey={hopKey}
            emoji={emoji}
            moodLabel={moodLabel}
            label={getSpecies(species).label}
          />
        </div>
      </div>

      {children}
    </div>
  )
}
