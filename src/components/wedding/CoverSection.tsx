import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';
import ornamentImg from '@/assets/ornament.png';

interface CoverSectionProps {
  isOpen: boolean;
  onOpen: () => void;
}

const CoverSection = ({ isOpen, onOpen }: CoverSectionProps) => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan';

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={heroBg}
              alt="Wedding Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <motion.img
              src={ornamentImg}
              alt="Ornamen"
              className="w-24 h-24 opacity-50 mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />

            <motion.p
              className="text-muted-foreground font-body text-lg tracking-[0.3em] uppercase mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Undangan Pernikahan
            </motion.p>

            <motion.h1
              className="font-script text-5xl sm:text-6xl text-gold-gradient mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Wika
            </motion.h1>

            <motion.p
              className="font-script text-3xl text-primary mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              &
            </motion.p>

            <motion.h1
              className="font-script text-5xl sm:text-6xl text-gold-gradient mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Iin
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-muted-foreground font-body text-sm tracking-wider uppercase mb-1">
                Kepada Yth.
              </p>
              <p className="text-foreground font-display text-xl font-medium">
                {guestName}
              </p>
            </motion.div>

            <motion.button
              onClick={onOpen}
              className="px-8 py-3 border border-primary text-primary font-display text-sm tracking-[0.2em] uppercase
                hover:bg-primary hover:text-primary-foreground transition-all duration-500
                relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Buka Undangan</span>
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoverSection;
