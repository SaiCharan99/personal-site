import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'
import SectionBreak from './components/SectionBreak'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Photography from './pages/Photography'
import Contact from './pages/Contact'

const SECTIONS = ['home', 'about', 'work', 'photography', 'contact']

export default function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Scrollspy — fires when section enters top quarter of viewport
  useEffect(() => {
    if (loading) return
    const observers = []
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-5% 0px -88% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [loading])

  if (loading) {
    return (
      <AnimatePresence>
        <Loader key="loader" />
      </AnimatePresence>
    )
  }

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar activeSection={activeSection} />

      <div id="home" className="page-section">
        <Home />
      </div>
      <div id="about" className="page-section">
        <SectionBreak number={2} label="About" />
        <About />
      </div>
      <div id="work" className="page-section">
        <SectionBreak number={3} label="Work" />
        <Work />
      </div>
      <div id="photography" className="page-section">
        <SectionBreak number={4} label="Photography" />
        <Photography />
      </div>
      <div id="contact" className="page-section">
        <SectionBreak number={5} label="Contact" />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
