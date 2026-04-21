const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')

export default function WhatsAppFloat() {
  return (
    <>
      {/* Desktop floating button */}
      <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="wa-float"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 50,
          width: 56, height: 56, borderRadius: '50%', background: '#25d366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)', transition: 'transform 0.3s',
        }}>
        <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.38L1.06 31.29l6.158-1.952C9.724 31.036 12.742 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.182 2.28-.854.18-1.97.324-5.726-1.23-4.806-1.988-7.9-6.868-8.14-7.188-.23-.32-1.938-2.58-1.938-4.922s1.226-3.49 1.662-3.968c.436-.478.952-.598 1.27-.598.316 0 .632.002.908.016.292.014.684-.11 1.07.816.39.94 1.326 3.234 1.442 3.468.116.234.194.508.04.816-.156.312-.234.506-.468.78-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958.274.468 1.216 2.006 2.61 3.25 1.792 1.6 3.302 2.096 3.77 2.33.468.234.742.196 1.016-.118.274-.312 1.178-1.372 1.492-1.846.316-.478.63-.392 1.062-.234.436.156 2.726 1.286 3.194 1.52.468.234.78.352.896.546.116.196.116 1.128-.274 2.228z" />
        </svg>
      </a>

      {/* Mobile sticky CTA bar */}
      <div className="mobile-cta" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40,
        background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(16px)',
        padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'none',
      }}>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'block', width: '100%', textAlign: 'center', textDecoration: 'none',
            background: '#fff', color: '#111', fontSize: 12, fontWeight: 500,
            letterSpacing: 1.5, textTransform: 'uppercase', padding: '14px 0', borderRadius: 50,
          }}>
          Reservar turno por WhatsApp
        </a>
      </div>

      <style>{`
        .wa-float:hover { transform: scale(1.1); }
        @media (max-width: 768px) {
          .wa-float { bottom: 76px !important; }
          .mobile-cta { display: block !important; }
        }
      `}</style>
    </>
  )
}
