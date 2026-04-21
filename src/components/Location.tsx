import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ubicacion" ref={ref} style={{ padding: '100px 0', background: '#FAF8F7' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase', color: '#7A7A7A', textAlign: 'center', marginBottom: 12 }}>
          Encontranos
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', textAlign: 'center', color: '#111', marginBottom: 8, letterSpacing: -0.5 }}>
          Floresta, CABA
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 15, color: '#7A7A7A', textAlign: 'center', marginBottom: 48 }}>
          Pergamino 160 &middot; Buenos Aires
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5!2d-58.5198!3d-34.6316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9f5a4b4f1e7%3A0x1234567890abcdef!2sPergamino%20160%2C%20Floresta%2C%20CABA!5e0!3m2!1ses!2sar!4v1"
            width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="Estudio Limadas"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginTop: 36, fontSize: 13, color: '#7A7A7A' }}>
          <span>🚇 Cerca de Estación Floresta</span>
          <span>🚌 Líneas 2, 36, 49, 80, 86, 104</span>
        </motion.div>
      </div>
    </section>
  )
}
