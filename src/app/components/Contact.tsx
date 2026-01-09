import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Rua da Inovação, 123\n1000-001 Lisboa',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+351 210 000 000',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@duartegym.pt',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Dom: 07:00 - 23:00',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contactos" ref={ref} className="py-32 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="font-light">Entre em</span>
            <br />
            <span className="font-semibold">Contacto</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Estamos aqui para responder a todas as suas questões e
            ajudá-lo a começar a sua jornada no padel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <info.icon className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">{info.title}</h3>
                  <p className="text-white/60 font-light whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="rounded-3xl overflow-hidden border border-white/10 h-64 bg-white/5 flex items-center justify-center"
            >
              <MapPin className="text-white/30" size={48} />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-white/70">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="O seu nome"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-white/70">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="o.seu@email.pt"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-white/70">Telefone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="+351 000 000 000"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-white/70">Mensagem</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
