import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heading = "'Cormorant Garamond', serif"

const reasons = [
  { icon: '◆', title: 'Duración real', desc: 'Semanas impecables. Sin levantamientos, sin roturas, sin preocupaciones.' },
  { icon: '◆', title: 'Máxima prolijidad', desc: 'Cutículas perfectas. Terminaciones limpias. Simetría absoluta.' },
  { icon: '◆', title: 'Materiales premium', desc: 'Solo marcas profesionales de primera línea. Cero improvisación.' },
  { icon: '◆', title: 'Higiene estricta', desc: 'Esterilización total del instrumental. Tu salud es sagrada.' },
  { icon: '◆', title: 'Diseños únicos', desc: 'Desde lo clásico hasta nail art de otro nivel. Vos soñás, nosotras creamos.' },
  { icon: '◆', title: 'Atención cálida', desc: 'Puntualidad, dedicación y un espacio donde te sentís como en casa.' },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      padding: '110px 0',
      background: 'linear-gradient(180deg, rgba(241,191,200,0.08) 0%, rgba(233,221,214,0.15) 50%, rgba(241,191,200,0.05) 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 6, textTransform: 'uppercase', color: '#a87088', textAlign: 'center', marginBottom: 14 }}>
          Por qué elegirnos
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: heading, fontSize: 'clamp(34px, 5.5vw, 54px)', fontWeight: 300, textAlign: 'center', color: '#1a0f14', marginBottom: 64 }}>
          La diferencia está en los detalles
        </motion.h2>

        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="why-card"
              style={{
                background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(216,166,177,0.12)',
                borderRadius: 20, padding: '36px 28px', textAlign: 'center',
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(241,191,200,0.3), rgba(216,166,177,0.15))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px', fontSize: 14, color: '#b06080',
              }}>{r.icon}</div>
              <h3 style={{ fontFamily: heading, fontSize: 22, fontWeight: 400, color: '#1a0f14', marginBottom: 10 }}>{r.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.75, color: '#8a7580', fontWeight: 300 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .why-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(176,96,128,0.1); border-color: rgba(216,166,177,0.25) !important; }
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
