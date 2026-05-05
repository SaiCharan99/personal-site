import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'fixed', inset: 0, background: '#09242C', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, flexDirection: 'column', gap: '32px' }}
    >
      {/* Animated ocean background */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', height: '180px', opacity: 0.15 }}>
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" style={{ width: '200%', height: '100%', animation: 'wave-translate-1 6s linear infinite' }}>
          <path d="M0,60 C180,30 360,90 540,60 C720,30 900,90 1080,60 C1260,30 1440,90 1620,60 C1800,30 1980,90 2160,60 C2340,30 2520,90 2700,60 C2880,30 2880,60 2880,60 L2880,180 L0,180 Z" fill="#0D9488" />
        </svg>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
        <KolamSymbol />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 300, color: '#14B8A6', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
        KSC
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', color: '#4E8C94', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
        Venkata Sai Charan Naidu Kuppala
      </motion.div>

      <motion.div style={{ width: '160px', height: '1px', background: 'rgba(13,184,166,0.15)', position: 'relative', overflow: 'hidden', marginTop: '8px' }}>
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #0F766E, #0D9488, #14B8A6)', transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
  )
}

function KolamSymbol() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <motion.circle cx="30" cy="30" r="28" stroke="#0D9488" strokeWidth="0.5" strokeDasharray="4 4" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '30px 30px' }} />
      <circle cx="30" cy="30" r="4" fill="#14B8A6" opacity="0.9" />
      <circle cx="30" cy="10" r="2" fill="#0D9488" opacity="0.5" />
      <circle cx="30" cy="50" r="2" fill="#0D9488" opacity="0.5" />
      <circle cx="10" cy="30" r="2" fill="#0D9488" opacity="0.5" />
      <circle cx="50" cy="30" r="2" fill="#0D9488" opacity="0.5" />
      <circle cx="15.86" cy="15.86" r="1.5" fill="#0D9488" opacity="0.35" />
      <circle cx="44.14" cy="15.86" r="1.5" fill="#0D9488" opacity="0.35" />
      <circle cx="15.86" cy="44.14" r="1.5" fill="#0D9488" opacity="0.35" />
      <circle cx="44.14" cy="44.14" r="1.5" fill="#0D9488" opacity="0.35" />
      <line x1="30" y1="2"  x2="30" y2="58" stroke="#0D9488" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="2"  y1="30" x2="58" y2="30" stroke="#0D9488" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="8"  y1="8"  x2="52" y2="52" stroke="#0D9488" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="52" y1="8"  x2="8"  y2="52" stroke="#0D9488" strokeWidth="0.3" strokeOpacity="0.2" />
    </svg>
  )
}
