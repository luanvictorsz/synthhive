import { useEffect } from 'react'
import Cursor        from './components/Cursor'
import HexBackground from './components/HexBackground'
import Nav           from './components/Nav'
import Hero          from './components/Hero'
import Marquee       from './components/Marquee'
import Services      from './components/Services'
import Works         from './components/Works'
import Stats         from './components/Stats'
import Process       from './components/Process'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  useEffect(() => {
    const handleCursorGrow = (e) => {
      if (e.target.closest('a, button')) {
        document.querySelector('.cursor-dot')?.setAttribute('data-grow', 'true')
      }
    }
    document.addEventListener('mouseover', handleCursorGrow)
    return () => document.removeEventListener('mouseover', handleCursorGrow)
  }, [])

  return (
    <>
      <Cursor />
      <HexBackground />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        {/* <Services /> */}
        <Works />
        <Stats />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
