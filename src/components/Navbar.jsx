import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',        id: 'home'        },
  { label: 'About',       id: 'about'       },
  { label: 'Work',        id: 'work'        },
  { label: 'Photography', id: 'photography' },
  { label: 'Contact',     id: 'contact'     },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 70
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          padding: scrolled ? '12px 0' : '18px 0',
          background: 'rgba(245,250,250,0.96)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-light)',
          transition: 'padding 0.4s ease',
        }}
      >
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <motion.button whileHover={{ scale: 1.04 }} onClick={() => scrollTo('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <KolamLogo />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-teal)', letterSpacing: '0.05em' }}>KSC</span>
          </motion.button>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.id} link={link} active={activeSection === link.id} onClick={() => scrollTo(link.id)} />
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ display: 'none', width: '34px', height: '34px', borderRadius: '8px', border: '1px solid var(--border-medium)', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', background: 'transparent', cursor: 'pointer' }}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'fixed', inset: 0, zIndex: 400, background: '#F5FAFA', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.05, pointerEvents: 'none' }}>
              <BigKolam />
            </div>
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => { scrollTo(link.id); setMenuOpen(false) }}
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 8vw, 3.8rem)', fontWeight: activeSection === link.id ? 500 : 300, color: activeSection === link.id ? 'var(--accent-teal)' : 'var(--text-primary)', letterSpacing: '0.02em', display: 'block', textAlign: 'center', padding: '6px 24px', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} style={{ position: 'absolute', bottom: '36px', fontSize: '0.68rem', letterSpacing: '0.22em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Sai Charan Kuppala · Melbourne
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function NavItem({ link, active, onClick }) {
  return (
    <motion.button onClick={onClick} whileHover="hover" initial="rest" animate="rest" style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: active ? 500 : 400, letterSpacing: '0.06em', textTransform: 'uppercase', color: active ? 'var(--accent-teal)' : 'var(--text-secondary)', transition: 'color 0.25s ease', display: 'block' }}>
        {link.label}
      </span>
      <motion.span
        variants={{ rest: { scaleX: active ? 1 : 0, opacity: active ? 1 : 0 }, hover: { scaleX: 1, opacity: 1 } }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '1.5px', background: 'var(--accent-teal)', transformOrigin: 'left', borderRadius: '2px' }}
      />
    </motion.button>
  )
}

function KolamLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="2" fill="#0D9488" />
      <circle cx="13" cy="4"  r="1.1" fill="#0D9488" opacity="0.5" />
      <circle cx="13" cy="22" r="1.1" fill="#0D9488" opacity="0.5" />
      <circle cx="4"  cy="13" r="1.1" fill="#0D9488" opacity="0.5" />
      <circle cx="22" cy="13" r="1.1" fill="#0D9488" opacity="0.5" />
      <circle cx="6.7"  cy="6.7"  r="0.8" fill="#0D9488" opacity="0.3" />
      <circle cx="19.3" cy="6.7"  r="0.8" fill="#0D9488" opacity="0.3" />
      <circle cx="6.7"  cy="19.3" r="0.8" fill="#0D9488" opacity="0.3" />
      <circle cx="19.3" cy="19.3" r="0.8" fill="#0D9488" opacity="0.3" />
      <circle cx="13" cy="13" r="11" stroke="#0D9488" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 3" />
    </svg>
  )
}

function BigKolam() {
  return (
    <svg width="560" height="560" viewBox="0 0 560 560" fill="none">
      <circle cx="280" cy="280" r="260" stroke="#0D9488" strokeWidth="1"   strokeDasharray="8 8" />
      <circle cx="280" cy="280" r="190" stroke="#0D9488" strokeWidth="0.6" strokeDasharray="5 5" />
      <circle cx="280" cy="280" r="120" stroke="#0D9488" strokeWidth="0.5" strokeDasharray="3 3" />
      <circle cx="280" cy="280" r="50"  stroke="#0D9488" strokeWidth="0.5" />
      <line x1="20"  y1="280" x2="540" y2="280" stroke="#0D9488" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="280" y1="20"  x2="280" y2="540" stroke="#0D9488" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="96"  y1="96"  x2="464" y2="464" stroke="#0D9488" strokeWidth="0.4" strokeOpacity="0.3" />
      <line x1="464" y1="96"  x2="96"  y2="464" stroke="#0D9488" strokeWidth="0.4" strokeOpacity="0.3" />
    </svg>
  )
}
