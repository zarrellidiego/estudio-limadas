import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import trabajo1 from '../assets/trabajo1.jpg'
import trabajo2 from '../assets/trabajo2.jpg'
import trabajo3 from '../assets/trabajo3.jpg'
import trabajo4 from '../assets/trabajo4.jpg'

const images = [
  { src: trabajo4, label: 'Esculpidas' },
  { src: trabajo1, label: 'Belleza de Pies' },
  { src: trabajo2, label: 'Esmaltado Semi' },
  { src: trabajo3, label: 'Pedicura' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galeria" ref={ref} className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[4px] uppercase text-gray text-center mb-4"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-[36px] md:text-[48px] text-center text-black mb-16 tracking-[-0.5px]"
        >
          Nuestros trabajos
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="text-white text-[13px] font-medium tracking-[1.5px] uppercase">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/estudio.limadas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[1.5px] uppercase text-gray border border-gray-light/50 px-8 py-3.5 rounded-full hover:border-black hover:text-black transition-all duration-300"
          >
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
