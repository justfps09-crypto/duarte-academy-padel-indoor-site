import { motion } from 'motion/react';
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { apiService, ReservaData } from '../../services/api';

export function BookingForm() {
  const [formData, setFormData] = useState<ReservaData>({
    nome: '',
    email: '',
    telefone: '',
    campo: 'campo1',
    data: '',
    horario: '',
    plano: 'casual',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await apiService.criarReserva(formData);

      if (response.sucesso) {
        setSubmitStatus({
          type: 'success',
          message: response.mensagem || 'Reserva criada com sucesso!',
        });
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          campo: 'campo1',
          data: '',
          horario: '',
          plano: 'casual',
          mensagem: '',
        });
      } else {
        throw new Error(response.erro || 'Erro ao criar reserva');
      }
    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Erro ao criar reserva. Por favor, tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservar" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="font-light">Reserva o Teu</span>
            <br />
            <span className="font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Campo Agora
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Preenche o formulário abaixo e garante o teu horário preferido.
            Responderemos em breve para confirmar a tua reserva.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="flex items-center gap-2 text-sm mb-2 text-white/80">
                <User size={16} />
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                placeholder="O teu nome"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm mb-2 text-white/80">
                <Mail size={16} />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                placeholder="o.teu@email.pt"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm mb-2 text-white/80">
                <Phone size={16} />
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                placeholder="+351 912 345 678"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm mb-2 text-white/80">
                Campo
              </label>
              <select
                name="campo"
                value={formData.campo}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              >
                <option value="campo1" className="bg-zinc-900">Campo 1</option>
                <option value="campo2" className="bg-zinc-900">Campo 2</option>
                <option value="campo3" className="bg-zinc-900">Campo 3</option>
                <option value="campo4" className="bg-zinc-900">Campo 4</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm mb-2 text-white/80">
                <Calendar size={16} />
                Data
              </label>
              <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                min={today}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm mb-2 text-white/80">
                <Clock size={16} />
                Horário
              </label>
              <input
                type="time"
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-sm mb-2 text-white/80">
                Plano (Opcional)
              </label>
              <select
                name="plano"
                value={formData.plano}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              >
                <option value="casual" className="bg-zinc-900">Casual - 15€/hora</option>
                <option value="academy" className="bg-zinc-900">Academy - 89€/mês</option>
                <option value="elite" className="bg-zinc-900">Elite - 149€/mês</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-sm mb-2 text-white/80">
                <MessageSquare size={16} />
                Mensagem Adicional (Opcional)
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all resize-none"
                placeholder="Alguma informação adicional..."
              />
            </div>
          </div>

          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
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
                A processar...
              </>
            ) : (
              'Confirmar Reserva'
            )}
          </button>

          <p className="mt-4 text-center text-white/50 text-sm font-light">
            Sem compromisso. Cancela ou reagenda a qualquer momento.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
