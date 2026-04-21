import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
  { title: 'Duración real', desc: 'Resultados que se mantienen impecables por semanas, sin levantamientos.' },
  { title: 'Máxima prolijidad', desc: 'Cutículas perfectas, terminaciones limpias, simetría total.' },
  { title: 'Materiales premium', desc: 'Solo marcas profesionales de primera línea.' },
  { title: 'Higiene estricta', desc: 'Esterilización completa de instrumental. Tu salud es prioridad.' },
  { title: 'Diseños personalizados', desc: 'Desde lo clásico hasta el nail art más creativo.' },
  { title: 'Atención cálida', desc: 'Puntualidad, trato personalizado y ambiente cómodo.' },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '100px 0', background: 'rgba(233,221,214,0.25)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase', color: '#7A7A7A', textAlign: 'center', marginBottom: 12 }}>
          Por qué elegirnos
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', textAlign: 'center', color: '#111', marginBottom: 60, letterSpacing: -0.5 }}>
          La diferencia está en los detalles
        </motion.h2>

        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 48px' }}>
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}>
              <div style={{ width: 32, height: 1.5, background: '#D8A6B1', marginBottom: 20 }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#111', marginBottom: 8 }}>{r.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#7A7A7A' }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .why-grid { grid-template-columns: 1fr !important; text-align: center; }
          .why-grid > div > div:first-child { margin: 0 auto 20px; }
        }
      `}</style>
    </section>
  )
}
