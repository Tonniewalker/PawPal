import { useState } from 'react'
import PetAvatar from '../components/pets/PetAvatar'
import { DAY, getLevel } from '../petLogic'
import { getSpecies } from '../species'

// เลือกตัวที่จะเก็บตอนล็อกอิน
export default function ChoosePet({ account, local, remote, onChoose, onCancel }) {
  const [choice, setChoice] = useState(null) // 'remote' | 'local'

  const options = [
    { id: 'remote', where: 'ในบัญชี Google', detail: account.email, game: remote },
    { id: 'local', where: 'ในเครื่องนี้ (Guest)', detail: 'ยังไม่ได้เก็บขึ้นคลาวด์', game: local },
  ]
  const kept = options.find((o) => o.id === choice)
  const dropped = options.find((o) => o.id !== choice)

  return (
    <div className="mx-auto min-h-screen max-w-[440px] bg-paper px-5 pb-10 pt-8">
      <h1 className="text-[28px] font-bold leading-tight">บัญชีนี้มีสัตว์เลี้ยงอยู่แล้ว</h1>
      <p className="mt-2 text-base leading-relaxed text-ink/70">
        1 บัญชีเลี้ยงได้ 1 ตัว เลือกตัวที่จะเลี้ยงต่อ อีกตัวจะถูกลบถาวร
      </p>

      <div role="radiogroup" aria-label="เลือกสัตว์เลี้ยงที่จะเก็บ" className="mt-5 space-y-3">
        {options.map((o) => {
          const { pet, diary } = o.game
          const species = getSpecies(pet.species)
          const days = Math.max(1, Math.round((Date.now() - pet.adoptedAt) / DAY))
          const selected = choice === o.id
          return (
            <button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setChoice(o.id)}
              className={`flex w-full items-center gap-4 rounded-2xl border-2 p-3 text-left transition-colors ${
                selected ? 'border-sun-dark bg-[#FFF6D9]' : 'border-line bg-white'
              }`}
            >
              <span className="flex h-20 w-20 shrink-0 items-end justify-center rounded-xl bg-[#BFE3F5]">
                <PetAvatar species={pet.species} face={selected ? 'happy' : 'normal'} scale={0.9} label={species.label} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-ink/60">{o.where}</span>
                <span className="block truncate text-xl font-bold">{pet.name}</span>
                <span className="block text-sm text-ink/70">
                  {species.label} · Lv.{getLevel(pet.exp).level} · เลี้ยงมา {days} วัน · บันทึก {diary.length} รายการ
                </span>
                <span className="block truncate text-xs text-ink/50">{o.detail}</span>
              </span>
            </button>
          )
        })}
      </div>

      {kept && (
        <p className="mt-4 rounded-2xl border-2 border-berry/40 bg-berry/5 p-3 text-[15px]" role="alert">
          เก็บ <b>{kept.game.pet.name}</b> ไว้ และ <b>{dropped.game.pet.name}</b> ({dropped.where}) จะถูกลบถาวร
        </p>
      )}

      <button
        type="button"
        disabled={!kept}
        onClick={() => onChoose(choice)}
        className="care-btn mt-5 w-full rounded-2xl border-sun-dark bg-sun py-3.5 text-lg font-bold disabled:opacity-50"
      >
        {kept ? `ยืนยัน เลี้ยง ${kept.game.pet.name} ต่อ` : 'เลือกตัวที่จะเลี้ยงต่อ'}
      </button>
      <button type="button" onClick={onCancel} className="mt-3 w-full py-2 text-[15px] font-semibold text-ink/60">
        ยกเลิก กลับไปเล่นแบบ Guest
      </button>
    </div>
  )
}
