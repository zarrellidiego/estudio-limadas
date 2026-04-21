import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')
const heading = "'Cormorant Garamond', serif"

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      position: 'relative', padding: '130px 0', overflow: 'hidden',
      background: 'linear-gradient(160deg, #1a1118 0%, #111 50%, #16111a 100%)',
    }}>
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: 350, height: 350, borderRadius: '50%', background: 'rgba(216,166,177,0.06)', filter: 'blur(120px)' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: 250, height: 250, borderRadius: '50%', background: 'rgba(233,221,214,0.06)', filter: 'blur(100px)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ fontFamily: heading, fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: 24, letterSpacing: -0.5 }}>
          Tu próximo turno está<br />
          <span style={{ fontStyle: 'italic', color: '#D8A6B1' }}>a un mensaje.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', marginBottom: 48, fontWeight: 300, lineHeight: 1.7 }}>
          Escribinos por WhatsApp y reservá tu lugar.<br />Atención rápida y personalizada.
        </motion.p>

        <motion.a initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
          href={WA} target="_blank" rel="noopener noreferrer"
          className="btn-cta-final"
          style={{
            display: 'inline-block', textDecoration: 'none', background: '#fff', color: '#111',
            fontSize: 12, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase',
            padding: '17px 52px', borderRadius: 50, transition: 'all 0.4s ease',
          }}>
          Reservar ahora por WhatsApp
        </motion.a>
      </div>

      <style>{`
        .btn-cta-final:hover { transform: translateY(-3px) !important; box-shadow: 0 12px 40px rgba(255,255,255,0.15) !important; }
      `}</style>
    </section>
  )
}
