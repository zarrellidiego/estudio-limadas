import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  { title: 'Esculpidas', desc: 'Acrílico o gel. Largos a medida con diseños únicos que duran semanas.', prices: ['Desde $38.400', 'Service desde $35.000'] },
  { title: 'Kapping', desc: 'Protección y fortalecimiento para tus uñas naturales con acabado impecable.', prices: ['Acrílico $28.000', 'Gel $26.000'] },
  { title: 'Semipermanente', desc: 'Color duradero, brillo perfecto. Manos impecables por semanas.', prices: ['Desde $20.000'] },
  { title: 'Belleza de Pies', desc: 'Cuidado completo: limpieza profunda, hidratación y esmaltado profesional.', prices: ['Desde $13.000'] },
  { title: 'Diseños & Nail Art', desc: 'Francesita, Aura, Baby Boomer, Chrome, Relieves y más.', prices: ['Desde $3.000'] },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" ref={ref} style={{ padding: '100px 0', background: '#FAF8F7' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase', color: '#7A7A7A', textAlign: 'center', marginBottom: 12 }}>
          Nuestros servicios
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', textAlign: 'center', color: '#111', marginBottom: 60, letterSpacing: -0.5 }}>
          Lo que hacemos
        </motion.h2>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              style={{
                background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 16,
                padding: '36px 28px', cursor: 'default', transition: 'all 0.4s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: '#111', marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#7A7A7A', marginBottom: 20 }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.prices.map(p => (
                  <span key={p} style={{
                    fontSize: 12, fontWeight: 500, color: '#c08a95',
                    background: 'rgba(216,166,177,0.12)', padding: '6px 14px', borderRadius: 50,
                  }}>{p}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
