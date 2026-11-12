// ===== จุดเดียวที่บอกว่าแอปเก็บข้อมูลไว้ที่ไหน =====
// ตอนนี้ใช้ localStorage ในเครื่อง ภายหลังจะเปลี่ยนเป็น Firestore (แยกข้อมูลตามบัญชี Google)
// ไฟล์อื่นให้ import จาก './data' เสมอ ห้าม import ไฟล์ที่เก็บข้อมูลตรง ๆ
//
// ฟังก์ชันที่ที่เก็บข้อมูลทุกแบบต้องมี (คืนค่าเป็น Promise ทั้งหมด):
//   loadGame()               → { pet, diary }
//   savePet(pet)
//   addDiaryEntries(entries)  เพิ่มรายการใหม่ไว้บนสุด
//   shiftDiaryTimes(ms)       เลื่อนเวลาในสมุดย้อนไป (โหมดเดโม)
//   resetGame()
export * from './localStore'
