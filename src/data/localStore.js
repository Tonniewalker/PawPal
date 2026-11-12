// ===== ที่เก็บข้อมูลแบบ localStorage (หลักการเดียวกับ Week 7) =====
// localStorage เก็บได้แค่ข้อความ เลยต้องแปลง object → ข้อความด้วย JSON.stringify ตอน Save
// และแปลงกลับด้วย JSON.parse ตอน Load
//
// ทุกฟังก์ชันคืนค่าเป็น Promise (async) ถึง localStorage จะทำงานทันทีก็ตาม
// เพื่อให้หน้าตาเหมือนที่เก็บข้อมูลบนคลาวด์ (Firestore) ที่ต้องรอเน็ต
// พอเปลี่ยนไปใช้ Firestore จะได้สลับไฟล์นี้ได้เลย โดยไม่ต้องแก้ App.jsx
import { DIARY_LIMIT, STORAGE_KEYS } from '../config'
import { normalizePet } from '../petLogic'

function read(key, fallback) {
  try {
    const text = localStorage.getItem(key)
    return text ? JSON.parse(text) : fallback
  } catch {
    // ข้อมูลเสียหรือเบราว์เซอร์บล็อก storage → เริ่มจากค่าว่าง
    return fallback
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // พื้นที่เต็มหรือถูกบล็อก (เช่นโหมดไม่ระบุตัวตนบางเบราว์เซอร์) → ข้ามไป
  }
}

function remove(...keys) {
  try {
    keys.forEach((key) => localStorage.removeItem(key))
  } catch {
    // ไม่ต้องทำอะไร
  }
}

function readDiary() {
  const list = read(STORAGE_KEYS.diary, [])
  return Array.isArray(list) ? list : []
}

// ย้ายข้อมูลรุ่น 1 (key 'dog' / 'diary') มาเป็น key รุ่นใหม่ ทำครั้งเดียว
function migrateLegacy() {
  const legacy = read(STORAGE_KEYS.legacyDog, null)
  if (!legacy || read(STORAGE_KEYS.pet, null)) return
  const pet = normalizePet(legacy)
  if (pet) {
    write(STORAGE_KEYS.pet, pet)
    write(STORAGE_KEYS.diary, read(STORAGE_KEYS.legacyDiary, []))
  }
  remove(STORAGE_KEYS.legacyDog, STORAGE_KEYS.legacyDiary)
}

// โหลดทุกอย่างตอนเปิดแอป → { pet, diary } (ยังไม่มีสัตว์เลี้ยง pet = null)
// diary เรียงใหม่ → เก่า
export async function loadGame() {
  migrateLegacy()
  return {
    pet: normalizePet(read(STORAGE_KEYS.pet, null)),
    diary: readDiary(),
  }
}

export async function savePet(pet) {
  write(STORAGE_KEYS.pet, pet)
}

// เพิ่มรายการใหม่ไว้บนสุดของสมุดบันทึก
export async function addDiaryEntries(entries) {
  write(STORAGE_KEYS.diary, [...entries, ...readDiary()].slice(0, DIARY_LIMIT))
}

// โหมดเดโม: เลื่อนเวลาทุกรายการในสมุดบันทึกย้อนไป ms มิลลิวินาที
export async function shiftDiaryTimes(ms) {
  write(
    STORAGE_KEYS.diary,
    readDiary().map((entry) => ({ ...entry, at: entry.at - ms })),
  )
}

// ลบข้อมูลทั้งหมดเพื่อเริ่มเลี้ยงใหม่
export async function resetGame() {
  remove(STORAGE_KEYS.pet, STORAGE_KEYS.diary)
}
