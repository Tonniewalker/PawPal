// ===== ล็อกอิน / ออกจากระบบด้วยบัญชี Google =====
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from './firebase'

// แปลงข้อมูลผู้ใช้ของ Firebase ให้เหลือเท่าที่แอปใช้
function toAccount(user) {
  return user
    ? { uid: user.uid, name: user.displayName ?? '', email: user.email ?? '', photo: user.photoURL ?? '' }
    : null
}

// เรียก callback ทุกครั้งที่สถานะล็อกอินเปลี่ยน (ครั้งแรกจะเรียกทันทีที่ Firebase เช็กเสร็จ)
// คืนฟังก์ชันสำหรับเลิกฟัง
export function watchAccount(callback) {
  return onAuthStateChanged(auth, (user) => callback(toAccount(user)))
}

// เปิดหน้าต่างเลือกบัญชี Google
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  const result = await signInWithPopup(auth, provider)
  return toAccount(result.user)
}

export function signOutAccount() {
  return signOut(auth)
}
