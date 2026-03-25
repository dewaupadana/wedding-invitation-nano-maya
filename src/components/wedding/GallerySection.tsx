import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';

// Slider photos
import slide1 from '@/assets/TENGANAN-114.webp';
import slide2 from '@/assets/TENGANAN-7.webp';
import slide3 from '@/assets/TENGANAN-25.webp';
import slide4 from '@/assets/TENGANAN-36.webp';
import slide5 from '@/assets/TENGANAN-108.webp';
import slide6 from '@/assets/TENGANAN-113.webp';

// Grid photos (different from slider)
import grid1 from '@/assets/TENGANAN-121.webp';
import grid2 from '@/assets/TENGANAN-130.webp';
import grid3 from '@/assets/TENGANAN-48.webp';
import grid4 from '@/assets/TENGANAN-57.webp';
import grid5 from '@/assets/TENGANAN-70.webp';
import grid6 from '@/assets/TENGANAN-79.webp';
import grid7 from '@/assets/NYANYI-26.webp';
import grid8 from '@/assets/NYANYI-89.webp';
import grid9 from '@/assets/NYANYI-213.webp';
import grid10 from '@/assets/NYANYI-215.webp';
import grid11 from '@/assets/NYANYI-199.webp';
import grid12 from '@/assets/NYANYI-220.webp';
import grid13 from '@/assets/NYANYI-175.webp';
import grid14 from '@/assets/NYANYI-222.webp';

const sliderPhotos = [slide1, slide2, slide3, slide4, slide5, slide6];
const gridPhotos = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9, grid10, grid11, grid12, grid13, grid14];
const allPhotos = [...sliderPhotos, ...gridPhotos];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<number | null>(null);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section ref={ref} className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <OrnamentDivider showImage={false} className="mt-1" />
      </motion.div>

      {/* Auto-sliding Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-6 overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {sliderPhotos.map((photo, i) => (
            <div
              key={`slide-${i}`}
              className="flex-[0_0_75%] min-w-0 px-2"
            >
              <div
                className="aspect-[3/4] overflow-hidden cursor-pointer"
                onClick={() => setSelected(i)}
              >
                <img
                  src={photo}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Grid with different photos */}
      <div className="grid grid-cols-2 gap-3">
        {gridPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            onClick={() => setSelected(sliderPhotos.length + i)}
            className="cursor-pointer overflow-hidden aspect-square group"
          >
            <img
              src={photo}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-foreground z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(selected > 0 ? selected - 1 : allPhotos.length - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground bg-muted/60 rounded-full p-2 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(selected < allPhotos.length - 1 ? selected + 1 : 0);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground bg-muted/60 rounded-full p-2 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.img
              key={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={allPhotos[selected]}
              alt="Gallery full"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
