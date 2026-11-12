import { ACTIONS } from '../config'
import { DAY } from '../petLogic'
import { getSpecies } from '../species'

const ICONS = {
  adopt: '🐾', // ใช้อิโมจิของชนิดสัตว์แทน (ดูด้านล่าง)
  feed: '🍖',
  water: '💧',
  pat: '🤚',
  levelup: '⭐',
  rename: '✏️',
  return: '👋',
}

const startOfDay = (ts) => {
  const d = new Date(ts)
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
}

function dayLabel(ts, now) {
  const diff = Math.round((startOfDay(now) - startOfDay(ts)) / DAY)
  if (diff === 0) return 'วันนี้'
  if (diff === 1) return 'เมื่อวาน'
  return new Date(ts).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })
}

const clock = (ts) => new Date(ts).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })

export default function Diary({ pet, diary, now }) {
  const icons = { ...ICONS, adopt: getSpecies(pet.species).emoji }
  const daysTogether = Math.floor((startOfDay(now) - startOfDay(pet.adoptedAt)) / DAY) + 1

  // นับจำนวนครั้งที่ดูแลแต่ละแบบ
  const counts = Object.keys(ACTIONS).map((key) => ({
    key,
    ...ACTIONS[key],
    count: diary.filter((entry) => entry.type === key).length,
  }))

  // จัดกลุ่มบันทึกตามวัน (diary เรียงใหม่ → เก่าอยู่แล้ว)
  const groups = []
  for (const entry of diary) {
    const label = dayLabel(entry.at, now)
    const last = groups[groups.length - 1]
    if (last && last.label === label) last.entries.push(entry)
    else groups.push({ label, entries: [entry] })
  }

  return (
    <div className="px-5 pb-6">
      <h1 className="text-[28px] font-bold leading-tight">สมุดบันทึกของ {pet.name}</h1>
      <p className="mt-1 text-[15px] text-ink/70">อยู่ด้วยกันมาเป็นวันที่ {daysTogether}</p>

      <ul className="mt-5 grid grid-cols-3 gap-3 text-center">
        {counts.map((c) => (
          <li key={c.key} className="rounded-2xl border-2 border-line bg-white py-3">
            <span className="block text-2xl" aria-hidden="true">{c.icon}</span>
            <span className="block text-xl font-bold tabular-nums">
              {c.count} <span className="text-sm font-normal">ครั้ง</span>
            </span>
            <span className="block text-xs text-ink/60">{c.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-6">
        {groups.map((group) => (
          <section key={group.label}>
            <h2 className="text-lg font-bold">{group.label}</h2>
            <ol className="mt-2 border-l-2 border-line pl-4">
              {group.entries.map((entry) => (
                <li key={entry.id} className="relative flex items-center gap-3 py-2">
                  <span className="absolute -left-[23px] h-3 w-3 rounded-full border-2 border-white bg-[#4AA3DF]" />
                  <span className="w-12 shrink-0 text-sm tabular-nums text-ink/60">{clock(entry.at)}</span>
                  <span aria-hidden="true">{icons[entry.type] ?? '•'}</span>
                  <span className="text-[15px]">{entry.text}</span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
