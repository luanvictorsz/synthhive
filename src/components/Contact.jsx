export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.bg} />
      <div style={styles.content}>
        <p style={styles.label}>// Vamos criar juntos</p>
        <h2 style={styles.title}>PRONTO PARA<br />BUZINAR?</h2>
        <p style={styles.sub}>
          Tem um projeto em mente? Uma ideia maluca? Uma deadline impossível?
          A gente adora desafios. Manda o brief.
        </p>
        <a href="mailto:eragondoledrag@gmail.com" style={styles.email}>
          fale com a gente
        </a>
        <a href="mailto:eragondoledrag@gmail.com" style={styles.btn}>
          Enviar Mensagem →
        </a>
      </div>
    </section>
  )
}

const hexBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34z' fill='none' stroke='%230A0A0A' stroke-width='1'/%3E%3Cpath d='M28 100L0 84V50l28-16 28 16v34z' fill='none' stroke='%230A0A0A' stroke-width='1'/%3E%3C/svg%3E")`

const styles = {
  section: { padding: '120px 48px', background: 'var(--yellow)', position: 'relative', overflow: 'hidden', zIndex: 1 },
  bg:      { position: 'absolute', inset: 0, backgroundImage: hexBg, opacity: 0.08 },
  content: { position: 'relative', zIndex: 2, maxWidth: 700 },
  label:   { fontSize: '0.65rem', letterSpacing: 5, color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', marginBottom: 16 },
  title:   { fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: 2, color: 'var(--black)', marginBottom: 24 },
  sub:     { fontSize: '0.8rem', color: 'rgba(0,0,0,0.6)', lineHeight: 1.8, marginBottom: 52 },
  email:   {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)',
    color: 'var(--black)', textDecoration: 'none', letterSpacing: 2, display: 'block',
    marginBottom: 48, borderBottom: '2px solid rgba(0,0,0,0.2)', paddingBottom: 16,
    transition: 'letter-spacing 0.3s',
  },
  btn: {
    background: 'var(--black)', color: 'var(--yellow)',
    padding: '16px 40px', fontFamily: "'Space Mono', monospace",
    fontSize: '0.75rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase',
    textDecoration: 'none', display: 'inline-block',
    clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
    transition: 'background 0.2s',
  },
}
