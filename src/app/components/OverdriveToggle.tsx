import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

interface OverdriveToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

export function OverdriveToggle({ isActive, onToggle }: OverdriveToggleProps) {
  return (
    <>
      {/* Desktop Version */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="fixed bottom-8 right-8 z-50 hidden sm:block"
      >
        <button
          onClick={onToggle}
          className={`liquid-glass-elevated noise-texture px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-500 hover:scale-105 ${
            isActive ? 'holographic shadow-[0_0_40px_rgba(92,225,230,0.6)]' : ''
          }`}
        >
          <motion.div
            animate={
              isActive
                ? {
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }
                : {}
            }
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
              scale: { duration: 1, repeat: Infinity },
            }}
          >
            <Zap
              className={`w-5 h-5 transition-colors duration-500 ${
                isActive ? 'text-[#5CE1E6]' : 'text-white/70'
              }`}
              fill={isActive ? '#5CE1E6' : 'none'}
            />
          </motion.div>
          
          <div className="flex flex-col items-start">
            <span className="text-sm font-light text-white">Overdrive Mode</span>
            <span className={`text-xs font-light transition-colors duration-500 ${
              isActive ? 'text-[#5CE1E6]' : 'text-white/40'
            }`}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>

          {/* Toggle Indicator */}
          <div className={`w-12 h-6 rounded-full relative transition-all duration-500 ${
            isActive ? 'bg-[#5CE1E6]/30' : 'bg-white/10'
          }`}>
            <motion.div
              animate={{ x: isActive ? 24 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-colors duration-500 ${
                isActive ? 'bg-[#5CE1E6] shadow-[0_0_12px_rgba(92,225,230,0.8)]' : 'bg-white/60'
              }`}
            />
          </div>
        </button>

        {/* Active Particles */}
        {isActive && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI) / 4) * 60,
                  y: Math.sin((i * Math.PI) / 4) * 60,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#5CE1E6]"
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Mobile Version - Compact */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        onClick={onToggle}
        className={`fixed bottom-24 right-8 z-50 sm:hidden w-12 h-12 rounded-xl liquid-glass-elevated noise-texture flex items-center justify-center transition-all duration-500 hover:scale-105 ${
          isActive ? 'holographic shadow-[0_0_30px_rgba(92,225,230,0.6)]' : ''
        }`}
      >
        <motion.div
          animate={
            isActive
              ? {
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity },
          }}
        >
          <Zap
            className={`w-5 h-5 transition-colors duration-500 ${
              isActive ? 'text-[#5CE1E6]' : 'text-white/70'
            }`}
            fill={isActive ? '#5CE1E6' : 'none'}
          />
        </motion.div>
      </motion.button>
    </>
  );
}