import { useEffect, useRef, useState } from 'react'

// ===== ไปคาบของเล่นกลับมา =====
// หน่วยเป็นพิกัดฉาก 390×760
const W = 390
export const PET_HOME = W / 2
const RUN_SPEED = 380 // ต่อวินาที
const OFF_SCREEN = 130 // ระยะเลยขอบจอตอนออกไปเก็บ
const AWAY_MS = 900 // เวลาที่หายไปนอกจอ
const PICK_MS = 350 // หยุดคาบของเล่น

export function useFetch({ active, onDone }) {
  const [pos, setPos] = useState({ x: PET_HOME, ms: 0 })
  const [running, setRunning] = useState(false)
  const [dir, setDir] = useState(1)
  const [carrying, setCarrying] = useState(false)
  const [toyHidden, setToyHidden] = useState(false)
  const [toyKey, setToyKey] = useState(0)
  const [busy, setBusy] = useState(false)

  const x = useRef(PET_HOME)
  const timers = useRef([])
  const onDoneRef = useRef(onDone)

  useEffect(() => {
    onDoneRef.current = onDone
  })

  function later(ms, fn) {
    timers.current.push(setTimeout(fn, ms))
  }

  function clearTimers() {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  function moveTo(target, then) {
    const ms = (Math.abs(target - x.current) / RUN_SPEED) * 1000
    setDir(target < x.current ? -1 : 1)
    x.current = target
    setPos({ x: target, ms })
    setRunning(ms > 0)
    later(ms, () => {
      setRunning(false)
      then()
    })
  }

  function drop() {
    setCarrying(false)
    setToyHidden(false)
    setToyKey((k) => k + 1)
    setBusy(false)
    onDoneRef.current?.()
  }

  // result จาก ThrowToy
  function onThrown(result) {
    setBusy(true)
    if (result.type === 'gone') {
      const target = result.side === 'left' ? -OFF_SCREEN : W + OFF_SCREEN
      moveTo(target, () => {
        setToyHidden(true)
        later(AWAY_MS, () => {
          setCarrying(true)
          moveTo(PET_HOME, drop)
        })
      })
    } else {
      moveTo(Math.min(W, Math.max(0, result.x)), () => {
        setToyHidden(true)
        setCarrying(true)
        later(PICK_MS, () => moveTo(PET_HOME, drop))
      })
    }
  }

  // ออกจากห้อง → กลับสภาพเดิม
  useEffect(() => {
    if (active) return
    clearTimers()
    x.current = PET_HOME
    setPos({ x: PET_HOME, ms: 0 })
    setRunning(false)
    setCarrying(false)
    setToyHidden(false)
    setToyKey((k) => k + 1)
    setBusy(false)
  }, [active])

  useEffect(() => clearTimers, [])

  return { pos, running, dir, carrying, toyHidden, toyKey, busy, onThrown }
}
