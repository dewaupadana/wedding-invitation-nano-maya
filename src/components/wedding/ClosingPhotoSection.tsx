import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import closingImg from '@/assets/PREWEDDING-29.jpg';

const ClosingPhotoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative">
      {/* Curved top */}
      {/* <div className="absolute -top-1 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z" fill="hsl(0 0% 17%)" />
        </svg>
      </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative w-full aspect-[4/3] overflow-hidden"
      >
        <img
          src={closingImg}
          alt="Venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      {/* Curved bottom */}
      {/* <div className="absolute -bottom-1 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="hsl(0 0% 17%)" />
        </svg>
      </div> */}
    </section>
  );
};

export default ClosingPhotoSection;
