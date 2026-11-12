// ===== ชนิดสัตว์เลี้ยงทั้งหมด =====
// แต่ละชนิดมีนิสัยต่างกัน = ค่าอิ่ม/น้ำ/ความสุข ลดลงเร็วไม่เท่ากัน (หน่วยต่อ 1 ชั่วโมง)
//
// อยากเพิ่มชนิดใหม่:
//   1) เพิ่มข้อมูลในตัวแปร SPECIES ด้านล่าง
//   2) วาดตัวสัตว์ใน src/components/pets/ แล้วลงทะเบียนใน src/components/pets/index.js
import { DEFAULT_SPECIES } from './config'

export const SPECIES = {
  dog: {
    id: 'dog',
    noun: 'หมา', // ใช้ต่อเป็น "ลูกหมา", "หมาวัยรุ่น"
    label: 'น้องหมา',
    emoji: '🐶',
    trait: 'ร่าเริง ดูแลง่าย ทุกค่าลดพอ ๆ กัน',
    placeholder: 'เช่น ไอ้ทอง',
    decay: { food: 8, water: 10, fun: 6 },
  },
  cat: {
    id: 'cat',
    noun: 'แมว',
    label: 'น้องแมว',
    emoji: '🐱',
    trait: 'รักอิสระ ไม่ค่อยเหงา แต่ช่างกิน',
    placeholder: 'เช่น ส้มโอ',
    decay: { food: 10, water: 7, fun: 4 },
  },
  rabbit: {
    id: 'rabbit',
    noun: 'กระต่าย',
    label: 'น้องกระต่าย',
    emoji: '🐰',
    trait: 'หิวบ่อยมาก ต้องเติมอาหารเรื่อย ๆ',
    placeholder: 'เช่น ปุยฝ้าย',
    decay: { food: 12, water: 8, fun: 5 },
  },
  fox: {
    id: 'fox',
    noun: 'จิ้งจอก',
    label: 'น้องจิ้งจอก',
    emoji: '🦊',
    trait: 'ขี้เล่น เหงาง่าย ชอบให้ลูบหัว',
    placeholder: 'เช่น ส้มจี๊ด',
    decay: { food: 7, water: 8, fun: 10 },
  },
  bird: {
    id: 'bird',
    noun: 'นก',
    label: 'น้องนก',
    emoji: '🐦',
    trait: 'ตัวเล็ก กินน้อย แต่หิวน้ำเร็วมาก',
    placeholder: 'เช่น จิ๊บ',
    decay: { food: 6, water: 13, fun: 6 },
  },
}

// ลำดับที่แสดงในหน้ารับเลี้ยง
export const SPECIES_LIST = ['dog', 'cat', 'rabbit', 'fox', 'bird'].map((id) => SPECIES[id])

export function getSpecies(id) {
  return SPECIES[id] ?? SPECIES[DEFAULT_SPECIES]
}

export function isSpecies(id) {
  return Object.hasOwn(SPECIES, id)
}
