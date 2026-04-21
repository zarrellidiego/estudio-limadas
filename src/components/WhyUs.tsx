import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heading = "'Cormorant Garamond', serif"

const reasons = [
  { title: 'Duración real', desc: 'Resultados que se mantienen impecables por semanas, sin levantamientos ni roturas.' },
  { title: 'Máxima prolijidad', desc: 'Cutículas perfectas, terminaciones limpias, simetría total en cada uña.' },
  { title: 'Materiales premium', desc: 'Solo trabajamos con marcas profesionales de primera línea.' },
  { title: 'Higiene estricta', desc: 'Esterilización completa de instrumental. Tu salud es nuestra prioridad.' },
  { title: 'Diseños personalizados', desc: 'Desde lo clásico hasta el nail art más creativo. Vos elegís, nosotras creamos.' },
  { title: 'Atención cálida', desc: 'Puntualidad, trato personalizado y un ambiente donde te sentís cómoda.' },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '100px 0', background: 'rgba(233,221,214,0.2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 11, fontWeight: 500, letterSpacing: 5, textTransform: 'uppercase', color: '#9a7a8a', textAlign: 'center', marginBottom: 12 }}>
          Por qué elegirnos
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: heading, fontSize: 'clamp(34px, 5vw, 50px)', fontWeight: 300, textAlign: 'center', color: '#111', marginBottom: 64, letterSpacing: -0.5 }}>
          La diferencia está en los detalles
        </motion.h2>

        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '44px 52px' }}>
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              style={{ textAlign: 'center' }}>
              <div style={{ width: 36, height: 1, background: '#D8A6B1', margin: '0 auto 20px' }} />
              <h3 style={{ fontFamily: heading, fontSize: 22, fontWeight: 400, color: '#111', marginBottom: 10 }}>{r.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#7A7A7A', fontWeight: 300 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
