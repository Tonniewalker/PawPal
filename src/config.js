// ===== ตั้งค่าทั้งหมดของแอปอยู่ในไฟล์นี้ แก้ตัวเลขตรงนี้ที่เดียวพอ =====

// ชื่อแอป (vite.config.js ดึงไปใช้เป็นชื่อตอนติดตั้งบนมือถือด้วย)
export const APP_NAME = 'PawPal'
export const APP_FULL_NAME = 'PawPal เลี้ยงน้องหมา'

// ชื่อ key ที่ใช้เก็บข้อมูลใน localStorage
export const STORAGE_KEYS = {
  dog: 'dog',
  diary: 'diary',
}

// ค่าเริ่มต้นตอนรับเลี้ยง (เต็ม 100)
export const START_VALUE = 80

// แต่ละค่าลดลงกี่หน่วยต่อ 1 ชั่วโมง
// เช่น น้ำลด 10 ต่อชั่วโมง → จาก 80 จะเหลือต่ำกว่า 30 หลังผ่านไปประมาณ 5 ชั่วโมง
export const DECAY_PER_HOUR = {
  food: 8,
  water: 10,
  fun: 6,
}

export const LOW = 30 // ต่ำกว่านี้ = หิว / หิวน้ำ / เหงา
export const FULL = 90 // ตั้งแต่นี้ขึ้นไป กดดูแลค่านั้นไม่ได้ (กันกดรัวเก็บ EXP)
export const EXP_PER_LEVEL = 100

// หายไปนานเกินเท่านี้ ตอนเปิดแอปจะขึ้นข้อความต้อนรับกลับ
export const AWAY_NOTICE_MS = 30 * 60 * 1000 // 30 นาที

// ค่าสถานะ 3 อย่างของน้องหมา
export const STATS = [
  { key: 'food', label: 'ความอิ่ม', icon: '🍖', color: '#F0974A' },
  { key: 'water', label: 'น้ำ', icon: '💧', color: '#4AA3DF' },
  { key: 'fun', label: 'ความสุข', icon: '💛', color: '#E9B824' },
]

// ปุ่มดูแล: กดแล้วเพิ่มค่าไหน เท่าไหร่ ได้ EXP เท่าไหร่
export const ACTIONS = {
  feed: { stat: 'food', amount: 10, exp: 10, label: 'ให้อาหาร', icon: '🍖', fullText: 'อิ่มแล้ว' },
  water: { stat: 'water', amount: 15, exp: 5, label: 'ให้น้ำ', icon: '💧', fullText: 'ยังไม่หิวน้ำ' },
  pat: { stat: 'fun', amount: 10, exp: 15, label: 'ลูบหัว', icon: '🤚', fullText: 'ลูบพอแล้ว' },
}
