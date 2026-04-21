import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')
const heading = "'Cormorant Garamond', serif"

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#galeria' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrolled ? 'rgba(250,248,247,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.5s ease',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72,
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src={logo} alt="LMDS" style={{ height: 34, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.08))' }} />
            <span style={{ fontFamily: heading, fontSize: 18, fontWeight: 500, color: '#111', letterSpacing: 1 }}>
              ESTUDIO LIMADAS
            </span>
          </a>

          <div className="nav-desktop" style={{ display: 'flex', gap: 36 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link" style={{
                textDecoration: 'none', color: '#7A7A7A', fontSize: 11,
                fontWeight: 500, letterSpacing: 2.5, textTransform: 'uppercase',
                transition: 'color 0.3s',
              }}>{l.label}</a>
            ))}
          </div>

          <a href={WA} target="_blank" rel="noopener noreferrer" className="nav-cta-desktop btn-hover" style={{
            textDecoration: 'none', background: '#111', color: '#fff', fontSize: 11,
            fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase',
            padding: '11px 26px', borderRadius: 50, transition: 'all 0.4s ease',
          }}>Reservar turno</a>

          <button onClick={() => setOpen(!open)} className="nav-burger" style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: 5, padding: 10,
          }}>
            <span style={{ width: 20, height: 1.5, background: '#111', display: 'block',
              transform: open ? 'rotate(45deg) translateY(3.25px)' : 'none', transition: 'all 0.3s' }} />
            <span style={{ width: 20, height: 1.5, background: '#111', display: 'block',
              transform: open ? 'rotate(-45deg) translateY(-3.25px)' : 'none', transition: 'all 0.3s' }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99, background: '#FAF8F7',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 28,
            }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                textDecoration: 'none', color: '#111', fontSize: 14, fontFamily: heading,
                fontWeight: 400, letterSpacing: 3, textTransform: 'uppercase',
              }}>{l.label}</a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              marginTop: 16, textDecoration: 'none', background: '#111', color: '#fff',
              fontSize: 12, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase',
              padding: '16px 40px', borderRadius: 50,
            }}>Reservar turno</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover { color: #111 !important; }
        .btn-hover:hover { background: #333 !important; transform: translateY(-1px); box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
