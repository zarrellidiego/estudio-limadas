import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heading = "'Cormorant Garamond', serif"

const stats = [
  { value: '+1.400', label: 'Seguidoras en Instagram' },
  { value: '★ 5.0', label: 'Calificación en Google' },
  { value: '100%', label: 'Atención personalizada' },
  { value: 'Premium', label: 'Resultados garantizados' },
]

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} style={{ background: '#111', padding: '32px 0' }}>
      <div className="social-grid" style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ textAlign: 'center', padding: '14px 0' }}
          >
            <p style={{
              color: '#fff', fontSize: 26, fontFamily: heading,
              fontWeight: 300, marginBottom: 6, letterSpacing: 0.5,
            }}>{s.value}</p>
            <p style={{
              color: 'rgba(255,255,255,0.35)', fontSize: 10,
              letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 500,
            }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .social-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  )
}
