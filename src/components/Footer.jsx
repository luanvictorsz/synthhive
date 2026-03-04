import { useBreakpoint } from '../hooks/useReveal'

export default function Footer() {
  const { isMobile } = useBreakpoint()

  return (
    <footer style={{
      ...styles.footer,
      padding: isMobile ? '40px 24px' : '48px',
      flexDirection: isMobile ? 'column' : 'row',
      textAlign: isMobile ? 'center' : 'left',
      gap: isMobile ? 32 : 0,
    }}>
      <a href="#" style={styles.logo}>
        Synth<span style={{ color: 'var(--text)' }}>Hive</span>
      </a>

      <div style={{
        ...styles.links,
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        gap: isMobile ? 16 : 32,
      }}>
        {['Instagram', 'Behance', 'LinkedIn', 'YouTube'].map((s) => (
          <a key={s} href="#" style={styles.link}>{s}</a>
        ))}
      </div>

      <p style={styles.copy}>© 2026 SynthHive Studio</p>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'var(--black)',
    borderTop: '1px solid rgba(255,214,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
  },
  logo: { fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: 4, color: 'var(--yellow)', textDecoration: 'none' },
  links: { display: 'flex' },
  link: { fontSize: '0.65rem', letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(232,232,232,0.3)', textDecoration: 'none', transition: 'color 0.2s' },
  copy: { fontSize: '0.65rem', color: 'rgba(232,232,232,0.2)', letterSpacing: 2 },
}