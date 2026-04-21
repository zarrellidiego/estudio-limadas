import './App.css'

function App() {
  const whatsappNumber = '5491100000000'
  const whatsappMsg = encodeURIComponent('Hola! Quiero pedir un turno en Estudio Limadas')

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">Estudio Limadas</a>
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#sobre-mi">Nosotras</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle">Bienvenida a</p>
          <h1 className="hero-title">Estudio Limadas</h1>
          <p className="hero-description">
            Tu espacio de belleza y cuidado personal. Esculpidas, Kapping,
            SemiPermanente y Belleza de pies.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Pedir turno por WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Cada detalle cuenta. Trabajamos con los mejores productos para que tus
          manos y pies luzcan perfectos.
        </p>
        <div className="services-grid">
          {[
            {
              icon: '💅',
              title: 'Esculpidas',
              desc: 'Unas esculpidas a medida con gel o acrilico. Disenos unicos que reflejan tu estilo.',
            },
            {
              icon: '✨',
              title: 'Kapping',
              desc: 'Proteccion y fortalecimiento para tus unas naturales con acabado brillante.',
            },
            {
              icon: '💖',
              title: 'SemiPermanente',
              desc: 'Color duradero y brillo impecable que se mantiene perfecto por semanas.',
            },
            {
              icon: '🦶',
              title: 'Belleza de Pies',
              desc: 'Cuidado completo para tus pies: limpieza, hidratacion y esmaltado profesional.',
            },
          ].map((service) => (
            <div key={service.title} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="section section-alt">
        <h2 className="section-title">Sobre Nosotras</h2>
        <div className="about-content">
          <p>
            En <strong>Estudio Limadas</strong> nos apasiona el nail art y la
            belleza. Cada servicio lo realizamos con dedicacion, usando
            productos de primera calidad para garantizar resultados
            impecables y duraderos.
          </p>
          <p>
            Nuestro objetivo es que salgas del estudio sintiendote hermosa y
            segura. Te esperamos para vivir la experiencia Limadas.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          Reserva tu turno o hacenos cualquier consulta
        </p>
        <div className="contact-cards">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">📱</span>
            <h3>WhatsApp</h3>
            <p>Escribinos para tu turno</p>
          </a>
          <a
            href="https://www.instagram.com/estudio.limadas/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">📸</span>
            <h3>Instagram</h3>
            <p>@estudio.limadas</p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-logo">Estudio Limadas</p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Estudio Limadas. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
