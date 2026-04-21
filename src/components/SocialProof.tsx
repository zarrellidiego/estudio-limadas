import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '+1.400', label: 'Seguidoras en Instagram' },
  { value: '★ 5.0', label: 'Calificación en Google' },
  { value: '100%', label: 'Atención personalizada' },
  { value: 'Premium', label: 'Resultados garantizados' },
]

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="bg-black py-6 md:py-8">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center py-3"
          >
            <p className="text-white text-[22px] md:text-[26px] font-heading font-normal mb-1">
              {s.value}
            </p>
            <p className="text-white/50 text-[11px] tracking-[2px] uppercase font-medium">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
