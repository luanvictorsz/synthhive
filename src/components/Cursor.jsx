import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const mx = useRef(0)
  const my = useRef(0)

  useEffect(() => {
    const move = (e) => {
      mx.current = e.clientX
      my.current = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top  = e.clientY + 'px'
      }
      setTimeout(() => {
        if (trailRef.current) {
          trailRef.current.style.left = mx.current + 'px'
          trailRef.current.style.top  = my.current + 'px'
        }
      }, 80)
    }

    const grow = () => { if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2.5)' }
    const shrink = () => { if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)' }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} style={styles.cursor} />
      <div ref={trailRef}  style={styles.trail}  />
    </>
  )
}

const styles = {
  cursor: {
    position: 'fixed',
    width: 16,
    height: 16,
    background: 'var(--yellow)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transition: 'transform 0.15s ease, opacity 0.2s',
    transform: 'translate(-50%, -50%)',
  },
  trail: {
    position: 'fixed',
    width: 40,
    height: 40,
    border: '1px solid var(--yellow)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
    opacity: 0.4,
    transition: 'transform 0.35s ease, opacity 0.2s',
    transform: 'translate(-50%, -50%)',
  },
}
