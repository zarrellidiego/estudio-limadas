import logo from '../assets/logo.png'

const WA_LINK = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="LMDS" className="h-8 w-auto opacity-60 invert" />
            <p className="text-white/30 text-[12px]">Pergamino 160 &middot; Floresta, CABA</p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/estudio.limadas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-[11px] tracking-[2px] uppercase hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-[11px] tracking-[2px] uppercase hover:text-white transition-colors duration-300"
            >
              WhatsApp
            </a>
            <a
              href="http://www.pinterest.com/estudiolimadas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-[11px] tracking-[2px] uppercase hover:text-white transition-colors duration-300"
            >
              Pinterest
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-white/20 text-[11px]">
            &copy; {new Date().getFullYear()} Estudio Limadas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
