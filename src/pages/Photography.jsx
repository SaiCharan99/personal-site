import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import OceanWave from '../components/OceanWave'
import FloatingLeaves from '../components/FloatingLeaves'

// Gallery data — add your files to public/assets/photographs/{category}/
// See public/assets/README.md for naming conventions.
// The `file` path is relative to public/assets/photographs/.
// Leave `file` as null (or omit it) to keep the colour placeholder.
const photos = [
  { id: 1, title: 'Temple at Dawn',        location: 'Andhra Pradesh, India',   category: 'Temple',    aspect: '4/5',  color: '#8B4513', file: 'temple/temple-01.jpg' },
  { id: 2, title: 'Kolam Maker',           location: 'Chennai, Tamil Nadu',      category: 'Portrait',  aspect: '3/4',  color: '#0D9488', file: 'portrait/portrait-01.jpg' },
  { id: 3, title: 'Festival Light',        location: 'Hyderabad, India',         category: 'Festival',  aspect: '16/9', color: '#0E7490', file: 'festival/festival-01.jpg' },
  { id: 4, title: 'Iaido Practice',        location: 'Melbourne, Australia',     category: 'Iaido',     aspect: '3/4',  color: '#1A1A2E', file: 'iaido/iaido-01.jpg' },
  { id: 5, title: 'City Rain',             location: 'Melbourne, Australia',     category: 'Urban',     aspect: '4/5',  color: '#2A3A4A', file: 'urban/urban-01.jpg' },
  { id: 6, title: 'Gopuram Detail',        location: 'Tamil Nadu, India',        category: 'Temple',    aspect: '3/4',  color: '#0D9488', file: 'temple/temple-02.jpg' },
  { id: 7, title: 'Silk Thread',           location: 'Kanchipuram, India',       category: 'Craft',     aspect: '4/3',  color: '#0369A1', file: 'craft/craft-01.jpg' },
  { id: 8, title: 'Sunrise over Flinders', location: 'Melbourne, Australia',     category: 'Landscape', aspect: '16/9', color: '#2A4A5A', file: 'landscape/landscape-01.jpg' },
  { id: 9, title: 'Offering Ritual',       location: 'Kerala, India',            category: 'Festival',  aspect: '4/5',  color: '#7A5A1A', file: 'festival/festival-02.jpg' },
]

const categories = ['All', 'Temple', 'Portrait', 'Festival', 'Iaido', 'Urban', 'Landscape', 'Craft']

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All'
    ? photos
    : photos.filter(p => p.category === activeCategory)

  const openLightbox = (photo) => setLightbox(photo)
  const closeLightbox = () => setLightbox(null)
  const navigate = (dir) => {
    const idx = filtered.findIndex(p => p.id === lightbox.id)
    const next = (idx + dir + filtered.length) % filtered.length
    setLightbox(filtered[next])
  }

  return (
    <>
      <PhotographyHero />

      {/* Filter tabs */}
      <section style={{ padding: '32px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: '7px 16px',
                  borderRadius: '40px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent-gold)' : 'var(--border-medium)',
                  background: activeCategory === cat ? 'var(--accent-gold)' : 'transparent',
                  color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Masonry */}
      <section className="section">
        <div className="container">
          <motion.div
            layout
            style={{
              columns: 'clamp(2, calc(100vw / 280px), 3)',
              columnGap: '16px',
              gap: '16px',
            }}
          >
            <AnimatePresence>
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onClick={() => openLightbox(photo)}
                  style={{
                    marginBottom: '16px',
                    breakInside: 'avoid',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '4px',
                  }}
                >
                  <PhotoCard photo={photo} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Coming soon note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginTop: '48px',
              padding: '32px',
              border: '1px dashed var(--border-medium)',
              borderRadius: '4px',
            }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              More photos coming soon — film is being developed. ✦
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 9, 6, 0.96)',
              zIndex: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                color: '#F0EDE8',
                opacity: 0.7,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
              }}
            >
              <X size={22} />
            </button>

            {/* Prev / Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
              style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', color: '#F0EDE8', opacity: 0.6, background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
              style={{ position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)', color: '#F0EDE8', opacity: 0.6, background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              <ChevronRight size={28} />
            </button>

            {/* Photo */}
            <motion.div
              key={lightbox.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '700px', width: '100%' }}
            >
              <LightboxImage photo={lightbox} />
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#F0EDE8', fontWeight: 400 }}>
                    {lightbox.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#7A7368', marginTop: '4px' }}>{lightbox.location}</p>
                </div>
                <span style={{
                  fontSize: '0.62rem',
                  padding: '5px 12px',
                  border: '1px solid rgba(13,148,136,0.3)',
                  borderRadius: '20px',
                  color: '#0D9488',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {lightbox.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FilmStripSection />
    </>
  )
}

function PhotographyHero() {
  return (
    <section style={{
      padding: 'clamp(60px, 10vw, 120px) 0 clamp(40px, 6vw, 80px)',
      borderBottom: 'none',
      background: 'linear-gradient(160deg, #F5FAFA 0%, #EAF4F3 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <FloatingLeaves count={10} />
      <div className="container">
        <SectionLabel label="Photography" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', marginTop: '24px' }} className="photo-hero-grid">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7vw, 6rem)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Seeing<br />
            <em style={{ color: 'var(--accent-gold)' }}>slowly.</em>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Photography taught me to stop and truly look. I'm drawn to the
              sacred geometry of South Indian temple architecture, the transient light of
              festival moments, and the quiet practice of Iaido captured in motion.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              Shot on digital and film — sometimes a DSLR, sometimes an old analog frame,
              always with deliberate intention.
            </p>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .photo-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function PhotoCard({ photo }) {
  const [imgFailed, setImgFailed] = useState(false)
  const src = photo.file ? `/assets/photographs/${photo.file}` : null

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}
    >
      {/* Real image — falls back to colour placeholder on error or missing file */}
      {src && !imgFailed ? (
        <PhotoImage
          src={src}
          alt={photo.title}
          aspect={photo.aspect}
          color={photo.color}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <PhotoPlaceholder color={photo.color} aspect={photo.aspect} />
      )}

      {/* Hover overlay with caption */}
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,9,6,0.85), transparent 50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px',
        }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '4px' }}>
          {photo.category}
        </span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: '#F0EDE8' }}>
          {photo.title}
        </h3>
        <p style={{ fontSize: '0.72rem', color: '#9C978F', marginTop: '2px' }}>
          {photo.location}
        </p>
      </motion.div>
    </motion.div>
  )
}

// Real image wrapper — maintains the same aspect-ratio box as the placeholder
function PhotoImage({ src, alt, aspect, color, onError }) {
  const [h, w] = aspect.split('/').map(Number)
  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: `${(h / w) * 100}%`, background: `${color}22` }}>
      <img
        src={src}
        alt={alt}
        onError={onError}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  )
}

// Lightbox version — larger, same fallback logic
function LightboxImage({ photo }) {
  const [imgFailed, setImgFailed] = useState(false)
  const src = photo.file ? `/assets/photographs/${photo.file}` : null
  if (src && !imgFailed) {
    return (
      <img
        src={src}
        alt={photo.title}
        onError={() => setImgFailed(true)}
        style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', display: 'block', borderRadius: '3px' }}
      />
    )
  }
  return <PhotoPlaceholder color={photo.color} aspect={photo.aspect} large />
}

function PhotoPlaceholder({ color, aspect, large = false }) {
  const [h, w] = aspect.split('/').map(Number)
  const paddingTop = `${(h / w) * 100}%`

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop,
        background: `linear-gradient(135deg, ${color}44, ${color}22, ${color}88)`,
        overflow: 'hidden',
      }}
    >
      {/* Film grain simulation */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 30%, ${color}30 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, ${color}40 0%, transparent 50%)
        `,
      }} />
      {/* Center decorative mark */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.12,
      }}>
        <svg width={large ? '80' : '40'} height={large ? '80' : '40'} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#0D9488" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="20" cy="20" r="3" fill="#0D9488" />
          <line x1="4" y1="20" x2="36" y2="20" stroke="#0D9488" strokeWidth="0.6" />
          <line x1="20" y1="4" x2="20" y2="36" stroke="#0D9488" strokeWidth="0.6" />
        </svg>
      </div>
    </div>
  )
}

function FilmStripSection() {
  return (
    <section style={{
      borderTop: '1px solid var(--border-light)',
      padding: 'clamp(40px, 6vw, 80px) 0',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ marginBottom: '32px' }}>
        <SectionLabel label="On Approach" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '20px' }} className="approach-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
              marginBottom: '20px',
            }}>
              "A photograph is not taken, it is made."
              <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-muted)', marginTop: '10px', fontStyle: 'normal' }}>
                — Ansel Adams
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--text-secondary)' }}>
              My approach to photography mirrors my practice of Iaido — every frame is a single,
              intentional cut. I prefer to wait for the light, to understand the space, and to
              press the shutter only when everything aligns.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--text-secondary)', marginTop: '16px' }}>
              South Indian temples, with their intricate Dravidian architecture and living ritual life,
              are my greatest subjects. They carry time differently.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scrolling film strip simulation */}
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          display: 'flex',
          gap: '12px',
          width: 'max-content',
          paddingLeft: '12px',
        }}
      >
        {[...photos, ...photos].map((photo, i) => (
          <FilmCell key={i} photo={photo} />
        ))}
      </motion.div>
    </section>
  )
}

function FilmCell({ photo }) {
  const [imgFailed, setImgFailed] = useState(false)
  const src = photo.file ? `/assets/photographs/${photo.file}` : null
  return (
          <div
            style={{
              width: '200px',
              height: '133px',
              flexShrink: 0,
              background: `linear-gradient(135deg, ${photo.color}44, ${photo.color}88)`,
              borderRadius: '3px',
              border: '1px solid var(--border-light)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {src && !imgFailed && (
              <img
                src={src}
                alt={photo.title}
                onError={() => setImgFailed(true)}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
            {/* Film perforations simulation */}
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '4px',
              display: 'flex',
              justifyContent: 'space-around',
            }}>
              {[...Array(5)].map((_, j) => (
                <div key={j} style={{
                  width: '8px',
                  height: '5px',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '1px',
                }} />
              ))}
            </div>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '6px 8px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            }}>
              <p style={{ fontSize: '0.6rem', color: 'rgba(240,237,232,0.8)', letterSpacing: '0.1em' }}>
                {photo.title}
              </p>
            </div>
          </div>
  )
}
