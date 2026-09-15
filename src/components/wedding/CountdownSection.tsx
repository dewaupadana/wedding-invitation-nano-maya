import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';

const WEDDING_DATE = new Date('2026-10-03T08:00:00+08:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section ref={ref} className="py-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* <OrnamentDivider className="mb-8" />

        <p className="font-body text-lg text-muted-foreground italic leading-relaxed max-w-sm mx-auto mb-2">
          "Tat Tvam Asi"
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto mb-8">
          Aku adalah Engkau, dan Engkau adalah Aku. Bersama kita menjadi satu dalam cinta yang abadi.
        </p>
        <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-10">
          — Chandogya Upanishad VI.8.7 —
        </p>

        <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Menghitung Hari
        </p> */}

        <div className="flex justify-center gap-4">
          {timerItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 border border-primary/40 flex items-center justify-center bg-card/50 backdrop-blur-sm">
                <span className="font-display text-2xl font-bold text-primary">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs text-muted-foreground mt-2 font-body tracking-wider uppercase">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
