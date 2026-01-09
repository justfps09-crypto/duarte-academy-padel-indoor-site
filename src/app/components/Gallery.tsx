import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<'fotos' | 'videos'>('fotos');

  const images = [
    'https://images.unsplash.com/photo-1658491830143-72808ca237e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMGNvdXJ0JTIwaW5kb29yfGVufDF8fHx8MTc2Nzg5NjQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759355456246-6937354a395d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHJhY2tldCUyMHNwb3J0fGVufDF8fHx8MTc2Nzk0NTY4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1765121691574-4210c03a8f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzcG9ydHMlMjBmYWNpbGl0eXxlbnwxfHx8fDE3Njc5NzExNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1672436281407-d092460d29d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwxfHx8fDE3Njc5NzExNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1765302762700-81992a568be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBneW18ZW58MXx8fHwxNzY3OTM4MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758521960574-d1077c9de630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWNobm9sb2d5JTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3Njc5NzExNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <section id="galeria" ref={ref} className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="font-light">Veja a Nossa</span>
            <br />
            <span className="font-semibold">Academia em Ação</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Explore as nossas instalações de última geração e
            o ambiente premium que criamos para si.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('fotos')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'fotos'
                ? 'bg-white text-black'
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
            }`}
          >
            Fotos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-white text-black'
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
            }`}
          >
            Vídeos
          </button>
        </motion.div>

        {/* Gallery */}
        {activeTab === 'fotos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer h-80"
              >
                <ImageWithFallback
                  src={images[index]}
                  alt={`Vídeo ${video}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
