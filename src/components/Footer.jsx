import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-light)',
        padding: '48px 0 40px',
        marginTop: '80px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '24px',
          }}
          className="footer-grid"
        >
          {/* Left */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Crafted with intention
            </p>
          </div>

          {/* Center */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginBottom: '8px' }}>
              <KolamDot />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'var(--accent-gold)',
                letterSpacing: '0.1em',
              }}>
                KSC
              </span>
              <KolamDot />
            </div>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              © {year} Sai Charan Kuppala
            </p>
          </div>

          {/* Right */}
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}>
              <FooterLink href="https://linkedin.com/in/kvscn/" label="LinkedIn" />
              <FooterLink href="https://github.com/" label="GitHub" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .footer-grid > div:first-child,
          .footer-grid > div:last-child {
            text-align: center !important;
          }
          .footer-grid > div:last-child > div {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  )
}

function FooterLink({ href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ color: 'var(--accent-gold)' }}
      style={{
        fontSize: '0.75rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        transition: 'color 0.2s ease',
      }}
    >
      {label}
    </motion.a>
  )
}

function KolamDot() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="1.5" fill="#0D9488" opacity="0.6" />
      <circle cx="5" cy="1" r="0.8" fill="#0D9488" opacity="0.3" />
      <circle cx="5" cy="9" r="0.8" fill="#0D9488" opacity="0.3" />
      <circle cx="1" cy="5" r="0.8" fill="#0D9488" opacity="0.3" />
      <circle cx="9" cy="5" r="0.8" fill="#0D9488" opacity="0.3" />
    </svg>
  )
}
