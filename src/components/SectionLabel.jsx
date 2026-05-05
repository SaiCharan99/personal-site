import { motion } from 'framer-motion'

export default function SectionLabel({ label, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
        marginBottom: '20px',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: '28px',
          height: '1px',
          background: 'var(--accent-gold)',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.65rem',
          fontWeight: 500,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--accent-gold)',
        }}
      >
        {label}
      </span>
      {align === 'center' && (
        <span
          style={{
            display: 'inline-block',
            width: '28px',
            height: '1px',
            background: 'var(--accent-gold)',
            flexShrink: 0,
          }}
        />
      )}
    </motion.div>
  )
}
