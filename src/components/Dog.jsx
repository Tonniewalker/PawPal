// น้องหมาวาดด้วย SVG ล้วน ๆ หน้าตาเปลี่ยนตาม face ที่ส่งเข้ามา
// face: 'happy' | 'normal' | 'hungry' | 'thirsty' | 'sad'

const C = {
  fur: '#E3A867',
  furDark: '#C98A4E',
  ear: '#9C5F35',
  cream: '#FCEBD0',
  ink: '#3A2A22',
  tongue: '#F27A8A',
  collar: '#E5484D',
  tag: '#FFC93C',
  blush: '#F5A3A3',
  drop: '#8FD0F5',
}

function Eyes({ face }) {
  if (face === 'happy') {
    return (
      <g fill="none" stroke={C.ink} strokeWidth="4" strokeLinecap="round">
        <path d="M72 82 Q80 72 88 82" />
        <path d="M112 82 Q120 72 128 82" />
      </g>
    )
  }
  if (face === 'sad') {
    return (
      <g>
        <g stroke={C.ink} strokeWidth="3" strokeLinecap="round">
          <line x1="71" y1="73" x2="86" y2="68" />
          <line x1="114" y1="68" x2="129" y2="73" />
        </g>
        <circle cx="80" cy="84" r="5.5" fill={C.ink} />
        <circle cx="120" cy="84" r="5.5" fill={C.ink} />
        <circle cx="81.5" cy="82.5" r="1.8" fill="#fff" />
        <circle cx="121.5" cy="82.5" r="1.8" fill="#fff" />
        {/* น้ำตา */}
        <path d="M76 92 q-4 7 0 10 q4 -3 0 -10z" fill={C.drop} />
      </g>
    )
  }
  // ตาโต ๆ แบบอ้อนขอข้าว
  const r = face === 'hungry' ? 8 : face === 'thirsty' ? 5.5 : 6.5
  return (
    <g>
      <circle cx="80" cy="80" r={r} fill={C.ink} />
      <circle cx="120" cy="80" r={r} fill={C.ink} />
      <circle cx={80 + r * 0.35} cy={80 - r * 0.35} r={r * 0.35} fill="#fff" />
      <circle cx={120 + r * 0.35} cy={80 - r * 0.35} r={r * 0.35} fill="#fff" />
      {face === 'hungry' && (
        <>
          <circle cx="77" cy="83" r="1.6" fill="#fff" />
          <circle cx="117" cy="83" r="1.6" fill="#fff" />
        </>
      )}
    </g>
  )
}

function Mouth({ face }) {
  const line = { fill: 'none', stroke: C.ink, strokeWidth: 3, strokeLinecap: 'round' }
  switch (face) {
    case 'happy':
      return (
        <g>
          <path d="M86 103 Q100 125 114 103 Z" fill={C.ink} />
          <ellipse cx="100" cy="111" rx="7" ry="3.5" fill={C.tongue} />
        </g>
      )
    case 'hungry':
      return (
        <g>
          <ellipse cx="100" cy="110" rx="5" ry="6" fill={C.ink} />
          {/* น้ำลายไหล */}
          <path d="M108 112 q-3 6 0 9 q3 -3 0 -9z" fill={C.drop} />
        </g>
      )
    case 'thirsty':
      return (
        <g>
          <path d="M93 107 h14 v9 a7 7 0 0 1 -14 0 z" fill={C.tongue} />
          <line x1="100" y1="108" x2="100" y2="116" stroke="#D85C70" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M87 104 Q100 112 113 104" {...line} />
        </g>
      )
    case 'sad':
      return <path d="M88 113 Q100 104 112 113" {...line} />
    default:
      return (
        <g>
          <line x1="100" y1="100" x2="100" y2="104" {...line} />
          <path d="M90 104 Q95 110 100 104 Q105 110 110 104" {...line} />
        </g>
      )
  }
}

function Heart({ x, y, delay }) {
  return (
    <path
      className="heart-float"
      style={{ animationDelay: delay }}
      transform={`translate(${x} ${y})`}
      d="M0 3 C0 -1 6 -1 6 3 C6 -1 12 -1 12 3 C12 7 6 10 6 12 C6 10 0 7 0 3 Z"
      fill={C.tongue}
    />
  )
}

export default function Dog({ face = 'normal', level = 1, scale = 1, hopKey = 0, emoji, moodLabel }) {
  const earTilt = face === 'sad' ? 32 : 14 // หูตกตอนเศร้า
  const tailClass = face === 'happy' ? 'tail-wag fast' : face === 'sad' ? '' : 'tail-wag'
  const showBlush = face === 'happy' || face === 'normal'

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
      <svg viewBox="0 0 200 200" className="dog-breathe block w-full" role="img" aria-label="น้องหมา">
        {/* เงาบนพื้น */}
        <ellipse cx="100" cy="193" rx="54" ry="6" fill="rgba(30,50,20,0.18)" />

        {/* หาง */}
        {face === 'sad' ? (
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

        {/* ปลอกคอ + ป้ายบอกเลเวล */}
        <rect x="66" y="117" width="68" height="10" rx="5" fill={C.collar} />
        <circle cx="100" cy="134" r="9" fill={C.tag} stroke="#E0A800" strokeWidth="1.5" />
        <text x="100" y="137.5" textAnchor="middle" fontSize="10" fontWeight="700" fill={C.ink} fontFamily="Mali, sans-serif">
          {level}
        </text>

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

        {/* แก้มแดง */}
        {showBlush && (
          <>
            <circle cx="68" cy="99" r="6" fill={C.blush} opacity="0.7" />
            <circle cx="132" cy="99" r="6" fill={C.blush} opacity="0.7" />
          </>
        )}

        {/* จมูก */}
        <ellipse cx="100" cy="95" rx="8" ry="5.5" fill={C.ink} />
        <ellipse cx="97.5" cy="93.5" rx="2.4" ry="1.4" fill="#fff" opacity="0.8" />

        <Mouth face={face} />

        {/* เหงื่อตอนหิวน้ำ */}
        {face === 'thirsty' && <path d="M60 36 q-5 8 0 12 q5 -4 0 -12z" fill={C.drop} />}

        {/* หัวใจลอยตอนมีความสุข */}
        {face === 'happy' && (
          <>
            <Heart x={16} y={52} delay="0s" />
            <Heart x={172} y={70} delay="0.9s" />
          </>
        )}
      </svg>
    </div>
  )
}
