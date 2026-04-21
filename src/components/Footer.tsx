import logo from '../assets/logo.png'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')
const heading = "'Cormorant Garamond', serif"

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0e0a10 0%, #111 100%)',
      borderTop: '1px solid rgba(216,166,177,0.06)', padding: '60px 0 48px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-row" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 28,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', opacity: 0.6 }}>
                <img src={logo} alt="LMDS" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.8)' }} />
              </div>
              <span style={{ fontFamily: heading, fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.45)', letterSpacing: 1.5, textTransform: 'uppercase' }}>
                Estudio Limadas
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: 12, fontWeight: 300 }}>
              Pergamino 160 &middot; Floresta, CABA
            </p>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/estudio.limadas/' },
              { label: 'WhatsApp', href: WA },
              { label: 'Pinterest', href: 'http://www.pinterest.com/estudiolimadas' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link"
                style={{
                  textDecoration: 'none', color: 'rgba(255,255,255,0.25)', fontSize: 10.5,
                  letterSpacing: 2.5, textTransform: 'uppercase', transition: 'color 0.3s',
                  fontWeight: 500,
                }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 44, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.04)', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.12)', fontSize: 10.5, fontWeight: 300, letterSpacing: 0.5 }}>
            &copy; {new Date().getFullYear()} Estudio Limadas. Todos los derechos reservados.
          </p>
        </div>
      </div>
      <style>{`
        .footer-link:hover { color: rgba(216,166,177,0.7) !important; }
        @media (max-width: 600px) {
          .footer-row { flex-direction: column !important; align-items: center !important; text-align: center; }
          .footer-row > div:first-child { align-items: center !important; }
        }
      `}</style>
    </footer>
  )
}
