import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ position: 'relative', padding: '120px 0', background: '#111', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(216,166,177,0.08)', filter: 'blur(120px)' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(233,221,214,0.08)', filter: 'blur(80px)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 52px)', color: '#fff', lineHeight: 1.1, marginBottom: 24, letterSpacing: -0.5 }}>
          Tu próximo turno está<br />
          <span style={{ fontStyle: 'italic', color: '#D8A6B1' }}>a un mensaje.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 48, fontWeight: 300 }}>
          Escribinos por WhatsApp y reservá tu lugar. Atención rápida y personalizada.
        </motion.p>

        <motion.a initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
          href={WA} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-block', textDecoration: 'none', background: '#fff', color: '#111',
            fontSize: 13, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase',
            padding: '16px 48px', borderRadius: 50,
          }}>
          Reservar ahora por WhatsApp
        </motion.a>
      </div>
    </section>
  )
}
