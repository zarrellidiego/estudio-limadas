import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')
const heading = "'Cormorant Garamond', serif"

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(180deg, #f8e8ed 0%, #f5dde3 25%, #FAF8F7 70%, #FAF8F7 100%)',
      overflow: 'hidden',
    }}>
      {/* Soft blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '15%', width: 350, height: 350,
        borderRadius: '50%', background: 'rgba(233,221,214,0.5)', filter: 'blur(120px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '8%', width: 280, height: 280,
        borderRadius: '50%', background: 'rgba(216,166,177,0.2)', filter: 'blur(100px)',
      }} />

      <div style={{
        position: 'relative', zIndex: 1, textAlign: 'center',
        padding: '120px 24px 80px', maxWidth: 800, margin: '0 auto',
      }}>
        {/* Logo con blend natural */}
        <motion.div {...fade(0)} style={{ marginBottom: 32 }}>
          <img src={logo} alt="LMDS - Estudio Limadas" style={{
            width: 140, height: 'auto',
            filter: 'drop-shadow(0 4px 16px rgba(180,120,150,0.2))',
            mixBlendMode: 'multiply',
          }} />
        </motion.div>

        <motion.p {...fade(0.1)} style={{
          fontSize: 11, fontWeight: 500, letterSpacing: 5, textTransform: 'uppercase',
          color: '#9a7a8a', marginBottom: 28,
        }}>
          Nail Studio &middot; Floresta, CABA
        </motion.p>

        <motion.h1 {...fade(0.2)} style={{
          fontFamily: heading, fontSize: 'clamp(42px, 7.5vw, 76px)',
          lineHeight: 1.05, fontWeight: 300, color: '#111', marginBottom: 24, letterSpacing: -1,
        }}>
          Tus uñas hablan<br />
          <span style={{ fontStyle: 'italic', color: '#b87a90' }}>antes que vos.</span>
        </motion.h1>

        <motion.p {...fade(0.35)} style={{
          fontSize: 16, lineHeight: 1.8, color: '#7A7A7A', maxWidth: 520,
          margin: '0 auto 44px', fontWeight: 300,
        }}>
          Esculpidas, Kapping, Semipermanente y Belleza de pies.
          Resultados impecables, atención premium y turnos rápidos.
        </motion.p>

        <motion.div {...fade(0.5)} style={{
          display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center',
        }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary-hero" style={{
            textDecoration: 'none', background: '#111', color: '#fff', fontSize: 12,
            fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase',
            padding: '16px 40px', borderRadius: 50, transition: 'all 0.4s ease',
            display: 'inline-block',
          }}>Reservar por WhatsApp</a>
          <a href="https://www.instagram.com/estudio.limadas/" target="_blank" rel="noopener noreferrer" className="btn-outline-hero" style={{
            textDecoration: 'none', color: '#7A7A7A', fontSize: 12,
            fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase',
            padding: '15px 36px', borderRadius: 50, border: '1.5px solid rgba(150,120,130,0.35)',
            transition: 'all 0.4s ease', display: 'inline-block',
          }}>Ver trabajos</a>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1.8 }}
        style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)' }}>
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 36, background: 'rgba(150,120,130,0.4)' }}
        />
      </motion.div>

      <style>{`
        .btn-primary-hero:hover { background: #2a2a2a !important; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.18); }
        .btn-outline-hero:hover { border-color: #111 !important; color: #111 !important; transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,0,0,0.08); }
      `}</style>
    </section>
  )
}
