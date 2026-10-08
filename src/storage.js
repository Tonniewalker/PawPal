// ===== Load / Save กับ localStorage (หลักการเดียวกับ Week 7) =====
// localStorage เก็บได้แค่ข้อความ เลยต้องแปลง object → ข้อความด้วย JSON.stringify ตอน Save
// และแปลงกลับด้วย JSON.parse ตอน Load
import { STORAGE_KEYS } from './config'

function load(key, fallback) {
  try {
    const text = localStorage.getItem(key)
    return text ? JSON.parse(text) : fallback
  } catch {
    // ข้อมูลเสียหรือเบราว์เซอร์บล็อก storage → เริ่มจากค่าว่าง
    return fallback
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // พื้นที่เต็มหรือถูกบล็อก (เช่นโหมดไม่ระบุตัวตนบางเบราว์เซอร์) → ข้ามไป
  }
}

export function loadDog() {
  const dog = load(STORAGE_KEYS.dog, null)
  // กันข้อมูลเพี้ยน: ถ้าไม่มีค่าที่จำเป็น ให้ถือว่ายังไม่มีหมา
  const ok =
    dog &&
    typeof dog.name === 'string' &&
    ['food', 'water', 'fun', 'exp', 'lastUpdated'].every((k) => typeof dog[k] === 'number')
  return ok ? dog : null
}

export function saveDog(dog) {
  save(STORAGE_KEYS.dog, dog)
}

export function loadDiary() {
  const list = load(STORAGE_KEYS.diary, [])
  return Array.isArray(list) ? list : []
}

export function saveDiary(list) {
  save(STORAGE_KEYS.diary, list)
}

export function clearAll() {
  try {
    localStorage.removeItem(STORAGE_KEYS.dog)
    localStorage.removeItem(STORAGE_KEYS.diary)
  } catch {
    // ไม่ต้องทำอะไร
  }
}
