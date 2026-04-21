import logo from '../assets/logo.png'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')

export default function Footer() {
  return (
    <footer style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '56px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <img src={logo} alt="LMDS" style={{ height: 32, width: 'auto', opacity: 0.5, filter: 'invert(1)' }} />
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>Pergamino 160 &middot; Floresta, CABA</p>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/estudio.limadas/' },
              { label: 'WhatsApp', href: WA },
              { label: 'Pinterest', href: 'http://www.pinterest.com/estudiolimadas' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.35)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: 11 }}>
            &copy; {new Date().getFullYear()} Estudio Limadas. Todos los derechos reservados.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) { .footer-row { flex-direction: column; align-items: center; text-align: center; } }
      `}</style>
    </footer>
  )
}
