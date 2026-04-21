import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')
const heading = "'Cormorant Garamond', serif"

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      position: 'relative', padding: '140px 0', overflow: 'hidden',
      background: 'linear-gradient(160deg, #1a0f14 0%, #111 40%, #0e0a10 100%)',
    }}>
      {/* Animated ambient blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(216,166,177,0.06)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(233,221,214,0.05)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(176,96,128,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        {/* Decorative line */}
        <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: 56, height: 1, background: 'linear-gradient(90deg, transparent, rgba(216,166,177,0.5), transparent)', margin: '0 auto 40px', transformOrigin: 'center' }}
        />

        <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: heading, fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 300, color: '#fff', lineHeight: 1.08, marginBottom: 28, letterSpacing: -0.5 }}>
          Tu próximo turno está<br />
          <em style={{ fontStyle: 'italic', color: '#D8A6B1', fontWeight: 300 }}>a un mensaje.</em>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', marginBottom: 52, fontWeight: 300, lineHeight: 1.8 }}>
          Escribinos por WhatsApp y reservá tu lugar.<br />Atención rápida y personalizada.
        </motion.p>

        <motion.a initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          href={WA} target="_blank" rel="noopener noreferrer"
          className="cta-final-btn"
          style={{
            display: 'inline-block', textDecoration: 'none', background: '#fff', color: '#1a0f14',
            fontSize: 12, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase',
            padding: '18px 56px', borderRadius: 50,
            transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
            fontFamily: "'Inter', system-ui, sans-serif",
          }}>
          Reservar ahora por WhatsApp
        </motion.a>
      </div>

      <style>{`
        .cta-final-btn:hover { transform: translateY(-3px) !important; box-shadow: 0 16px 50px rgba(255,255,255,0.18) !important; background: #f0d4da !important; color: #1a0f14 !important; }
      `}</style>
    </section>
  )
}
