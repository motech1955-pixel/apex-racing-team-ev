import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfileHeader } from './components/ProfileHeader';
import { Achievements } from './components/Achievements';
import { SocialLink } from './components/SocialLink';
import { FeaturedLink } from './components/FeaturedLink';
import { RacingBackground } from './components/RacingBackground';
import { Footer } from './components/Footer';
import { socialLinks } from './data/config';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate dashboard starting up
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s loading animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-racing-red selection:text-white">
      <RacingBackground />

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-racing-dark"
          >
            <div className="text-racing-red font-black text-2xl tracking-[0.3em] uppercase animate-pulse mb-8">
               Ready To Drive The Future...
            </div>
            
            {/* RPM Meter loading effect */}
            <div className="w-64 h-2 bg-racing-gray rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-racing-yellow via-racing-red to-racing-red"
              ></motion.div>
            </div>
            <div className="mt-4 flex gap-1">
               {[...Array(5)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0.2 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: i * 0.2, duration: 0.1 }}
                   className="w-3 h-3 rounded-full bg-racing-red"
                 />
               ))}
            </div>
          </motion.div>
        ) : (
          <main className="relative z-10 max-w-2xl mx-auto px-4 min-h-screen flex flex-col pt-8 pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 w-full flex flex-col items-center"
            >
              <ProfileHeader />
              
              <Achievements />
              
              <div className="w-full max-w-md mt-2">
                <FeaturedLink />
                
                <div className="flex items-center gap-4 mb-6 w-full opacity-60">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/30"></div>
                  <span className="text-xs font-mono tracking-widest text-white/50 uppercase">Links</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/30"></div>
                </div>

                <div className="flex flex-col w-full">
                  {socialLinks.map((link, index) => (
                    <SocialLink
                      key={index}
                      index={index}
                      title={link.title}
                      url={link.url}
                      icon={link.icon}
                      color={link.color}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
