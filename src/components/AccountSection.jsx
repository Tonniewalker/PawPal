import { useState } from 'react'

// ส่วนบัญชีในหน้าตั้งค่า
export default function AccountSection({ account }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function handleSignIn() {
    setBusy(true)
    setError('')
    const message = await account.signIn()
    if (message) setError(message)
    setBusy(false)
  }

  async function handleSignOut() {
    setBusy(true)
    try {
      await account.signOut()
    } catch (err) {
      console.error('ออกจากระบบไม่สำเร็จ', err)
      setError('ออกจากระบบไม่สำเร็จ ลองใหม่อีกครั้ง')
      setBusy(false)
    }
  }

  if (account.mode === 'guest') {
    return (
      <section>
        <h2 className="text-lg font-bold">บัญชี</h2>
        <div className="mt-2 rounded-2xl border-2 border-sun bg-[#FFF6D9] p-4">
          <p className="font-semibold">เล่นแบบ Guest</p>
          <p className="mt-1 text-[15px] leading-relaxed text-ink/70">
            ข้อมูลอยู่ในเครื่องนี้เท่านั้น ถ้าล้างข้อมูลเบราว์เซอร์หรือเปลี่ยนเครื่องจะหายไป
            เข้าสู่ระบบเพื่อเก็บสัตว์เลี้ยงตัวนี้ไว้บนคลาวด์
          </p>
          <button
            type="button"
            onClick={handleSignIn}
            disabled={busy}
            className="care-btn mt-3 w-full rounded-2xl bg-white py-2.5 font-bold disabled:opacity-60"
          >
            {busy ? 'กำลังเข้าสู่ระบบ…' : 'เข้าสู่ระบบด้วย Google'}
          </button>
          {error && <p className="mt-2 text-sm text-berry">{error}</p>}
        </div>
      </section>
    )
  }

  return (
    <section>
      <h2 className="text-lg font-bold">บัญชี</h2>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border-2 border-line bg-white p-3">
        {account.photo ? (
          <img src={account.photo} alt="" referrerPolicy="no-referrer" className="h-11 w-11 shrink-0 rounded-full" />
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-line text-xl" aria-hidden="true">
            👤
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">{account.name || 'บัญชี Google'}</p>
          <p className="truncate text-sm text-ink/60">{account.email}</p>
        </div>
        <span className="shrink-0 rounded-full bg-leaf/15 px-2 py-0.5 text-xs font-semibold text-[#3E7A2A]">☁️ ซิงก์แล้ว</span>
      </div>
      <button
        type="button"
        onClick={handleSignOut}
        disabled={busy}
        className="care-btn mt-2 w-full rounded-2xl bg-white py-2.5 font-semibold disabled:opacity-60"
      >
        ออกจากระบบ
      </button>
      {error && <p className="mt-2 text-sm text-berry">{error}</p>}
    </section>
  )
}
