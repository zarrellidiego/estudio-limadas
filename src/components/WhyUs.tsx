import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
  { title: 'Duración real', desc: 'Resultados que se mantienen impecables por semanas, sin levantamientos ni roturas.' },
  { title: 'Máxima prolijidad', desc: 'Cada detalle importa. Cutículas perfectas, terminaciones limpias, simetría total.' },
  { title: 'Materiales premium', desc: 'Trabajamos solo con marcas profesionales de primera línea para garantizar calidad.' },
  { title: 'Higiene estricta', desc: 'Esterilización completa de instrumental. Tu salud es nuestra prioridad.' },
  { title: 'Diseños personalizados', desc: 'Desde lo clásico hasta el nail art más creativo. Vos elegís, nosotras creamos.' },
  { title: 'Atención cálida', desc: 'Puntualidad, trato personalizado y un ambiente donde te sentís cómoda.' },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-nude/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[4px] uppercase text-gray text-center mb-4"
        >
          Por qué elegirnos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-[36px] md:text-[48px] text-center text-black mb-16 tracking-[-0.5px]"
        >
          La diferencia está en los detalles
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="text-center md:text-left"
            >
              <div className="w-8 h-[1.5px] bg-rose mb-5 mx-auto md:mx-0" />
              <h3 className="font-heading text-[20px] text-black mb-2">{r.title}</h3>
              <p className="text-[14px] leading-[1.7] text-gray">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
