import { useState } from 'react'
import PetScene from '../components/PetScene'

// หน้ารับเลี้ยง: แสดงเองอัตโนมัติเมื่อยังไม่มีข้อมูลน้องหมาใน localStorage
export default function Adopt({ now, onAdopt }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      setError('ตั้งชื่อน้องหมาก่อนนะ')
      return
    }
    onAdopt(trimmed)
  }

  return (
    <div className="mx-auto min-h-screen max-w-[440px] bg-paper px-5 pb-10 pt-6">
      <PetScene species="dog" face="happy" level={1} scale={0.8} now={now} emoji="🥰" moodLabel="มีความสุข" />

      <h1 className="mt-6 text-[28px] font-bold leading-tight">คุณได้รับน้องหมามาเลี้ยง</h1>
      <p className="mt-2 text-base leading-relaxed text-ink/70">
        {/* แวะมาให้อาหาร ให้น้ำ และลูบหัวน้องหมาทุกวัน ถ้าหายไปนาน น้องหมาจะหิวและเหงา */}
      </p>

      <form onSubmit={handleSubmit} className="mt-6" noValidate>
        <label htmlFor="pet-name" className="text-[15px] font-semibold">
          ตั้งชื่อน้องหมาของคุณ
        </label>
        <input
          id="pet-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setError('')
          }}
          maxLength={20}
          placeholder="เช่น ไอ้ทอง"
          autoComplete="off"
          className="mt-2 w-full rounded-2xl border-2 border-line bg-white px-4 py-3 text-lg outline-none focus:border-[#4AA3DF]"
        />
        {error && <p className="mt-2 text-sm text-berry">{error}</p>}

        <button
          type="submit"
          className="care-btn mt-5 w-full rounded-2xl border-sun-dark bg-sun py-3.5 text-lg font-bold"
        >
          รับเลี้ยง
        </button>
      </form>
    </div>
  )
}
