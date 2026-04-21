import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')
const heading = "'Cormorant Garamond', serif"

// Logo background color: rgb(241, 191, 200) = #F1BFC8
// We build the entire hero gradient from that exact pink so the logo square dissolves perfectly.

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // Gradient starts from the exact logo bg color at top → transitions to cream
      background: `
        radial-gradient(ellipse 80% 60% at 50% 0%, #F1BFC8 0%, #f5cdd6 18%, #f9e4ea 36%, #FAF8F7 62%)
      `,
      overflow: 'hidden',
    }}>

      {/* Ambient light blobs */}
      <div style={{
        position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)',
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(241,191,200,0.55) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '-5%', width: 320, height: 320,
        borderRadius: '50%', background: 'rgba(216,150,172,0.12)', filter: 'blur(90px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '12%', left: '5%', width: 260, height: 260,
        borderRadius: '50%', background: 'rgba(233,200,210,0.2)', filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      {/* Fine grain texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        backgroundSize: '180px 180px',
        opacity: 0.6,
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center',
        padding: '110px 24px 100px',
        maxWidth: 860, margin: '0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>

        {/* Logo — rendered on its exact bg color so the square is invisible */}
        <motion.div
          {...fade(0)}
          style={{ marginBottom: 44, position: 'relative' }}
        >
          {/* Subtle halo ring behind logo */}
          <div style={{
            position: 'absolute', inset: '-18px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(241,191,200,0.5) 0%, transparent 72%)',
            filter: 'blur(16px)',
          }} />
          <img
            src={logo}
            alt="LMDS — Estudio Limadas"
            style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              objectFit: 'cover',
              position: 'relative',
              // Soft drop shadow using the logo's own palette
              filter: 'drop-shadow(0 8px 32px rgba(184,110,138,0.22)) drop-shadow(0 2px 6px rgba(160,80,110,0.12))',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p {...fadeUp(0.15)} style={{
          fontSize: 10.5, fontWeight: 600, letterSpacing: 6,
          textTransform: 'uppercase', color: '#a87088',
          marginBottom: 30, fontFamily: "'Inter', system-ui, sans-serif",
        }}>
          Nail Studio &nbsp;&middot;&nbsp; Floresta, CABA
        </motion.p>

        {/* Headline */}
        <motion.h1 {...fade(0.28)} style={{
          fontFamily: heading,
          fontSize: 'clamp(48px, 8.5vw, 88px)',
          lineHeight: 1.02,
          fontWeight: 300,
          color: '#1a0f14',
          marginBottom: 28,
          letterSpacing: '-0.5px',
        }}>
          Tus uñas hablan<br />
          <em style={{
            fontStyle: 'italic',
            color: '#b06080',
            fontWeight: 300,
          }}>antes que vos.</em>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: 48, height: 1,
            background: 'linear-gradient(90deg, transparent, #c4849a, transparent)',
            marginBottom: 30, transformOrigin: 'center',
          }}
        />

        {/* Subtext */}
        <motion.p {...fadeUp(0.55)} style={{
          fontSize: 16, lineHeight: 1.9, color: '#8a6575',
          maxWidth: 480, margin: '0 auto 52px',
          fontWeight: 300, letterSpacing: '0.01em',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}>
          Esculpidas, Kapping, Semipermanente y Belleza de pies.
          Resultados impecables, atención premium y turnos rápidos.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.72)} style={{
          display: 'flex', gap: 16, justifyContent: 'center',
          flexWrap: 'wrap', alignItems: 'center',
        }}>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
          >
            Reservar por WhatsApp
          </a>
          <a
            href="https://www.instagram.com/estudio.limadas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-outline"
          >
            Ver trabajos
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{
            marginTop: 64, display: 'flex', gap: 40, justifyContent: 'center',
            alignItems: 'center', flexWrap: 'wrap',
          }}
        >
          {[
            { value: '5★', label: 'Google Reviews' },
            { value: '+500', label: 'Clientas felices' },
            { value: '3 años', label: 'de experiencia' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: heading, fontSize: 28, fontWeight: 400,
                color: '#b06080', lineHeight: 1,
              }}>{value}</div>
              <div style={{
                fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase',
                color: '#a08090', marginTop: 6,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute', bottom: 38, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{
          fontSize: 9, letterSpacing: 3, textTransform: 'uppercase',
          color: 'rgba(160,100,130,0.5)',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(184,110,138,0.5), transparent)' }}
        />
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        .hero-btn-primary {
          text-decoration: none;
          background: #1a0f14;
          color: #fff;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 17px 44px;
          border-radius: 50px;
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          display: inline-block;
          font-family: 'Inter', system-ui, sans-serif;
          border: 1.5px solid transparent;
        }
        .hero-btn-primary:hover {
          background: #b06080;
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(176,96,128,0.35);
        }

        .hero-btn-outline {
          text-decoration: none;
          color: #8a6575;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 15px 40px;
          border-radius: 50px;
          border: 1.5px solid rgba(176,96,128,0.3);
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          display: inline-block;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .hero-btn-outline:hover {
          border-color: #b06080;
          color: #b06080;
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(176,96,128,0.14);
          background: rgba(241,191,200,0.1);
        }

        @media (max-width: 480px) {
          .hero-btn-primary, .hero-btn-outline { width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  )
}
