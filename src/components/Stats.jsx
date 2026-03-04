import { useEffect, useRef, useState } from 'react'
import { useBreakpoint } from '../hooks/useReveal'

const data = [
  { target: 20, label: 'Projetos Entregues' },
  { target: 15, label: 'Clientes Satisfeitos' },
  { target: 2,  label: 'Anos de Estúdio' },
  { target: 5,  label: 'Projetos em Desenvolvimento' },
]

function Counter({ target, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  const { isMobile } = useBreakpoint()

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let c = 0
        const step = Math.ceil(target / 60)
        const timer = setInterval(() => {
          c = Math.min(c + step, target)
          setCount(c)
          if (c >= target) clearInterval(timer)
        }, 30)
      }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} style={{ ...styles.item, padding: isMobile ? '40px 20px' : '60px 40px' }} className="reveal">
      <div style={{ ...styles.num, fontSize: isMobile ? '3rem' : '5rem' }}>
        {count}{target > 10 ? '+' : ''}
      </div>
      <p style={{ ...styles.label, fontSize: isMobile ? '0.6rem' : '0.65rem' }}>
        {label}
      </p>
    </div>
  )
}

export default function Stats() {
  const { isMobile, isDesktop } = useBreakpoint()

  return (
    <div style={{
      ...styles.grid,
      padding: isMobile ? '60px 24px' : '100px 48px',
      gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
    }}>
      {data.map((d, i) => <Counter key={i} {...d} />)}
    </div>
  )
}

const styles = {
  grid: { display: 'grid', gap: 12, position: 'relative', zIndex: 1 },
  item: { background: 'var(--mid)', textAlign: 'center', borderBottom: '3px solid transparent', transition: 'border-color 0.3s' },
  num: { fontFamily: "'Bebas Neue', sans-serif", color: 'var(--yellow)', lineHeight: 1, letterSpacing: 2 },
  label: { letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(232,232,232,0.4)', marginTop: 12 },
}