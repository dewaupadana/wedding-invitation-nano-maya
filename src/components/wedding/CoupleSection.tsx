import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import groomImg from '@/assets/groom.jpg';
import brideImg from '@/assets/bride.jpg';

const CoupleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const people = [
    {
      name: 'I Wayan Wika Pratama',
      parent: 'Putra dari Bapak I Made Dharma & Ibu Ni Nyoman Sari',
      image: groomImg,
      label: 'Mempelai Pria',
    },
    {
      name: 'Ni Kadek Iin Purnama Dewi',
      parent: 'Putri dari Bapak I Ketut Surya & Ibu Ni Wayan Rani',
      image: brideImg,
      label: 'Mempelai Wanita',
    },
  ];

  return (
    <section ref={ref} className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="font-script text-3xl text-primary mb-2">Om Swastyastu</p>
        <OrnamentDivider showImage={false} />
      </motion.div>

      <div className="space-y-10">
        {people.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.3, duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-primary/40 mb-4 p-1">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-1">
              {person.label}
            </p>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {person.name}
            </h3>
            <p className="font-body text-sm text-muted-foreground max-w-xs">
              {person.parent}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center mt-8"
      >
        <p className="font-script text-2xl text-primary">&</p>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
