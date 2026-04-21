import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')
const heading = "'Cormorant Garamond', serif"

function isOpen(): { open: boolean; label: string } {
  const now = new Date()
  // Argentina is UTC-3
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const ar = new Date(utc + -3 * 3600000)
  const day = ar.getDay() // 0=dom, 1=lun, 2=mar...
  const hour = ar.getHours()
  const min = ar.getMinutes()
  const t = hour + min / 60

  // Dom=0, Lun=1: cerrado
  if (day === 0 || day === 1) return { open: false, label: 'Cerrado' }
  // Sab=6: 10-16
  if (day === 6) {
    if (t >= 10 && t < 16) return { open: true, label: 'Abierto hasta 16hs' }
    return { open: false, label: 'Cerrado' }
  }
  // Mar-Vie: 10-18
  if (t >= 10 && t < 18) return { open: true, label: 'Abierto hasta 18hs' }
  return { open: false, label: 'Cerrado' }
}

function OpenBadge() {
  const { open, label } = isOpen()
  return (
    <div className="open-badge" style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 14px', borderRadius: 50,
      background: open ? 'rgba(34,197,94,0.08)' : 'rgba(220,50,50,0.06)',
      border: `1px solid ${open ? 'rgba(34,197,94,0.2)' : 'rgba(220,50,50,0.15)'}`,
    }}>
      <span className={open ? 'dot-green' : 'dot-red'} style={{
        width: 7, height: 7, borderRadius: '50%',
        background: open ? '#22c55e' : '#dc3232',
        flexShrink: 0,
      }} />
      <span style={{
        fontSize: 10, fontWeight: 500, letterSpacing: 1.2,
        textTransform: 'uppercase', color: open ? '#16a34a' : '#b91c1c',
        fontFamily: "'Inter', system-ui, sans-serif",
        whiteSpace: 'nowrap',
      }}>{label}</span>
    </div>
  )
}

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
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrolled ? 'rgba(250,248,247,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,110,138,0.1)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
      }}>
        <div style={{
          maxWidth: 1240, margin: '0 auto', padding: '0 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 72,
        }}>

          {/* Brand mark */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
            {/* Logo clipped to circle — its square bg #F1BFC8 sits on the hero's matching gradient top,
                so on scroll the pill backdrop obscures mismatches; we keep it round for elegance */}
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              overflow: 'hidden', flexShrink: 0,
              boxShadow: '0 2px 8px rgba(184,110,138,0.18)',
            }}>
              <img
                src={logo}
                alt="LMDS"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <span style={{
              fontFamily: heading,
              fontSize: 17,
              fontWeight: 400,
              color: '#1a0f14',
              letterSpacing: '1.5px',
              lineHeight: 1,
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Estudio Limadas
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="nav-desktop" style={{ display: 'flex', gap: 38, alignItems: 'center' }}>
            <OpenBadge />
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link" style={{
                textDecoration: 'none',
                color: '#8a6575',
                fontSize: 10.5,
                fontWeight: 500,
                letterSpacing: '2.8px',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                fontFamily: "'Inter', system-ui, sans-serif",
              }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-desktop nav-cta-btn"
            style={{
              textDecoration: 'none',
              background: '#1a0f14',
              color: '#fff',
              fontSize: 10.5,
              fontWeight: 500,
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              padding: '11px 28px',
              borderRadius: 50,
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              fontFamily: "'Inter', system-ui, sans-serif",
              whiteSpace: 'nowrap',
            }}
          >
            Reservar turno
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="nav-burger"
            aria-label="Menú"
            style={{
              display: 'none', background: 'none', border: 'none',
              cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 10,
            }}
          >
            <span style={{
              width: 22, height: 1.5, background: '#1a0f14', display: 'block', borderRadius: 2,
              transform: open ? 'rotate(45deg) translateY(3.3px)' : 'none',
              transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
            }} />
            <span style={{
              width: 22, height: 1.5, background: '#1a0f14', display: 'block', borderRadius: 2,
              transform: open ? 'rotate(-45deg) translateY(-3.3px)' : 'none',
              transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: '#FAF8F7',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 32,
            }}
          >
            {/* Logo mark inside mobile menu */}
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              overflow: 'hidden', marginBottom: 8,
              boxShadow: '0 4px 20px rgba(184,110,138,0.2)',
            }}>
              <img src={logo} alt="LMDS" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <OpenBadge />

            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  textDecoration: 'none', color: '#1a0f14',
                  fontSize: 28, fontFamily: heading,
                  fontWeight: 300, letterSpacing: '2px',
                }}
              >
                {l.label}
              </motion.a>
            ))}

            <motion.a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                marginTop: 16, textDecoration: 'none',
                background: '#1a0f14', color: '#fff',
                fontSize: 11, fontWeight: 500, letterSpacing: '2px',
                textTransform: 'uppercase', padding: '17px 44px', borderRadius: 50,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Reservar turno
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover { color: #1a0f14 !important; }
        .nav-cta-btn:hover {
          background: #b06080 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(176,96,128,0.3) !important;
        }
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .dot-green { animation: dot-pulse 2s ease-in-out infinite; }
        .dot-red { animation: dot-pulse 3s ease-in-out infinite; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
