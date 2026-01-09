import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1658491830143-72808ca237e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMGNvdXJ0JTIwaW5kb29yfGVufDF8fHx8MTc2Nzg5NjQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Padel Court"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            <span className="font-light">A Nova Era do</span>
            <br />
            <span className="font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Padel Indoor
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light"
        >
          Tecnologia de ponta. Experiência premium. Resultados extraordinários.
          Bem-vindo ao futuro do padel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#reservas"
            className="bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Reservar Campo
          </a>
          <a
            href="#campos"
            className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Descobrir Mais
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white/50" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
