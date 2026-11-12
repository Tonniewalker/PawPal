// ===== ที่เก็บข้อมูลบนคลาวด์ (Firestore) แยกตามบัญชี =====
// โครงสร้างข้อมูล:
//   users/{uid}                 → { pet, updatedAt }
//   users/{uid}/diary/{entryId} → { type, text, at }
// มีฟังก์ชันชุดเดียวกับ localStore.js ทุกอย่าง App.jsx เลยใช้ได้เหมือนกัน
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  writeBatch,
} from 'firebase/firestore'
import { DIARY_LIMIT } from '../config'
import { normalizePet } from '../petLogic'
import { db } from './firebase'

// รอให้ server ยืนยันการบันทึก แต่ไม่เกิน ms มิลลิวินาที
// (ตอนออฟไลน์ Firestore เก็บไว้ในเครื่องแล้วส่งทีหลังเอง ไม่ต้องรอจนค้าง)
function settle(promise, ms = 2500) {
  // ถ้าบันทึกพลาดหลังหมดเวลารอ ยังต้องแจ้งใน console (ไม่ปล่อยเป็น error ลอย ๆ)
  promise.catch((err) => console.error('Firestore บันทึกไม่สำเร็จ', err))
  return Promise.race([promise, new Promise((resolve) => setTimeout(resolve, ms))])
}

// Firestore ให้เขียนได้ไม่เกิน 500 รายการต่อ batch → แบ่งเป็นก้อน ๆ
async function commitInChunks(items, apply) {
  for (let i = 0; i < items.length; i += 400) {
    const batch = writeBatch(db)
    items.slice(i, i + 400).forEach((item) => apply(batch, item))
    await settle(batch.commit())
  }
}

export function createCloudStore(uid) {
  const userRef = doc(db, 'users', uid)
  const diaryRef = collection(userRef, 'diary')

  return {
    async loadGame() {
      const [userSnap, diarySnap] = await Promise.all([
        getDoc(userRef),
        getDocs(query(diaryRef, orderBy('at', 'desc'), limit(DIARY_LIMIT))),
      ])
      return {
        pet: normalizePet(userSnap.data()?.pet ?? null),
        diary: diarySnap.docs.map((d) => ({ id: d.id, ...d.data() })),
      }
    },

    savePet(pet) {
      return settle(setDoc(userRef, { pet, updatedAt: serverTimestamp() }))
    },

    addDiaryEntries(entries) {
      const batch = writeBatch(db)
      for (const { id, ...entry } of entries) {
        // ใช้ id เดิมของรายการ (ถ้าไม่มีให้ Firestore สร้างให้)
        batch.set(id ? doc(diaryRef, String(id)) : doc(diaryRef), entry)
      }
      return settle(batch.commit())
    },

    async shiftDiaryTimes(ms) {
      const snap = await getDocs(diaryRef)
      await commitInChunks(snap.docs, (batch, d) => batch.update(d.ref, { at: d.data().at - ms }))
    },

    async resetGame() {
      const snap = await getDocs(diaryRef)
      await commitInChunks(snap.docs, (batch, d) => batch.delete(d.ref))
      await settle(deleteDoc(userRef))
    },
  }
}
