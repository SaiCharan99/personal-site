import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import FloatingLeaves from '../components/FloatingLeaves'
import OceanWave from '../components/OceanWave'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 70
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <HighlightsSection />
      <CurrentSection />
    </>
  )
}

const GREETINGS = [
  { text: 'Hello',       label: 'English',  latin: true  },
  { text: 'నమస్కారం',   label: 'Telugu',   latin: false },
  { text: 'வணக்கம்',    label: 'Tamil',    latin: false },
  { text: 'नमस्ते',     label: 'Hindi',    latin: false },
  { text: 'Hola',        label: 'Spanish',  latin: true  },
  { text: 'こんにちは',  label: 'Japanese', latin: false },
]

function CyclingGreeting() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % GREETINGS.length), 2400)
    return () => clearInterval(id)
  }, [])

  const g = GREETINGS[idx]

  return (
    <div style={{ overflow: 'hidden', height: '1.2em', display: 'flex', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: g.latin ? 'var(--font-body)' : 'inherit',
            fontSize: g.latin ? '0.7rem' : '0.85rem',
            letterSpacing: g.latin ? '0.3em' : '0.04em',
            textTransform: g.latin ? 'uppercase' : 'none',
            color: '#0D9488',
            display: 'block',
            whiteSpace: 'nowrap',
            lineHeight: 1.2,
          }}
        >
          {g.text}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px', background: 'linear-gradient(160deg, #F5FAFA 0%, #EAF4F3 60%, #D4EDEA 100%)' }}>
      <div style={{ position: 'absolute', right: '-4%', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.06 }}>
        <HeroKolam />
      </div>
      <div style={{ position: 'absolute', left: 'var(--container-padding)', top: '18%', bottom: '18%', width: '1px', background: 'linear-gradient(to bottom, transparent, #0D9488 30%, #0D9488 70%, transparent)', opacity: 0.3 }} />
      <FloatingLeaves count={14} />
      <motion.div style={{ y, opacity }} className="container">
        <div style={{ paddingLeft: 'clamp(0px, 4vw, 60px)', position: 'relative', zIndex: 3 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#0D9488' }} />
            <CyclingGreeting />
          </motion.div>
          <div style={{ overflow: 'hidden', marginBottom: '2px' }}>
            <motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8.5vw, 8rem)', fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Venkata
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '2px' }}>
            <motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.38 }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8.5vw, 8rem)', fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              <span style={{ color: '#0D9488' }}>Sai</span> Charan Naidu
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
            <motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.48 }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8.5vw, 8rem)', fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Kuppala
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
            {['Software Engineer', 'Iaido Practitioner', 'Photographer', 'South Indian Culture'].map(tag => (
              <span key={tag} style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 14px', border: '1px solid rgba(13,148,136,0.25)', borderRadius: '40px', color: '#2E6E78', background: 'rgba(13,148,136,0.06)' }}>{tag}</span>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.82 }} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.button onClick={() => scrollTo('work')} whileHover={{ scale: 1.03, backgroundColor: '#14B8A6' }} whileTap={{ scale: 0.97 }} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', background: '#0D9488', color: '#fff', borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', border: 'none' }}>
                View My Work <ArrowRight size={14} />
            </motion.button>
            <motion.button onClick={() => scrollTo('about')} whileHover={{ color: '#0D9488' }} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 4px', fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2E6E78', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '1px solid rgba(13,148,136,0.25)', transition: 'color 0.2s ease' }}>
                About Me <ArrowDownRight size={14} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} style={{ position: 'absolute', bottom: '80px', left: 0, right: 0, padding: '0 var(--container-padding)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 3 }} className="container">
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: '#7FB5BC', textTransform: 'uppercase' }}>Melbourne, Australia</span>
        <ScrollIndicator />
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: '#7FB5BC', textTransform: 'uppercase' }}>M.IT · UniMelb 25</span>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4 }}>
        <OceanWave color="var(--bg-primary)" height={70} />
      </div>
    </section>
  )
}

function ScrollIndicator() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: '#7FB5BC', textTransform: 'uppercase' }}>Scroll</span>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #0D9488, transparent)' }} />
    </div>
  )
}

function IntroSection() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <WavingEdgeLeaves />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'start' }} className="intro-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#0D9488', marginBottom: '20px' }}>— Introduction</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InfoRow label="Based in"  value="Melbourne, AU" />
              <InfoRow label="Education" value="M.IT, UniMelb" />
              <InfoRow label="Focus"     value="Mobile & Web Engineering" />
              <InfoRow label="Practice"  value="Iaido · Photography" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: 0.15 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', fontWeight: 400, lineHeight: 1.4, color: 'var(--text-primary)', marginBottom: '28px' }}>
              I build things with care — software that feels intuitive, photographs that hold a moment, and movements in Iaido that embody{' '}
              <em style={{ color: '#0D9488', fontStyle: 'italic' }}>zanshin</em>.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              A software engineer with 3+ years of professional experience building mobile applications, currently pursuing a Masters at the University of Melbourne. Deeply rooted in South Indian culture — its art, music, and philosophy guide how I approach both code and life.
            </p>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:700px){.intro-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

function InfoRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
      <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{label}</span>
      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{value}</span>
    </div>
  )
}

function HighlightsSection() {
  const items = [
    { number: '3+', label: 'Years Engineering', description: 'Professional software development across mobile and web platforms in India and Australia.' },
    { number: '01', label: 'Iaido & Zen',       description: 'Practicing the way of the sword — discipline, presence, and purposeful motion. Zanshin.' },
    { number: '∞',  label: 'Frames Captured',   description: 'Finding beauty in South Indian temples, landscapes, and quiet human moments.' },
  ]
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <OceanWave color="var(--bg-secondary)" height={60} />
      <div style={{ background: 'var(--bg-secondary)', padding: 'clamp(40px,6vw,80px) 0', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', opacity: 0.06 }}>
          <BgLeafPattern />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px, 4vw, 60px)' }} className="highlights-grid">
            {items.map((h, i) => (
              <motion.div key={h.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: i * 0.12 }} style={{ padding: 'clamp(24px, 4vw, 40px)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '4px', background: '#0D9488', borderRadius: '50%', opacity: 0.5 }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, color: '#0D9488', marginBottom: '12px', letterSpacing: '-0.02em', lineHeight: 1 }}>{h.number}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '10px' }}>{h.label}</div>
                <p style={{ fontSize: '0.83rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>{h.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <OceanWave color="var(--bg-secondary)" flip height={60} />
      <style>{`@media(max-width:700px){.highlights-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

function CurrentSection() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(30px, 6vw, 80px)', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 280px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#0D9488', marginBottom: '20px' }}>— Currently</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '24px' }}>
              Building,<br /><em style={{ color: '#0D9488' }}>learning,</em><br />practicing.
            </h2>
          </div>
          <div style={{ flex: '2 1 360px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {[
              { status: 'Intern',    role: 'Mobile App Developer',              company: 'Focus Bear, Melbourne',                           period: 'Mar 2025 – Present',  color: '#047857' },
              { status: 'Student',   role: 'Masters of Information Technology', company: 'University of Melbourne',                          period: 'Feb 2024 – Dec 2025', color: '#0369A1' },
              { status: 'President', role: 'IHGSA Inc.',                        company: 'International House Graduate Student Association',  period: 'Sep 2024 – Present',  color: '#0F766E' },
            ].map((item, i) => (
              <motion.div key={item.role} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ x: 4 }} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--border-light)', cursor: 'default' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: item.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.color }}>{item.status}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2px' }}>{item.role}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.company}</div>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.05em', flexShrink: 0 }}>{item.period}</div>
              </motion.div>
            ))}
            <div style={{ marginTop: '32px' }}>
              <motion.button onClick={() => scrollTo('work')} whileHover={{ x: 6 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0D9488', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                  See full experience <ArrowRight size={14} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WavingEdgeLeaves() {
  const c = '#0D9488'
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      <div style={{ position: 'absolute', left: '-20px', top: '10%',   animation: 'leaf-sway-slow 5s 0s ease-in-out infinite',   transformOrigin: 'left center', opacity: 0.15 }}><LeafSVG color={c} s={1.2} /></div>
      <div style={{ position: 'absolute', left: '-30px', bottom: '15%',animation: 'leaf-sway-slow 6.5s 1s ease-in-out infinite', transformOrigin: 'left center', opacity: 0.11 }}><LeafSVG color={c} s={0.9} /></div>
      <div style={{ position: 'absolute', right: '-20px', top: '30%',  animation: 'leaf-sway-slow 4.8s 0.5s ease-in-out infinite',transformOrigin: 'right center', transform: 'scaleX(-1)', opacity: 0.15 }}><LeafSVG color={c} s={1.0} /></div>
      <div style={{ position: 'absolute', right: '-10px', bottom: '25%',animation: 'leaf-sway-slow 7s 1.8s ease-in-out infinite',  transformOrigin: 'right center', transform: 'scaleX(-1)', opacity: 0.10 }}><LeafSVG color={c} s={1.3} /></div>
    </div>
  )
}

function LeafSVG({ color, s = 1 }) {
  return (
    <svg width={80*s} height={120*s} viewBox="0 0 80 120" fill="none">
      <path d="M40,120 C40,120 5,90 5,55 C5,25 20,10 40,8 C60,10 75,25 75,55 C75,90 40,120 40,120 Z" fill={color} />
      <line x1="40" y1="120" x2="40" y2="8" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
    </svg>
  )
}

function BgLeafPattern() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="xMidYMid slice">
      {[200, 400, 600, 800, 1000].map((cx, i) => (
        <ellipse key={cx} cx={cx} cy={180+(i%2)*60} rx="80" ry="140" fill="#0D9488" opacity="0.8" transform={`rotate(${-20+i*12} ${cx} ${180+(i%2)*60})`} />
      ))}
    </svg>
  )
}

function HeroKolam() {
  return (
    <svg width="700" height="700" viewBox="0 0 700 700" fill="none">
      {[280,220,160,100,50].map((r,i) => <circle key={r} cx="350" cy="350" r={r} stroke="#0D9488" strokeWidth="0.8" strokeDasharray={`${6-i} ${6-i}`} />)}
      <line x1="70"  y1="350" x2="630" y2="350" stroke="#0D9488" strokeWidth="0.5" />
      <line x1="350" y1="70"  x2="350" y2="630" stroke="#0D9488" strokeWidth="0.5" />
      <line x1="152" y1="152" x2="548" y2="548" stroke="#0D9488" strokeWidth="0.5" />
      <line x1="548" y1="152" x2="152" y2="548" stroke="#0D9488" strokeWidth="0.5" />
      {[0,45,90,135,180,225,270,315].map(a => { const r=a*Math.PI/180; return <circle key={a}   cx={350+280*Math.cos(r)} cy={350+280*Math.sin(r)} r="4"   fill="#0D9488" opacity="0.6" /> })}
      {[0,45,90,135,180,225,270,315].map(a => { const r=a*Math.PI/180; return <circle key={a+'i'} cx={350+160*Math.cos(r)} cy={350+160*Math.sin(r)} r="2.5" fill="#0D9488" opacity="0.4" /> })}
      <circle cx="350" cy="350" r="8" fill="#0D9488" opacity="0.7" />
    </svg>
  )
}
