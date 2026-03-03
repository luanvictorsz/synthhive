import { useState, useEffect } from 'react'

import aeternus from '../assets/projetos/aeternuspoison.png'
import hexfall from '../assets/projetos/hexfall.png'
import egito from '../assets/projetos/egito.png'
import skiter from '../assets/projetos/skiter.png'
import fennec from '../assets/projetos/fennecFrenzy.png'

const works = [
  {
    tag: 'Thumbnail',
    title: 'AETERNUS POISON',
    image: aeternus,
    span: true,
  },
  {
    tag: 'Game Development',
    title: 'HEXFALL',
    image: hexfall,
  },
  {
    tag: 'Animação 3D',
    title: 'EGITO - SÉRIE ANIMADA',
    image: egito,
  },
  {
    tag: 'Visualizer',
    title: 'SKITER - MUSIC VIDEO',
    image: skiter,
  },
  {
    tag: 'Game Development',
    title: 'Fennec Frenzy',
    image: fennec,
  },
]

export default function Works() {
  const [layout, setLayout] = useState('desktop')

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 768) setLayout('mobile')
      else if (w < 1024) setLayout('tablet')
      else setLayout('desktop')
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = layout === 'mobile'
  const isTablet = layout === 'tablet'

  return (
    <section
      id="works"
      style={{
        ...styles.section,
        padding: isMobile ? '80px 24px' : '120px 48px',
      }}
    >
      <div
        style={{
          ...styles.header,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          gap: isMobile ? 24 : 0,
        }}
      >
        <div>
          <p style={styles.label}>// Portfólio</p>
          <h2 style={styles.title}>
            NOSSO
            <br />
            TRABALHO
          </h2>
        </div>

        <a href="#contact" style={styles.btnOutline}>
          Ver Tudo →
        </a>
      </div>

      <div
        style={{
          ...styles.grid,
          ...(isMobile && styles.gridMobile),
          ...(isTablet && styles.gridTablet),
        }}
      >
        {works.map((w, i) => (
          <div
            key={i}
            style={{
              ...styles.item,
              gridRow:
                layout === 'desktop' && w.span ? 'span 2' : undefined,
              height: isMobile ? 280 : undefined,
            }}
          >
            <div style={styles.bg}>
              <img
                src={w.image}
                alt={w.title}
                style={styles.image}
              />
            </div>

            <div style={styles.overlay}>
              <p style={styles.tag}>{w.tag}</p>
              <h3 style={styles.workTitle}>{w.title}</h3>
            </div>

            {!isMobile && <div style={styles.deco} />}
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '120px 48px',
    background: 'var(--dark)',
    position: 'relative',
    zIndex: 1,
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 60,
  },

  label: {
    fontSize: '0.65rem',
    letterSpacing: 5,
    color: 'var(--yellow)',
    textTransform: 'uppercase',
    marginBottom: 16,
  },

  title: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    lineHeight: 1,
    letterSpacing: 2,
  },

  btnOutline: {
    border: '1px solid rgba(255,214,0,0.4)',
    color: 'var(--yellow)',
    padding: '16px 40px',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: 3,
    textTransform: 'uppercase',
    background: 'transparent',
    textDecoration: 'none',
    display: 'inline-block',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gridTemplateRows: '340px 240px',
    gap: 4,
  },

  gridTablet: {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '300px 300px',
    gap: 8,
  },

  gridMobile: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    gap: 16,
  },

  item: {
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--mid)',
  },

  bg: {
    position: 'absolute',
    inset: 0,
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 32,
  },

  tag: {
    fontSize: '0.6rem',
    letterSpacing: 3,
    color: 'var(--yellow)',
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  workTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.6rem',
    letterSpacing: 2,
  },

  deco: {
    position: 'absolute',
    top: 24,
    right: 24,
    width: 50,
    height: 50,
    border: '1px solid rgba(255,214,0,0.3)',
  },
}