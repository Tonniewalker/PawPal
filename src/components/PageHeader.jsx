import { useLocation, useNavigate } from 'react-router-dom'

// หัวหน้าเพจ (สมุดบันทึก / ตั้งค่า) มีปุ่มกลับไปห้องที่เปิดอยู่ก่อนหน้า
export default function PageHeader({ title }) {
  const navigate = useNavigate()
  const location = useLocation()

  function goBack() {
    // เปิดหน้านี้ตรง ๆ (ไม่มีหน้าก่อนหน้า) → กลับห้องนั่งเล่น
    if (location.key === 'default') navigate('/')
    else navigate(-1)
  }

  return (
    <header className="sticky top-0 z-20 flex items-center gap-2 bg-paper/95 px-3 pb-2 pt-3 backdrop-blur">
      <button
        type="button"
        onClick={goBack}
        aria-label="กลับ"
        className="care-btn flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl"
      >
        ←
      </button>
      <h1 className="text-[24px] font-bold leading-tight">{title}</h1>
    </header>
  )
}
