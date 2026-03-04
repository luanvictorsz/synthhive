import { useBreakpoint } from "../hooks/useReveal"

export default function Hero() {
  const { isMobile } = useBreakpoint()

  return (
    <section style={{
      ...styles.hero,
      flexDirection: isMobile ? 'column' : 'row',
      padding: isMobile ? '120px 24px 60px' : '140px 48px 80px'
    }}>
      <div style={{
        ...styles.content,
        textAlign: isMobile ? 'center' : 'left'
      }}>
        <p style={styles.tag}>// Studio de Audiovisual & Jogos</p>

        <h1 style={{
          ...styles.h1,
          fontSize: isMobile ? 'clamp(3rem, 10vw, 5rem)' : styles.h1.fontSize
        }}>
          NÓS<br />CRIAMOS<br />
          <em style={{ fontStyle: 'normal', color: 'var(--yellow)', display: 'block' }}>
            MUNDOS.
          </em>
        </h1>

        <p style={{
          ...styles.sub,
          margin: isMobile ? '32px auto 0' : styles.sub.margin,
        }}>
          Animações que prendem seu olhar. Jogos que você não quer parar de jogar.
          A SynthHive transforma ideias em experiências digitais que ficam na sua cabeça.
        </p>

        <div style={{
          ...styles.btns,
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          <a href="#works" style={styles.btnPrimary}>Ver Portfólio</a>
          <a href="#contact" style={styles.btnOutline}>Falar com a Gente</a>
        </div>
      </div>

      {!isMobile && (
        <div style={styles.visual}>
          <div style={styles.centerHex}>
            <div style={styles.centerHexInner}>
              SYNTH<br />HIVE
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

const btnBase = {
  padding: '16px 40px',
  fontFamily: "'Space Mono', monospace",
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: 3,
  textTransform: 'uppercase',
  textDecoration: 'none',
  display: 'inline-block',
  clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
  transition: 'transform 0.2s, background 0.2s',
}

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  },
  content: { maxWidth: 800, position: 'relative', zIndex: 2 },
  tag: {
    fontSize: '0.65rem',
    letterSpacing: 5,
    textTransform: 'uppercase',
    color: 'var(--yellow)',
    marginBottom: 28,
    animation: 'fadeUp 0.8s 0.2s both',
  },
  h1: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(5rem, 12vw, 11rem)',
    lineHeight: 0.9,
    letterSpacing: 2,
    color: 'var(--text)',
    animation: 'fadeUp 0.8s 0.4s both',
  },
  sub: {
    marginTop: 40,
    fontSize: '0.85rem',
    lineHeight: 1.8,
    maxWidth: 480,
    color: 'rgba(232,232,232,0.6)',
    animation: 'fadeUp 0.8s 0.6s both',
  },
  btns: {
    marginTop: 52,
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
    animation: 'fadeUp 0.8s 0.8s both',
  },
  btnPrimary: { ...btnBase, background: 'var(--yellow)', color: 'var(--black)' },
  btnOutline: { ...btnBase, border: '1px solid rgba(255,214,0,0.4)', color: 'var(--yellow)', background: 'transparent' },
  visual: {
    position: 'absolute',
    right: -80,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 600,
    height: 600,
    animation: 'fadeIn 1.2s 1s both',
  },
  centerHex: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 160,
    height: 160,
    background: 'var(--yellow)',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translate(-50%, -50%)',
    animation: 'pulse 3s ease-in-out infinite',
  },
  centerHexInner: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.6rem',
    color: 'var(--black)',
    letterSpacing: 2,
    textAlign: 'center',
    lineHeight: 1.1,
  },
}