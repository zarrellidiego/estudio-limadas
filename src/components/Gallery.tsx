import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import trabajo1 from '../assets/trabajo1.jpg'
import trabajo2 from '../assets/trabajo2.jpg'
import trabajo3 from '../assets/trabajo3.jpg'
import trabajo4 from '../assets/trabajo4.jpg'

const heading = "'Cormorant Garamond', serif"

const images = [
  { src: trabajo4, label: 'Esculpidas' },
  { src: trabajo1, label: 'Belleza de Pies' },
  { src: trabajo2, label: 'Esmaltado Semi' },
  { src: trabajo3, label: 'Pedicura' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galeria" ref={ref} style={{ padding: '100px 0', background: '#FAF8F7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 11, fontWeight: 500, letterSpacing: 5, textTransform: 'uppercase', color: '#9a7a8a', textAlign: 'center', marginBottom: 12 }}>
          Portfolio
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: heading, fontSize: 'clamp(34px, 5vw, 50px)', fontWeight: 300, textAlign: 'center', color: '#111', marginBottom: 64, letterSpacing: -0.5 }}>
          Nuestros trabajos
        </motion.h2>

        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="gallery-item"
              style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 14, overflow: 'hidden', cursor: 'pointer' }}>
              <img src={img.src} alt={img.label} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
              <div className="gallery-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(17,17,17,0.65) 0%, transparent 45%)',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 22,
                opacity: 0, transition: 'opacity 0.5s ease',
              }}>
                <span style={{
                  color: '#fff', fontSize: 12, fontWeight: 500, letterSpacing: 2,
                  textTransform: 'uppercase',
                }}>{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://www.instagram.com/estudio.limadas/" target="_blank" rel="noopener noreferrer"
            className="btn-outline-gallery" style={{
              textDecoration: 'none', fontSize: 12, fontWeight: 500, letterSpacing: 1.5,
              textTransform: 'uppercase', color: '#7A7A7A', border: '1.5px solid rgba(150,120,130,0.3)',
              padding: '14px 34px', borderRadius: 50, display: 'inline-block',
              transition: 'all 0.4s ease',
            }}>
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; } }
        .gallery-item:hover img { transform: scale(1.12); }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        .btn-outline-gallery:hover { border-color: #111 !important; color: #111 !important; transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,0,0,0.08); }
      `}</style>
    </section>
  )
}
