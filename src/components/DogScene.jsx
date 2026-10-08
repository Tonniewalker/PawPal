import Dog from './Dog'
import { getTimeOfDay } from '../dogLogic'

// ดาวตอนกลางคืน (ตำแหน่งเป็น %)
const STARS = [
  [12, 14], [28, 30], [44, 10], [70, 22], [86, 36], [58, 40], [20, 46],
]

// ฉากท้องฟ้า + สนามหญ้า + น้องหมา (อิโมจิอารมณ์อยู่ใน Dog.jsx ติดกับหัวน้อง)
export default function DogScene({ face, level, scale, hopKey, emoji, moodLabel, now, children }) {
  const time = getTimeOfDay(now)

  return (
    <div className={`scene scene-${time} relative h-64 overflow-hidden rounded-[28px]`}>
      {/* พระอาทิตย์ / พระจันทร์ */}
      <div className="sky-sun absolute right-6 top-6 h-12 w-12 rounded-full" />
      {time === 'night' && STARS.map(([x, y]) => (
        <span key={`${x}-${y}`} className="star" style={{ left: `${x}%`, top: `${y}%` }} />
      ))}

      {/* สนามหญ้า */}
      <div className="grass absolute inset-x-0 bottom-0 h-20 rounded-t-[50%_24px]" />

      {/* น้องหมา (ยืนบนหญ้า) */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center">
        <div className="flex w-52 items-end justify-center">
          <Dog face={face} level={level} scale={scale} hopKey={hopKey} emoji={emoji} moodLabel={moodLabel} />
        </div>
      </div>

      {children}
    </div>
  )
}
