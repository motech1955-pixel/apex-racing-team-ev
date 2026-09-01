
export const RacingBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base carbon fiber background pattern */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-30"></div>
      
      {/* Gradient overlay to darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-racing-dark/80 to-racing-dark"></div>

      {/* Speed Lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className={`absolute top-0 w-px h-32 bg-gradient-to-b from-transparent via-racing-red to-transparent animate-speed-line`}
            style={{ 
              left: `${15 + i * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${0.8 + (i % 2) * 0.4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Subtle neon accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-racing-blue/5 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-racing-red/5 blur-[120px]"></div>
      
      {/* Track line left/right edges */}
      <div className="hidden md:block absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      <div className="hidden md:block absolute right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
    </div>
  );
};
