import { useState } from 'react';
import { motion } from 'framer-motion';
import CoverSection from '@/components/wedding/CoverSection';
import HeroSection from '@/components/wedding/HeroSection';
import CountdownSection from '@/components/wedding/CountdownSection';
import CoupleSection from '@/components/wedding/CoupleSection';
import EventSection from '@/components/wedding/EventSection';
import ClosingPhotoSection from '@/components/wedding/ClosingPhotoSection';
import RsvpSection from '@/components/wedding/RsvpSection';
import GallerySection from '@/components/wedding/GallerySection';
import GiftSection from '@/components/wedding/GiftSection';
import WishesSection from '@/components/wedding/WishesSection';
import FooterSection from '@/components/wedding/FooterSection';
import CurvedDivider from '@/components/wedding/CurvedDivider';
import MusicPlayer from '@/components/wedding/MusicPlayer';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bgDark = 'hsl(0, 0%, 17%)';
  const bgMuted = 'hsl(0, 0%, 22%)';
  const bgCream = 'hsl(35, 30%, 85%)';

  return (
    <div className="min-h-screen bg-background">
      <CoverSection isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      <MusicPlayer isPlaying={isOpen} />

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-[430px] mx-auto overflow-hidden"
        >
          <HeroSection />

          <CurvedDivider from={bgDark} to={bgDark} />

          <div className="bg-background">
            <CountdownSection />
          </div>

          <CurvedDivider from={bgDark} to={bgMuted} />

          <div className="bg-muted">
            <CoupleSection />
          </div>

          {/* <CurvedDivider from={bgMuted} to={bgDark} /> */}

          <EventSection />

          <ClosingPhotoSection />

          {/* <CurvedDivider from={bgDark} to={bgMuted} /> */}

          <div className="bg-muted">
            <RsvpSection />
          </div>

          <CurvedDivider from={bgMuted} to={bgDark} />

          <div className="bg-background">
            <GallerySection />
          </div>

          <div className="bg-background">
            <GiftSection />
          </div>

          <CurvedDivider from={bgDark} to={bgMuted} />

          <div className="bg-muted">
            <WishesSection />
          </div>

          <CurvedDivider from={bgMuted} to={bgDark} />

          <div className="bg-background">
            <FooterSection />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
