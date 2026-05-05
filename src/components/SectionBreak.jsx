import { motion } from 'framer-motion'

// Chapter-break divider placed at the start of each section (except Home).
// The line draws outward from the label as the break enters the viewport.
export default function SectionBreak({ number, label }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '36px var(--container-padding)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      gap: '0',
    }}>
      {/* Left arm — draws left from label */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to left, rgba(13,148,136,0.35), transparent)',
          transformOrigin: 'right',
        }}
      />

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.55 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '0 22px',
          flexShrink: 0,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.58rem',
          letterSpacing: '0.3em',
          color: 'rgba(13,148,136,0.45)',
          textTransform: 'uppercase',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {String(number).padStart(2, '0')}
        </span>

        {/* Kolam dot */}
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="1.5" fill="#0D9488" opacity="0.7" />
          <circle cx="4" cy="1" r="0.8" fill="#0D9488" opacity="0.3" />
          <circle cx="4" cy="7" r="0.8" fill="#0D9488" opacity="0.3" />
          <circle cx="1" cy="4" r="0.8" fill="#0D9488" opacity="0.3" />
          <circle cx="7" cy="4" r="0.8" fill="#0D9488" opacity="0.3" />
        </svg>

        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.62rem',
          letterSpacing: '0.28em',
          color: '#0D9488',
          textTransform: 'uppercase',
        }}>
          {label}
        </span>

        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="1.5" fill="#0D9488" opacity="0.7" />
          <circle cx="4" cy="1" r="0.8" fill="#0D9488" opacity="0.3" />
          <circle cx="4" cy="7" r="0.8" fill="#0D9488" opacity="0.3" />
          <circle cx="1" cy="4" r="0.8" fill="#0D9488" opacity="0.3" />
          <circle cx="7" cy="4" r="0.8" fill="#0D9488" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Right arm — draws right from label */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to right, rgba(13,148,136,0.35), transparent)',
          transformOrigin: 'left',
        }}
      />
    </div>
  )
}
