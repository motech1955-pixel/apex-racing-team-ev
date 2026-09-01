import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface SocialLinkProps {
  title: string;
  url: string;
  icon: React.ElementType;
  color?: string;
  index: number;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ title, url, icon: Icon, color, index }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.3, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center justify-between w-full p-4 mb-4 bg-racing-gray/80 backdrop-blur-md rounded-xl border border-white/5 overflow-hidden hover:border-racing-red/50 transition-all duration-300"
    >
      {/* Hover Background effect (Speed line sweep) */}
      <div className="absolute inset-0 bg-gradient-to-r from-racing-red/0 via-racing-red/10 to-racing-red/0 -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out_infinite] skew-x-12 z-0"></div>

      <div className="flex items-center gap-4 relative z-10">
        <div className={`p-2 bg-black/40 rounded-lg group-hover:scale-110 transition-transform duration-300 ${color || 'text-white'}`}>
          <Icon size={24} />
        </div>
        <span className="font-semibold text-lg tracking-wide group-hover:text-white transition-colors duration-300 text-gray-200">
          {title}
        </span>
      </div>

      <div className="relative z-10 text-gray-500 group-hover:text-racing-red group-hover:translate-x-1 transition-all duration-300">
        <ChevronRight size={20} />
      </div>

      {/* Decorative side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-racing-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
    </motion.a>
  );
};
