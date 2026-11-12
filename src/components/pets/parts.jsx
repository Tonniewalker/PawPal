// ===== ชิ้นส่วนที่สัตว์ทุกชนิดใช้ร่วมกัน =====
// สัตว์ทุกตัววาดในกรอบ 200×200 หัวอยู่ราว ๆ (100, 84) พื้นอยู่ที่ y = 193
// face: 'happy' | 'normal' | 'hungry' | 'thirsty' | 'sad'

export const INK = '#3A2A22'
export const TONGUE = '#F27A8A'
export const BLUSH = '#F5A3A3'
export const DROP = '#8FD0F5'
const COLLAR = '#E5484D'
const TAG = '#FFC93C'

// ตา: ยิ้มตาปิด / เศร้ามีคิ้วตกกับน้ำตา / ตากลม (หิวตาโต หิวน้ำตาเล็ก)
export function Eyes({ face, lx = 80, rx = 120, y = 80, size = 1 }) {
  if (face === 'happy') {
    const w = 8 * size
    return (
      <g fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round">
        <path d={`M${lx - w} ${y + 2} Q${lx} ${y - 8} ${lx + w} ${y + 2}`} />
        <path d={`M${rx - w} ${y + 2} Q${rx} ${y - 8} ${rx + w} ${y + 2}`} />
      </g>
    )
  }
  if (face === 'sad') {
    const r = 5.5 * size
    return (
      <g>
        <g stroke={INK} strokeWidth="3" strokeLinecap="round">
          <line x1={lx - 9} y1={y - 7} x2={lx + 6} y2={y - 12} />
          <line x1={rx - 6} y1={y - 12} x2={rx + 9} y2={y - 7} />
        </g>
        <circle cx={lx} cy={y + 4} r={r} fill={INK} />
        <circle cx={rx} cy={y + 4} r={r} fill={INK} />
        <circle cx={lx + 1.5} cy={y + 2.5} r={r * 0.33} fill="#fff" />
        <circle cx={rx + 1.5} cy={y + 2.5} r={r * 0.33} fill="#fff" />
        <Drop x={lx - 4} y={y + 12} />
      </g>
    )
  }
  const r = (face === 'hungry' ? 8 : face === 'thirsty' ? 5.5 : 6.5) * size
  return (
    <g>
      <circle cx={lx} cy={y} r={r} fill={INK} />
      <circle cx={rx} cy={y} r={r} fill={INK} />
      <circle cx={lx + r * 0.35} cy={y - r * 0.35} r={r * 0.35} fill="#fff" />
      <circle cx={rx + r * 0.35} cy={y - r * 0.35} r={r * 0.35} fill="#fff" />
      {face === 'hungry' && (
        <>
          <circle cx={lx - 3} cy={y + 3} r="1.6" fill="#fff" />
          <circle cx={rx - 3} cy={y + 3} r="1.6" fill="#fff" />
        </>
      )}
    </g>
  )
}

// หยดน้ำ (น้ำตา / น้ำลาย / เหงื่อ) จุดบนสุดอยู่ที่ (x, y)
export function Drop({ x, y, scale = 1 }) {
  return <path d={`M${x} ${y} q${-4 * scale} ${7 * scale} 0 ${10 * scale} q${4 * scale} ${-3 * scale} 0 ${-10 * scale}z`} fill={DROP} />
}

// แก้มแดง แสดงตอนอารมณ์ดี
export function Blush({ face, lx = 68, rx = 132, y = 99, r = 6 }) {
  if (face !== 'happy' && face !== 'normal') return null
  return (
    <>
      <circle cx={lx} cy={y} r={r} fill={BLUSH} opacity="0.7" />
      <circle cx={rx} cy={y} r={r} fill={BLUSH} opacity="0.7" />
    </>
  )
}

// ปลอกคอ + ป้ายบอกเลเวล
export function Collar({ level, y = 117, width = 68, color = COLLAR }) {
  return (
    <g>
      <rect x={100 - width / 2} y={y} width={width} height="10" rx="5" fill={color} />
      <LevelTag level={level} y={y + 17} />
    </g>
  )
}

export function LevelTag({ level, x = 100, y = 134 }) {
  return (
    <g>
      <circle cx={x} cy={y} r="9" fill={TAG} stroke="#E0A800" strokeWidth="1.5" />
      <text x={x} y={y + 3.5} textAnchor="middle" fontSize="10" fontWeight="700" fill={INK} fontFamily="Mali, sans-serif">
        {level}
      </text>
    </g>
  )
}

// ปากมาตรฐานของสัตว์สี่ขา (หมา จิ้งจอก) จุดกึ่งกลางใต้จมูกที่ (100, y)
export function MuzzleMouth({ face, y = 104 }) {
  const line = { fill: 'none', stroke: INK, strokeWidth: 3, strokeLinecap: 'round' }
  switch (face) {
    case 'happy':
      return (
        <g>
          <path d={`M86 ${y - 1} Q100 ${y + 21} 114 ${y - 1} Z`} fill={INK} />
          <ellipse cx="100" cy={y + 7} rx="7" ry="3.5" fill={TONGUE} />
        </g>
      )
    case 'hungry':
      return (
        <g>
          <ellipse cx="100" cy={y + 6} rx="5" ry="6" fill={INK} />
          <Drop x={108} y={y + 8} scale={0.9} />
        </g>
      )
    case 'thirsty':
      return (
        <g>
          <path d={`M93 ${y + 3} h14 v9 a7 7 0 0 1 -14 0 z`} fill={TONGUE} />
          <line x1="100" y1={y + 4} x2="100" y2={y + 12} stroke="#D85C70" strokeWidth="1.5" strokeLinecap="round" />
          <path d={`M87 ${y} Q100 ${y + 8} 113 ${y}`} {...line} />
        </g>
      )
    case 'sad':
      return <path d={`M88 ${y + 9} Q100 ${y} 112 ${y + 9}`} {...line} />
    default:
      return (
        <g>
          <line x1="100" y1={y - 4} x2="100" y2={y} {...line} />
          <path d={`M90 ${y} Q95 ${y + 6} 100 ${y} Q105 ${y + 6} 110 ${y}`} {...line} />
        </g>
      )
  }
}

// หัวใจลอยตอนมีความสุข
export function Hearts() {
  return (
    <>
      <Heart x={16} y={52} delay="0s" />
      <Heart x={172} y={70} delay="0.9s" />
    </>
  )
}

function Heart({ x, y, delay }) {
  return (
    <path
      className="heart-float"
      style={{ animationDelay: delay }}
      transform={`translate(${x} ${y})`}
      d="M0 3 C0 -1 6 -1 6 3 C6 -1 12 -1 12 3 C12 7 6 10 6 12 C6 10 0 7 0 3 Z"
      fill={TONGUE}
    />
  )
}
