import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';

const FooterSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
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
          <p className="font-script text-2xl text-primary mt-2">Wika & Iin</p>
        </div>

        <div className="mt-12 pt-6 border-t border-primary/10">
          <p className="font-body text-xs text-muted-foreground/50">
            © 2025 — Undangan Digital
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default FooterSection;
