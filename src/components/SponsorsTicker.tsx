import { sponsorsList } from '../data/config';

export const SponsorsTicker = () => {
  if (!sponsorsList || sponsorsList.length === 0) return null;

  // Duplicate the list to ensure a seamless infinite loop
  const duplicatedSponsors = [...sponsorsList, ...sponsorsList, ...sponsorsList, ...sponsorsList];

  return (
    <div className="w-full max-w-xl mx-auto my-6 px-2">
      {/* Header Label */}
      <div className="flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-racing-red animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400">
            Official Partners & Sponsors
          </span>
        </div>
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest hidden sm:inline-block">
          // High Performance Ecosystem
        </span>
      </div>

      {/* Ticker Container with gradient fades on edges */}
      <div className="relative w-full overflow-hidden rounded-xl bg-racing-carbon/90 border border-white/5 py-4 backdrop-blur-md group shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-racing-dark via-racing-dark/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-racing-dark via-racing-dark/80 to-transparent z-10"></div>

        {/* Scrolling track */}
        <div className="flex w-max items-center gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedSponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 bg-white/95 rounded-lg border border-white/10 shadow-sm hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-default"
              title={sponsor.name}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-7 max-w-[110px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
