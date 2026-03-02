const items = [
  'ANIMAÇÃO 2D', '◆', 'MOTION DESIGN', '◆', 'GAME DEVELOPMENT',
  '◆', '3D ANIMATION', '◆', 'VFX & COMPOSITING', '◆', 'SOUND DESIGN', '◆',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={styles.wrapper}>
      <div style={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} style={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    background: 'var(--yellow)',
    padding: '16px 0',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 2,
  },
  track: {
    display: 'flex',
    animation: 'marquee 20s linear infinite',
    whiteSpace: 'nowrap',
  },
  item: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.2rem',
    letterSpacing: 4,
    color: 'var(--black)',
    padding: '0 48px',
    flexShrink: 0,
  },
}
