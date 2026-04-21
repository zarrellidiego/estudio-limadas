import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heading = "'Cormorant Garamond', serif"

const categories = [
  {
    title: 'Esculpidas de Acrílico',
    items: [
      { name: 'Largos 1-2', price: '$39.600', sub: 'Service $35.200' },
      { name: 'Largos 3-4', price: '$42.900', sub: 'Service $38.500' },
      { name: 'Largos 5-6', price: '$49.500', sub: 'Service $45.100' },
    ],
  },
  {
    title: 'Esculpidas de Gel',
    items: [
      { name: 'Largos 1-2', price: '$38.400', sub: 'Service $35.000' },
      { name: 'Largos 3-4', price: '$42.000', sub: 'Service $38.000' },
      { name: 'Largos 5-6', price: '$49.200', sub: 'Service $44.000' },
    ],
  },
  {
    title: 'Servicios de Manos',
    items: [
      { name: 'Kapping Acrílico', price: '$28.000' },
      { name: 'Kapping Gel', price: '$26.000' },
      { name: 'Semi Permanente', price: '$20.000 - $24.000' },
      { name: 'Remoción', price: '$12.000' },
      { name: 'Arreglos', price: '$4.000' },
    ],
  },
  {
    title: 'Belleza de Pies',
    items: [
      { name: 'Sin esmaltado', price: '$13.000' },
      { name: '+ Esmaltado Semi', price: '$23.000' },
      { name: '+ Semi + Reconstrucción', price: '$28.000' },
    ],
  },
  {
    title: 'Diseños Adicionales',
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

  return (
    <section id="servicios" ref={ref} style={{ padding: '100px 0', background: '#FAF8F7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: 11, fontWeight: 500, letterSpacing: 5, textTransform: 'uppercase', color: '#9a7a8a', textAlign: 'center', marginBottom: 12 }}>
          Nuestros servicios
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: heading, fontSize: 'clamp(34px, 5vw, 50px)', fontWeight: 300, textAlign: 'center', color: '#111', marginBottom: 64, letterSpacing: -0.5 }}>
          Precios & Servicios
        </motion.h2>

        {categories.map((cat, ci) => (
          <motion.div key={cat.title}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + ci * 0.08 }}
            style={{ marginBottom: 48 }}>
            <h3 style={{
              fontFamily: heading, fontSize: 26, fontWeight: 400, color: '#111',
              marginBottom: 20, paddingBottom: 12,
              borderBottom: '1px solid rgba(216,166,177,0.25)',
            }}>{cat.title}</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {cat.items.map((item, ii) => (
                <div key={item.name} className="price-row" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 0',
                  borderBottom: ii < cat.items.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                }}>
                  <div>
                    <span style={{ fontSize: 15, fontWeight: 400, color: '#111' }}>{item.name}</span>
                    {item.sub && (
                      <span style={{ fontSize: 12, color: '#aaa', marginLeft: 12 }}>{item.sub}</span>
                    )}
                  </div>
                  <span style={{
                    fontFamily: heading, fontSize: 22, fontWeight: 500, color: '#b87a90',
                    whiteSpace: 'nowrap',
                  }}>{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .price-row { transition: background 0.3s; }
        .price-row:hover { background: rgba(216,166,177,0.06); }
        @media (max-width: 600px) {
          .price-row { flex-direction: column; align-items: flex-start !important; gap: 4px; }
        }
      `}</style>
    </section>
  )
}
