// ===== เชื่อมต่อ Firebase (ใช้ 2 อย่าง: Authentication + Firestore) =====
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAT79ly2RlwAjlNmsOwjbfCnqhdOYx0mtE',
  authDomain: 'pawpal-project-d4bbe.firebaseapp.com',
  projectId: 'pawpal-project-d4bbe',
  storageBucket: 'pawpal-project-d4bbe.firebasestorage.app',
  messagingSenderId: '184042691285',
  appId: '1:184042691285:web:50ded082882aabc744a05c',
}

export const app = initializeApp(firebaseConfig)

// Auth จำการล็อกอินไว้ในเครื่องเอง ปิดแอปแล้วเปิดใหม่ยังล็อกอินอยู่
export const auth = getAuth(app)

// Firestore แบบมี cache ในเครื่อง: ออฟไลน์ก็ยังอ่านข้อมูลล่าสุดได้
// และสิ่งที่บันทึกตอนออฟไลน์จะถูกส่งขึ้นคลาวด์เองเมื่อกลับมาออนไลน์
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
})
