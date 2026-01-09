import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Campos', href: '#campos' },
    { label: 'Reservas', href: '#reservas' },
    { label: 'Planos', href: '#planos' },
    { label: 'Treinadores', href: '#treinadores' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contactos', href: '#contactos' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="#home" className="text-white">
              <div className="text-xl tracking-tight">
                <span className="font-light">Duarte Gym</span>
                <span className="font-normal"> — </span>
                <span className="font-medium">Padel Academy</span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-white/70 hover:text-white text-sm transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#reservas"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-white/90 transition-all duration-300"
            >
              Reservar Agora
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/70 hover:text-white py-2 text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-white text-black px-6 py-2 rounded-full text-sm text-center mt-4 hover:bg-white/90 transition-all"
            >
              Reservar Agora
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
