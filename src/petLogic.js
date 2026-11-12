// ===== Logic ของสัตว์เลี้ยง (ไม่มี React ในไฟล์นี้ เป็นฟังก์ชันคำนวณล้วน ๆ) =====
import { DATA_VERSION, DEFAULT_SPECIES, EXP_PER_LEVEL, LOW, START_VALUE } from './config'
import { getSpecies, isSpecies } from './species'

export const MINUTE = 60 * 1000
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR

const clamp = (n) => Math.min(100, Math.max(0, n))

export function createPet({ name, species = DEFAULT_SPECIES }, now) {
  return {
    version: DATA_VERSION,
    species,
    name,
    food: START_VALUE,
    water: START_VALUE,
    fun: START_VALUE,
    exp: 0,
    adoptedAt: now,
    lastUpdated: now, // เวลาล่าสุดที่คำนวณค่าสถานะ (Timestamp)
  }
}

// ตรวจและแปลงข้อมูลที่โหลดมา (จาก localStorage หรือคลาวด์) ให้เป็นรูปแบบรุ่นปัจจุบัน
// ข้อมูลเสียหรือขาดค่าที่จำเป็น → คืน null (ถือว่ายังไม่มีสัตว์เลี้ยง)
// ทุกครั้งที่เพิ่มฟิลด์ใหม่ในอนาคต (เช่น coins) ให้เติมค่าเริ่มต้นตรงนี้ที่เดียว
export function normalizePet(raw) {
  if (!raw || typeof raw !== 'object' || typeof raw.name !== 'string') return null
  if (!['food', 'water', 'fun', 'exp', 'lastUpdated'].every((k) => typeof raw[k] === 'number')) return null

  return {
    ...raw,
    version: DATA_VERSION,
    species: isSpecies(raw.species) ? raw.species : DEFAULT_SPECIES, // รุ่น 1 มีแต่หมา
    adoptedAt: typeof raw.adoptedAt === 'number' ? raw.adoptedAt : raw.lastUpdated,
  }
}

// ลดค่าทั้ง 3 ตามจำนวนชั่วโมงที่ผ่านไป (แต่ละชนิดลดเร็วไม่เท่ากัน ดู species.js)
export function decay(pet, hours) {
  const rate = getSpecies(pet.species).decay
  return {
    ...pet,
    food: clamp(pet.food - rate.food * hours),
    water: clamp(pet.water - rate.water * hours),
    fun: clamp(pet.fun - rate.fun * hours),
  }
}

// ★ หัวใจของแอป ★
// เวลาตอนนี้ − เวลาที่บันทึกไว้ = เวลาที่ผ่านไป → ลดค่าตามนั้น
// แล้วเปลี่ยน lastUpdated เป็นเวลาตอนนี้ (ไม่งั้นครั้งหน้าจะลบซ้ำจากเวลาเดิม)
// หมายเหตุ: คำนวณทีละช่วงหรือรวดเดียวได้ผลเท่ากัน เพราะค่าลดแบบเส้นตรงและหยุดที่ 0
// เลยไม่จำเป็นต้องบันทึกข้อมูลทุกนาที บันทึกเฉพาะตอนผู้เล่นทำอะไรก็พอ
export function applyTime(pet, now) {
  const hours = Math.max(0, (now - pet.lastUpdated) / HOUR)
  return { ...decay(pet, hours), lastUpdated: now }
}

// สร้างรายการในสมุดบันทึก
export function makeDiaryEntry(type, text, at = Date.now()) {
  return { id: `${at}-${Math.random().toString(36).slice(2, 7)}`, type, text, at }
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

export function getMood(pet) {
  const { food, water, fun } = pet
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

// โตตามเลเวล: ตัวใหญ่ขึ้นเรื่อย ๆ (ชื่อช่วงวัยตามชนิด เช่น ลูกแมว / แมววัยรุ่น)
export function getStage(level, species) {
  const { noun } = getSpecies(species)
  if (level >= 6) return { name: `${noun}โตเต็มวัย`, scale: 1 }
  if (level >= 3) return { name: `${noun}วัยรุ่น`, scale: 0.9 }
  return { name: `ลูก${noun}`, scale: 0.8 }
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
