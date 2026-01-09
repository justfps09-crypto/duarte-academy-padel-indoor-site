import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Target, Heart } from 'lucide-react';

export function Coaches() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const methodology = [
    {
      icon: Target,
      title: 'Personalização',
      description: 'Cada atleta recebe um plano de treino adaptado aos seus objetivos e nível.',
    },
    {
      icon: Award,
      title: 'Experiência',
      description: 'Treinadores certificados com experiência em competições nacionais e internacionais.',
    },
    {
      icon: Heart,
      title: 'Dedicação',
      description: 'Acompanhamento próximo e motivação constante para alcançar o seu melhor.',
    },
  ];

  const coaches = [
    {
      name: 'Ricardo Duarte',
      role: 'Treinador Principal',
      specialty: 'Especialista em táticas avançadas',
    },
    {
      name: 'Ana Silva',
      role: 'Treinadora de Performance',
      specialty: 'Preparação física e mental',
    },
    {
      name: 'João Ferreira',
      role: 'Treinador Técnico',
      specialty: 'Fundamentos e técnica',
    },
  ];

  return (
    <section id="treinadores" ref={ref} className="py-32 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="font-light">Equipa de</span>
            <br />
            <span className="font-semibold">Treinadores Elite</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Profissionais dedicados a transformar o seu jogo através de metodologias
            inovadoras e acompanhamento personalizado.
          </p>
        </motion.div>

        {/* Methodology */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {methodology.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Coaches */}
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765302762700-81992a568be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBneW18ZW58MXx8fHwxNzY3OTM4MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={coach.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl mb-2">{coach.name}</h3>
              <p className="text-white/70 mb-2">{coach.role}</p>
              <p className="text-white/50 text-sm font-light">{coach.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
