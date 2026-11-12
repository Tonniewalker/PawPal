// หน้าจอระหว่างโหลดข้อมูล (และตอนโหลดไม่สำเร็จ ให้กดลองใหม่ได้)
export default function Splash({ message = 'กำลังโหลด…', onRetry }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[440px] flex-col items-center justify-center gap-4 bg-paper px-5 text-center">
      <span className={`text-5xl ${onRetry ? '' : 'splash-paw'}`} aria-hidden="true">🐾</span>
      <p className="text-lg font-semibold" role="status">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="care-btn rounded-2xl border-sun-dark bg-sun px-6 py-2.5 font-bold"
        >
          ลองใหม่
        </button>
      )}
    </div>
  )
}
