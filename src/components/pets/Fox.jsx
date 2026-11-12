// น้องจิ้งจอก
import { Blush, Collar, Drop, Eyes, INK, MuzzleMouth } from './parts'

const C = {
  fur: '#F0893A',
  dark: '#4A3428',
  white: '#FFF6EA',
  collar: '#4AA3DF',
}

function Tail({ face }) {
  if (face === 'sad') {
    // หางวางบนพื้น
    return (
      <g>
        <ellipse cx="150" cy="182" rx="34" ry="11" fill={C.fur} />
        <ellipse cx="177" cy="182" rx="10" ry="8.5" fill={C.white} />
      </g>
    )
  }
  return (
    <g className={face === 'happy' ? 'tail-wag fast' : 'tail-wag'}>
      <ellipse cx="156" cy="146" rx="17" ry="36" fill={C.fur} transform="rotate(30 156 146)" />
      <ellipse cx="170" cy="122" rx="11" ry="12" fill={C.white} transform="rotate(30 170 122)" />
    </g>
  )
}

export default function Fox({ face, level }) {
  const earTilt = face === 'sad' ? 22 : 0

  return (
    <g>
      <Tail face={face} />

      {/* ตัว + อกขาว */}
      <ellipse cx="100" cy="155" rx="42" ry="36" fill={C.fur} />
      <ellipse cx="100" cy="160" rx="22" ry="26" fill={C.white} />

      {/* ขาหน้า + ถุงเท้าสีเข้ม */}
      <rect x="76" y="160" width="16" height="30" rx="8" fill={C.fur} />
      <rect x="108" y="160" width="16" height="30" rx="8" fill={C.fur} />
      <ellipse cx="84" cy="188" rx="11" ry="6.5" fill={C.dark} />
      <ellipse cx="116" cy="188" rx="11" ry="6.5" fill={C.dark} />

      <Collar level={level} width={64} color={C.collar} />

      {/* หู */}
      <g transform={`rotate(${-earTilt} 75 62)`}>
        <path d="M56 76 L58 22 L94 50 Z" fill={C.fur} stroke={C.fur} strokeWidth="6" strokeLinejoin="round" />
        <path d="M63 66 L63 34 L85 52 Z" fill={C.dark} />
      </g>
      <g transform={`rotate(${earTilt} 125 62)`}>
        <path d="M144 76 L142 22 L106 50 Z" fill={C.fur} stroke={C.fur} strokeWidth="6" strokeLinejoin="round" />
        <path d="M137 66 L137 34 L115 52 Z" fill={C.dark} />
      </g>

      {/* หัว */}
      <ellipse cx="100" cy="86" rx="48" ry="40" fill={C.fur} />
      {/* แก้มขาว */}
      <ellipse cx="83" cy="103" rx="22" ry="15" fill={C.white} />
      <ellipse cx="117" cy="103" rx="22" ry="15" fill={C.white} />

      <Eyes face={face} y={82} />
      <Blush face={face} lx={70} rx={130} y={101} r={6} />

      {/* จมูก */}
      <ellipse cx="100" cy="95" rx="7" ry="5" fill={INK} />
      <ellipse cx="97.8" cy="93.6" rx="2.2" ry="1.3" fill="#fff" opacity="0.8" />

      <MuzzleMouth face={face} y={103} />

      {face === 'thirsty' && <Drop x={58} y={46} scale={1.2} />}
    </g>
  )
}
