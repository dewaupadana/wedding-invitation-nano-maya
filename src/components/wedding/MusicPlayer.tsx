import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicPlayerProps {
  isPlaying: boolean;
}

const MusicPlayer = ({ isPlaying }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {
        // Browser blocked autoplay — user can unmute manually
      });
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.play().catch(() => {});
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = true;
      }
      setMuted(!muted);
    }
  };

  if (!isPlaying) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
      />
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg backdrop-blur-sm hover:bg-primary transition-colors"
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
