// น้องกระต่าย: ขนขาวครีม หูยาว หางปุย มีฟันหน้า 2 ซี่
import { Blush, Collar, Drop, Eyes, INK, TONGUE } from './parts'

const C = {
  fur: '#F4EEE7',
  shade: '#E2D5C7',
  white: '#FFFFFF',
  earInner: '#F5B3C1',
  nose: '#F28CA0',
}

function Teeth() {
  return (
    <g fill="#fff" stroke="#D9CFC4" strokeWidth="0.8">
      <rect x="96.6" y="101" width="3.2" height="5" rx="1" />
      <rect x="100.2" y="101" width="3.2" height="5" rx="1" />
    </g>
  )
}

function Mouth({ face }) {
  const line = { fill: 'none', stroke: INK, strokeWidth: 2.5, strokeLinecap: 'round' }
  // ปากรูปตัว Y ใต้จมูก
  const yMouth = (
    <g {...line}>
      <path d="M100 97 v4" />
      <path d="M100 101 q-5 4 -9 1" />
      <path d="M100 101 q5 4 9 1" />
    </g>
  )
  switch (face) {
    case 'happy':
      return (
        <g>
          <path d="M92 100 Q100 116 108 100 Z" fill={INK} />
          <ellipse cx="100" cy="109" rx="4.5" ry="2.5" fill={TONGUE} />
          <Teeth />
        </g>
      )
    case 'hungry':
      return (
        <g>
          {yMouth}
          <Teeth />
          <Drop x={108} y={104} scale={0.8} />
        </g>
      )
    case 'thirsty':
      return (
        <g>
          <path d="M96 102 h8 v6 a4 4 0 0 1 -8 0 z" fill={TONGUE} />
          {yMouth}
        </g>
      )
    case 'sad':
      return (
        <g {...line}>
          <path d="M100 97 v3" />
          <path d="M92 107 Q100 101 108 107" />
        </g>
      )
    default:
      return yMouth
  }
}

export default function Rabbit({ face, level }) {
  const sad = face === 'sad'
  // หูตั้งตรง / ตอนเศร้าหูตกลงข้าง ๆ
  const leftEar = sad ? 'rotate(-118 84 62)' : 'rotate(-8 84 60)'
  const rightEar = sad ? 'rotate(118 116 62)' : 'rotate(8 116 60)'

  return (
    <g>
      {/* หางปุย */}
      <circle className={face === 'happy' ? 'tail-wag fast' : ''} cx="143" cy="174" r="12" fill={C.white} stroke={C.shade} strokeWidth="2" />

      {/* ตัว + พุง */}
      <ellipse cx="100" cy="156" rx="44" ry="36" fill={C.fur} />
      <ellipse cx="100" cy="162" rx="25" ry="25" fill={C.white} />

      {/* เท้าหลังใหญ่ + มือเล็ก */}
      <ellipse cx="76" cy="188" rx="17" ry="7" fill={C.shade} />
      <ellipse cx="124" cy="188" rx="17" ry="7" fill={C.shade} />
      <ellipse cx="87" cy="172" rx="9" ry="12" fill={C.fur} stroke={C.shade} strokeWidth="1.5" />
      <ellipse cx="113" cy="172" rx="9" ry="12" fill={C.fur} stroke={C.shade} strokeWidth="1.5" />

      <Collar level={level} width={60} />

      {/* หูยาว (วาดก่อนหัว) */}
      <g transform={leftEar}>
        <ellipse cx="84" cy="30" rx="13" ry="32" fill={C.fur} stroke={C.shade} strokeWidth="1.5" />
        <ellipse cx="84" cy="32" rx="6" ry="24" fill={C.earInner} />
      </g>
      <g transform={rightEar}>
        <ellipse cx="116" cy="30" rx="13" ry="32" fill={C.fur} stroke={C.shade} strokeWidth="1.5" />
        <ellipse cx="116" cy="32" rx="6" ry="24" fill={C.earInner} />
      </g>

      {/* หัว */}
      <ellipse cx="100" cy="86" rx="46" ry="38" fill={C.fur} />
      {/* แก้มป่อง */}
      <circle cx="93" cy="101" r="9" fill={C.white} />
      <circle cx="107" cy="101" r="9" fill={C.white} />

      <Eyes face={face} lx={81} rx={119} y={83} />
      <Blush face={face} lx={70} rx={130} y={99} r={6} />

      {/* จมูก */}
      <ellipse cx="100" cy="94" rx="5" ry="3.5" fill={C.nose} />

      <Mouth face={face} />

      {face === 'thirsty' && <Drop x={60} y={50} scale={1.2} />}
    </g>
  )
}
