import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heading = "'Cormorant Garamond', serif"

const reviews = [
  { name: 'Camila R.', text: 'Me dejaron las uñas perfectas y duraron muchísimo. El lugar es hermoso y la atención de 10. No cambio más.', time: 'Hace 2 semanas' },
  { name: 'Valentina G.', text: 'La atención increíble y el lugar hermoso. Siempre salgo feliz. Son muy detallistas con cada uña y el resultado es impecable.', time: 'Hace 1 mes' },
  { name: 'Sofía M.', text: 'Por lejos el mejor estudio de uñas de la zona. Prolijidad impecable y los diseños son otro nivel. Súper recomendable.', time: 'Hace 3 semanas' },
]

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resenas" ref={ref} style={{
      padding: '110px 0',
      background: 'linear-gradient(180deg, rgba(241,191,200,0.06) 0%, rgba(233,221,214,0.12) 50%, rgba(241,191,200,0.04) 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 6, textTransform: 'uppercase', color: '#a87088', textAlign: 'center', marginBottom: 14 }}>
          Reseñas
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: heading, fontSize: 'clamp(34px, 5.5vw, 54px)', fontWeight: 300, textAlign: 'center', color: '#1a0f14', marginBottom: 64 }}>
          Lo que dicen nuestras clientas
        </motion.h2>

        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {reviews.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="review-card"
              style={{
                background: '#fff',
                border: '1px solid rgba(216,166,177,0.1)', borderRadius: 22,
                padding: '44px 32px 36px', textAlign: 'center',
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
              {/* Big decorative quote */}
              <span style={{
                position: 'absolute', top: 16, left: 24,
                fontFamily: heading, fontSize: 80, fontWeight: 300,
                color: 'rgba(216,166,177,0.12)', lineHeight: 1, pointerEvents: 'none',
              }}>"</span>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 24, justifyContent: 'center', position: 'relative' }}>
                {[1,2,3,4,5].map(j => (
                  <span key={j} style={{ color: '#D8A6B1', fontSize: 18 }}>★</span>
                ))}
              </div>
              {/* Quote */}
              <p style={{
                fontSize: 15, lineHeight: 1.85, color: 'rgba(26,15,20,0.65)',
                fontFamily: heading, fontWeight: 300, fontStyle: 'italic',
                marginBottom: 28, position: 'relative',
              }}>
                "{r.text}"
              </p>
              {/* Divider */}
              <div style={{ width: 28, height: 1, background: 'rgba(216,166,177,0.3)', marginBottom: 18 }} />
              {/* Name */}
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a87088' }}>
                {r.name}
              </p>
              <p style={{ fontSize: 10, color: '#c4b0b8', marginTop: 4, fontWeight: 300 }}>{r.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .review-card:hover { transform: translateY(-6px); box-shadow: 0 24px 64px rgba(176,96,128,0.1); border-color: rgba(216,166,177,0.25) !important; }
        @media (max-width: 768px) { .reviews-grid { grid-template-columns: 1fr !important; max-width: 420px; margin: 0 auto; } }
      `}</style>
    </section>
  )
}
