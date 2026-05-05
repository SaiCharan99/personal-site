import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import OceanWave from '../components/OceanWave'
import FloatingLeaves from '../components/FloatingLeaves'

const experiences = [
  {
    id: 1,
    role: 'Mobile Application Intern',
    company: 'Focus Bear',
    location: 'Melbourne, Australia',
    period: 'Mar 2025 – Jun 2025',
    type: 'Internship',
    color: '#2A4A3E',
    description:
      'Building a React Native productivity app designed for AuDHDers — people with both autism and ADHD. The app features app blocking, screen time limits, and focus sessions to support time management.',
    highlights: [
      'Building app blocking and screen-time limit features in React Native',
      'Designing focus session flows for neurodivergent users',
      'Working within a neurodivergent-led team using empathy-first development',
    ],
    tech: ['React Native', 'TypeScript', 'Expo'],
  },
  {
    id: 2,
    role: 'Experience Engineer L2',
    company: 'Publicis Sapient',
    location: 'Hyderabad, India',
    period: 'Aug 2022 – Jan 2024',
    type: 'Full-time',
    color: '#0E7490',
    description:
      'Led feature development for large-scale mobile applications serving millions of users at a US retail client. Mentored junior engineers and drove complex integrations from design to production.',
    highlights: [
      'Implemented payment gateway integration, Live Activities for iOS, and native SDK bridging',
      'Delivered multiple features in 2-week and 4-week sprint cycles from Figma designs',
      'Supervised and mentored two interns on codebase and development processes',
      'Worked on a mono-repo architecture supporting multiple sub-brands',
    ],
    tech: ['React Native', 'TypeScript', 'Redux-Saga', 'iOS Live Activities', 'Native Bridging'],
  },
  {
    id: 3,
    role: 'Experience Engineer L1',
    company: 'Publicis Sapient',
    location: 'Hyderabad, India',
    period: 'Aug 2021 – Jul 2022',
    type: 'Full-time',
    color: '#0E7490',
    description:
      'Developed and maintained cross-platform mobile applications for a major US retail client. Focused on performance optimization and code quality in a mono-repo architecture.',
    highlights: [
      'Reduced mobile application launch time by 2.8 seconds through profiling and optimization',
      'Fixed critical memory leak issues using Profiler, Charles, and RNDebugger',
      'Contributed to a mono-repo supporting multiple sub-brands within the same app',
      'Used hooks, memoization, and navigation listeners to improve runtime performance',
    ],
    tech: ['React Native', 'TypeScript', 'Charles Proxy', 'RNDebugger', 'Memoization'],
  },
  {
    id: 4,
    role: 'Junior Experience Engineer',
    company: 'Publicis Sapient',
    location: 'Hyderabad, India',
    period: 'Jan 2021 – Jul 2021',
    type: 'Full-time',
    color: '#0E7490',
    description:
      'Began my professional career with formal training in front-end engineering and agile software development. Built a foundation in React and React Native for production systems.',
    highlights: [
      'Completed intensive training in HTML, CSS, JavaScript, React, and React Native',
      'Introduced to Agile methodologies, TDD, Git, Bitbucket, and Jira',
      'Onboarded onto a large production codebase and shipped first features',
    ],
    tech: ['React Native', 'React', 'HTML', 'CSS', 'JavaScript', 'Agile', 'TDD'],
  },
  {
    id: 5,
    role: 'Cloud Migration Intern',
    company: 'Unilever',
    location: 'India',
    period: 'Jan 2020 – Jun 2020',
    type: 'Internship',
    color: '#1A3A6A',
    description:
      'Planned and executed a 100% migration of critical UK-based on-premises databases to Azure Cloud as part of Unilever\'s global cloud transformation initiative.',
    highlights: [
      'Led end-to-end migration of on-premises databases to Microsoft Azure',
      'Developed holistic risk mitigation strategies for business-critical data',
      'Collaborated with UK-based teams across time zones',
    ],
    tech: ['Microsoft Azure', 'SQL Server', 'Cloud Migration'],
  },
  {
    id: 6,
    role: 'ML Research Intern',
    company: 'Tata Consultancy Services',
    location: 'India',
    period: 'May 2019 – Jun 2019',
    type: 'Research',
    color: '#2A3A6A',
    description:
      'Research internship focused on applying machine learning to last-mile delivery optimization problems. Developed and evaluated reinforcement learning models.',
    highlights: [
      'Researched last-mile delivery optimization using machine learning',
      'Developed a Q-Learning model to improve delivery route performance',
      'Presented research findings to senior engineering staff',
    ],
    tech: ['Python', 'Q-Learning', 'Machine Learning', 'Reinforcement Learning'],
  },
]

const volunteerWork = [
  {
    role: 'President',
    org: 'International House Graduate Student Association Inc.',
    period: 'Sep 2024 – Present',
    description:
      'Leading strategic planning and event coordination for a student organisation with 65+ members. Managing budget, events calendar, and cross-cultural community initiatives.',
    color: '#0F766E',
  },
  {
    role: 'Software Engineer',
    org: 'Melbourne Space Program',
    period: 'Aug 2024 – Present',
    description:
      'Working on the Humanoid project within the sensing team, applying AI and ML to robotics sensing challenges. Part of Australia\'s premier student-led space engineering group.',
    color: '#2A4A3E',
  },
  {
    role: 'External Relations Officer',
    org: 'StartUp Link Unimelb',
    period: 'Aug 2024 – Present',
    description:
      'Connecting students with Melbourne\'s startup ecosystem. Facilitating introductions, events, and mentorship opportunities between students and founders.',
    color: '#5A1A6A',
  },
  {
    role: 'Board Member',
    org: 'Youth Red Cross',
    period: 'Jan 2017 – Mar 2019',
    description:
      'Organised three university-wide blood donation events, completely student-led, increasing campus participation in voluntary healthcare initiatives.',
    color: '#0E7490',
  },
]

export default function Work() {
  return (
    <>
      <WorkHero />
      <ExperienceSection />
      <VolunteerSection />
    </>
  )
}

function WorkHero() {
  return (
    <section style={{
      padding: 'clamp(60px, 10vw, 120px) 0 clamp(40px, 6vw, 80px)',
      borderBottom: 'none',
      background: 'linear-gradient(160deg, #F5FAFA 0%, #EAF4F3 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <FloatingLeaves count={8} />
      <div className="container">
        <SectionLabel label="Work & Experience" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', marginTop: '24px', alignItems: 'end' }} className="work-hero-grid">
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
            3+ Years<br />
            <em style={{ color: 'var(--accent-gold)' }}>Building</em><br />
            Products.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '28px' }}>
              From an intern learning the craft to leading feature development at Publicis Sapient,
              to building apps for neurodivergent users at Focus Bear — each chapter has added depth
              to how I think about software.
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { num: '3+', label: 'Years Full-time' },
                { num: '6', label: 'Roles' },
                { num: '2', label: 'Countries' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--accent-gold)', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .work-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ExperienceSection() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="section">
      <div className="container">
        <SectionLabel label="Professional Experience" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '32px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <motion.div
                onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                whileHover={{ x: 2 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '16px',
                  padding: '28px 0',
                  borderBottom: '1px solid var(--border-light)',
                  cursor: 'pointer',
                  userSelect: 'none',
                  alignItems: 'start',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      borderRadius: '20px',
                      background: exp.color + '20',
                      color: exp.color,
                    }}>
                      {exp.type}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 500 }}>{exp.company}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{exp.location}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '4px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                    {exp.period}
                  </span>
                  <motion.div
                    animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} color="var(--text-muted)" />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {expanded === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      padding: '20px 0 32px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '32px',
                    }} className="exp-detail-grid">
                      <div>
                        <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                          {exp.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {exp.tech.map(t => (
                            <span key={t} style={{
                              fontSize: '0.72rem',
                              padding: '5px 12px',
                              border: '1px solid var(--border-medium)',
                              borderRadius: '3px',
                              color: 'var(--text-muted)',
                              letterSpacing: '0.05em',
                            }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {exp.highlights.map((h, j) => (
                          <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                            <span style={{
                              width: '4px',
                              height: '4px',
                              borderRadius: '50%',
                              background: 'var(--accent-gold)',
                              flexShrink: 0,
                              marginTop: '8px',
                            }} />
                            <span style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .exp-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function VolunteerSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <OceanWave color="var(--bg-secondary)" height={55} />
      <div className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(36px, 6vw, 60px)' }}
        >
          <SectionLabel label="Volunteer & Community" />
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginTop: '12px',
          }}>
            Beyond the screen
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(16px, 3vw, 28px)' }} className="volunteer-grid">
          {volunteerWork.map((v, i) => (
            <motion.div
              key={v.org}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              style={{
                padding: 'clamp(20px, 3vw, 32px)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                background: 'var(--bg-primary)',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              <div style={{
                display: 'inline-flex',
                padding: '5px 12px',
                background: v.color + '18',
                borderRadius: '20px',
                marginBottom: '14px',
              }}>
                <span style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: v.color,
                }}>
                  {v.role}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '4px',
                lineHeight: 1.3,
              }}>
                {v.org}
              </h3>
              <p style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                marginBottom: '14px',
              }}>
                {v.period}
              </p>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .volunteer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      </div>
      <OceanWave color="var(--bg-secondary)" flip height={55} />
    </section>
  )
}
