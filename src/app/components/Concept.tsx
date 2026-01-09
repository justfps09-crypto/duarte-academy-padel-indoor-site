import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Zap, Trophy, Users } from 'lucide-react';

export function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Tecnologia de última geração integrada em cada detalhe da nossa infraestrutura.',
    },
    {
      icon: Trophy,
      title: 'Excelência',
      description: 'Padrões elevados em equipamentos, campos e serviços de treino personalizado.',
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Uma família de atletas dedicados a alcançar o seu máximo potencial.',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="font-light">Mais que um Ginásio.</span>
            <br />
            <span className="font-semibold">Uma Experiência.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Na Duarte Gym — Padel Academy, redefinimos o conceito de treino indoor
            com instalações de classe mundial e uma abordagem centrada em tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
