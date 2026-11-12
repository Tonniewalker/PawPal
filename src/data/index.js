// ===== ข้อมูลและบัญชี =====
// localStore (Guest) และ createCloudStore(uid) มีฟังก์ชันชุดเดียวกัน
export { localStore, isGuest, setGuest } from './localStore'
export { createCloudStore } from './cloudStore'
export { watchAccount, signInWithGoogle, signOutAccount } from './auth'
export { authErrorMessage } from './authErrors'
