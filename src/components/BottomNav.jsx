import { NavLink } from 'react-router-dom'
import { STATS } from '../config'
import { gaugeColor, ROOMS } from './rooms'

function Gauge({ icon, value, active }) {
  return (
    <span
      className={`relative flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-full border-[3px] bg-white shadow-[0_3px_0_rgba(46,58,89,0.18)] transition-transform ${
        active ? 'scale-110 border-ink' : 'border-white'
      }`}
    >
      {value != null && (
        <span
          className="absolute inset-x-0 bottom-0 transition-[height] duration-500"
          style={{ height: `${Math.round(value)}%`, background: gaugeColor(value) }}
        />
      )}
      <span className="relative text-[28px] leading-none" aria-hidden="true">
        {icon}
      </span>
    </span>
  )
}

// แถบล่าง: ปุ่มห้องพร้อมหลอดค่า
export default function BottomNav({ pet }) {
  const rooms = Object.keys(ROOMS).map((room) => {
    const stat = STATS.find((s) => s.room === room)
    return { room, stat, value: pet[stat.key], ...ROOMS[room] }
  })

  return (
    <nav className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-white/95 via-white/80 to-transparent px-2 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-8">
      <ul className="flex justify-around">
        <li>
          <NavLink to="/shop" className="flex flex-col items-center gap-1" aria-label="ร้านค้า">
            <Gauge icon="🛒" />
            <span className="text-[11px] font-semibold text-ink/70">ร้านค้า</span>
          </NavLink>
        </li>
        {rooms.map(({ room, stat, value, path, navLabel }) => (
          <li key={room}>
            <NavLink
              to={path}
              end
              aria-label={`${navLabel} (${stat.label} ${Math.round(value)})`}
              className="flex flex-col items-center gap-1"
            >
              {({ isActive }) => (
                <>
                  <Gauge icon={stat.icon} value={value} active={isActive} />
                  <span className={`text-[11px] font-semibold ${isActive ? 'text-ink' : 'text-ink/70'}`}>{navLabel}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
