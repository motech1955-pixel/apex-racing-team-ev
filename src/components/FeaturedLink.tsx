import { motion } from 'framer-motion';
import { featuredLink } from '../data/config';
import { ExternalLink } from 'lucide-react';

export const FeaturedLink = () => {
  if (!featuredLink) return null;

  const Icon = featuredLink.icon;
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="w-full mb-8 relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-racing-red via-racing-yellow to-racing-red rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-glow-pulse"></div>
      
      <a 
        href={featuredLink.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center gap-3 w-full py-4 px-6 bg-racing-carbon border border-white/10 rounded-xl overflow-hidden hover:bg-racing-gray transition-colors duration-300"
      >
        {/* Checkered flag subtle background on hover */}
        <div className="absolute inset-0 checkered-flag opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        
        {/* Speed lines */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        {Icon && <Icon className="text-racing-red z-10" size={20} />}
        
        <span className="text-white font-black uppercase tracking-widest text-sm z-10">
          🏎 {featuredLink.title}
        </span>

        <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors z-10" />
      </a>
    </motion.div>
  );
};
