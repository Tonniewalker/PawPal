import { useState } from 'react'

// ===== ลากของด้วยนิ้ว/เมาส์ =====
export function useDrag({ onMove, onDrop } = {}) {
  const [drag, setDrag] = useState(null)

  function bind(item) {
    return {
      onPointerDown(e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return
        e.preventDefault()
        e.currentTarget.setPointerCapture(e.pointerId)
        setDrag({ item, x: e.clientX, y: e.clientY })
        onMove?.(e.clientX, e.clientY, item, true)
      },
      onPointerMove(e) {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return
        setDrag({ item, x: e.clientX, y: e.clientY })
        onMove?.(e.clientX, e.clientY, item, false)
      },
      onPointerUp(e) {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return
        setDrag(null)
        onDrop?.(e.clientX, e.clientY, item)
      },
      onPointerCancel() {
        setDrag(null)
        onDrop?.(null, null, item)
      },
    }
  }

  return { drag, bind }
}

// จุด (x, y) อยู่ใน element ไหม
export function isInside(el, x, y) {
  if (!el || x == null) return false
  const r = el.getBoundingClientRect()
  return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
}
