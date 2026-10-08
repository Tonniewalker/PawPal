import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'บ้าน', icon: '🏠' },
  { to: '/diary', label: 'สมุดบันทึก', icon: '📖' },
  { to: '/settings', label: 'ตั้งค่า', icon: '⚙️' },
]

// เมนูด้านล่างแบบแอปมือถือ (React Router: NavLink รู้เองว่าตอนนี้อยู่หน้าไหน)
export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 z-10 border-t-2 border-line bg-white pb-[env(safe-area-inset-bottom)]">
      <ul className="grid grid-cols-3">
        {LINKS.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-2.5 text-[13px] ${
                  isActive ? 'font-semibold text-ink' : 'text-ink/50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`text-xl transition-transform ${isActive ? 'scale-110' : 'grayscale'}`} aria-hidden="true">
                    {link.icon}
                  </span>
                  {link.label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
