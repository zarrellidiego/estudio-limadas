import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const heading = "'Cormorant Garamond', serif"

const stats = [
  { end: 1400, prefix: '+', suffix: '', label: 'Seguidoras en IG' },
  { end: 5.0, prefix: '★ ', suffix: '', label: 'Google Reviews', decimals: 1 },
  { end: 100, prefix: '', suffix: '%', label: 'Atención personal' },
  { end: 3, prefix: '', suffix: ' años', label: 'De experiencia' },
]

function AnimatedNumber({ end, prefix = '', suffix = '', decimals = 0, active }: { end: number; prefix?: string; suffix?: string; decimals?: number; active: boolean }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 2000
    const startTime = Date.now()
    const step = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setVal(start + (end - start) * eased)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, end])
  return <>{prefix}{decimals ? val.toFixed(decimals) : Math.round(val)}{suffix}</>
}

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <section ref={ref} style={{
      background: 'linear-gradient(135deg, #1a0f14 0%, #111 50%, #14101a 100%)',
      padding: '36px 0',
      borderTop: '1px solid rgba(216,166,177,0.08)',
      borderBottom: '1px solid rgba(216,166,177,0.08)',
    }}>
      <div className="social-grid" style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{
              textAlign: 'center', padding: '16px 0',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
            className={i < 3 ? 'social-divider' : ''}
          >
            <p style={{
              color: '#D8A6B1', fontSize: 30, fontFamily: heading,
              fontWeight: 300, marginBottom: 6, letterSpacing: 0.5,
            }}>
              <AnimatedNumber {...s} active={inView} />
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.3)', fontSize: 9.5,
              letterSpacing: 3, textTransform: 'uppercase', fontWeight: 500,
            }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .social-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .social-divider { border-right: none !important; }
        }
      `}</style>
    </section>
  )
}
