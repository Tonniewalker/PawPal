// ===== ตั้งค่าทั้งหมดของแอปอยู่ในไฟล์นี้ แก้ตัวเลขตรงนี้ที่เดียวพอ =====

// ชื่อแอป (vite.config.js ดึงไปใช้เป็นชื่อตอนติดตั้งบนมือถือด้วย)
export const APP_NAME = 'PawPal'
export const APP_FULL_NAME = 'PawPal เลี้ยงสัตว์'

// รุ่นของโครงข้อมูลสัตว์เลี้ยง เพิ่มเลขนี้ทุกครั้งที่เปลี่ยนรูปแบบข้อมูล
// (ใช้ใน normalizePet() เพื่อแปลงข้อมูลรุ่นเก่าให้เป็นรุ่นปัจจุบัน)
export const DATA_VERSION = 3 // รุ่น 3: ค่า 4 ค่า (อิ่ม/สุข/สะอาด/พลังงาน) + การนอน

// ชนิดสัตว์เริ่มต้น (ข้อมูลรุ่น 1 ไม่มีฟิลด์ species เพราะมีแต่น้องหมา)
export const DEFAULT_SPECIES = 'dog'

// ชื่อ key ที่ใช้เก็บข้อมูลใน localStorage
export const STORAGE_KEYS = {
  pet: 'pawpal:pet',
  diary: 'pawpal:diary',
  guest: 'pawpal:guest', // 'yes' = ผู้ใช้เลือกเล่นแบบ Guest แล้ว (ไม่ต้องถามอีก)
  // key ของข้อมูลรุ่น 1 (ย้ายมาเป็นรุ่นใหม่อัตโนมัติตอนเปิดแอป)
  legacyDog: 'dog',
  legacyDiary: 'diary',
}

// สมุดบันทึกเก็บย้อนหลังได้สูงสุดกี่รายการ
export const DIARY_LIMIT = 300

// ค่าเริ่มต้นตอนรับเลี้ยง (เต็ม 100)
export const START_VALUE = 80

// ค่าลดลงกี่หน่วยต่อ 1 ชั่วโมง แยกตามชนิดสัตว์ → ดูที่ src/species.js (decay)
// เช่น อิ่มลด 10 ต่อชั่วโมง → จาก 80 จะเหลือต่ำกว่า 30 หลังผ่านไปประมาณ 5 ชั่วโมง

export const LOW = 30 // ต่ำกว่านี้ = หิว / เหงา / ตัวเลอะ / เหนื่อย
export const FULL = 90 // ตั้งแต่นี้ขึ้นไป ดูแลค่านั้นไม่ได้ (กันกดรัวเก็บ EXP)
export const EXP_PER_LEVEL = 100

// หายไปนานเกินเท่านี้ ตอนเปิดแอปจะขึ้นข้อความต้อนรับกลับ
export const AWAY_NOTICE_MS = 30 * 60 * 1000 // 30 นาที

// ค่าสถานะ 4 อย่างของสัตว์เลี้ยง แต่ละค่าดูแลได้ในห้องของตัวเอง
export const STATS = [
  { key: 'food', label: 'ความอิ่ม', short: 'อิ่ม', icon: '🍖', room: 'kitchen' },
  { key: 'fun', label: 'ความสุข', short: 'สุข', icon: '😊', room: 'living' },
  { key: 'clean', label: 'ความสะอาด', short: 'สะอาด', icon: '🛁', room: 'bathroom' },
  { key: 'energy', label: 'พลังงาน', short: 'พลังงาน', icon: '🌙', room: 'bedroom' },
]

// ===== การดูแลในแต่ละห้อง =====

// ห้องครัว: ลากอาหารไปที่ปากน้อง (food = ความอิ่มที่เพิ่ม, fun = ความสุขที่เพิ่ม)
export const FOODS = {
  meat: { label: 'เนื้อ', icon: '🍖', food: 15, exp: 10 },
  milk: { label: 'นม', icon: '🥛', food: 10, exp: 6 },
  apple: { label: 'แอปเปิล', icon: '🍎', food: 8, fun: 4, exp: 6 },
}

// ห้องนั่งเล่น: ลูบตัวน้อง ทุก ๆ ระยะที่ลูบ (px) จะได้ความสุข + EXP
export const PAT = { distance: 140, fun: 5, exp: 4 }

// ห้องน้ำ: ลากฟองน้ำถูตัวให้เกิดฟอง แล้วกดฝักบัว
// ฟองเพิ่มทุก ๆ bubbleDistance px, ฟองละ cleanPerBubble, ได้สูงสุด maxBubbles ฟองต่อการอาบ 1 ครั้ง
export const WASH = { bubbleDistance: 45, cleanPerBubble: 4, maxBubbles: 16, exp: 10 }

// ห้องนอน: ปิดไฟให้น้องนอน พลังงานฟื้นเฉพาะตอนหลับ (ชั่วโมงละเท่านี้)
export const SLEEP = { recoverPerHour: 25, exp: 8 }
