import logo from '../assets/logo.png'

const WA = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')
const heading = "'Cormorant Garamond', serif"

export default function Footer() {
  return (
    <footer style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '56px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: heading, fontSize: 20, fontWeight: 300, color: 'rgba(255,255,255,0.5)', letterSpacing: 2 }}>
              ESTUDIO LIMADAS
            </span>
            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12, fontWeight: 300 }}>Pergamino 160 &middot; Floresta, CABA</p>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/estudio.limadas/' },
              { label: 'WhatsApp', href: WA },
              { label: 'Pinterest', href: 'http://www.pinterest.com/estudiolimadas' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link"
                style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.3)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', transition: 'color 0.3s' }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: 11, fontWeight: 300 }}>
            &copy; {new Date().getFullYear()} Estudio Limadas. Todos los derechos reservados.
          </p>
        </div>
      </div>
      <style>{`
        .footer-link:hover { color: rgba(255,255,255,0.8) !important; }
        @media (max-width: 600px) { .footer-row { flex-direction: column !important; align-items: center !important; text-align: center; } }
      `}</style>
    </footer>
  )
}
