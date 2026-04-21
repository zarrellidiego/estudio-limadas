import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Esculpidas',
    desc: 'Acrílico o gel. Largos a medida con diseños únicos que duran semanas.',
    prices: ['Desde $38.400', 'Service desde $35.000'],
  },
  {
    title: 'Kapping',
    desc: 'Protección y fortalecimiento para tus uñas naturales con acabado impecable.',
    prices: ['Acrílico $28.000', 'Gel $26.000'],
  },
  {
    title: 'Semipermanente',
    desc: 'Color duradero, brillo perfecto. Manos impecables por semanas.',
    prices: ['Desde $20.000'],
  },
  {
    title: 'Belleza de Pies',
    desc: 'Cuidado completo: limpieza profunda, hidratación y esmaltado profesional.',
    prices: ['Desde $13.000'],
  },
  {
    title: 'Diseños & Nail Art',
    desc: 'Francesita, Aura, Baby Boomer, Chrome, Relieves y más. Arte en cada uña.',
    prices: ['Desde $3.000'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" ref={ref} className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[4px] uppercase text-gray text-center mb-4"
        >
          Nuestros servicios
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-[36px] md:text-[48px] text-center text-black mb-16 tracking-[-0.5px]"
        >
          Lo que hacemos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group bg-white border border-black/[0.06] rounded-2xl p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              <h3 className="font-heading text-[24px] text-black mb-3">{s.title}</h3>
              <p className="text-[14px] leading-[1.7] text-gray mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.prices.map((p) => (
                  <span
                    key={p}
                    className="inline-block text-[12px] font-medium tracking-[0.5px] text-rose-dark bg-rose/10 px-4 py-1.5 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
