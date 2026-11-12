// ===== จุดเดียวที่ไฟล์อื่น import เรื่องข้อมูลและบัญชี =====
// ที่เก็บข้อมูลมี 2 แบบ ฟังก์ชันชุดเดียวกัน (คืนค่าเป็น Promise ทั้งหมด):
//   localStore              → Guest เก็บใน localStorage ของเครื่องนี้
//   createCloudStore(uid)   → ล็อกอินแล้ว เก็บใน Firestore แยกตามบัญชี
//
//   loadGame()               → { pet, diary }
//   savePet(pet)
//   addDiaryEntries(entries)  เพิ่มรายการใหม่ไว้บนสุด
//   shiftDiaryTimes(ms)       เลื่อนเวลาในสมุดย้อนไป (โหมดเดโม)
//   resetGame()
export { localStore, isGuest, setGuest } from './localStore'
export { createCloudStore } from './cloudStore'
export { watchAccount, signInWithGoogle, signOutAccount } from './auth'
export { authErrorMessage } from './authErrors'
