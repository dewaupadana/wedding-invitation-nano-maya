import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroBg from '@/assets/PREWEDDING-6.jpg';
import OrnamentDivider from './OrnamentDivider';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Wedding Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
      </div>

      {/* Top Content - Names */}
      <div className="relative z-10 text-center px-6 pt-16 sm:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-sm tracking-[0.3em] uppercase text-foreground/80 mb-4"
        >
          PAWIWAHAN
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-script text-4xl sm:text-4xl text-gold-gradient mb-2 leading-[1.3] pt-2"
        >
          Nano
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-script text-3xl text-primary mb-2"
        >
          &
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-script text-4xl sm:text-4xl text-gold-gradient leading-[1.3] pt-2"
        >
          Maya
        </motion.h1>
      </div>

      {/* Bottom Content - Date & Quote */}
      <div className="relative z-10 text-center px-6 pb-16 sm:pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-display text-sm tracking-[0.25em] uppercase text-foreground/70 mb-8"
        >
          03 Oktober 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <OrnamentDivider showImage={false} className="mb-8" />
          <p className="font-body text-base text-foreground/70 italic leading-relaxed max-w-xs mx-auto mb-2">
            "Tat Tvam Asi"
          </p>
          <p className="font-body text-sm text-foreground/60 max-w-xs mx-auto mb-4">
            Aku adalah Engkau, dan Engkau adalah Aku. Bersama kita menjadi satu dalam cinta yang abadi.
          </p>
          <p className="font-body text-xs text-foreground/50 tracking-wider uppercase">
            — Chandogya Upanishad VI.8.7 —
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
