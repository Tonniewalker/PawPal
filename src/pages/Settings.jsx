import { useState } from 'react'

// ปุ่มจำลองว่าผู้ใช้ปิดแอปไปนานเท่าไหร่ (ใช้ตอนพรีเซนต์)
const SKIPS = [
  { hours: 1, label: '1 ชั่วโมง' },
  { hours: 6, label: '6 ชั่วโมง' },
  { hours: 24, label: '1 วัน' },
]

export default function Settings({ pet, onRename, onSimulateAway, onReset }) {
  const [name, setName] = useState(pet.name)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)

  function handleRename(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      setError('ชื่อต้องไม่ว่าง')
      return
    }
    if (trimmed === pet.name) return
    onRename(trimmed)
    setMessage('บันทึกชื่อแล้ว')
  }

  return (
    <div className="space-y-8 px-5 pb-8">
      <h1 className="text-[28px] font-bold leading-tight">ตั้งค่า</h1>

      {/* เปลี่ยนชื่อ */}
      <section>
        <h2 className="text-lg font-bold">ชื่อน้องหมา</h2>
        <form onSubmit={handleRename} className="mt-2 flex gap-2" noValidate>
          <label htmlFor="rename" className="sr-only">ชื่อน้องหมา</label>
          <input
            id="rename"
            value={name}
            maxLength={20}
            autoComplete="off"
            onChange={(e) => {
              setName(e.target.value)
              setError('')
              setMessage('')
            }}
            className="min-w-0 flex-1 rounded-2xl border-2 border-line bg-white px-4 py-2.5 text-base outline-none focus:border-[#4AA3DF]"
          />
          <button type="submit" className="care-btn shrink-0 rounded-2xl border-sun-dark bg-sun px-4 font-semibold">
            บันทึกชื่อ
          </button>
        </form>
        {error && <p className="mt-2 text-sm text-berry">{error}</p>}
        {message && <p className="mt-2 text-sm text-[#3E7A2A]">{message}</p>}
      </section>

      {/* โหมดเดโม */}
      <section>
        <h2 className="text-lg font-bold">ทดลองระบบเวลา</h2>
        <p className="mt-1 text-[15px] leading-relaxed text-ink/70">
          ย้อนเวลาที่บันทึกไว้ใน localStorage แล้วเปิดแอปใหม่ ให้ผลเหมือนผู้ใช้ปิดแอปไปจริง ๆ
        </p>
        <p className="mt-3 text-[15px] font-semibold">จำลองว่าปิดแอปไป</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {SKIPS.map((s) => (
            <button
              key={s.hours}
              type="button"
              onClick={() => onSimulateAway(s.hours)}
              className="care-btn rounded-2xl bg-white px-1 py-2.5 text-[15px] font-semibold"
            >
              {s.label}
            </button>
          ))}
        </div>
      </section>

      {/* เริ่มใหม่ */}
      <section>
        <h2 className="text-lg font-bold">เริ่มเลี้ยงใหม่</h2>
        {!confirmReset ? (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="care-btn mt-2 w-full rounded-2xl bg-white py-3 font-semibold text-berry"
          >
            ลบข้อมูลและเริ่มใหม่
          </button>
        ) : (
          <div className="mt-2 rounded-2xl border-2 border-berry/40 bg-berry/5 p-4">
            <p className="text-[15px]">
              ข้อมูลทั้งหมดของ {pet.name} รวมถึงเลเวลและสมุดบันทึกจะหายไป กู้คืนไม่ได้
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="care-btn rounded-2xl bg-white py-2.5 font-semibold"
              >
                ยกเลิก
              </button>
              <button
                type="button"
                onClick={onReset}
                className="care-btn rounded-2xl border-[#B8363A] bg-berry py-2.5 font-semibold text-white"
              >
                ยืนยัน ลบข้อมูล
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
