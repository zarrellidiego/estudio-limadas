import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heading = "'Cormorant Garamond', serif"
const MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Pergamino+160,+Floresta,+Buenos+Aires'
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8!2d-58.5217!3d-34.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca0e7c4e3c5d%3A0x1!2sPergamino+160%2C+Floresta%2C+Buenos+Aires!5e0!3m2!1ses-419!2sar!4v1'

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ubicacion" ref={ref} style={{ padding: '110px 0 0', background: '#FAF8F7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 6, textTransform: 'uppercase', color: '#a87088', textAlign: 'center', marginBottom: 14 }}>
          Encontranos
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: heading, fontSize: 'clamp(34px, 5.5vw, 54px)', fontWeight: 300, textAlign: 'center', color: '#1a0f14', marginBottom: 8 }}>
          Floresta, CABA
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 16, color: '#8a6575', textAlign: 'center', marginBottom: 24, fontWeight: 300, fontFamily: heading, letterSpacing: 0.5 }}>
          Pergamino 160 &middot; Buenos Aires, Argentina
        </motion.p>

        {/* Transport chips */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 36, flexWrap: 'wrap' }}>
          {[
            { icon: '🚇', text: 'Estación Floresta' },
            { icon: '🚌', text: 'Líneas 2, 36, 49, 80, 86' },
          ].map(t => (
            <span key={t.text} style={{
              fontSize: 12, color: '#8a7580', fontWeight: 400,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(241,191,200,0.1)', padding: '8px 18px', borderRadius: 50,
              border: '1px solid rgba(216,166,177,0.12)',
            }}>
              <span style={{ fontSize: 14 }}>{t.icon}</span> {t.text}
            </span>
          ))}
        </motion.div>

        {/* CTA Button - refined pill */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ textAlign: 'center', marginBottom: 48 }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              textDecoration: 'none', background: '#1a0f14', color: '#fff',
              fontSize: 11, fontWeight: 500, letterSpacing: 2,
              textTransform: 'uppercase', padding: '14px 36px', borderRadius: 50,
              transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
              fontFamily: "'Inter', system-ui, sans-serif",
              position: 'relative', overflow: 'hidden',
            }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Cómo llegar
          </a>
        </motion.div>
      </div>

      {/* Fullwidth map with smooth edge blend */}
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
        style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 80, zIndex: 1,
          background: 'linear-gradient(to bottom, #FAF8F7, transparent)',
          pointerEvents: 'none',
        }} />
        <iframe
          src={MAPS_EMBED}
          width="100%" height="420" style={{ border: 0, display: 'block', filter: 'grayscale(0.1) contrast(1.02) brightness(1.02)' }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" title="Estudio Limadas - Floresta, CABA"
        />
      </motion.div>

      <style>{`
        .maps-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .maps-btn:hover::after { transform: translateX(100%); }
        .maps-btn:hover { background: #b06080 !important; transform: translateY(-3px) scale(1.02); box-shadow: 0 12px 40px rgba(176,96,128,0.3); }
      `}</style>
    </section>
  )
}
