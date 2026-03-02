import { useEffect, useRef, useState } from 'react'

export default function Nav() {
  const navRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        navRef.current.style.background =
          window.scrollY > 40
            ? 'rgba(10,10,10,0.95)'
            : 'transparent'
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        ...styles.nav,
        padding: isMobile ? '16px 24px' : '24px 48px',
      }}
    >
      <a href="#" style={styles.logo}>
        Synth<span style={{ color: 'var(--text)' }}>Hive</span>
      </a>

      {isMobile ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            style={styles.hamburger}
          >
            <span style={styles.bar}/>
            <span style={styles.bar}/>
            <span style={styles.bar}/>
          </button>

          {open && (
            <ul style={styles.mobileMenu}>
              {menuItems(setOpen)}
            </ul>
          )}
        </>
      ) : (
        <ul style={styles.ul}>
          {menuItems()}
        </ul>
      )}
    </nav>
  )
}

const menuItems = (close) =>
  ['#services', '#works', '#process'].map((href, i) => (
    <li key={i}>
      <a
        href={href}
        style={styles.link}
        onClick={() => close?.(false)}
      >
        {['Serviços', 'Portfólio', 'Processo'][i]}
      </a>
    </li>
  )).concat(
    <li key="contact">
      <a
        href="#contact"
        style={{ ...styles.link, ...styles.cta }}
        onClick={() => close?.(false)}
      >
        Contato
      </a>
    </li>
  )

const styles = {
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255,214,0,0.08)',
    transition: 'background 0.3s',
  },
  logo: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.8rem',
    letterSpacing: 4,
    color: 'var(--yellow)',
    textDecoration: 'none',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: 40,
    alignItems: 'center',
  },
  mobileMenu: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    background: 'rgba(10,10,10,0.98)',
    listStyle: 'none',
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text)',
    fontSize: '0.9rem',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  cta: {
    background: 'var(--yellow)',
    color: 'var(--black)',
    padding: '10px 24px',
    fontWeight: 700,
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    background: 'transparent',
    border: 'none',
  },
  bar: {
    width: 25,
    height: 3,
    background: 'var(--yellow)',
  },
}