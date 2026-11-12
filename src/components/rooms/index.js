// ===== ข้อมูลห้องทั้ง 4 ห้อง =====
import { BathroomBack, BathroomFront, BedroomBack, BedroomFront, KitchenBack, KitchenFront, LivingBack, LivingFront } from './RoomArt'

// ข้อมูลของแต่ละห้อง (เรียงตามปุ่มแถบล่าง)
// pet: ตำแหน่งตัวสัตว์ (เป็น % ของกรอบ 390×760) bottom = ระยะจากขอบล่าง, width = ความกว้าง
export const ROOMS = {
  living: { name: 'ห้องนั่งเล่น', navLabel: 'เล่น', path: '/', wall: '#CDEBD9', Back: LivingBack, Front: LivingFront, pet: { bottom: 13, width: 60 } },
  kitchen: { name: 'ห้องครัว', navLabel: 'กิน', path: '/kitchen', wall: '#FFF3D6', Back: KitchenBack, Front: KitchenFront, pet: { bottom: 12, width: 60 } },
  bathroom: { name: 'ห้องน้ำ', navLabel: 'อาบน้ำ', path: '/bathroom', wall: '#D5F0FB', Back: BathroomBack, Front: BathroomFront, pet: { bottom: 14, width: 58 } },
  bedroom: { name: 'ห้องนอน', navLabel: 'นอน', path: '/bedroom', wall: '#D9D2F3', Back: BedroomBack, Front: BedroomFront, pet: { bottom: 16, width: 58 } },
}

// สีของหลอดค่า: เขียว = ดี / เหลือง = เริ่มน้อย / แดง = ต่ำ
export const gaugeColor = (v) => (v >= 60 ? '#7CCB5E' : v >= 30 ? '#FFC93C' : '#E5484D')

// ตำแหน่งจานบนโต๊ะครัว (กรอบ 390×760) ให้วางอาหารที่ลากได้ทับตรงจาน
export const PLATE_X = [85, 195, 305]
export const PLATE_Y = 624
