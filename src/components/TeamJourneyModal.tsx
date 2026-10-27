import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamInfo } from '../data/config';
import { FaTimes, FaTrophy, FaBolt, FaFlagCheckered, FaUniversity } from 'react-icons/fa';

interface TeamJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamJourneyModal: React.FC<TeamJourneyModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
            className="relative z-50 w-full max-w-2xl bg-racing-carbon border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
          >
            {/* Top Red Racing Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-racing-red via-racing-yellow to-racing-red"></div>

            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-racing-dark/60 sticky top-0 z-20 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-racing-red/20 text-racing-red border border-racing-red/30">
                  <FaBolt size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg sm:text-xl font-black italic tracking-wide text-white uppercase">
                      {teamInfo.title}
                    </h2>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-racing-red/20 text-racing-red border border-racing-red/40 uppercase">
                      Telemetry
                    </span>
                  </div>
                  <p className="text-xs font-mono text-gray-400 flex items-center gap-1.5 mt-0.5">
                    <FaUniversity size={11} className="text-racing-red" />
                    {teamInfo.subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-racing-red hover:text-white text-gray-400 transition-colors duration-200 border border-white/5"
                aria-label="Close modal"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-gray-200 font-sans custom-scrollbar">
              {/* Team Overview Card */}
              <div className="bg-racing-gray/40 border border-white/5 p-4 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-racing-red/5 rounded-full blur-2xl pointer-events-none"></div>
                <p className="text-sm leading-relaxed text-gray-300 font-light">
                  {teamInfo.description}
                </p>
              </div>

              {/* Key Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {teamInfo.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-racing-gray/60 border border-white/5 flex flex-col items-center text-center hover:border-racing-red/40 transition-colors"
                  >
                    <span className="text-2xl font-black italic text-racing-red tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-white mt-1 uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono mt-0.5 leading-tight">
                      {stat.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-racing-gray/30 border border-white/5 hover:border-racing-blue/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-racing-blue"></span>
                    <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-racing-blue">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {teamInfo.mission}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-racing-gray/30 border border-white/5 hover:border-racing-yellow/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-racing-yellow"></span>
                    <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-racing-yellow">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {teamInfo.vision}
                  </p>
                </div>
              </div>

              {/* Journey / Track Record Timeline */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FaFlagCheckered className="text-racing-red" size={16} />
                    <h3 className="text-sm font-black uppercase tracking-wider text-white italic">
                      Our Journey & Selected Track Results
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">
                    2018 — 2026+
                  </span>
                </div>

                {/* Timeline Line */}
                <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-racing-red before:via-racing-blue before:to-racing-yellow">
                  {teamInfo.journey.map((item, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot */}
                      <div className="absolute -left-6 sm:-left-8 top-1.5 w-3 h-3 rounded-full bg-racing-dark border-2 border-racing-red group-hover:bg-racing-red group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(229,9,20,0.6)]"></div>

                      <div className="bg-racing-gray/40 border border-white/5 rounded-xl p-3.5 hover:border-racing-red/30 transition-all duration-300">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <span className="text-sm font-black italic tracking-wider text-racing-red bg-racing-dark px-2 py-0.5 rounded border border-racing-red/30">
                            {item.year}
                          </span>
                          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                            {item.highlight}
                          </span>
                        </div>

                        <div className="space-y-1.5 mt-2">
                          {item.events.map((ev, evIdx) => (
                            <div key={evIdx} className="flex items-start gap-2 text-xs">
                              <FaTrophy className="text-racing-yellow mt-0.5 flex-shrink-0" size={12} />
                              <div>
                                <span className="font-bold text-white mr-1.5">{ev.title}:</span>
                                <span className="text-gray-300">{ev.detail}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-racing-dark/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-500 uppercase">
                Apex Racing Team • EV Division
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-racing-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                Close Telemetry
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
