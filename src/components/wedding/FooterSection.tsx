import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import footerBg from '@/assets/event1.jpg';

const FooterSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 text-center"
      >
        <OrnamentDivider className="mb-8" />

        <p className="font-body text-sm text-muted-foreground italic max-w-xs mx-auto mb-4">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </p>

        <p className="font-script text-3xl text-primary mb-2">Om Shanti Shanti Shanti Om</p>

        <div className="mt-8">
          <p className="font-display text-sm text-muted-foreground tracking-wider">
            Kami yang berbahagia
          </p>
          <p className="font-script text-2xl text-primary mt-2">Dewa Agung & Dewa Ayu Putri</p>
        </div>
      </motion.div>

      {/* Footer background image section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={footerBg}
          alt="Wika & Iin"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <p className="font-script text-4xl text-primary mb-2">Dewa & Dewa Ayu</p>
          <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            Wedding Invitation by Naavadays Bali
          </p>
          <p className="font-body text-xs text-muted-foreground/50 mt-3">
            #NAAVADAYS2025
          </p>
          <p className="font-body text-[10px] text-muted-foreground/40 mt-4">
            © 2025 — Undangan Digital
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
