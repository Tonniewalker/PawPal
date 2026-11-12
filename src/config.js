// ===== การตั้งค่าแอป =====

// ชื่อแอป
export const APP_NAME = 'PawPal'
export const APP_FULL_NAME = 'PawPal เลี้ยงสัตว์'

// รุ่นของโครงข้อมูล
export const DATA_VERSION = 5

// ชนิดสัตว์เริ่มต้น
export const DEFAULT_SPECIES = 'dog'

// key ใน localStorage
export const STORAGE_KEYS = {
  pet: 'pawpal:pet',
  diary: 'pawpal:diary',
  guest: 'pawpal:guest', // เลือกเล่นแบบ Guest แล้ว
  // key ข้อมูลรุ่นแรก
  legacyDog: 'dog',
  legacyDiary: 'diary',
}

// จำนวนบันทึกสูงสุด
export const DIARY_LIMIT = 300

// ค่าสถานะเริ่มต้น (เต็ม 100)
export const START_VALUE = 80

export const LOW = 30 // ค่าต่ำ
export const FULL = 90 // ค่าเต็ม ดูแลเพิ่มไม่ได้
export const EXP_PER_LEVEL = 100

// หายไปนานเท่านี้ขึ้นไปจะแสดงการ์ดต้อนรับกลับ
export const AWAY_NOTICE_MS = 30 * 60 * 1000 // 30 นาที

// ค่าสถานะและห้องที่ใช้ดูแล
export const STATS = [
  { key: 'food', label: 'ความอิ่ม', short: 'อิ่ม', icon: '🍖', room: 'kitchen' },
  { key: 'fun', label: 'ความสุข', short: 'สุข', icon: '😊', room: 'living' },
  { key: 'clean', label: 'ความสะอาด', short: 'สะอาด', icon: '🛁', room: 'bathroom' },
  { key: 'energy', label: 'พลังงาน', short: 'พลังงาน', icon: '🌙', room: 'bedroom' },
]

// ===== การดูแลในแต่ละห้อง =====

// อาหาร (price 0 = ฟรีไม่จำกัด)
export const FOODS = {
  kibble: { label: 'ข้าวเม็ด', icon: '🥣', food: 6, exp: 2, price: 0 },
  meat: { label: 'เนื้อ', icon: '🍖', food: 15, exp: 10, price: 15 },
  milk: { label: 'นม', icon: '🥛', food: 10, exp: 6, price: 8 },
  apple: { label: 'แอปเปิล', icon: '🍎', food: 8, fun: 4, exp: 6, price: 10 },
  cake: { label: 'เค้ก', icon: '🍰', food: 20, fun: 15, exp: 15, price: 35 },
}

// ===== เหรียญ =====
export const START_COINS = 50 // เหรียญตอนรับเลี้ยง
export const STARTER_FOODS = { meat: 2, milk: 2, apple: 2 } // อาหารเริ่มต้น
export const COINS = {
  perExp: 0.5, // เหรียญต่อ EXP
  levelUp: 30, // เลเวลอัป
  daily: 20, // โบนัสรายวัน
}

// ===== มินิเกมรับขนม =====
export const GAME = {
  durationSec: 30,
  points: { treat: 1, coin: 3, bad: -2 }, // ขนม / เหรียญ / ขยะ
  coinsPerPoint: 1, // เหรียญต่อคะแนน
  dailyCoinCap: 100, // เหรียญจากเกมสูงสุดต่อวัน
  fun: 15, // ความสุขที่เพิ่ม
  energyCost: 10, // พลังงานที่ใช้
  minEnergy: 20, // พลังงานขั้นต่ำที่เล่นได้
  exp: 10,
}

// ลูบตัว: ทุก distance px ได้ fun และ exp
export const PAT = { distance: 140, fun: 5, exp: 4 }

// อาบน้ำ: เกิดฟองทุก bubbleDistance px
export const WASH = { bubbleDistance: 45, cleanPerBubble: 4, maxBubbles: 16, exp: 10 }

// นอน: พลังงานที่ฟื้นต่อชั่วโมง
export const SLEEP = { recoverPerHour: 25, exp: 8 }
