import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import trabajo1 from '../assets/trabajo1.jpg'
import trabajo2 from '../assets/trabajo2.jpg'
import trabajo3 from '../assets/trabajo3.jpg'
import trabajo4 from '../assets/trabajo4.jpg'

const heading = "'Cormorant Garamond', serif"

const images = [
  { src: trabajo4, label: 'Esculpidas', span: 'tall' },
  { src: trabajo1, label: 'Belleza de Pies', span: 'normal' },
  { src: trabajo3, label: 'Pedicura Nude', span: 'normal' },
  { src: trabajo2, label: 'Esmaltado Semi', span: 'tall' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galeria" ref={ref} style={{ padding: '110px 0', background: '#FAF8F7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 6, textTransform: 'uppercase', color: '#a87088', textAlign: 'center', marginBottom: 14 }}>
          Portfolio
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: heading, fontSize: 'clamp(34px, 5.5vw, 54px)', fontWeight: 300, textAlign: 'center', color: '#1a0f14', marginBottom: 64 }}>
          Nuestros trabajos
        </motion.h2>

        {/* Masonry-style grid */}
        <div className="masonry-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '200px', gap: 14,
        }}>
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="gallery-item"
              style={{
                position: 'relative', borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
                gridRow: img.span === 'tall' ? 'span 2' : 'span 1',
              }}>
              <img src={img.src} alt={img.label} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.22, 1, 0.36, 1)' }} />
              <div className="gallery-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(26,15,20,0.75) 0%, rgba(26,15,20,0.15) 35%, transparent 60%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
                padding: 24, opacity: 0, transition: 'opacity 0.5s ease',
              }}>
                <span style={{
                  color: '#fff', fontSize: 11, fontWeight: 500, letterSpacing: 2.5,
                  textTransform: 'uppercase', marginBottom: 6,
                }}>{img.label}</span>
                <div style={{ width: 24, height: 1, background: 'rgba(216,166,177,0.6)' }} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.7 }}
          style={{ textAlign: 'center', marginTop: 52 }}>
          <a href="https://www.instagram.com/estudio.limadas/" target="_blank" rel="noopener noreferrer"
            className="gallery-btn" style={{
              textDecoration: 'none', fontSize: 11, fontWeight: 500, letterSpacing: 2,
              textTransform: 'uppercase', color: '#8a6575', border: '1.5px solid rgba(176,96,128,0.25)',
              padding: '15px 38px', borderRadius: 50, display: 'inline-block',
              transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
            }}>
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .masonry-grid { grid-template-columns: repeat(2, 1fr) !important; grid-auto-rows: 180px !important; }
        }
        .gallery-item:hover img { transform: scale(1.12); }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        .gallery-btn:hover { border-color: #b06080 !important; color: #b06080 !important; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(176,96,128,0.12); }
      `}</style>
    </section>
  )
}
