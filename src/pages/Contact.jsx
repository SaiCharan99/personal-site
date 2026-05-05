import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MapPin, ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  )
}

function ContactHero() {
  return (
    <section style={{
      padding: 'clamp(60px, 10vw, 120px) 0 clamp(40px, 6vw, 80px)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div className="container">
        <SectionLabel label="Contact" />
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(40px, 6vw, 80px)', marginTop: '24px', alignItems: 'end' }} className="contact-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              Let's<br />
              <em style={{ color: 'var(--accent-gold)' }}>connect.</em>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '28px' }}>
              Whether it's a project collaboration, a conversation about software, Iaido, or
              South Indian culture — I'd love to hear from you.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '8px' }}>
              <MapPin size={14} />
              <span style={{ fontSize: '0.85rem' }}>Melbourne, Victoria, Australia</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2A9D4A', flexShrink: 0 }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Available for opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .contact-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Open email client as fallback (no backend needed for static portfolio)
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:saicharanactive@gmail.com?subject=${subject}&body=${body}`)
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 500)
  }

  const links = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'saicharanactive@gmail.com',
      href: 'mailto:saicharanactive@gmail.com',
      description: 'Best for professional enquiries',
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kvscn',
      href: 'https://linkedin.com/in/kvscn/',
      description: 'Connect professionally',
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      value: 'github.com',
      href: 'https://github.com',
      description: 'View my code',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(40px, 8vw, 80px)' }} className="contact-main-grid">

          {/* Left: contact links */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel label="Reach Out" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '24px' }}>
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '20px 0',
                      borderBottom: '1px solid var(--border-light)',
                      color: 'inherit',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold)',
                      flexShrink: 0,
                    }}>
                      {link.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>
                        {link.label}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        {link.value}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {link.description}
                      </div>
                    </div>
                    <ArrowUpRight size={14} color="var(--text-muted)" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative kolam */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: '48px', opacity: 0.12 }}
            >
              <ContactKolam />
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel label="Send a Message" />
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '24px',
                  padding: '48px 32px',
                  border: '1px solid rgba(13,148,136,0.3)',
                  borderRadius: '4px',
                  textAlign: 'center',
                  background: 'rgba(13,148,136,0.04)',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✦</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--accent-gold)', marginBottom: '12px' }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Your email client should have opened. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    marginTop: '24px',
                    padding: '10px 24px',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    background: 'transparent',
                    color: 'var(--text-secondary)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  marginTop: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <FormField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <FormField
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
                <FormField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me what's on your mind..."
                  multiline
                  required
                />
                <div style={{ paddingTop: '8px' }}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: 'var(--accent-gold-light)' }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'sending'}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '14px 32px',
                      background: 'var(--accent-gold)',
                      color: '#fff',
                      borderRadius: '4px',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: status === 'sending' ? 'wait' : 'pointer',
                      border: 'none',
                      fontFamily: 'var(--font-body)',
                      opacity: status === 'sending' ? 0.7 : 1,
                    }}
                  >
                    <Send size={14} />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-main-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function FormField({ label, name, type = 'text', value, onChange, placeholder, multiline, required }) {
  const [focused, setFocused] = useState(false)

  const baseStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'var(--bg-secondary)',
    border: '1px solid',
    borderColor: focused ? 'var(--accent-gold)' : 'var(--border-medium)',
    borderRadius: '4px',
    fontSize: '0.875rem',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    resize: 'vertical',
  }

  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: '0.65rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: focused ? 'var(--accent-gold)' : 'var(--text-muted)',
        marginBottom: '8px',
        fontWeight: 500,
        transition: 'color 0.2s ease',
      }}>
        {label} {required && <span style={{ color: 'var(--accent-gold)' }}>*</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      )}
    </div>
  )
}

function ContactKolam() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
      {[80, 60, 40, 20].map(r => (
        <circle key={r} cx="100" cy="100" r={r} stroke="#0D9488" strokeWidth="1" strokeDasharray="5 5" />
      ))}
      <circle cx="100" cy="100" r="5" fill="#0D9488" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="#0D9488" strokeWidth="0.8" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="#0D9488" strokeWidth="0.8" />
      <line x1="43" y1="43" x2="157" y2="157" stroke="#0D9488" strokeWidth="0.5" />
      <line x1="157" y1="43" x2="43" y2="157" stroke="#0D9488" strokeWidth="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180
        const x = 100 + 80 * Math.cos(rad)
        const y = 100 + 80 * Math.sin(rad)
        return <circle key={angle} cx={x} cy={y} r="3" fill="#0D9488" opacity="0.6" />
      })}
    </svg>
  )
}
