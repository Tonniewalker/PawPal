// ===== ข้อความ error ตอนล็อกอิน =====
// null = ไม่ต้องแจ้ง
export function authErrorMessage(err) {
  switch (err?.code) {
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request':
      return null
    case 'auth/popup-blocked':
      return 'เบราว์เซอร์บล็อกหน้าต่างล็อกอิน ลองอนุญาตป๊อปอัปแล้วกดใหม่'
    case 'auth/network-request-failed':
      return 'ต้องต่ออินเทอร์เน็ตก่อนถึงจะเข้าสู่ระบบได้'
    case 'auth/unauthorized-domain':
      return 'โดเมนนี้ยังไม่ได้รับอนุญาตใน Firebase (Authorized domains)'
    default:
      return 'เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง'
  }
}
