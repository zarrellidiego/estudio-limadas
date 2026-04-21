import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const WA_LINK = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#galeria' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-warm-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
          <a href="#" className="flex items-center">
            <img src={logo} alt="LMDS" className="h-9 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] font-medium tracking-[2.5px] uppercase text-gray hover:text-black transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-black text-white text-[12px] font-medium tracking-[1.5px] uppercase px-6 py-3 rounded-full hover:bg-black/80 transition-all duration-300"
            >
              Reservar turno
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Menu"
            >
              <span className={`w-5 h-[1.5px] bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.25px]' : ''}`} />
              <span className={`w-5 h-[1.5px] bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.25px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-warm-white flex flex-col items-center justify-center gap-8"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[14px] font-medium tracking-[3px] uppercase text-black"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-black text-white text-[12px] font-medium tracking-[1.5px] uppercase px-8 py-4 rounded-full"
            >
              Reservar turno
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
