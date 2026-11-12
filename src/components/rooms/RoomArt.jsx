// ===== ฉากห้อง (SVG 390×760) =====
// Back = หลังตัวสัตว์, Front = หน้าตัวสัตว์
import { useId } from 'react'

const SKY = {
  day: { sky: '#BFE3F5', sun: '#FFD45C', hill: '#8CCB6E' },
  evening: { sky: '#F7C8A6', sun: '#FF9C5B', hill: '#7DB862' },
  night: { sky: '#2A3B6B', sun: '#F4F0CF', hill: '#3F6B4C' },
}

function SkyWindow({ x, y, w, h, time }) {
  const id = useId()
  const c = SKY[time]
  const ix = x + 9
  const iy = y + 9
  const iw = w - 18
  const ih = h - 18
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" fill="#FFFFFF" />
      <clipPath id={id}>
        <rect x={ix} y={iy} width={iw} height={ih} rx="5" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect x={ix} y={iy} width={iw} height={ih} fill={c.sky} />
        <circle cx={ix + iw - 22} cy={iy + 24} r="12" fill={c.sun} />
        {time === 'night' &&
          [[0.15, 0.2], [0.4, 0.12], [0.3, 0.42], [0.62, 0.35], [0.12, 0.55]].map(([fx, fy]) => (
            <circle key={`${fx}${fy}`} cx={ix + iw * fx} cy={iy + ih * fy} r="1.8" fill="#F4F0CF" />
          ))}
        <ellipse cx={ix + iw * 0.3} cy={iy + ih + 10} rx={iw * 0.6} ry={ih * 0.28} fill={c.hill} />
        <ellipse cx={ix + iw * 0.9} cy={iy + ih + 14} rx={iw * 0.5} ry={ih * 0.22} fill={c.hill} opacity="0.85" />
      </g>
      <rect x={x + w / 2 - 3} y={y} width="6" height={h} fill="#FFFFFF" />
      <rect x={x} y={y + h / 2 - 3} width={w} height="6" fill="#FFFFFF" />
      {/* ขอบหน้าต่าง */}
      <rect x={x - 8} y={y + h - 2} width={w + 16} height="10" rx="5" fill="#FFFFFF" />
    </g>
  )
}

// พื้นไม้มีเส้นแผ่น
function WoodFloor({ y = 520, color = '#E7B887', line = '#D9A673' }) {
  return (
    <g>
      <rect x="0" y={y} width="390" height={760 - y} fill={color} />
      {[40, 95, 160, 230].map((dy) => (
        <line key={dy} x1="0" x2="390" y1={y + dy} y2={y + dy} stroke={line} strokeWidth="3" />
      ))}
    </g>
  )
}

// ---------- ห้องนั่งเล่น ----------
export function LivingBack({ time }) {
  return (
    <g>
      <rect width="390" height="760" fill="#CDEBD9" />
      {Array.from({ length: 6 }, (_, r) =>
        Array.from({ length: 7 }, (_, c) => (
          <circle key={`${r}-${c}`} cx={28 + c * 56 + (r % 2) * 28} cy={40 + r * 80} r="5" fill="#BBE1CB" />
        )),
      )}
      <SkyWindow x={36} y={110} w={124} h={150} time={time} />
      {/* กรอบรูปรอยเท้า */}
      <rect x="244" y="120" width="98" height="78" rx="8" fill="#FFFFFF" />
      <rect x="252" y="128" width="82" height="62" rx="4" fill="#FFE7B3" />
      <g fill="#E3A867">
        <ellipse cx="293" cy="166" rx="12" ry="10" />
        <circle cx="279" cy="149" r="5" />
        <circle cx="290" cy="143" r="5" />
        <circle cx="302" cy="145" r="5" />
        <circle cx="310" cy="155" r="4.5" />
      </g>
      <rect x="0" y="506" width="390" height="14" fill="#A9D4BB" />
      <WoodFloor />
      {/* โซฟา */}
      <rect x="62" y="372" width="266" height="120" rx="34" fill="#F28B7D" />
      <rect x="40" y="430" width="52" height="110" rx="24" fill="#E8776A" />
      <rect x="298" y="430" width="52" height="110" rx="24" fill="#E8776A" />
      <rect x="82" y="452" width="226" height="80" rx="22" fill="#F6A497" />
      {/* ต้นไม้ */}
      <g>
        <ellipse cx="22" cy="430" rx="18" ry="34" fill="#5FA449" transform="rotate(-20 22 470)" />
        <ellipse cx="40" cy="420" rx="16" ry="38" fill="#74B957" transform="rotate(10 40 470)" />
        <rect x="6" y="470" width="50" height="62" rx="8" fill="#E08A4E" />
      </g>
      {/* พรม */}
      <ellipse cx="195" cy="650" rx="160" ry="42" fill="#FFD27A" />
      <ellipse cx="195" cy="650" rx="128" ry="30" fill="none" stroke="#FFE3A6" strokeWidth="5" />
    </g>
  )
}

export function LivingFront() {
  return (
    <g>
      {/* ลูกบอล */}
      <circle cx="336" cy="648" r="20" fill="#E5484D" />
      <path d="M318 642 Q336 652 354 642" fill="none" stroke="#fff" strokeWidth="5" />
    </g>
  )
}

// ---------- ห้องครัว ----------
export function KitchenBack({ time }) {
  return (
    <g>
      <rect width="390" height="760" fill="#FFF3D6" />
      {/* กระเบื้องผนัง */}
      <rect x="0" y="300" width="390" height="140" fill="#FFE3A6" />
      {Array.from({ length: 4 }, (_, r) => (
        <line key={`h${r}`} x1="0" x2="390" y1={300 + r * 35} y2={300 + r * 35} stroke="#F7D48A" strokeWidth="2" />
      ))}
      {Array.from({ length: 11 }, (_, c) => (
        <line key={`v${c}`} y1="300" y2="440" x1={c * 39} x2={c * 39} stroke="#F7D48A" strokeWidth="2" />
      ))}
      <SkyWindow x={133} y={70} w={124} h={140} time={time} />
      {/* ตู้เย็น */}
      <rect x="8" y="190" width="96" height="350" rx="16" fill="#9ED9C8" />
      <line x1="8" x2="104" y1="320" y2="320" stroke="#86C7B5" strokeWidth="4" />
      <rect x="86" y="230" width="8" height="60" rx="4" fill="#FFFFFF" />
      <rect x="86" y="345" width="8" height="80" rx="4" fill="#FFFFFF" />
      {/* เคาน์เตอร์ + กระถางต้นไม้ */}
      <rect x="292" y="440" width="98" height="100" fill="#F6C28B" />
      <rect x="286" y="430" width="104" height="16" rx="6" fill="#E8A86A" />
      <rect x="320" y="400" width="30" height="32" rx="6" fill="#E5484D" />
      <ellipse cx="335" cy="392" rx="14" ry="10" fill="#5FA449" />
      <WoodFloor y={540} color="#F0C49A" line="#E3AF80" />
    </g>
  )
}

// โต๊ะ + จาน
export function KitchenFront() {
  return (
    <g>
      <rect x="-10" y="600" width="410" height="170" fill="#F08A5D" />
      {Array.from({ length: 6 }, (_, r) =>
        Array.from({ length: 9 }, (_, c) =>
          (r + c) % 2 === 0 ? <rect key={`${r}-${c}`} x={c * 46 - 6} y={608 + r * 26} width="46" height="26" fill="#F6A27E" /> : null,
        ),
      )}
      <rect x="-10" y="592" width="410" height="16" rx="8" fill="#E36F45" />
      {[85, 195, 305].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="626" rx="42" ry="13" fill="#FFFFFF" />
          <ellipse cx={cx} cy="624" rx="30" ry="8" fill="#F1F1F1" />
        </g>
      ))}
    </g>
  )
}

// ---------- ห้องน้ำ ----------
export function BathroomBack({ time }) {
  return (
    <g>
      <rect width="390" height="760" fill="#D5F0FB" />
      {Array.from({ length: 14 }, (_, r) => (
        <line key={`h${r}`} x1="0" x2="390" y1={r * 40} y2={r * 40} stroke="#BFE5F5" strokeWidth="2" />
      ))}
      {Array.from({ length: 11 }, (_, c) => (
        <line key={`v${c}`} y1="0" y2="540" x1={c * 40} x2={c * 40} stroke="#BFE5F5" strokeWidth="2" />
      ))}
      <SkyWindow x={262} y={84} w={96} h={110} time={time} />
      {/* กระจก */}
      <rect x="140" y="96" width="110" height="130" rx="50" fill="#FFFFFF" />
      <rect x="149" y="105" width="92" height="112" rx="44" fill="#E9F8FF" />
      <path d="M170 130 l20 -14 M172 150 l34 -26" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      {/* ฝักบัว */}
      <rect x="40" y="0" width="8" height="150" fill="#A8B3C1" />
      <rect x="40" y="142" width="50" height="8" rx="4" fill="#A8B3C1" />
      <path d="M70 150 h44 l-8 22 h-28 z" fill="#C9D2DC" />
      {/* พื้นกระเบื้อง */}
      <rect x="0" y="540" width="390" height="220" fill="#9FD3EA" />
      {Array.from({ length: 6 }, (_, r) =>
        Array.from({ length: 9 }, (_, c) =>
          (r + c) % 2 === 0 ? <rect key={`${r}-${c}`} x={c * 46} y={540 + r * 40} width="46" height="40" fill="#8CC8E2" /> : null,
        ),
      )}
      {/* อ่างอาบน้ำ */}
      <rect x="232" y="430" width="170" height="130" rx="44" fill="#FFFFFF" />
      <rect x="232" y="430" width="170" height="26" rx="13" fill="#EAF6FC" />
      {[[256, 428, 16], [282, 420, 20], [312, 426, 15], [338, 418, 18], [364, 426, 14]].map(([cx, cy, r]) => (
        <circle key={cx} cx={cx} cy={cy} r={r} fill="#FFFFFF" stroke="#D5EEF9" strokeWidth="2" />
      ))}
      <rect x="252" y="556" width="14" height="22" rx="5" fill="#C9D2DC" />
      <rect x="368" y="556" width="14" height="22" rx="5" fill="#C9D2DC" />
    </g>
  )
}

export function BathroomFront() {
  return (
    <g>
      {/* ขวดสบู่ */}
      <rect x="318" y="610" width="48" height="52" rx="12" fill="#F5A3C0" />
      <rect x="333" y="596" width="18" height="18" rx="5" fill="#E58AAB" />
    </g>
  )
}

// ---------- ห้องนอน ----------
export function BedroomBack({ time }) {
  return (
    <g>
      <rect width="390" height="760" fill="#D9D2F3" />
      {[[40, 60], [120, 30], [200, 70], [300, 40], [360, 90], [80, 280], [350, 300]].map(([x, y]) => (
        <path key={`${x}${y}`} d={`M${x} ${y - 7} l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z`} fill="#C8BFEA" />
      ))}
      <SkyWindow x={250} y={100} w={112} h={130} time={time} />
      {/* ชั้นหนังสือ */}
      <rect x="26" y="200" width="130" height="12" rx="4" fill="#B9876A" />
      {[['#E5484D', 34, 46], ['#4AA3DF', 50, 52], ['#FFC93C', 66, 40], ['#5FA449', 80, 50], ['#F28B7D', 96, 44]].map(([fill, x, h]) => (
        <rect key={x} x={x} y={200 - h} width="13" height={h} rx="3" fill={fill} />
      ))}
      <rect x="0" y="506" width="390" height="14" fill="#C2B8E8" />
      <WoodFloor color="#C99A78" line="#B88866" />
      {/* หัวเตียง + หมอน */}
      <rect x="54" y="360" width="282" height="160" rx="40" fill="#B9876A" />
      <rect x="40" y="470" width="310" height="80" rx="20" fill="#FFFFFF" />
      <rect x="110" y="430" width="170" height="56" rx="26" fill="#FFFFFF" stroke="#EDE8F8" strokeWidth="4" />
      {/* โต๊ะข้างเตียง + โคมไฟ */}
      <rect x="330" y="470" width="56" height="70" rx="8" fill="#B9876A" />
      <rect x="352" y="430" width="10" height="42" fill="#8F6650" />
    </g>
  )
}

export function BedroomFront({ lightsOn = true }) {
  return (
    <g>
      {/* ผ้าห่มคลุมตัว */}
      <path d="M20 560 Q195 520 370 560 L370 700 L20 700 Z" fill="#7E9BE0" />
      {[[80, 610], [160, 590], [240, 615], [310, 595], [120, 660], [270, 665]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="9" fill="#9DB4EC" />
      ))}
      <rect x="20" y="690" width="350" height="20" rx="8" fill="#6684CF" />
      {/* โป๊ะโคมไฟ */}
      <path d="M336 396 h44 l10 38 h-64 z" fill={lightsOn ? '#FFD45C' : '#C9B37A'} />

    </g>
  )
}
