import Dog from './pets/Dog'
import { getTimeOfDay } from '../petLogic'

// ตัววาดของสัตว์แต่ละชนิด (เพิ่มชนิดใหม่ตรงนี้)
const RENDERERS = {
  dog: Dog,
}

// ดาวตอนกลางคืน (ตำแหน่งเป็น %)
const STARS = [
  [12, 14], [28, 30], [44, 10], [70, 22], [86, 36], [58, 40], [20, 46],
]

// ฉากท้องฟ้า + สนามหญ้า + สัตว์เลี้ยง (อิโมจิอารมณ์อยู่ในตัววาดสัตว์ ติดกับหัวน้อง)
export default function PetScene({ species = 'dog', face, level, scale, hopKey, emoji, moodLabel, now, children }) {
  const time = getTimeOfDay(now)
  const Pet = RENDERERS[species] ?? Dog

  return (
    <div className={`scene scene-${time} relative h-64 overflow-hidden rounded-[28px]`}>
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
          <Pet face={face} level={level} scale={scale} hopKey={hopKey} emoji={emoji} moodLabel={moodLabel} />
        </div>
      </div>

      {children}
    </div>
  )
}
