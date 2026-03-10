import { useState } from 'react';
import { motion } from 'framer-motion';
import CoverSection from '@/components/wedding/CoverSection';
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
          <CountdownSection />
          <CoupleSection />
          <EventSection />
          <GallerySection />
          <RsvpSection />
          <GiftSection />
          <WishesSection />
          <FooterSection />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
