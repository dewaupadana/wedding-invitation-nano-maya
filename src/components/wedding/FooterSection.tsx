import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import footerBg from '@/assets/PREWEDDING-61.jpg';

const FooterSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-14 px-6 text-center"
      >
        <OrnamentDivider showImage={false} className="mb-8" />

        <p className="font-body text-sm text-muted-foreground italic max-w-xs mx-auto mb-4">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </p>

        <p className="font-script text-xl text-primary mb-4">ᬒᬵᬁᬰᬦ᭄ᬢᬶᬄᬰᬦ᭄ᬢᬶᬄᬰᬦ᭄ᬢᬶᬄᬒᬵᬁ</p>

        <div className="mt-12">
          <p className="font-display text-sm text-muted-foreground tracking-wider">
            Kami yang berbahagia
          </p>
          <p className="font-script text-xl text-primary mt-6">Nano & Maya</p>
        </div>
      </motion.div>

      {/* Footer background image section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <img
          src={footerBg}
          alt="Dewa & Dewa Ayu"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <p className="font-script text-2xl text-primary mb-1 ">Nano</p>
          <p className="font-script text-2xl text-primary mb-1 ">&</p>
          <p className="font-script text-2xl text-primary mb-4 ">Maya</p>
          <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            Wedding Invitation by Inlabs Bali
          </p>
          <p className="font-body text-xs text-muted-foreground/50 mt-3">
            #INLABS2026
          </p>
          {/* <p className="font-body text-[10px] text-muted-foreground/40 mt-4">
            © 2026 — Undangan Digital
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
