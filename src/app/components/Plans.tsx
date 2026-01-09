import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Check } from 'lucide-react';

export function Plans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: 'Casual',
      price: '15€',
      period: 'por hora',
      description: 'Perfeito para jogadores ocasionais',
      features: [
        'Acesso a todos os campos',
        'Reserva online 24/7',
        'Estacionamento gratuito',
        'Balneários premium',
      ],
      highlighted: false,
    },
    {
      name: 'Academy',
      price: '89€',
      period: 'por mês',
      description: 'Para quem leva o padel a sério',
      features: [
        'Tudo do plano Casual',
        '8 horas de jogo por mês',
        '2 sessões de treino',
        'Análise de jogo',
        'Desconto em torneios',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      price: '149€',
      period: 'por mês',
      description: 'Máxima performance e dedicação',
      features: [
        'Tudo do plano Academy',
        'Horas ilimitadas',
        'Treino personalizado',
        'Nutricionista desportivo',
        'Preparação física',
        'Acesso prioritário',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="planos" ref={ref} className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="font-light">Escolha o Seu</span>
            <br />
            <span className="font-semibold">Plano Ideal</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Opções flexíveis para todos os níveis de jogadores,
            desde iniciantes até atletas de alta competição.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-3xl p-8 ${
                plan.highlighted
                  ? 'bg-white text-black border-2 border-white transform scale-105'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs uppercase tracking-wider mb-4 font-medium">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-black/60' : 'text-white/60'} font-light`}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-5xl">{plan.price}</span>
                <span className={`ml-2 ${plan.highlighted ? 'text-black/60' : 'text-white/60'} font-light`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-black' : 'text-white'}`}
                      size={20}
                    />
                    <span className={`text-sm font-light ${plan.highlighted ? 'text-black/80' : 'text-white/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-full transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'bg-white/10 border border-white/20 hover:bg-white/20'
                }`}
              >
                Selecionar Plano
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 text-white/50 text-sm font-light"
        >
          Todos os planos sem permanência. Cancele quando quiser.
        </motion.p>
      </div>
    </section>
  );
}
