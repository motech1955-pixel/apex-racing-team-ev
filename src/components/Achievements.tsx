import { motion } from 'framer-motion';
import { profileData } from '../data/config';
import { FaFlagCheckered, FaChevronRight } from 'react-icons/fa';

interface AchievementsProps {
  onOpenJourney?: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onOpenJourney }) => {
  return (
    <div className="w-full max-w-md mt-2 mb-6 flex flex-col items-center">
      {/* Quote */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="text-center mb-6"
      >
        <p className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent italic tracking-wide">
          "{profileData.quote}"
        </p>
      </motion.div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {profileData.achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
            className={`flex items-center gap-3 p-3 bg-racing-gray/40 border border-white/5 rounded-lg backdrop-blur-sm hover:border-red-900/50 hover:bg-racing-gray/60 transition-all ${index === profileData.achievements.length - 1 && profileData.achievements.length % 2 !== 0 ? 'col-span-2 justify-center' : ''}`}
          >
            {item.logoUrl ? (
              <div className="relative w-12 h-12 flex-shrink-0 bg-white/90 rounded-md p-1.5 shadow-inner flex items-center justify-center">
                <img src={item.logoUrl} alt={item.title} className="w-full h-full object-contain" />
                <div className="absolute -top-2 -right-2 text-base drop-shadow-md z-10">
                  {item.icon}
                </div>
              </div>
            ) : (
              <div className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                {item.icon}
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-racing-red font-black text-sm tracking-widest leading-none mb-1">
                {item.count}
              </span>
              <span className="text-gray-300 font-medium text-xs leading-tight">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button to Open Full Journey & History Modal */}
      {onOpenJourney && (
        <motion.button
          onClick={onOpenJourney}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-racing-red/20 via-racing-gray/40 to-racing-red/20 border border-racing-red/40 hover:border-racing-red hover:bg-racing-red/25 transition-all duration-300 flex items-center justify-between group shadow-[0_0_15px_rgba(229,9,20,0.15)]"
        >
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-racing-red/20 text-racing-red border border-racing-red/30 group-hover:scale-110 transition-transform">
              <FaFlagCheckered size={12} />
            </span>
            <div className="text-left">
              <span className="text-xs font-black uppercase tracking-wider text-white italic block">
                Team Story & 8-Year Track Record
              </span>
              <span className="text-[10px] font-mono text-gray-400 block">
                13+ Cars • 4 Series • 2018—2026
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-racing-red group-hover:translate-x-1 transition-transform">
            <span className="text-[11px] font-mono font-bold uppercase hidden xs:inline">Details</span>
            <FaChevronRight size={11} />
          </div>
        </motion.button>
      )}
    </div>
  );
};
