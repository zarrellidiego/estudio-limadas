import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const heading = "'Cormorant Garamond', serif"

const categories: {
  id: string
  title: string
  subtitle: string
  items: { name: string; price: string; detail?: string }[]
}[] = [
  {
    id: 'esculpidas',
    title: 'Esculpidas',
    subtitle: 'Acrílico & Gel',
    items: [
      { name: 'Acrílico Largos 1-2', price: '$39.600', detail: 'Service $35.200' },
      { name: 'Acrílico Largos 3-4', price: '$42.900', detail: 'Service $38.500' },
      { name: 'Acrílico Largos 5-6', price: '$49.500', detail: 'Service $45.100' },
      { name: 'Gel Largos 1-2', price: '$38.400', detail: 'Service $35.000' },
      { name: 'Gel Largos 3-4', price: '$42.000', detail: 'Service $38.000' },
      { name: 'Gel Largos 5-6', price: '$49.200', detail: 'Service $44.000' },
    ],
  },
  {
    id: 'manos',
    title: 'Manos',
    subtitle: 'Kapping & Semi',
    items: [
      { name: 'Kapping Acrílico', price: '$28.000' },
      { name: 'Kapping Gel', price: '$26.000' },
      { name: 'Semi Permanente', price: '$20.000 – $24.000' },
      { name: 'Remoción', price: '$12.000' },
      { name: 'Arreglos', price: '$4.000' },
    ],
  },
  {
    id: 'pies',
    title: 'Belleza de Pies',
    subtitle: 'Cuidado completo',
    items: [
      { name: 'Sin esmaltado', price: '$13.000' },
      { name: 'Con Esmaltado Semi', price: '$23.000' },
      { name: 'Semi + Reconstrucción', price: '$28.000' },
    ],
  },
  {
    id: 'disenos',
    title: 'Diseños',
    subtitle: 'Nail Art',
    items: [
      { name: 'Francesita / Aura / Baby Boomer', price: '$6.000' },
      { name: 'Polvos Chrome', price: '$5.000' },
      { name: 'Relieves', price: '$8.000' },
      { name: 'Diseños simples', price: '$3.000' },
    ],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState('esculpidas')

  return (
    <section id="servicios" ref={ref} style={{ padding: '110px 0', background: '#FAF8F7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 6, textTransform: 'uppercase', color: '#a87088', textAlign: 'center', marginBottom: 14 }}>
          Nuestros servicios
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: heading, fontSize: 'clamp(36px, 5.5vw, 54px)', fontWeight: 300, textAlign: 'center', color: '#1a0f14', marginBottom: 52, letterSpacing: -0.5 }}>
          Precios & Servicios
        </motion.h2>

        {/* Tab navigation */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          className="tabs-scroll" style={{
            display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 48,
            flexWrap: 'wrap',
          }}>
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActive(cat.id)} className="tab-btn" style={{
              background: active === cat.id ? '#1a0f14' : 'transparent',
              color: active === cat.id ? '#fff' : '#8a6575',
              border: active === cat.id ? '1.5px solid #1a0f14' : '1.5px solid rgba(176,96,128,0.2)',
              padding: '10px 24px', borderRadius: 50, fontSize: 11, fontWeight: 500,
              letterSpacing: 1.8, textTransform: 'uppercase', cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}>{cat.title}</button>
          ))}
        </motion.div>

        {/* Active category content */}
        {categories.filter(c => c.id === active).map(cat => (
          <motion.div key={cat.id}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <h3 style={{ fontFamily: heading, fontSize: 32, fontWeight: 300, color: '#1a0f14', marginBottom: 4 }}>{cat.title}</h3>
              <p style={{ fontSize: 13, color: '#a87088', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 400 }}>{cat.subtitle}</p>
            </div>

            <div style={{
              background: '#fff', borderRadius: 20, overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.04)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.04)',
            }}>
              {cat.items.map((item, ii) => (
                <div key={item.name} className="price-row" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '22px 32px',
                  borderBottom: ii < cat.items.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                  transition: 'all 0.3s ease',
                  gap: 16,
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 15, fontWeight: 400, color: '#1a0f14', letterSpacing: 0.2 }}>{item.name}</span>
                    {item.detail && (
                      <span style={{ fontSize: 11.5, color: '#b8a0aa', fontWeight: 300 }}>{item.detail}</span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <div style={{ width: 40, height: 1, background: 'rgba(216,166,177,0.3)' }} />
                    <span style={{
                      fontFamily: heading, fontSize: 24, fontWeight: 400, color: '#b06080',
                      whiteSpace: 'nowrap',
                    }}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .tab-btn:hover { border-color: rgba(176,96,128,0.5) !important; color: #1a0f14 !important; }
        .price-row:hover { background: rgba(241,191,200,0.06); }
        @media (max-width: 600px) {
          .price-row { flex-direction: column !important; align-items: flex-start !important; padding: 18px 20px !important; }
          .price-row > div:last-child { align-self: flex-end; }
        }
      `}</style>
    </section>
  )
}
