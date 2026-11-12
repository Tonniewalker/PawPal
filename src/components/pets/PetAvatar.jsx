import { getPetBody } from './index'
import { Hearts } from './parts'

// ตำแหน่งคราบสกปรก
const DIRT_SPOTS = [
  [76, 150], [124, 162], [100, 180], [133, 136], [66, 126], [110, 143],
]

// กรอบสัตว์เลี้ยง: ลูกโป่งคำพูด เงา หัวใจ คราบ ฟองสบู่
export default function PetAvatar({ species, face = 'normal', level = 1, scale = 1, hopKey = 0, emoji, moodLabel, label, dirt = 0, bubbles = [], say }) {
  const Body = getPetBody(species)
  const spots = Math.ceil(dirt * DIRT_SPOTS.length)

  return (
    <div className={`dog-hop relative ${face === 'sleep' ? 'pet-sleeping' : ''}`} key={hopKey} style={{ width: `${scale * 100}%` }}>
      {/* ลูกโป่งคำพูด */}
      {(say || emoji) && (
        <div
          key={say ?? emoji}
          className={`toast-in absolute bottom-[80%] left-[70%] z-10 whitespace-nowrap rounded-2xl bg-white px-2 py-1 leading-none shadow-[0_3px_0_rgba(46,58,89,0.12)] ${
            say ? 'text-[15px] font-semibold' : 'text-[26px]'
          }`}
          role={say ? 'status' : 'img'}
          aria-label={say ? undefined : moodLabel}
        >
          {say ?? emoji}
          <span className="bubble-tail absolute left-1.5 top-full h-3.5 w-4 bg-white" aria-hidden="true" />
        </div>
      )}
      <svg viewBox="0 0 200 200" className="dog-breathe block w-full overflow-visible" role="img" aria-label={label}>
        {/* เงาบนพื้น */}
        <ellipse cx="100" cy="193" rx="54" ry="6" fill="rgba(30,50,20,0.18)" />
        <Body face={face} level={level} />
        {DIRT_SPOTS.slice(0, spots).map(([x, y]) => (
          <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="7" ry="5" fill="#7A5A3E" opacity="0.5" />
        ))}
        {bubbles.map((b, i) => (
          <circle key={i} cx={b.x} cy={b.y} r={b.r ?? 8} fill="rgba(255,255,255,0.85)" stroke="#9FD3EA" strokeWidth="2" />
        ))}
        {face === 'happy' && <Hearts />}
      </svg>
    </div>
  )
}
