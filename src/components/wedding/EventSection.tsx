import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import groomImg from '@/assets/PREWEDDING-9.jpg';

const EventSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative">
      {/* Square photo with curved bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-square overflow-hidden"
      >
        <img
          src={groomImg}
          alt="Lokasi Pernikahan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        {/* Curved bottom overlay */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="hsl(0 0% 17%)" />
          </svg>
        </div>
      </motion.div>

      {/* Event info */}
      <div className="bg-background px-6 pb-16 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <OrnamentDivider showImage={false} className="mb-6 mt-6" />

          <h3 className="font-display text-xl font-semibold text-foreground mb-8 tracking-widest uppercase">
           ᬒᬁᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ
          </h3>

          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto mb-8">
            Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri Upacara Pernikahan kami:
          </p>

          <h3 className="font-display text-xl font-semibold text-foreground mb-6 tracking-widest uppercase">
            Waktu & Tempat
          </h3>

          {/* Upacara Pawiwahan */}
          <div className="mb-10">
            <div className="space-y-1 font-body text-sm text-muted-foreground">
              <p className="font-semibold">Sabtu, 03 Oktober 2026</p>
              <p>Pukul 14.00 WITA - Selesai</p>
              <p className="max-w-[280px] mx-auto">Br Bale Agung, Cemagi, Mengwi, Badung, Bali</p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/f6aQdJKS29SM6ubEA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-display text-xs tracking-[0.2em] uppercase
              hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <MapPin className="w-4 h-4" />
            Map Lokasi
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
