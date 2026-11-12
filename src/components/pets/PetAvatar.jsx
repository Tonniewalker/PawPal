import { getPetBody } from './index'
import { Hearts } from './parts'

// กรอบของสัตว์เลี้ยงทุกชนิด: ขนาดตามช่วงวัย, กระโดดตอนถูกดูแล, หายใจ, ลูกโป่งอิโมจิ, เงา, หัวใจ
// ตัวสัตว์จริง ๆ วาดในไฟล์ของแต่ละชนิด (Dog.jsx, Cat.jsx, ...)
export default function PetAvatar({ species, face = 'normal', level = 1, scale = 1, hopKey = 0, emoji, moodLabel, label }) {
  const Body = getPetBody(species)

  return (
    <div className="dog-hop relative" key={hopKey} style={{ width: `${scale * 100}%` }}>
      {/* ลูกโป่งอิโมจิตามอารมณ์ วางเหนือหัวด้านขวา หางชี้ลงมาที่หัวน้อง */}
      {emoji && (
        <div
          key={emoji}
          className="toast-in absolute bottom-[80%] left-[70%] z-10 rounded-2xl bg-white px-2 py-1 text-[26px] leading-none shadow-[0_3px_0_rgba(46,58,89,0.12)]"
          role="img"
          aria-label={moodLabel}
        >
          {emoji}
          <span className="bubble-tail absolute left-1.5 top-full h-3.5 w-4 bg-white" aria-hidden="true" />
        </div>
      )}
      <svg viewBox="0 0 200 200" className="dog-breathe block w-full overflow-visible" role="img" aria-label={label}>
        {/* เงาบนพื้น */}
        <ellipse cx="100" cy="193" rx="54" ry="6" fill="rgba(30,50,20,0.18)" />
        <Body face={face} level={level} />
        {face === 'happy' && <Hearts />}
      </svg>
    </div>
  )
}
