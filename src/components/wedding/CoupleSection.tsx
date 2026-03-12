import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import groomImg from '@/assets/ps1.jpg';
import brideImg from '@/assets/ps2.jpg';

const CoupleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const people = [
    {
      name: 'I Dewa Gede Agung Sanjaya Putra',
      parent: 'Putra dari Bapak Dewa Nyoman Arimbawa & Ibu Ni Nyoman Murniasih (alm)',
      image: groomImg,
      label: 'Dewa Sanjaya',
    },
    {
      name: 'Dewa Ayu Putri Diah Anggreni',
      parent: 'Putri dari Bapak I Dewa & Ibu',
      image: brideImg,
      label: 'Dewa Putri',
    },
  ];

 return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-b from-muted via-muted/80 to-background">
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
        {people.map((person, i) => {
          return (
            <div>
              <motion.div
                key={person.name}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.3, duration: 0.8 }}
                className="flex flex-col items-center text-center"
              >
              <div className="w-64 h-96 rounded-full overflow-hidden border-2 border-primary/40 mb-4 p-1">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-script text-xs  text-primary tracking-[0.3em] uppercase my-4">
                  {person.label}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {person.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground max-w-xs">
                  {person.parent}
                </p>
              </motion.div>
              { i == 0 ? 
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-center mt-8"
                >
                  <p className="font-script text-2xl text-primary">&</p>
                </motion.div>
              : ''}
            </div>
          );
          })}
      </div>     
    </section>
  );
};

export default CoupleSection;
