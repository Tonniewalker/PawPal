import { useEffect, useLayoutEffect, useRef } from 'react'
import Toy from '../Toy'
import { TOY_REST, TOY_SIZE } from './index'

// ===== ของเล่นที่ปัดโยนได้ =====
// หน่วยเป็นพิกัดฉาก 390×760
const W = 390
const H = 760
const GRAVITY = 2200
const MAX_SPEED = 1800
const POWER = 0.6 // ตัวคูณแรงปัด
const BOUNCE = 0.45
const FRICTION = 3 // แรงเสียดทานตอนกลิ้งบนพื้น
const HALF = TOY_SIZE / 2

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

// onThrown({ type: 'gone', side }) เมื่อหลุดขอบจอ
// onThrown({ type: 'landed', x }) เมื่อหยุดในห้อง
// canGrab() คืน false = ยังจับไม่ได้
export default function ThrowToy({ species, label, sceneRef, canGrab, hidden, resetKey, onThrown }) {
  const elRef = useRef(null)
  const toy = useRef({ x: TOY_REST.x, y: TOY_REST.y, vx: 0, vy: 0, rot: 0, vr: 0, phase: 'rest' })
  const grab = useRef(null)
  const frame = useRef(0)
  const onThrownRef = useRef(onThrown)

  useEffect(() => {
    onThrownRef.current = onThrown
  })

  // วาดตำแหน่งปัจจุบัน
  function paint(settle = false) {
    const el = elRef.current
    if (!el) return
    const t = toy.current
    el.style.left = `${(t.x / W) * 100}%`
    el.style.top = `${((t.y - HALF) / H) * 100}%`
    el.style.transition = settle ? 'transform 0.25s' : 'none'
    el.style.transform = `translateX(-50%) rotate(${t.rot}deg)`
  }

  // วางกลับที่เดิม
  useLayoutEffect(() => {
    cancelAnimationFrame(frame.current)
    grab.current = null
    toy.current = { x: TOY_REST.x, y: TOY_REST.y, vx: 0, vy: 0, rot: 0, vr: 0, phase: 'rest' }
    paint()
  }, [resetKey])

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  function toScene(e) {
    const r = sceneRef.current.getBoundingClientRect()
    return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H }
  }

  function step(last) {
    frame.current = requestAnimationFrame((now) => {
      const t = toy.current
      if (t.phase !== 'flying') return
      const dt = Math.min(0.033, (now - last) / 1000)
      t.vy += GRAVITY * dt
      t.x += t.vx * dt
      t.y += t.vy * dt
      t.rot += t.vr * dt

      const onFloor = t.y >= TOY_REST.y
      if (onFloor) {
        t.y = TOY_REST.y
        if (Math.abs(t.vy) > 120) {
          t.vy = -t.vy * BOUNCE
          t.vx *= 0.75
          t.vr *= 0.6
        } else {
          t.vy = 0
          t.vx *= Math.exp(-FRICTION * dt)
          t.vr = t.vx * 1.2
        }
      }

      // หลุดขอบจอ
      if (t.x < -HALF || t.x > W + HALF) {
        t.phase = 'gone'
        paint()
        onThrownRef.current?.({ type: 'gone', side: t.x < 0 ? 'left' : 'right' })
        return
      }
      // หยุดนิ่งในห้อง
      if (onFloor && t.vy === 0 && Math.abs(t.vx) < 12) {
        t.phase = 'landed'
        t.rot = Math.round(t.rot / 180) * 180
        paint(true)
        onThrownRef.current?.({ type: 'landed', x: t.x })
        return
      }
      paint()
      step(now)
    })
  }

  function launch(vx, vy) {
    const t = toy.current
    const speed = Math.hypot(vx, vy)
    const k = speed > MAX_SPEED ? MAX_SPEED / speed : 1
    t.vx = vx * k
    t.vy = vy * k
    t.vr = t.vx * 0.8
    t.phase = 'flying'
    step(performance.now())
  }

  const handlers = {
    onPointerDown(e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      if (toy.current.phase !== 'rest' && toy.current.phase !== 'landed') return
      if (canGrab && !canGrab()) return
      e.preventDefault()
      e.currentTarget.setPointerCapture(e.pointerId)
      const p = toScene(e)
      const t = toy.current
      grab.current = { dx: t.x - p.x, dy: t.y - p.y, samples: [{ ...p, at: e.timeStamp }] }
      t.phase = 'held'
    },
    onPointerMove(e) {
      const g = grab.current
      if (!g || !e.currentTarget.hasPointerCapture(e.pointerId)) return
      const p = toScene(e)
      const t = toy.current
      t.x = clamp(p.x + g.dx, HALF, W - HALF)
      t.y = clamp(p.y + g.dy, HALF, TOY_REST.y)
      g.samples.push({ ...p, at: e.timeStamp })
      g.samples = g.samples.filter((s) => e.timeStamp - s.at <= 100)
      paint()
    },
    onPointerUp(e) {
      const g = grab.current
      if (!g) return
      grab.current = null
      const s = g.samples
      const first = s[0]
      const last = s[s.length - 1]
      const dt = (last.at - first.at) / 1000
      if (dt > 0.01 && e.timeStamp - last.at < 80) launch(((last.x - first.x) / dt) * POWER, ((last.y - first.y) / dt) * POWER)
      else launch(0, 0)
    },
    onPointerCancel() {
      if (!grab.current) return
      grab.current = null
      launch(0, 0)
    },
  }

  return (
    <div
      ref={elRef}
      {...handlers}
      role="img"
      aria-label={label}
      className={`absolute z-10 cursor-grab touch-none ${hidden ? 'invisible' : ''}`}
      style={{ width: `${(TOY_SIZE / W) * 100}%` }}
    >
      <Toy species={species} />
    </div>
  )
}
