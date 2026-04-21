import { motion } from 'framer-motion'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
})

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center', background: '#FAF8F7', overflow: 'hidden',
    }}>
      {/* Blobs */}
      <div style={{
        position: 'absolute', top: '15%', right: '10%', width: 300, height: 300,
        borderRadius: '50%', background: 'rgba(233,221,214,0.5)', filter: 'blur(100px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%', width: 250, height: 250,
        borderRadius: '50%', background: 'rgba(216,166,177,0.2)', filter: 'blur(80px)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '120px 24px 80px', maxWidth: 800 }}>
        <motion.p {...fade(0)} style={{
          fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase',
          color: '#7A7A7A', marginBottom: 32,
        }}>
          Nail Studio &middot; Floresta, CABA
        </motion.p>

        <motion.h1 {...fade(0.15)} style={{
          fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 7vw, 72px)',
          lineHeight: 1.05, fontWeight: 400, color: '#111', marginBottom: 20, letterSpacing: -1,
        }}>
          Tus uñas hablan<br />
          <span style={{ fontStyle: 'italic', color: '#c08a95' }}>antes que vos.</span>
        </motion.h1>

        <motion.p {...fade(0.3)} style={{
          fontSize: 17, lineHeight: 1.7, color: '#7A7A7A', maxWidth: 560,
          margin: '0 auto 48px', fontWeight: 300,
        }}>
          Esculpidas, Kapping, Semipermanente y Belleza de pies.
          Resultados impecables, atención premium y turnos rápidos.
        </motion.p>

        <motion.div {...fade(0.45)} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none', background: '#111', color: '#fff', fontSize: 13,
            fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase',
            padding: '16px 40px', borderRadius: 50,
          }}>Reservar por WhatsApp</a>
          <a href="https://www.instagram.com/estudio.limadas/" target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none', color: '#7A7A7A', fontSize: 13,
            fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase',
            padding: '16px 40px', borderRadius: 50, border: '1px solid rgba(184,184,184,0.5)',
          }}>Ver trabajos</a>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 1, height: 32, background: '#B8B8B8' }}
        />
      </motion.div>
    </section>
  )
}
