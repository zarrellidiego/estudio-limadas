import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WA_LINK = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-black overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-rose/10 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[15%] w-[200px] h-[200px] rounded-full bg-nude/10 blur-[80px]" />

      <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-heading text-[36px] md:text-[52px] text-white leading-[1.1] mb-6 tracking-[-0.5px]"
        >
          Tu próximo turno está
          <br />
          <span className="italic text-rose">a un mensaje.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[15px] text-white/50 mb-12 font-light"
        >
          Escribinos por WhatsApp y reservá tu lugar. Atención rápida y personalizada.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black text-[13px] font-medium tracking-[1.5px] uppercase px-12 py-4 rounded-full hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
        >
          Reservar ahora por WhatsApp
        </motion.a>
      </div>
    </section>
  )
}
