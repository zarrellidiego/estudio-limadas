import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heading = "'Cormorant Garamond', serif"

const reviews = [
  { name: 'Camila R.', text: 'Me dejaron las uñas perfectas y duraron muchísimo. El lugar es hermoso y la atención de 10.' },
  { name: 'Valentina G.', text: 'La atención increíble y el lugar hermoso. Siempre salgo feliz. Son muy detallistas con cada uña.' },
  { name: 'Sofía M.', text: 'Por lejos el mejor estudio de uñas de la zona. Prolijidad impecable y los diseños son otro nivel.' },
]

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resenas" ref={ref} style={{ padding: '100px 0', background: 'rgba(233,221,214,0.2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 11, fontWeight: 500, letterSpacing: 5, textTransform: 'uppercase', color: '#9a7a8a', textAlign: 'center', marginBottom: 12 }}>
          Reseñas
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: heading, fontSize: 'clamp(34px, 5vw, 50px)', fontWeight: 300, textAlign: 'center', color: '#111', marginBottom: 64, letterSpacing: -0.5 }}>
          Lo que dicen nuestras clientas
        </motion.h2>

        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {reviews.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="review-card"
              style={{
                background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 18,
                padding: '36px 30px', textAlign: 'center', transition: 'all 0.4s ease',
              }}>
              <div style={{ display: 'flex', gap: 3, justifyContent: 'center', marginBottom: 22 }}>
                {[1,2,3,4,5].map(j => (
                  <span key={j} style={{ color: '#D8A6B1', fontSize: 15 }}>★</span>
                ))}
              </div>
              <p style={{
                fontSize: 15, lineHeight: 1.75, color: 'rgba(17,17,17,0.7)',
                marginBottom: 24, fontStyle: 'italic', fontFamily: heading, fontWeight: 300,
              }}>
                "{r.text}"
              </p>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: '#aaa' }}>
                {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .review-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.06); }
        @media (max-width: 768px) { .reviews-grid { grid-template-columns: 1fr !important; max-width: 440px; margin: 0 auto; } }
      `}</style>
    </section>
  )
}
