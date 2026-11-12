// ===== Logic ของสัตว์เลี้ยง =====
import { DATA_VERSION, DEFAULT_SPECIES, EXP_PER_LEVEL, FOODS, LOW, SLEEP, START_COINS, START_VALUE, STARTER_FOODS } from './config'
import { getSpecies, isSpecies } from './species'

export const MINUTE = 60 * 1000
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR

const clamp = (n) => Math.min(100, Math.max(0, n))
const num = (v, fallback) => (typeof v === 'number' && Number.isFinite(v) ? v : fallback)

export function createPet({ name, species = DEFAULT_SPECIES }, now) {
  return {
    version: DATA_VERSION,
    species,
    name,
    food: START_VALUE,
    fun: START_VALUE,
    clean: START_VALUE,
    energy: START_VALUE,
    asleep: false, // กำลังนอน
    exp: 0,
    coins: START_COINS,
    inventory: { ...STARTER_FOODS }, // อาหารที่มี
    lastBonusDay: null, // วันที่รับโบนัสรายวันล่าสุด
    bestScore: 0, // คะแนนสูงสุดมินิเกม
    gameDay: null, // วันที่เล่นมินิเกมล่าสุด
    gameCoinsToday: 0, // เหรียญจากมินิเกมในวันนั้น
    adoptedAt: now,
    lastUpdated: now, // เวลาที่คำนวณค่าสถานะล่าสุด
  }
}

// แปลงข้อมูลที่โหลดมาเป็นรุ่นปัจจุบัน
export function normalizePet(raw) {
  if (!raw || typeof raw !== 'object' || typeof raw.name !== 'string') return null
  if (!['food', 'fun', 'exp', 'lastUpdated'].every((k) => typeof raw[k] === 'number')) return null

  const pet = { ...raw }
  // รวมค่าน้ำเข้ากับความอิ่ม
  if (typeof pet.water === 'number') {
    pet.food = (pet.food + pet.water) / 2
    delete pet.water
  }
  return {
    ...pet,
    version: DATA_VERSION,
    species: isSpecies(pet.species) ? pet.species : DEFAULT_SPECIES,
    clean: num(pet.clean, START_VALUE),
    energy: num(pet.energy, START_VALUE),
    asleep: pet.asleep === true,
    coins: Math.max(0, Math.floor(num(pet.coins, START_COINS))),
    inventory: normalizeInventory(pet.inventory ?? STARTER_FOODS),
    lastBonusDay: typeof pet.lastBonusDay === 'string' ? pet.lastBonusDay : null,
    bestScore: Math.max(0, Math.floor(num(pet.bestScore, 0))),
    gameDay: typeof pet.gameDay === 'string' ? pet.gameDay : null,
    gameCoinsToday: Math.max(0, Math.floor(num(pet.gameCoinsToday, 0))),
    adoptedAt: num(pet.adoptedAt, pet.lastUpdated),
  }
}

// ตรวจกระเป๋าอาหาร
function normalizeInventory(raw) {
  const inventory = {}
  for (const key of Object.keys(FOODS)) {
    const count = Math.floor(num(raw?.[key], 0))
    if (FOODS[key].price > 0 && count > 0) inventory[key] = count
  }
  return inventory
}

// จำนวนอาหารที่มี (ของฟรี = Infinity)
export function foodCount(pet, key) {
  return FOODS[key].price === 0 ? Infinity : (pet.inventory[key] ?? 0)
}

// วันที่แบบ YYYY-MM-DD
export function dayKey(ts) {
  const d = new Date(ts)
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

// เปลี่ยนค่าตามเวลาที่ผ่านไป (ตอนหลับพลังงานเพิ่ม)
export function decay(pet, hours) {
  const rate = getSpecies(pet.species).decay
  return {
    ...pet,
    food: clamp(pet.food - rate.food * hours),
    fun: clamp(pet.fun - rate.fun * hours),
    clean: clamp(pet.clean - rate.clean * hours),
    energy: clamp(pet.asleep ? pet.energy + SLEEP.recoverPerHour * hours : pet.energy - rate.energy * hours),
  }
}

// คำนวณค่าสถานะ ณ เวลา now จาก lastUpdated
export function applyTime(pet, now) {
  const hours = Math.max(0, (now - pet.lastUpdated) / HOUR)
  return { ...decay(pet, hours), lastUpdated: now }
}

// สร้างรายการในสมุดบันทึก
export function makeDiaryEntry(type, text, at = Date.now()) {
  return { id: `${at}-${Math.random().toString(36).slice(2, 7)}`, type, text, at }
}

// อารมณ์ตามค่าสถานะ
const MOODS = {
  asleep: { face: 'sleep', label: 'หลับอยู่', emoji: '💤' },
  happy: { face: 'happy', label: 'มีความสุขมาก', emoji: '🥰' },
  ok: { face: 'normal', label: 'อารมณ์ดี', emoji: '😊' },
  hungry: { face: 'hungry', label: 'หิวข้าว', emoji: '🤤' },
  tired: { face: 'thirsty', label: 'เหนื่อย', emoji: '🥱' }, // หน้าหอบลิ้นห้อย
  dirty: { face: 'normal', label: 'ตัวเลอะ', emoji: '🫧' },
  lonely: { face: 'sad', label: 'เหงา', emoji: '🥺' },
  sad: { face: 'sad', label: 'เศร้ามาก', emoji: '😭' },
}

export function getMood(pet) {
  if (pet.asleep) return MOODS.asleep
  const { food, fun, clean, energy } = pet
  const lowCount = [food, fun, clean, energy].filter((v) => v < LOW).length
  if (lowCount >= 2) return MOODS.sad
  if (food < LOW) return MOODS.hungry
  if (energy < LOW) return MOODS.tired
  if (fun < LOW) return MOODS.lonely
  if (clean < LOW) return MOODS.dirty
  if (food >= 70 && fun >= 70 && clean >= 70 && energy >= 70) return MOODS.happy
  return MOODS.ok
}

// เลเวลจาก EXP
export function getLevel(exp) {
  return {
    level: Math.floor(exp / EXP_PER_LEVEL) + 1,
    progress: exp % EXP_PER_LEVEL,
  }
}

// ช่วงวัยตามเลเวล
export function getStage(level, species) {
  const { noun } = getSpecies(species)
  if (level >= 6) return { name: `${noun}โตเต็มวัย`, scale: 1 }
  if (level >= 3) return { name: `${noun}วัยรุ่น`, scale: 0.9 }
  return { name: `ลูก${noun}`, scale: 0.8 }
}

// แปลงมิลลิวินาทีเป็นข้อความ
export function formatDuration(ms) {
  const minutes = Math.floor(ms / MINUTE)
  const days = Math.floor(minutes / (24 * 60))
  const hours = Math.floor((minutes % (24 * 60)) / 60)
  const mins = minutes % 60
  if (days > 0) return hours > 0 ? `${days} วัน ${hours} ชั่วโมง` : `${days} วัน`
  if (hours > 0) return mins > 0 ? `${hours} ชั่วโมง ${mins} นาที` : `${hours} ชั่วโมง`
  return `${Math.max(1, mins)} นาที`
}

// ช่วงเวลาของวัน
export function getTimeOfDay(now) {
  const hour = new Date(now).getHours()
  if (hour >= 6 && hour < 17) return 'day'
  if (hour >= 17 && hour < 19) return 'evening'
  return 'night'
}
