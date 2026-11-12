import { useState } from 'react'
import PetScene from '../components/PetScene'
import PetAvatar from '../components/pets/PetAvatar'
import { DEFAULT_SPECIES, STATS } from '../config'
import { SPECIES, SPECIES_LIST } from '../species'

// อัตราค่าลด → คำ
function speedLabel(rate) {
  if (rate >= 10) return { text: 'ลดเร็ว', className: 'bg-berry/10 text-berry' }
  if (rate <= 5) return { text: 'ลดช้า', className: 'bg-leaf/15 text-[#3E7A2A]' }
  return { text: 'ปกติ', className: 'bg-line text-ink/70' }
}

// หน้ารับเลี้ยง
// เลือกชนิด → ตั้งชื่อ → รับเลี้ยง
export default function Adopt({ now, onAdopt }) {
  const [speciesId, setSpeciesId] = useState(DEFAULT_SPECIES)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const species = SPECIES[speciesId]

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      setError(`ตั้งชื่อ${species.label}ก่อนนะ`)
      return
    }
    onAdopt({ name: trimmed, species: speciesId })
  }

  return (
    <div className="mx-auto min-h-screen max-w-[440px] bg-paper px-5 pb-10 pt-6">
      <PetScene
        key={speciesId}
        species={speciesId}
        face="happy"
        level={1}
        scale={0.8}
        now={now}
        emoji="🥰"
        moodLabel="มีความสุข"
        className="h-56"
      />

      <h1 className="mt-5 text-[28px] font-bold leading-tight">เลือกสัตว์เลี้ยงของคุณ</h1>

      {/* ตัวเลือกชนิดสัตว์ */}
      <div role="radiogroup" aria-label="ชนิดสัตว์เลี้ยง" className="mt-3 grid grid-cols-5 gap-2">
        {SPECIES_LIST.map((s) => {
          const selected = s.id === speciesId
          return (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={s.label}
              onClick={() => setSpeciesId(s.id)}
              className={`flex flex-col items-center rounded-2xl border-2 px-1 pb-1.5 pt-2 transition-colors ${
                selected ? 'border-sun-dark bg-[#FFF6D9]' : 'border-line bg-white'
              }`}
            >
              <span className="flex h-12 w-12 items-end justify-center">
                <PetAvatar species={s.id} face={selected ? 'happy' : 'normal'} label={s.label} />
              </span>
              <span className={`mt-1 text-[13px] ${selected ? 'font-bold' : 'text-ink/70'}`}>{s.noun}</span>
            </button>
          )
        })}
      </div>

      {/* นิสัยของชนิดที่เลือก */}
      <section className="mt-4 rounded-2xl border-2 border-line bg-white p-4" aria-live="polite">
        <p className="text-lg font-bold">
          {species.emoji} {species.label}
        </p>
        <p className="mt-0.5 text-[15px] text-ink/70">{species.trait}</p>
        <ul className="mt-3 grid grid-cols-4 gap-1.5 text-center text-sm">
          {STATS.map((stat) => {
            const speed = speedLabel(species.decay[stat.key])
            return (
              <li key={stat.key} className="rounded-xl bg-paper px-0.5 py-1.5">
                <span className="block text-xs text-ink/70">
                  {stat.icon} {stat.short}
                </span>
                <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${speed.className}`}>
                  {speed.text}
                </span>
              </li>
            )
          })}
        </ul>
      </section>

      <form onSubmit={handleSubmit} className="mt-5" noValidate>
        <label htmlFor="pet-name" className="text-[15px] font-semibold">
          ตั้งชื่อ{species.label}ของคุณ
        </label>
        <input
          id="pet-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setError('')
          }}
          maxLength={20}
          placeholder={species.placeholder}
          autoComplete="off"
          className="mt-2 w-full rounded-2xl border-2 border-line bg-white px-4 py-3 text-lg outline-none focus:border-[#4AA3DF]"
        />
        {error && <p className="mt-2 text-sm text-berry">{error}</p>}

        <button
          type="submit"
          className="care-btn mt-5 w-full rounded-2xl border-sun-dark bg-sun py-3.5 text-lg font-bold"
        >
          รับเลี้ยง{species.label}
        </button>
      </form>
    </div>
  )
}
