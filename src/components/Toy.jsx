// ===== ของเล่นของแต่ละชนิด =====
// กรอบ 60×60 จุดกลางอยู่ที่ (0, 0)

function Bone() {
  return (
    <g transform="rotate(-12)">
      <g fill="#FFF4DF">
        <rect x="-18" y="-6" width="36" height="12" rx="6" />
        <circle cx="-19" cy="-7" r="8" />
        <circle cx="-19" cy="7" r="8" />
        <circle cx="19" cy="-7" r="8" />
        <circle cx="19" cy="7" r="8" />
      </g>
      <rect x="-14" y="1" width="28" height="4" rx="2" fill="#EBD8B7" />
    </g>
  )
}

function Yarn() {
  return (
    <g>
      <path d="M15 12 Q26 14 24 20 Q22 24 28 24" fill="none" stroke="#E0789A" strokeWidth="3" strokeLinecap="round" />
      <circle r="19" fill="#F59AB6" />
      <g fill="none" stroke="#E0789A" strokeWidth="2.6" strokeLinecap="round">
        <path d="M-15 -8 Q0 -18 15 -10" />
        <path d="M-18 2 Q0 -8 18 0" />
        <path d="M-14 12 Q2 2 16 10" />
        <path d="M-6 -18 Q-14 0 -6 18" />
      </g>
    </g>
  )
}

function Carrot() {
  return (
    <g transform="rotate(-75)">
      <g fill="#6CBF4E">
        <ellipse cx="-4" cy="-20" rx="4" ry="9" transform="rotate(-20 -4 -14)" />
        <ellipse cx="4" cy="-20" rx="4" ry="9" transform="rotate(20 4 -14)" />
        <ellipse cx="0" cy="-22" rx="3.5" ry="9" />
      </g>
      <path d="M-11 -12 Q0 -16 11 -12 Q6 14 0 26 Q-6 14 -11 -12 Z" fill="#F59A3C" />
      <g stroke="#D97A22" strokeWidth="2.4" strokeLinecap="round">
        <line x1="-7" y1="-3" x2="-1" y2="-3" />
        <line x1="2" y1="5" x2="6" y2="5" />
        <line x1="-4" y1="13" x2="0" y2="13" />
      </g>
    </g>
  )
}

function Meat() {
  return (
    <g transform="rotate(-25)">
      <rect x="6" y="-4" width="20" height="8" rx="4" fill="#FFF4DF" />
      <circle cx="26" cy="-5" r="5" fill="#FFF4DF" />
      <circle cx="26" cy="5" r="5" fill="#FFF4DF" />
      <ellipse cx="-6" cy="0" rx="18" ry="15" fill="#C8653A" />
      <ellipse cx="-9" cy="-4" rx="9" ry="6" fill="#DE8257" />
    </g>
  )
}

function SmallBall() {
  return (
    <g>
      <circle r="12" fill="#4AA3DF" />
      <path d="M-12 0 Q0 -8 12 0 Q0 8 -12 0 Z" fill="#FFC93C" />
      <circle cx="-4" cy="-5" r="2.5" fill="#fff" opacity="0.7" />
    </g>
  )
}

const TOYS = { dog: Bone, cat: Yarn, rabbit: Carrot, fox: Meat, bird: SmallBall }

// ตัวของเล่น (ใช้ใน <svg> อื่นได้)
export function ToyShape({ species }) {
  const Body = TOYS[species] ?? Bone
  return <Body />
}

export default function Toy({ species }) {
  return (
    <svg viewBox="-30 -30 60 60" className="block h-auto w-full overflow-visible" aria-hidden="true">
      <ToyShape species={species} />
    </svg>
  )
}
