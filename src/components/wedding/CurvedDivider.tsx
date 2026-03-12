interface CurvedDividerProps {
  from: string;
  to: string;
  flip?: boolean;
}

const CurvedDivider = ({ from, to, flip = false }: CurvedDividerProps) => {
  if (flip) {
    return (
      <div className="relative h-20 -mt-1 -mb-1" style={{ background: to }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 C240,100 480,20 720,80 C960,140 1200,20 1440,0 L1440,0 L0,0 Z" fill={from} />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative h-20 -mt-1 -mb-1" style={{ background: from }}>
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
        <path d="M0,120 C240,20 480,100 720,40 C960,-20 1200,100 1440,120 L1440,120 L0,120 Z" fill={to} />
      </svg>
    </div>
  );
};

export default CurvedDivider;
