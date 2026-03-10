import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import venueImg from '@/assets/venue.jpg';

const EventSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const events = [
    {
      title: 'Upacara Pawiwahan',
      date: '17 Agustus 2025',
      time: '09.00 - 12.00 WITA',
      location: 'Pura Keluarga, Br. Teges, Ubud, Gianyar, Bali',
      mapUrl: 'https://maps.google.com/?q=Ubud+Bali',
    },
    {
      title: 'Resepsi',
      date: '17 Agustus 2025',
      time: '13.00 - 17.00 WITA',
      location: 'Balai Banjar Teges Kanginan, Ubud, Gianyar, Bali',
      mapUrl: 'https://maps.google.com/?q=Ubud+Bali',
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
        <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Waktu & Tempat
        </p>
        <h2 className="font-script text-4xl text-primary">Acara Pernikahan</h2>
        <OrnamentDivider showImage={false} className="mt-4" />
      </motion.div>

      <div className="space-y-8">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
            className="border border-primary/20 bg-card/50 backdrop-blur-sm p-6 text-center"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              {event.title}
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-body">{event.date}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-body">{event.time}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-body">{event.location}</span>
              </div>
            </div>

            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 border border-primary text-primary font-display text-xs tracking-[0.2em] uppercase
                hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Lihat Lokasi
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-8 overflow-hidden"
      >
        <img
          src={venueImg}
          alt="Lokasi Pernikahan"
          className="w-full h-48 object-cover opacity-80"
        />
      </motion.div>
    </section>
  );
};

export default EventSection;
