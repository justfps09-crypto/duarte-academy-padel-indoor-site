import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Smartphone, Calendar, CheckCircle } from 'lucide-react';

export function Bookings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Smartphone,
      title: 'Escolha o Campo',
      description: 'Selecione o campo e horário que melhor se adequa à sua agenda.',
    },
    {
      icon: Calendar,
      title: 'Reserve Online',
      description: 'Sistema de reservas instantâneas disponível 24/7 através da nossa plataforma.',
    },
    {
      icon: CheckCircle,
      title: 'Jogue',
      description: 'Receba confirmação imediata e prepare-se para a melhor experiência de padel.',
    },
  ];

  return (
    <section id="reservas" ref={ref} className="py-32 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="font-light">Reservar é</span>
            <br />
            <span className="font-semibold">Simples e Rápido</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Sistema de reservas inteligente que torna a marcação do seu campo
            numa experiência fluída e sem complicações.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10">
                  <step.icon className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">
                  {index + 1}
                </div>
                <h3 className="text-2xl mb-4">{step.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#planos"
            className="inline-block bg-white text-black px-10 py-5 rounded-full hover:bg-white/90 transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Começar Agora
          </a>
          <p className="mt-6 text-white/50 text-sm font-light">
            Sem compromisso. Cancele ou reagende a qualquer momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
