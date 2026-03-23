import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import { toast } from 'sonner';

const accounts = [
  {
    bank: 'Bank BCA',
    number: '1234567890',
    name: 'I Dewa Gede Agung Sanjaya Putra',
  },
  {
    bank: 'BPD Bali ',
    number: '0310215001930',
    name: 'Dewa Ayu Putri Diah Anggraeny',
  },
];

const GiftSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (number: string, index: number) => {
    await navigator.clipboard.writeText(number);
    setCopiedIndex(index);
    toast.success('Nomor rekening disalin!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section ref={ref} className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Tanda Kasih
        </p>
        <h2 className="font-script text-4xl text-primary">Wedding Gift</h2>
        <OrnamentDivider showImage={false} className="mt-4" />
        <p className="font-body text-sm text-muted-foreground mt-4 max-w-xs mx-auto">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.
        </p>
      </motion.div>

      <div className="space-y-4 max-w-sm mx-auto">
        {accounts.map((acc, i) => (
          <motion.div
            key={acc.number}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
            className="border border-primary/20 bg-card/50 p-5 text-center"
          >
            <p className="font-display text-sm font-semibold text-primary mb-1">{acc.bank}</p>
            <p className="font-body text-lg text-foreground tracking-wider mb-1">{acc.number}</p>
            <p className="font-body text-xs text-muted-foreground mb-3">a.n. {acc.name}</p>
            <button
              onClick={() => handleCopy(acc.number, i)}
              className="px-4 py-2 border border-primary/40 text-primary font-body text-xs tracking-wider
                hover:bg-primary hover:text-primary-foreground transition-all duration-300
                flex items-center gap-2 mx-auto"
            >
              {copiedIndex === i ? (
                <>
                  <Check className="w-3 h-3" />
                  Disalin
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Salin No. Rekening
                </>
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GiftSection;
