import { useState } from 'react'
import PetAvatar from '../components/pets/PetAvatar'
import { APP_NAME } from '../config'
import { getTimeOfDay } from '../petLogic'
import { SPECIES_LIST } from '../species'

// หน้าแรก (เปิดแอปครั้งแรก): เลือกเล่นแบบ Guest หรือเข้าสู่ระบบด้วย Google
export default function Welcome({ onGuest, onSignIn }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [now] = useState(() => Date.now())

  async function handleSignIn() {
    setBusy(true)
    setError('')
    const message = await onSignIn()
    if (message) setError(message)
    setBusy(false)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-[440px] flex-col bg-paper px-5 pb-10 pt-6">
      {/* ฉากรวมสัตว์ทุกชนิด */}
      <div className={`scene scene-${getTimeOfDay(now)} relative h-56 overflow-hidden rounded-[28px]`}>
        <div className="sky-sun absolute right-6 top-6 h-12 w-12 rounded-full" />
        <div className="grass absolute inset-x-0 bottom-0 h-16 rounded-t-[50%_24px]" />
        <div className="absolute inset-x-2 bottom-3 flex items-end justify-center">
          {SPECIES_LIST.map((s) => (
            <div key={s.id} className="w-[19%]">
              <PetAvatar species={s.id} face="happy" label={s.label} />
            </div>
          ))}
        </div>
      </div>

      <h1 className="mt-6 text-[32px] font-bold leading-tight">🐾 {APP_NAME}</h1>
      <p className="mt-1 text-base leading-relaxed text-ink/70">
        รับสัตว์เลี้ยงมาดูแล ให้อาหาร อาบน้ำ เล่นด้วย และพาเข้านอนทุกวัน
      </p>

      <div className="mt-auto space-y-3 pt-8">
        <button
          type="button"
          onClick={onGuest}
          disabled={busy}
          className="care-btn w-full rounded-2xl border-sun-dark bg-sun py-3.5 text-lg font-bold"
        >
          เล่นเลย (ไม่ต้องล็อกอิน)
        </button>
        <button
          type="button"
          onClick={handleSignIn}
          disabled={busy}
          className="care-btn w-full rounded-2xl bg-white py-3.5 text-lg font-bold disabled:opacity-60"
        >
          {busy ? 'กำลังเข้าสู่ระบบ…' : 'เข้าสู่ระบบด้วย Google'}
        </button>
        {error && <p className="text-center text-sm text-berry">{error}</p>}
        <p className="text-center text-sm leading-relaxed text-ink/60">
          ล็อกอินเพื่อเก็บข้อมูลบนคลาวด์ เล่นต่อได้ทุกเครื่อง
          <br />
          เล่นแบบไม่ล็อกอินก่อน แล้วค่อยเชื่อมบัญชีทีหลังก็ได้
        </p>
      </div>
    </div>
  )
}
