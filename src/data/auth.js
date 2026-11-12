// ===== ล็อกอินด้วย Google =====
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from './firebase'

// ข้อมูลผู้ใช้ที่แอปใช้
function toAccount(user) {
  return user
    ? { uid: user.uid, name: user.displayName ?? '', email: user.email ?? '', photo: user.photoURL ?? '' }
    : null
}

// ติดตามสถานะล็อกอิน (คืนฟังก์ชันเลิกติดตาม)
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
