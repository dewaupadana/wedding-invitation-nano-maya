import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import heroBg from '@/assets/PREWEDDING-27.jpg';

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
          className="fixed inset-0 z-50 flex flex-col items-center justify-between"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={heroBg}
              alt="Wedding Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          </div>

          {/* Top Content - Names */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 sm:pt-20">
            <motion.p
              className="text-white/80 font-display text-sm tracking-[0.3em] uppercase mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              UNDANGAN PAWIWAHAN
            </motion.p>

            <motion.h1
              className="font-script text-3xl sm:text-6xl text-white mb-1 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Nano
            </motion.h1>

            <motion.p
              className="font-script text-3xl text-white/90 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              &
            </motion.p>

            <motion.h1
              className="font-script text-3xl sm:text-6xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Maya
            </motion.h1>
          </div>

          {/* Bottom Content - Guest & Button */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 pb-16 sm:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mb-6"
            >
              <p className="text-white/70 font-body text-sm tracking-wider uppercase mb-1">
                Kepada Yth.
              </p>
              <p className="text-white font-display text-xl font-medium">
                {guestName}
              </p>
            </motion.div>

            <motion.button
              onClick={onOpen}
              className="px-8 py-3 border border-white/60 text-white font-display text-sm tracking-[0.2em] uppercase
                hover:bg-white/20 transition-all duration-500
                relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Buka Undangan</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoverSection;
