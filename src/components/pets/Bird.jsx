// น้องนก: ตัวกลมสีเหลือง มีหงอน ปากสีส้ม ผูกโบว์แทนปลอกคอ
import { Blush, Drop, Eyes, INK, LevelTag, TONGUE } from './parts'

const C = {
  body: '#FFCB45',
  belly: '#FFF1C9',
  wing: '#F2B21F',
  beak: '#F28C38',
  beakLine: '#D46E22',
  bow: '#E5484D',
}

// ปาก: ปิด / อ้า (ดีใจ, หิว) / แลบลิ้น (หิวน้ำ)
function Beak({ face }) {
  const upper = <path d="M88 100 Q100 88 112 100 Z" fill={C.beak} />
  if (face === 'happy' || face === 'hungry') {
    const big = face === 'happy'
    return (
      <g>
        <ellipse cx="100" cy="104" rx={big ? 9 : 6} ry={big ? 6.5 : 5} fill={INK} />
        {big && <ellipse cx="100" cy="107" rx="5" ry="2.5" fill={TONGUE} />}
        {upper}
        <path d={big ? 'M90 104 Q100 119 110 104 Q100 110 90 104 Z' : 'M93 104 Q100 114 107 104 Q100 108 93 104 Z'} fill={C.beak} />
        {face === 'hungry' && <Drop x={108} y={106} scale={0.8} />}
      </g>
    )
  }
  if (face === 'thirsty') {
    return (
      <g>
        <path d="M96 102 h8 v7 a4 4 0 0 1 -8 0 z" fill={TONGUE} />
        {upper}
        <path d="M90 101 Q100 110 110 101 Q100 105 90 101 Z" fill={C.beak} />
      </g>
    )
  }
  return (
    <g>
      <path d="M88 100 Q100 88 112 100 Q100 110 88 100 Z" fill={C.beak} />
      <path d="M90 100 H110" stroke={C.beakLine} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  )
}

export default function Bird({ face, level }) {
  const happy = face === 'happy'
  const sad = face === 'sad'
  // ปีก: ดีใจกางปีก / เศร้าหุบปีกแนบตัว
  const wingAngle = happy ? 50 : sad ? 5 : 20

  return (
    <g>
      {/* หาง */}
      <path
        className={happy ? 'tail-wag fast' : sad ? '' : 'tail-wag'}
        d="M136 160 L178 170 L170 156 L180 148 L140 146 Z"
        fill={C.wing}
        strokeLinejoin="round"
        stroke={C.wing}
        strokeWidth="4"
      />

      {/* ปีก (วาดก่อนตัว) */}
      <ellipse cx="50" cy="130" rx="14" ry="30" fill={C.wing} transform={`rotate(${wingAngle} 56 108)`} />
      <ellipse cx="150" cy="130" rx="14" ry="30" fill={C.wing} transform={`rotate(${-wingAngle} 144 108)`} />

      {/* หงอน */}
      <ellipse cx="95" cy="44" rx="4.5" ry="11" fill={C.body} transform="rotate(-25 95 52)" />
      <ellipse cx="104" cy="42" rx="4.5" ry="12" fill={C.body} transform="rotate(12 104 52)" />

      {/* ตัวกลม + พุง */}
      <ellipse cx="100" cy="120" rx="56" ry="68" fill={C.body} />
      <ellipse cx="100" cy="146" rx="36" ry="38" fill={C.belly} />

      {/* ขา */}
      <g stroke={C.beak} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M86 186 v6 M80 193 L86 187 L92 193" />
        <path d="M114 186 v6 M108 193 L114 187 L120 193" />
      </g>

      {/* โบว์ + ป้ายเลเวล */}
      <path d="M100 124 L86 116 L86 132 Z M100 124 L114 116 L114 132 Z" fill={C.bow} strokeLinejoin="round" stroke={C.bow} strokeWidth="2" />
      <circle cx="100" cy="124" r="4.5" fill={C.bow} />
      <LevelTag level={level} y={141} />

      <Eyes face={face} lx={78} rx={122} y={86} />
      <Blush face={face} lx={64} rx={136} y={100} r={7} />

      <Beak face={face} />

      {face === 'thirsty' && <Drop x={56} y={62} scale={1.2} />}
    </g>
  )
}
