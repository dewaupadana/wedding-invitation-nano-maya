interface CurvedDividerProps {
  from: string;
  to: string;
  flip?: boolean;
}

const CurvedDivider = ({ from, to, flip = false }: CurvedDividerProps) => {
  if (flip) {
    return (
      <div className="relative h-16 -mt-1 -mb-1" style={{ background: to }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z" fill={from} />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative h-16 -mt-1 -mb-1" style={{ background: from }}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
        <path d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z" fill={to} />
      </svg>
    </div>
  );
};

export default CurvedDivider;
