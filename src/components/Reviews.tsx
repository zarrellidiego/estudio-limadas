import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reviews = [
  {
    name: 'Camila R.',
    text: 'Me dejaron las uñas perfectas y duraron muchísimo. El lugar es hermoso y la atención de 10.',
    rating: 5,
  },
  {
    name: 'Valentina G.',
    text: 'La atención increíble y el lugar hermoso. Siempre salgo feliz. Son muy detallistas con cada uña.',
    rating: 5,
  },
  {
    name: 'Sofía M.',
    text: 'Por lejos el mejor estudio de uñas de la zona. Prolijidad impecable y los diseños son otro nivel.',
    rating: 5,
  },
]

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resenas" ref={ref} className="py-24 md:py-32 bg-nude/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[4px] uppercase text-gray text-center mb-4"
        >
          Reseñas
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-[36px] md:text-[48px] text-center text-black mb-16 tracking-[-0.5px]"
        >
          Lo que dicen nuestras clientas
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-white border border-black/[0.06] rounded-2xl p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-rose text-[16px]">★</span>
                ))}
              </div>
              <p className="text-[15px] leading-[1.7] text-black/80 mb-6 italic">
                "{r.text}"
              </p>
              <p className="text-[12px] font-medium tracking-[2px] uppercase text-gray">
                {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
