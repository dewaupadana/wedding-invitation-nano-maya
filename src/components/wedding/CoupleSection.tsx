import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import groomImg from '@/assets/PREWEDDING-84-1.jpg';
import brideImg from '@/assets/PREWEDDING-79.jpg';

const CoupleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const people = [
    {
      name: 'I Putu Hartana Putra',
      couple:'Putra Pertama Dari Pasangan',
      parent: 'I Nyoman Miarta',
      and:'&',
      parent2: 'Ni Ketut Ratnawati',
      lokasi: 'Br Bale Agung, Cemagi, Mengwi, Badung, Bali',
      image: groomImg,
      label: 'Nano',
    },
    {
      name: 'Maya Siska Sri Rahayu',
      couple:'Putri Keempat Dari Pasangan',
      parent: 'Taryadi ',
      and:'&',
      parent2: 'Sri (Alm)',
      lokasi: 'Br. Kabetan Kelod, Ds. Bakbakan, Gianyar, Bali',
      image: brideImg,
      label: 'Maya',
    },
  ];

//   const mepandesPeople = [
//   "I Dewa Gede Alit Upadana",
//   "Dewa Ayu Nyoman Narira Tana",
// ];

 return (
    <section ref={ref} className="py-16 px-6 mb-6 bg-gradient-to-b from-muted via-muted/80 to-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        {/* <p className="font-script text-3xl text-primary mb-2">Mepandes</p> */}
        {/* <OrnamentDivider showImage={false} /> */}
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
              <div className="w-64 h-96 rounded-full overflow-hidden border-2 border-primary/40 mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-script text-xl sm:text-lg tracking-[0.1em] text-gold-gradient mb-2">
                  {person.label}
                </p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {person.name}
                </h3>
                 <p className="font-body text-sm text-muted-foreground max-w-xs mb-1">
                  {person.couple}
                </p>
                <p className="font-body text-sm text-muted-foreground max-w-xs">
                  {person.parent}
                </p>
                 <p className="font-body text-sm text-muted-foreground max-w-xs">
                  {person.and}
                </p>
                 <p className="font-body text-sm text-muted-foreground max-w-xs">
                  {person.parent2}
                </p>
                 <p className="font-body text-sm text-muted-foreground max-w-xs mt-6">
                  {person.lokasi}
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
       {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{delay: 1.2, duration: 0.8 }}
        className="text-center mt-16"
      >
        <p className="font-script text-3xl text-primary mb-4">Mepandes</p>
        <OrnamentDivider showImage={false} />
      </motion.div>
      <p className="font-script text-center text-lg tracking-wide text-muted-foreground mt-8">
        I Dewa Gede Alit Upadana
      </p>
      <p className="font-script text-center text-lg tracking-wide text-muted-foreground mt-4">
        Dewa Ayu Nyoman Narira Tana
      </p> */}
    </section>
  );
};

export default CoupleSection;
