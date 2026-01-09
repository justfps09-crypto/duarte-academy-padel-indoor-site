import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { apiService, ContactoData } from '../../services/api';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<ContactoData>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await apiService.enviarContacto(formData);

      if (response.sucesso) {
        setSubmitStatus({
          type: 'success',
          message: response.mensagem || 'Mensagem enviada com sucesso!',
        });
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          mensagem: '',
        });
      } else {
        throw new Error(response.erro || 'Erro ao enviar mensagem');
      }
    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Erro ao enviar mensagem. Por favor, tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            <span className="font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Estamos aqui para responder a todas as tuas questões e
            ajudar-te a começar a tua jornada no padel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
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
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
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

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="rounded-3xl overflow-hidden border border-white/10 h-64 bg-white/5 flex items-center justify-center group hover:bg-white/10 transition-all"
            >
              <div className="text-center">
                <MapPin className="text-white/30 mx-auto mb-4 group-hover:text-white/50 transition-colors" size={48} />
                <p className="text-white/50 text-sm">Mapa interativo em breve</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm mb-2 text-white/70">
                  <User size={16} />
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  placeholder="O teu nome"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm mb-2 text-white/70">
                  <Mail size={16} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  placeholder="o.teu@email.pt"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm mb-2 text-white/70">
                  <Phone size={16} />
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  placeholder="+351 912 345 678"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm mb-2 text-white/70">
                  <MessageSquare size={16} />
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/30 text-green-200'
                      : 'bg-red-500/20 border border-red-500/30 text-red-200'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    A enviar...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
