// น้องแมว
import { Blush, Collar, Drop, Eyes, INK, TONGUE } from './parts'

const C = {
  fur: '#A8B3C1',
  stripe: '#87929F',
  white: '#F6F3EE',
  earInner: '#F2B5C0',
  nose: '#F28CA0',
  whisker: '#6B7380',
}

function Mouth({ face }) {
  const line = { fill: 'none', stroke: INK, strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (face) {
    case 'happy':
      return (
        <g>
          <path d="M91 100 Q100 117 109 100 Z" fill={INK} />
          <ellipse cx="100" cy="108" rx="5" ry="2.8" fill={TONGUE} />
        </g>
      )
    case 'hungry':
      return (
        <g>
          <ellipse cx="100" cy="105" rx="4" ry="5" fill={INK} />
          <Drop x={106} y={105} scale={0.8} />
        </g>
      )
    case 'thirsty':
      return (
        <g>
          <path d="M95.5 102 h9 v6 a4.5 4.5 0 0 1 -9 0 z" fill={TONGUE} />
          <path d="M91 100 Q95.5 105 100 100 Q104.5 105 109 100" {...line} />
        </g>
      )
    case 'sad':
      return <path d="M91 106 Q100 99 109 106" {...line} />
    default:
      // ปากรูป ω
      return (
        <g {...line}>
          <path d="M100 97 v3" />
          <path d="M91 100 Q95.5 106 100 100 Q104.5 106 109 100" />
        </g>
      )
  }
}

export default function Cat({ face, level }) {
  const sad = face === 'sad'
  const earTilt = sad ? 22 : 0 // หูลู่ตอนเศร้า

  return (
    <g>
      {/* หาง */}
      {sad ? (
        <path d="M134 180 Q166 192 186 180" fill="none" stroke={C.fur} strokeWidth="11" strokeLinecap="round" />
      ) : (
        <path
          className={face === 'happy' ? 'tail-wag fast' : 'tail-wag'}
          d="M136 172 Q180 174 172 138 Q168 120 156 118"
          fill="none"
          stroke={C.fur}
          strokeWidth="11"
          strokeLinecap="round"
        />
      )}

      {/* ตัว + อก */}
      <ellipse cx="100" cy="155" rx="42" ry="36" fill={C.fur} />
      <ellipse cx="100" cy="162" rx="22" ry="24" fill={C.white} />

      {/* ขาหน้า + อุ้งเท้าขาว */}
      <rect x="77" y="162" width="15" height="28" rx="7.5" fill={C.fur} />
      <rect x="108" y="162" width="15" height="28" rx="7.5" fill={C.fur} />
      <ellipse cx="84.5" cy="189" rx="10" ry="5.5" fill={C.white} />
      <ellipse cx="115.5" cy="189" rx="10" ry="5.5" fill={C.white} />

      <Collar level={level} width={62} />

      {/* หู */}
      <g transform={`rotate(${-earTilt} 74 62)`}>
        <path d="M58 74 L62 30 L92 52 Z" fill={C.fur} strokeLinejoin="round" stroke={C.fur} strokeWidth="6" />
        <path d="M65 64 L67 41 L84 54 Z" fill={C.earInner} />
      </g>
      <g transform={`rotate(${earTilt} 126 62)`}>
        <path d="M142 74 L138 30 L108 52 Z" fill={C.fur} strokeLinejoin="round" stroke={C.fur} strokeWidth="6" />
        <path d="M135 64 L133 41 L116 54 Z" fill={C.earInner} />
      </g>

      {/* หัว */}
      <ellipse cx="100" cy="86" rx="50" ry="40" fill={C.fur} />
      {/* ลายบนหัว */}
      <g stroke={C.stripe} strokeWidth="4" strokeLinecap="round">
        <path d="M100 48 v10" />
        <path d="M89 50 l2.5 8" />
        <path d="M111 50 l-2.5 8" />
      </g>
      {/* แก้มป่องสีขาวรอบปาก */}
      <ellipse cx="91" cy="102" rx="13" ry="10" fill={C.white} />
      <ellipse cx="109" cy="102" rx="13" ry="10" fill={C.white} />

      <Eyes face={face} y={82} size={1.08} />
      <Blush face={face} lx={68} rx={132} y={97} r={5.5} />

      {/* จมูกชมพู */}
      <path d="M95 92 h10 l-5 5.5 z" fill={C.nose} stroke={C.nose} strokeWidth="2" strokeLinejoin="round" />

      <Mouth face={face} />

      {/* หนวด */}
      <g stroke={C.whisker} strokeWidth="1.8" strokeLinecap="round" opacity="0.75">
        <path d="M76 99 L55 95" />
        <path d="M76 104 L54 106" />
        <path d="M124 99 L145 95" />
        <path d="M124 104 L146 106" />
      </g>

      {face === 'thirsty' && <Drop x={60} y={44} scale={1.2} />}
    </g>
  )
}
