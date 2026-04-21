import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
    <section ref={ref} style={{ background: '#111', padding: '28px 0' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
      }} className="social-grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ textAlign: 'center', padding: '12px 0' }}
          >
            <p style={{
              color: '#fff', fontSize: 24, fontFamily: "'Playfair Display', serif",
              fontWeight: 400, marginBottom: 4,
            }}>{s.value}</p>
            <p style={{
              color: 'rgba(255,255,255,0.45)', fontSize: 10,
              letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500,
            }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .social-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
