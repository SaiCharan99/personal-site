import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import FloatingLeaves from '../components/FloatingLeaves'
import OceanWave from '../components/OceanWave'

export default function About() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <PhilosophySection />
      <SkillsSection />
      <EducationSection />
      <InterestsSection />
    </>
  )
}

function AboutHero() {
  return (
    <section
      style={{
        padding: 'clamp(60px, 10vw, 120px) 0 clamp(40px, 6vw, 80px)',
        borderBottom: 'none',
        background: 'linear-gradient(160deg, #F5FAFA 0%, #EAF4F3 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <FloatingLeaves count={8} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel label="About" />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'end' }} className="about-hero-grid">
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
                marginBottom: '32px',
              }}
            >
              Engineer.<br />
              <em style={{ color: 'var(--accent-gold)' }}>Practitioner.</em><br />
              Storyteller.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.85,
                color: 'var(--text-secondary)',
                maxWidth: '520px',
              }}
            >
              I'm Venkata <span style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>Sai</span> Charan Naidu Kuppala — most people call me Sai Charan, or KSC.
              I'm a software engineer from South India, now based in Melbourne.
              I build mobile applications, practice Iaido, and find meaning in the quiet
              discipline that each craft demands.
            </p>
          </motion.div>

          {/* Avatar / decorative area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <AvatarPlaceholder />
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .about-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function AvatarPlaceholder() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '380px' }}>
      <div
        style={{
          aspectRatio: '3/4',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-medium)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Real profile photo — drop profile.jpg into public/assets/ */}
        {!imgFailed ? (
          <img
            src="/assets/profile_pic.png"
            alt="Sai Charan Kuppala"
            onError={() => setImgFailed(true)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          /* Fallback — kolam pattern + initials */
          <>
            <div style={{ opacity: 0.08, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
                {[110, 80, 50, 25].map((r) => (
                  <circle key={r} cx="130" cy="130" r={r} stroke="#0D9488" strokeWidth="1" strokeDasharray="4 4" />
                ))}
                <circle cx="130" cy="130" r="8" fill="#0D9488" />
                <line x1="20" y1="130" x2="240" y2="130" stroke="#0D9488" strokeWidth="0.8" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="#0D9488" strokeWidth="0.8" />
              </svg>
            </div>
            <div style={{ textAlign: 'center', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 300, color: 'var(--accent-gold)', opacity: 0.3, lineHeight: 1 }}>
                KSC
              </div>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '12px' }}>
                Photo coming soon
              </p>
            </div>
          </>
        )}
      </div>

      {/* Floating tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '-16px',
          right: '-16px',
          background: 'var(--accent-gold)',
          color: '#fff',
          padding: '10px 16px',
          borderRadius: '4px',
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        Melbourne, AU
      </div>
    </div>
  )
}

function StorySection() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 'clamp(40px, 8vw, 100px)' }} className="story-grid">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel label="My Story" />
            {/* Decorative vertical line */}
            <div style={{
              width: '1px',
              height: '120px',
              background: 'linear-gradient(to bottom, var(--accent-gold), transparent)',
              marginTop: '24px',
              marginLeft: '14px',
              opacity: 0.4,
            }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              `Born and raised in Andhra Pradesh, South India — I grew up surrounded by Carnatic music,
              temple festivals, and the warmth of Telugu culture. That foundation shaped everything:
              the way I approach structure, rhythm, and meaning in my work.`,
              `I studied Computer Science at VIT, Vellore, and went on to spend over three years
              as a software engineer at Publicis Sapient in India, where I honed my craft in React Native
              and mobile development. I built applications for large-scale retail clients in the US,
              led features across sprint cycles, and learned what it means to ship with care.`,
              `In 2024, I moved to Melbourne to pursue my Masters at the University of Melbourne —
              a deliberate decision to deepen both my technical knowledge and my perspective on the world.
              Here I've found new communities: I now lead the International House Graduate Student Association
              as President, and I've started training in Iaido — the Japanese sword art.`,
              `Iaido has been a revelation. The practice of drawing a sword, executing a technique with
              full intention, and sheathing it again — it mirrors how I want to approach software:
              deliberately, cleanly, with <em style="font-family:var(--font-display); color:var(--accent-gold)">zanshin</em> (remaining awareness).`,
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                dangerouslySetInnerHTML={{ __html: para }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  color: 'var(--text-secondary)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .story-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function PhilosophySection() {
  const pillars = [
    {
      kanji: '道',
      romanji: 'Dō — The Way',
      text: 'Every discipline is a path. Software, Iaido, photography — each demands years of patient practice before mastery. I embrace the journey.',
    },
    {
      kanji: '間',
      romanji: 'Ma — Negative Space',
      text: 'Japanese concept of the meaningful pause. In code: elegance is what you leave out. In photography: the silence between subjects. In Iaido: the breath before the draw.',
    },
    {
      kanji: '心',
      romanji: 'Kokoro — Heart-Mind',
      text: 'South Indian philosophy speaks of the unity of thought, feeling and action. I try to bring this wholeness to everything I do.',
    },
  ]

  return (
    <section
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <OceanWave color="#09242C" height={65} />
      <div className="section" style={{
        background: '#09242C',
        position: 'relative',
      }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 70px)' }}
        >
          <SectionLabel label="Philosophy" align="center" />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#F0EDE8',
              marginTop: '16px',
            }}
          >
            Principles I live by
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 4vw, 40px)' }} className="philosophy-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.kanji}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              style={{
                padding: 'clamp(24px, 4vw, 40px)',
                border: '1px solid rgba(13,148,136,0.15)',
                borderRadius: '4px',
                background: 'rgba(200, 134, 10, 0.03)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 300,
                color: 'var(--accent-gold)',
                opacity: 0.7,
                lineHeight: 1,
                marginBottom: '12px',
              }}>
                {p.kanji}
              </div>
              <div style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '14px',
              }}>
                {p.romanji}
              </div>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: '#9C978F',
              }}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .philosophy-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      </div>
      <OceanWave color="#09242C" flip height={65} />
    </section>
  )
}

function SkillsSection() {
  const groups = [
    {
      label: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java', 'SQL', 'HTML', 'CSS / Sass'],
    },
    {
      label: 'Frameworks & Libraries',
      skills: ['React Native', 'React', 'Redux-Saga', 'Axios', 'Jest', 'Framer Motion'],
    },
    {
      label: 'Tools & Practices',
      skills: ['Git', 'Jira', 'Figma', 'Charles Proxy', 'Agile / Scrum', 'TDD', 'Azure Cloud'],
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 'clamp(40px, 8vw, 100px)' }} className="skills-grid">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel label="Skills" />
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: '16px' }}>
              Technologies and tools I work with regularly.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {groups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
              >
                <p style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  marginBottom: '16px',
                  fontWeight: 500,
                }}>
                  {group.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}
                      style={{
                        padding: '7px 14px',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '3px',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.2s ease',
                        cursor: 'default',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function EducationSection() {
  const items = [
    {
      degree: 'Masters of Information Technology',
      institution: 'The University of Melbourne',
      period: 'Feb 2024 – Dec 2025',
      location: 'Melbourne, Australia',
      note: 'Focusing on distributed systems, data engineering, and AI/ML',
    },
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Vellore Institute of Technology',
      period: 'Jul 2016 – Jun 2020',
      location: 'Vellore, Tamil Nadu, India',
      note: 'Strong foundations in algorithms, systems, and software engineering',
    },
  ]

  return (
    <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <SectionLabel label="Education" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {items.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '20px',
                padding: '32px 0',
                borderBottom: '1px solid var(--border-light)',
                alignItems: 'start',
              }}
            >
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                }}>
                  {item.degree}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', marginBottom: '8px', fontWeight: 500 }}>
                  {item.institution}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {item.location} · {item.note}
                </p>
              </div>
              <div style={{
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                whiteSpace: 'nowrap',
                paddingTop: '4px',
              }}>
                {item.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InterestsSection() {
  const interests = [
    {
      icon: '⚔️',
      title: 'Iaido',
      body: 'Practicing the Japanese martial art of drawing and cutting with a katana. Training at a Melbourne dojo. Iaido teaches more than technique — it teaches stillness, intention, and the value of a single deliberate action.',
      tag: '武道 · Budō',
    },
    {
      icon: '📸',
      title: 'Photography',
      body: 'Drawn to South Indian temples, portraits, street life, and landscape. Film and digital. Photography slows me down — it asks me to look, really look, before I press the shutter.',
      tag: 'Documentary · Street',
    },
    {
      icon: '🎵',
      title: 'Carnatic Music',
      body: 'Raised on Ilaiyaraaja, AR Rahman, and the classical Carnatic tradition. Music is the thread that runs through everything — it shaped my sense of rhythm in code and storytelling alike.',
      tag: 'Tamil · Telugu',
    },
    {
      icon: '🛕',
      title: 'South Indian Culture',
      body: 'Kolam patterns, temple architecture, festival rituals, Telugu literature — the richness of this heritage informs my aesthetic sensibility and grounds me wherever I am in the world.',
      tag: 'Heritage · Art',
    },
  ]

  return (
    <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(36px, 6vw, 60px)' }}
        >
          <SectionLabel label="Interests" />
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginTop: '12px',
          }}>
            What shapes me
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(16px, 3vw, 32px)' }} className="interests-grid">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                padding: 'clamp(24px, 4vw, 36px)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                background: 'var(--bg-secondary)',
                transition: 'border-color 0.3s ease',
              }}
              whileHover={{ borderColor: 'var(--accent-gold)' }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{item.icon}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}>
                  {item.title}
                </h3>
                <span style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  padding: '4px 10px',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '20px',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                }}>
                  {item.tag}
                </span>
              </div>
              <p style={{
                fontSize: '0.875rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
              }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .interests-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
