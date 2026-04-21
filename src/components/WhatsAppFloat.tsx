const WA_LINK = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')

export default function WhatsAppFloat() {
  return (
    <>
      {/* Floating WhatsApp button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.38L1.06 31.29l6.158-1.952C9.724 31.036 12.742 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.182 2.28-.854.18-1.97.324-5.726-1.23-4.806-1.988-7.9-6.868-8.14-7.188-.23-.32-1.938-2.58-1.938-4.922s1.226-3.49 1.662-3.968c.436-.478.952-.598 1.27-.598.316 0 .632.002.908.016.292.014.684-.11 1.07.816.39.94 1.326 3.234 1.442 3.468.116.234.194.508.04.816-.156.312-.234.506-.468.78-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958.274.468 1.216 2.006 2.61 3.25 1.792 1.6 3.302 2.096 3.77 2.33.468.234.742.196 1.016-.118.274-.312 1.178-1.372 1.492-1.846.316-.478.63-.392 1.062-.234.436.156 2.726 1.286 3.194 1.52.468.234.78.352.896.546.116.196.116 1.128-.274 2.228z" />
        </svg>
      </a>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-lg px-4 py-3 border-t border-white/[0.06]">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-white text-black text-[12px] font-medium tracking-[1.5px] uppercase py-3.5 rounded-full"
        >
          Reservar turno por WhatsApp
        </a>
      </div>
    </>
  )
}
