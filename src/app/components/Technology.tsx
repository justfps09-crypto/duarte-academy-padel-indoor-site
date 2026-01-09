import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cpu, Eye, Thermometer, Lightbulb } from 'lucide-react';

export function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    {
      icon: Lightbulb,
      title: 'Iluminação LED Inteligente',
      description: 'Sistema de iluminação adaptativo que simula a luz natural e otimiza a visibilidade.',
    },
    {
      icon: Thermometer,
      title: 'Controlo Climático',
      description: 'Temperatura e humidade controladas para condições ideais durante todo o ano.',
    },
    {
      icon: Eye,
      title: 'Análise de Jogo',
      description: 'Câmaras HD para gravação e análise técnica do seu desempenho.',
    },
    {
      icon: Cpu,
      title: 'Reservas Inteligentes',
      description: 'Plataforma digital avançada para gestão de horários e treinos personalizados.',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="font-light">Tecnologia que</span>
            <br />
            <span className="font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Eleva o Jogo
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Cada campo é equipado com sistemas avançados que transformam
            a experiência de padel numa jornada tecnológica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10">
                <tech.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl mb-3">{tech.title}</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="rounded-3xl overflow-hidden"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758521960574-d1077c9de630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWNobm9sb2d5JTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3Njc5NzExNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tecnologia Desportiva"
            className="w-full h-96 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
