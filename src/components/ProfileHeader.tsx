import { profileData } from '../data/config';
import { motion } from 'framer-motion';

export const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center mt-12 mb-8 relative z-10 w-full px-4">
      {/* Avatar with Helmet/Racing Ring */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative mb-6 group"
      >
        <div className="absolute inset-0 bg-racing-red rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-red-900 via-racing-red to-red-900 rounded-full animate-spin-slow opacity-75"></div>
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-racing-dark bg-white z-10 p-1">
          <img 
            src={profileData.avatarUrl} 
            alt={profileData.name} 
            className="w-full h-full object-cover rounded-full hover:scale-105 transition-all duration-500"
          />
        </div>
        
        {/* Status indicator */}
        <div className="absolute bottom-0 right-0 bg-racing-dark rounded-full p-1 z-20 border-2 border-racing-carbon">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse flex items-center justify-center">
             <div className="w-2 h-2 bg-green-300 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Name and Number */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex items-center gap-3 mb-2"
      >
        <h1 className="text-3xl font-black tracking-tighter uppercase italic">
          {profileData.name}
        </h1>
        <span className="text-racing-red font-black text-xl italic bg-racing-gray px-2 py-0.5 rounded -skew-x-12 border-l-2 border-racing-red">
          #{profileData.racingNumber}
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-4 text-center"
      >
        {profileData.tagline}
      </motion.p>

      {/* Online Status Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="flex items-center gap-2 bg-racing-gray/50 px-3 py-1.5 rounded-full border border-racing-gray/80 backdrop-blur-sm"
      >
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-fast"></div>
        <span className="text-xs font-mono font-bold tracking-wider text-gray-300">
          {profileData.status}
        </span>
      </motion.div>
    </div>
  );
};
