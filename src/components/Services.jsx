import { useState } from 'react'
import { useBreakpoint } from '../hooks/useReveal'

const services = [
  { num: '01', icon: '◈', name: 'Animação 2D & 3D', desc: 'Personagens, cenários e histórias que ganham vida. Da concept art à animação final, criamos com alma e intenção.' },
  { num: '02', icon: '⬡', name: 'Game Development', desc: 'Jogos indie, mobile e experiências interativas. Cada mechanic pensada para criar vício saudável e diversão genuína.' },
  { num: '03', icon: '▣', name: 'Motion Design', desc: 'Identidade em movimento. Vinhetas, comerciais, UI animation — o design que se mexe e comunica com precisão cirúrgica.' },
]

function ServiceCard({ num, icon, name, desc, delay }) {
  const [hovered, setHovered] = useState(false)
  const { isMobile } = useBreakpoint()

  return (
    <div
      style={{
        ...styles.card,
        borderTop: hovered && !isMobile ? '2px solid var(--yellow)' : '2px solid transparent',
      }}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      className={`reveal reveal-d${delay}`}
    >
      <div style={{
        ...styles.cardBg,
        transform: hovered && !isMobile ? 'translateY(0)' : 'translateY(100%)',
      }} />
      <p style={{ ...styles.num, position: 'relative', zIndex: 1 }}>{num}</p>
      <span style={{ ...styles.icon, position: 'relative', zIndex: 1 }}>{icon}</span>
      <h3 style={{ ...styles.name, position: 'relative', zIndex: 1 }}>{name}</h3>
      <p style={{ ...styles.desc, position: 'relative', zIndex: 1 }}>{desc}</p>
    </div>
  )
}

export default function Services() {
  const { isMobile, isTablet } = useBreakpoint()

  const columns = isMobile ? 1 : isTablet ? 2 : 3

  return (
    <section id="services" style={{
      ...styles.section,
      padding: isMobile ? '80px 24px' : '120px 48px'
    }}>
      <p className="reveal section-label" style={styles.label}>// O que fazemos</p>
      <h2 className="reveal reveal-d1" style={styles.title}>NOSSOS<br />SERVIÇOS</h2>
      <div style={{ ...styles.grid, gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} delay={(i % 3) + 1} />
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { position: 'relative', zIndex: 1 },
  label: { fontSize: '0.65rem', letterSpacing: 5, color: 'var(--yellow)', textTransform: 'uppercase', marginBottom: 16 },
  title: { fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 8vw, 5rem)', lineHeight: 1, letterSpacing: 2, marginBottom: 60 },
  grid: { display: 'grid', gap: 16 },
  card: { background: 'var(--mid)', padding: '40px 28px', transition: 'border-color 0.3s', position: 'relative', overflow: 'hidden' },
  cardBg: { position: 'absolute', inset: 0, background: 'var(--yellow)', transition: 'transform 0.4s ease', zIndex: 0 },
  num: { fontSize: '0.65rem', letterSpacing: 3, marginBottom: 30 },
  icon: { fontSize: '2.2rem', marginBottom: 20, display: 'block' },
  name: { fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', letterSpacing: 2, marginBottom: 12 },
  desc: { fontSize: '0.85rem', lineHeight: 1.6 },
}