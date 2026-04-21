import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ubicacion" ref={ref} className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[4px] uppercase text-gray text-center mb-4"
        >
          Encontranos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-[36px] md:text-[48px] text-center text-black mb-4 tracking-[-0.5px]"
        >
          Floresta, CABA
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[15px] text-gray text-center mb-12"
        >
          Pergamino 160 &middot; Buenos Aires
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl overflow-hidden border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9!2d-58.52!3d-34.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM3JzQ4LjAiUyA1OMKwMzEnMTIuMCJX!5e0!3m2!1ses!2sar!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Estudio Limadas - Floresta, CABA"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mt-10 text-[13px] text-gray"
        >
          <span>🚇 Cerca de Estación Floresta</span>
          <span>🚌 Líneas 2, 36, 49, 80, 86, 104</span>
          <span>🅿️ Estacionamiento en la zona</span>
        </motion.div>
      </div>
    </section>
  )
}
