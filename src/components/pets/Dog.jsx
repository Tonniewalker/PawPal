// น้องหมา: ขนสีทอง หูพับ มีปานรอบตาขวา
import { Blush, Collar, Drop, Eyes, INK, MuzzleMouth } from './parts'

const C = {
  fur: '#E3A867',
  furDark: '#C98A4E',
  ear: '#9C5F35',
  cream: '#FCEBD0',
}

export default function Dog({ face, level }) {
  const sad = face === 'sad'
  const earTilt = sad ? 32 : 14 // หูตกตอนเศร้า
  const tailClass = face === 'happy' ? 'tail-wag fast' : 'tail-wag'

  return (
    <g>
      {/* หาง */}
      {sad ? (
        <path d="M138 168 Q162 176 170 190" fill="none" stroke={C.fur} strokeWidth="12" strokeLinecap="round" />
      ) : (
        <path className={tailClass} d="M138 160 Q168 152 166 122" fill="none" stroke={C.fur} strokeWidth="12" strokeLinecap="round" />
      )}

      {/* ตัว + พุง */}
      <ellipse cx="100" cy="153" rx="46" ry="38" fill={C.fur} />
      <ellipse cx="100" cy="160" rx="25" ry="26" fill={C.cream} />

      {/* ขาหน้า + อุ้งเท้า */}
      <rect x="74" y="160" width="17" height="30" rx="8.5" fill={C.fur} />
      <rect x="109" y="160" width="17" height="30" rx="8.5" fill={C.fur} />
      <ellipse cx="82.5" cy="189" rx="12" ry="6.5" fill={C.cream} />
      <ellipse cx="117.5" cy="189" rx="12" ry="6.5" fill={C.cream} />

      <Collar level={level} />

      {/* หัว */}
      <ellipse cx="100" cy="84" rx="48" ry="42" fill={C.fur} />
      {/* ปานรอบตาขวา (เอกลักษณ์ของน้อง) */}
      <ellipse cx="123" cy="79" rx="15" ry="13" fill={C.furDark} />
      {/* ปาก-จมูกสีครีม */}
      <ellipse cx="100" cy="104" rx="25" ry="18" fill={C.cream} />

      {/* หูพับ */}
      <ellipse cx="56" cy="78" rx="14" ry="29" fill={C.ear} transform={`rotate(${earTilt} 56 58)`} />
      <ellipse cx="144" cy="78" rx="14" ry="29" fill={C.ear} transform={`rotate(${-earTilt} 144 58)`} />

      <Eyes face={face} />
      <Blush face={face} />

      {/* จมูก */}
      <ellipse cx="100" cy="95" rx="8" ry="5.5" fill={INK} />
      <ellipse cx="97.5" cy="93.5" rx="2.4" ry="1.4" fill="#fff" opacity="0.8" />

      <MuzzleMouth face={face} />

      {/* เหงื่อตอนหิวน้ำ */}
      {face === 'thirsty' && <Drop x={60} y={36} scale={1.2} />}
    </g>
  )
}
