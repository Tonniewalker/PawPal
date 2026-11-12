// ===== Firebase =====
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

export const auth = getAuth(app)

// Firestore พร้อม cache สำหรับออฟไลน์
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
})
