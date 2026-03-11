import { useState } from 'react';
import { motion } from 'framer-motion';
import CoverSection from '@/components/wedding/CoverSection';
import HeroSection from '@/components/wedding/HeroSection';
import CountdownSection from '@/components/wedding/CountdownSection';
import CoupleSection from '@/components/wedding/CoupleSection';
import EventSection from '@/components/wedding/EventSection';
import GallerySection from '@/components/wedding/GallerySection';
import RsvpSection from '@/components/wedding/RsvpSection';
import GiftSection from '@/components/wedding/GiftSection';
import WishesSection from '@/components/wedding/WishesSection';
import FooterSection from '@/components/wedding/FooterSection';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Cover / Opening */}
      <CoverSection isOpen={isOpen} onOpen={() => setIsOpen(true)} />

      {/* Main Content - only visible after opening */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-[430px] mx-auto overflow-hidden"
        >
          <HeroSection />
          <div className="bg-background">
            <CountdownSection />
          </div>
          <div className="bg-muted">
            <CoupleSection />
          </div>
          <div style={{ backgroundColor: 'hsl(35, 30%, 85%)' }}>
            <div className="text-[hsl(0,0%,17%)]">
              <EventSection />
            </div>
          </div>
          <div className="bg-background">
            <GallerySection />
          </div>
          <div className="bg-muted">
            <RsvpSection />
          </div>
          <div className="bg-background">
            <GiftSection />
          </div>
          <div className="bg-muted">
            <WishesSection />
          </div>
          <div className="bg-background">
            <FooterSection />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
