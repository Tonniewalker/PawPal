// ===== Logic ของน้องหมา (ไม่มี React ในไฟล์นี้ เป็นฟังก์ชันคำนวณล้วน ๆ) =====
import { DECAY_PER_HOUR, EXP_PER_LEVEL, LOW, START_VALUE } from './config'

export const MINUTE = 60 * 1000
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR

const clamp = (n) => Math.min(100, Math.max(0, n))

export function createDog(name, now) {
  return {
    name,
    food: START_VALUE,
    water: START_VALUE,
    fun: START_VALUE,
    exp: 0,
    adoptedAt: now,
    lastUpdated: now, // เวลาล่าสุดที่คำนวณค่าสถานะ (Timestamp)
  }
}

// ลดค่าทั้ง 3 ตามจำนวนชั่วโมงที่ผ่านไป
export function decay(dog, hours) {
  return {
    ...dog,
    food: clamp(dog.food - DECAY_PER_HOUR.food * hours),
    water: clamp(dog.water - DECAY_PER_HOUR.water * hours),
    fun: clamp(dog.fun - DECAY_PER_HOUR.fun * hours),
  }
}

// ★ หัวใจของแอป ★
// เวลาตอนนี้ − เวลาที่บันทึกไว้ = เวลาที่ผ่านไป → ลดค่าตามนั้น
// แล้วเปลี่ยน lastUpdated เป็นเวลาตอนนี้ (ไม่งั้นครั้งหน้าจะลบซ้ำจากเวลาเดิม)
export function applyTime(dog, now) {
  const hours = Math.max(0, (now - dog.lastUpdated) / HOUR)
  return { ...decay(dog, hours), lastUpdated: now }
}

// อารมณ์คำนวณจากตัวเลข ไม่ต้องเก็บแยก (ข้อมูลจะไม่มีทางขัดกันเอง)
const MOODS = {
  happy: { face: 'happy', label: 'มีความสุขมาก', emoji: '🥰' },
  ok: { face: 'normal', label: 'อารมณ์ดี', emoji: '😊' },
  hungry: { face: 'hungry', label: 'หิวข้าว', emoji: '🤤' },
  thirsty: { face: 'thirsty', label: 'หิวน้ำ', emoji: '🥵' },
  lonely: { face: 'sad', label: 'เหงา', emoji: '🥺' },
  sad: { face: 'sad', label: 'เศร้ามาก', emoji: '😭' },
}

export function getMood(dog) {
  const { food, water, fun } = dog
  const lowCount = [food, water, fun].filter((v) => v < LOW).length
  if (lowCount >= 2) return MOODS.sad
  if (water < LOW) return MOODS.thirsty
  if (food < LOW) return MOODS.hungry
  if (fun < LOW) return MOODS.lonely
  if (food >= 70 && water >= 70 && fun >= 70) return MOODS.happy
  return MOODS.ok
}

// เลเวลคำนวณจาก EXP: ทุก ๆ 100 EXP ขึ้น 1 เลเวล
export function getLevel(exp) {
  return {
    level: Math.floor(exp / EXP_PER_LEVEL) + 1,
    progress: exp % EXP_PER_LEVEL,
  }
}

// โตตามเลเวล: ตัวใหญ่ขึ้นเรื่อย ๆ
export function getStage(level) {
  if (level >= 6) return { name: 'หมาโตเต็มวัย', scale: 1 }
  if (level >= 3) return { name: 'หมาวัยรุ่น', scale: 0.9 }
  return { name: 'ลูกหมา', scale: 0.8 }
}

// แปลงมิลลิวินาทีเป็นข้อความ เช่น "2 วัน 5 ชั่วโมง"
export function formatDuration(ms) {
  const minutes = Math.floor(ms / MINUTE)
  const days = Math.floor(minutes / (24 * 60))
  const hours = Math.floor((minutes % (24 * 60)) / 60)
  const mins = minutes % 60
  if (days > 0) return hours > 0 ? `${days} วัน ${hours} ชั่วโมง` : `${days} วัน`
  if (hours > 0) return mins > 0 ? `${hours} ชั่วโมง ${mins} นาที` : `${hours} ชั่วโมง`
  return `${Math.max(1, mins)} นาที`
}

// ช่วงเวลาของวัน ใช้เปลี่ยนสีท้องฟ้า
export function getTimeOfDay(now) {
  const hour = new Date(now).getHours()
  if (hour >= 6 && hour < 17) return 'day'
  if (hour >= 17 && hour < 19) return 'evening'
  return 'night'
}
