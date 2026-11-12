// ===== ที่เก็บข้อมูลแบบ localStorage (Guest) =====
import { DIARY_LIMIT, STORAGE_KEYS } from '../config'
import { normalizePet } from '../petLogic'

function read(key, fallback) {
  try {
    const text = localStorage.getItem(key)
    return text ? JSON.parse(text) : fallback
  } catch {
    // อ่านไม่ได้ → ใช้ค่าเริ่มต้น
    return fallback
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // เขียนไม่ได้ → ข้าม
  }
}

function remove(...keys) {
  try {
    keys.forEach((key) => localStorage.removeItem(key))
  } catch {
    // ข้าม
  }
}

function readDiary() {
  const list = read(STORAGE_KEYS.diary, [])
  return Array.isArray(list) ? list : []
}

// ย้ายข้อมูลจาก key เก่า
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

// โหลดข้อมูล → { pet, diary }
async function loadGame() {
  migrateLegacy()
  return {
    pet: normalizePet(read(STORAGE_KEYS.pet, null)),
    diary: readDiary(),
  }
}

async function savePet(pet) {
  write(STORAGE_KEYS.pet, pet)
}

// เพิ่มรายการในสมุดบันทึก
async function addDiaryEntries(entries) {
  write(STORAGE_KEYS.diary, [...entries, ...readDiary()].slice(0, DIARY_LIMIT))
}

// เลื่อนเวลาในสมุดบันทึกย้อนไป (โหมดเดโม)
async function shiftDiaryTimes(ms) {
  write(
    STORAGE_KEYS.diary,
    readDiary().map((entry) => ({ ...entry, at: entry.at - ms })),
  )
}

// ลบข้อมูลทั้งหมด
async function resetGame() {
  remove(STORAGE_KEYS.pet, STORAGE_KEYS.diary)
}

export const localStore = { loadGame, savePet, addDiaryEntries, shiftDiaryTimes, resetGame }

// ===== สถานะ Guest =====
// เคยเลือก Guest หรือมีข้อมูลในเครื่อง
export function isGuest() {
  migrateLegacy()
  return read(STORAGE_KEYS.guest, null) === 'yes' || read(STORAGE_KEYS.pet, null) !== null
}

export function setGuest(on) {
  if (on) write(STORAGE_KEYS.guest, 'yes')
  else remove(STORAGE_KEYS.guest)
}
