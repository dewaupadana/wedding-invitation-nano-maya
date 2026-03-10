import ornamentImg from '@/assets/ornament.png';

interface OrnamentDividerProps {
  className?: string;
  showImage?: boolean;
}

const OrnamentDivider = ({ className = '', showImage = true }: OrnamentDividerProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {showImage && (
        <img
          src={ornamentImg}
          alt="Ornamen Bali"
          className="w-20 h-20 opacity-60 object-contain"
        />
      )}
      <div className="flex items-center gap-3 w-full max-w-xs">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="w-2 h-2 rotate-45 bg-primary" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </div>
  );
};

export default OrnamentDivider;
