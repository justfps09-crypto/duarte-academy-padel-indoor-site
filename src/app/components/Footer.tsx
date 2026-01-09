import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    {
      title: 'Academia',
      links: ['Sobre Nós', 'Campos', 'Treinadores', 'Galeria'],
    },
    {
      title: 'Serviços',
      links: ['Reservas', 'Planos', 'Torneios', 'Eventos'],
    },
    {
      title: 'Apoio',
      links: ['FAQ', 'Contactos', 'Política de Privacidade', 'Termos e Condições'],
    },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-xl mb-4 tracking-tight">
              <span className="font-light">Duarte Gym</span>
              <span className="font-normal"> — </span>
              <span className="font-medium">Padel Academy</span>
            </div>
            <p className="text-white/60 font-light mb-6 max-w-sm">
              A nova era do padel indoor. Tecnologia premium,
              experiência extraordinária, resultados garantidos.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white text-sm font-light transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-light">
            © 2026 Duarte Gym — Padel Academy. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-sm font-light">
            Desenvolvido com excelência para atletas de elite.
          </p>
        </div>
      </div>
    </footer>
  );
}
