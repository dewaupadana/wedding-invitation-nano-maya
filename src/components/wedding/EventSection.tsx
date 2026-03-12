import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import groomImg from '@/assets/waktu.jpg';
// import brideImg from '@/assets/bride.jpg';

const EventSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 px-6">
      {/* Couple Photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex justify-center gap-4 mb-8"
      >
         <img
          src={groomImg}
          alt="Lokasi Pernikahan"
          className="w-full h-full object-cover opacity-80"
        />
        {/* <div className="w-32 h-44 overflow-hidden border border-primary/30">
          <img src={groomImg} alt="Mempelai Pria" className="w-full h-full object-cover" />
        </div> */}
        {/* <div className="w-32 h-44 overflow-hidden border border-primary/30">
          <img src={brideImg} alt="Mempelai Wanita" className="w-full h-full object-cover" />
        </div> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center"
      >
        <OrnamentDivider showImage={true} className="mb-6" />

        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto mb-8">
          Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri Upacara Pernikahan kami:
        </p>

        {/* Upacara Pawiwahan */}
        <div className="mb-10">
          <h3 className="font-display text-lg font-semibold text-foreground mb-3">
            Upacara Pawiwahan
          </h3>
          <div className="space-y-1 font-body text-sm text-muted-foreground">
            <p>Minggu, 17 Agustus 2025</p>
            <p>Pukul 09.00 - 12.00 WITA</p>
            <p className="max-w-[280px] mx-auto">Pura Keluarga, Br. Teges, Ubud, Gianyar, Bali</p>
          </div>
        </div>

        <OrnamentDivider showImage={false} className="mb-10" />

        {/* Resepsi */}
        <div className="mb-10">
          <h3 className="font-display text-lg font-semibold text-foreground mb-3">
            Resepsi
          </h3>
          <div className="space-y-1 font-body text-sm text-muted-foreground">
            <p>Minggu, 17 Agustus 2025</p>
            <p>Pukul 13.00 - 17.00 WITA</p>
            <p className="max-w-[280px] mx-auto">Balai Banjar Teges Kanginan, Ubud, Gianyar, Bali</p>
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=Ubud+Bali"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-display text-xs tracking-[0.2em] uppercase
            hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <MapPin className="w-4 h-4" />
          Map Lokasi
        </a>
      </motion.div>
    </section>
  );
};

export default EventSection;
