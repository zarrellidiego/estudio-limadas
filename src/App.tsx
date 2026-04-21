import './App.css'
import logo from './assets/logo.png'
import trabajo1 from './assets/trabajo1.jpg'
import trabajo2 from './assets/trabajo2.jpg'
import trabajo3 from './assets/trabajo3.jpg'
import trabajo4 from './assets/trabajo4.jpg'

function App() {
  const whatsappNumber = '5491154047769'
  const whatsappMsg = encodeURIComponent('Hola! Quiero pedir un turno en Estudio Limadas')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-container">
          <img src={logo} alt="LMDS" className="nav-logo" />
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#galeria">Trabajos</a>
            <a href="#pautas">Info</a>
            <a href="#contacto">Contacto</a>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="nav-cta">
            Pedir turno
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <img src={logo} alt="LMDS - Estudio Limadas" className="hero-logo" />
          <h1>Estudio Limadas</h1>
          <p className="hero-tagline">Esculpidas &middot; Kapping &middot; SemiPermanente &middot; Belleza de Pies</p>
          <p className="hero-location">Pergamino 160</p>
          <div className="hero-buttons">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Pedir turno
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="container">
          <span className="section-label">Nuestros servicios</span>
          <h2 className="section-title">Precios & Servicios</h2>

          {/* Esculpidas Acrilico */}
          <div className="price-category">
            <h3 className="price-category-title">Esculpidas de Acrilico</h3>
            <div className="price-grid">
              <div className="price-card">
                <span className="price-card-name">Largos 1-2</span>
                <span className="price-card-price">$39.600</span>
                <span className="price-card-sub">Service: $35.200</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Largos 3-4</span>
                <span className="price-card-price">$42.900</span>
                <span className="price-card-sub">Service: $38.500</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Largos 5-6</span>
                <span className="price-card-price">$49.500</span>
                <span className="price-card-sub">Service: $45.100</span>
              </div>
            </div>
          </div>

          {/* Esculpidas Gel */}
          <div className="price-category">
            <h3 className="price-category-title">Esculpidas de Gel</h3>
            <div className="price-grid">
              <div className="price-card">
                <span className="price-card-name">Largos 1-2</span>
                <span className="price-card-price">$38.400</span>
                <span className="price-card-sub">Service: $35.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Largos 3-4</span>
                <span className="price-card-price">$42.000</span>
                <span className="price-card-sub">Service: $38.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Largos 5-6</span>
                <span className="price-card-price">$49.200</span>
                <span className="price-card-sub">Service: $44.000</span>
              </div>
            </div>
          </div>

          {/* Otros servicios */}
          <div className="price-category">
            <h3 className="price-category-title">Otros Servicios</h3>
            <div className="price-grid">
              <div className="price-card">
                <span className="price-card-name">Kapping Acrilico</span>
                <span className="price-card-price">$28.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Kapping Gel</span>
                <span className="price-card-price">$26.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Semi Permanente</span>
                <span className="price-card-price">$20.000 - $24.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Remocion</span>
                <span className="price-card-price">$12.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Arreglos</span>
                <span className="price-card-price">$4.000</span>
              </div>
            </div>
          </div>

          {/* Pies */}
          <div className="price-category">
            <h3 className="price-category-title">Belleza de Pies</h3>
            <div className="price-grid">
              <div className="price-card">
                <span className="price-card-name">Sin esmaltado</span>
                <span className="price-card-price">$13.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">+ Esmaltado Semi</span>
                <span className="price-card-price">$23.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">+ Semi + Reconstruccion</span>
                <span className="price-card-price">$28.000</span>
              </div>
            </div>
          </div>

          {/* Disenos */}
          <div className="price-category">
            <h3 className="price-category-title">Disenos Adicionales</h3>
            <div className="price-grid">
              <div className="price-card">
                <span className="price-card-name">Francesita / Aura / Baby Boomer</span>
                <span className="price-card-price">$6.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Polvos Chrome</span>
                <span className="price-card-price">$5.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Relieves</span>
                <span className="price-card-price">$8.000</span>
              </div>
              <div className="price-card">
                <span className="price-card-name">Disenos Simples</span>
                <span className="price-card-price">$3.000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="section section-dark">
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Nuestros Trabajos</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={trabajo4} alt="Esculpidas nail art" />
              <div className="gallery-overlay">
                <span>Esculpidas</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src={trabajo1} alt="Belleza de pies rojo" />
              <div className="gallery-overlay">
                <span>Belleza de Pies</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src={trabajo2} alt="Belleza de pies azul" />
              <div className="gallery-overlay">
                <span>Esmaltado Semi</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src={trabajo3} alt="Belleza de pies nude" />
              <div className="gallery-overlay">
                <span>Belleza de Pies</span>
              </div>
            </div>
          </div>
          <div className="gallery-cta">
            <a href="https://www.instagram.com/estudio.limadas/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Ver mas en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* PAUTAS */}
      <section id="pautas" className="section">
        <div className="container">
          <span className="section-label">Importante</span>
          <h2 className="section-title">Pautas del Estudio</h2>
          <div className="pautas-grid">
            <div className="pauta-card">
              <div className="pauta-icon">📅</div>
              <h3>Confirmacion de turnos</h3>
              <p>48hs antes por WhatsApp o mail</p>
            </div>
            <div className="pauta-card">
              <div className="pauta-icon">💰</div>
              <h3>Sena requerida</h3>
              <p>50% del valor del servicio para reservar tu turno</p>
            </div>
            <div className="pauta-card">
              <div className="pauta-icon">🛡️</div>
              <h3>Garantia</h3>
              <p>48 horas de garantia en todos nuestros trabajos</p>
            </div>
            <div className="pauta-card">
              <div className="pauta-icon">⏰</div>
              <h3>Tolerancia</h3>
              <p>10 minutos de espera. Pasado ese tiempo se cancela el turno</p>
            </div>
            <div className="pauta-card">
              <div className="pauta-icon">❌</div>
              <h3>Cancelaciones</h3>
              <p>Avisar con 48hs de anticipacion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section section-pink">
        <div className="container">
          <span className="section-label">Reserva tu turno</span>
          <h2 className="section-title">Contactanos</h2>
          <p className="section-subtitle">Pergamino 160</p>
          <div className="contact-grid">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>11-5404-7769</p>
            </a>
            <a href="https://www.instagram.com/estudio.limadas/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">📸</div>
              <h3>Instagram</h3>
              <p>@estudio.limadas</p>
            </a>
            <a href="http://www.pinterest.com/estudiolimadas" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">📌</div>
              <h3>Pinterest</h3>
              <p>Inspiracion</p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <img src={logo} alt="LMDS" className="footer-logo" />
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Estudio Limadas. Todos los derechos reservados.
          </p>
          <div className="footer-links">
            <a href="https://www.instagram.com/estudio.limadas/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="http://www.pinterest.com/estudiolimadas" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.38L1.06 31.29l6.158-1.952C9.724 31.036 12.742 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.182 2.28-.854.18-1.97.324-5.726-1.23-4.806-1.988-7.9-6.868-8.14-7.188-.23-.32-1.938-2.58-1.938-4.922s1.226-3.49 1.662-3.968c.436-.478.952-.598 1.27-.598.316 0 .632.002.908.016.292.014.684-.11 1.07.816.39.94 1.326 3.234 1.442 3.468.116.234.194.508.04.816-.156.312-.234.506-.468.78-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958.274.468 1.216 2.006 2.61 3.25 1.792 1.6 3.302 2.096 3.77 2.33.468.234.742.196 1.016-.118.274-.312 1.178-1.372 1.492-1.846.316-.478.63-.392 1.062-.234.436.156 2.726 1.286 3.194 1.52.468.234.78.352.896.546.116.196.116 1.128-.274 2.228z"/>
        </svg>
      </a>
    </>
  )
}

export default App
