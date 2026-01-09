import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Box, Sun, Layers } from 'lucide-react';

export function Courts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courtFeatures = [
    {
      icon: Box,
      title: 'Design 3D Imersivo',
      description: 'Campos projetados com tecnologia 3D para maximizar a experiência visual e espacial.',
    },
    {
      icon: Sun,
      title: 'Iluminação Premium',
      description: 'Sistema de luz LED de última geração com controlo de intensidade e temperatura.',
    },
    {
      icon: Layers,
      title: 'Superfícies Profissionais',
      description: 'Pavimento de alta performance utilizado em torneios internacionais.',
    },
  ];

  return (
    <section id="campos" ref={ref} className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="font-light">Campos de</span>
            <br />
            <span className="font-semibold">Classe Mundial</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Instalações concebidas para proporcionar a melhor experiência de padel indoor,
            com atenção a cada detalhe técnico e estético.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {courtFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <feature.icon className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1658491830143-72808ca237e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMGNvdXJ0JTIwaW5kb29yfGVufDF8fHx8MTc2Nzg5NjQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Campo de Padel"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
            <div className="text-5xl font-light mb-2">4</div>
            <div className="text-white/60 font-light">Campos Premium</div>
          </div>
          <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
            <div className="text-5xl font-light mb-2">24/7</div>
            <div className="text-white/60 font-light">Disponibilidade</div>
          </div>
          <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
            <div className="text-5xl font-light mb-2">100%</div>
            <div className="text-white/60 font-light">Indoor</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
