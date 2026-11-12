// ===== ข้อมูลห้องทั้ง 4 ห้อง =====
import { BathroomBack, BathroomFront, BedroomBack, BedroomFront, KitchenBack, KitchenFront, LivingBack, LivingFront } from './RoomArt'

// ข้อมูลแต่ละห้อง
// pet: ตำแหน่งตัวสัตว์ (%)
export const ROOMS = {
  living: { name: 'ห้องนั่งเล่น', navLabel: 'เล่น', path: '/', wall: '#CDEBD9', Back: LivingBack, Front: LivingFront, pet: { bottom: 13, width: 60 } },
  kitchen: { name: 'ห้องครัว', navLabel: 'กิน', path: '/kitchen', wall: '#FFF3D6', Back: KitchenBack, Front: KitchenFront, pet: { bottom: 12, width: 60 } },
  bathroom: { name: 'ห้องน้ำ', navLabel: 'อาบน้ำ', path: '/bathroom', wall: '#D5F0FB', Back: BathroomBack, Front: BathroomFront, pet: { bottom: 14, width: 58 } },
  bedroom: { name: 'ห้องนอน', navLabel: 'นอน', path: '/bedroom', wall: '#D9D2F3', Back: BedroomBack, Front: BedroomFront, pet: { bottom: 16, width: 58 } },
}

// สีหลอดค่า
export const gaugeColor = (v) => (v >= 60 ? '#7CCB5E' : v >= 30 ? '#FFC93C' : '#E5484D')

// ตำแหน่งจานบนโต๊ะครัว
export const PLATE_X = [85, 195, 305]
export const PLATE_Y = 624
