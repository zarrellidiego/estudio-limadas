import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.me/5491154047769?text=' + encodeURIComponent('Hola! Quiero reservar un turno en Estudio Limadas')

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-warm-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[15%] right-[10%] w-[300px] h-[300px] rounded-full bg-nude/40 blur-[100px]" />
      <div className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] rounded-full bg-rose/20 blur-[80px]" />

      <div className="relative z-10 text-center px-6 max-w-[800px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-medium tracking-[4px] uppercase text-gray mb-8"
        >
          Nail Studio &middot; Floresta, CABA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-[clamp(40px,7vw,72px)] leading-[1.05] font-normal text-black mb-6 tracking-[-1px]"
        >
          Tus uñas hablan
          <br />
          <span className="italic text-rose-dark">antes que vos.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[16px] md:text-[18px] leading-[1.7] text-gray max-w-[560px] mx-auto mb-12 font-light"
        >
          Esculpidas, Kapping, Semipermanente y Belleza de pies.
          Resultados impecables, atención premium y turnos rápidos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white text-[13px] font-medium tracking-[1.5px] uppercase px-10 py-4 rounded-full hover:bg-black/85 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            Reservar por WhatsApp
          </a>
          <a
            href="https://www.instagram.com/estudio.limadas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium tracking-[1.5px] uppercase text-gray border border-gray-light/50 px-10 py-4 rounded-full hover:border-black hover:text-black transition-all duration-300"
          >
            Ver trabajos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-8 bg-gray-light/50"
        />
      </motion.div>
    </section>
  )
}
