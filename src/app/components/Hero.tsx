import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [activationStage, setActivationStage] = useState(0);

  useEffect(() => {
    // Scene 1: Black silence + dot appears
    const timer1 = setTimeout(() => setActivationStage(1), 500);
    // Scene 2: Core expands
    const timer2 = setTimeout(() => setActivationStage(2), 2000);
    // Scene 3: Text reveals
    const timer3 = setTimeout(() => setActivationStage(3), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI Core Energy Sphere */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Core Sphere */}
        {activationStage >= 1 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              activationStage >= 2
                ? { scale: 1, opacity: 1, filter: 'blur(0px)' }
                : { scale: 0.1, opacity: 1, filter: 'blur(10px)' }
            }
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="relative mb-16"
          >
            {/* Energy Rings */}
            <div className="absolute inset-0 -m-12">
              <div className="w-full h-full rounded-full border border-[#3FA9FF]/20 energy-ring" style={{ animationDelay: '0s' }} />
              <div className="absolute inset-0 w-full h-full rounded-full border border-[#5CE1E6]/20 energy-ring" style={{ animationDelay: '-5s' }} />
              <div className="absolute inset-0 w-full h-full rounded-full border border-[#8B7CFF]/20 energy-ring" style={{ animationDelay: '-10s' }} />
            </div>

            {/* Core Sphere */}
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full ai-core-glow" />
              
              {/* Liquid Shell */}
              <div className="absolute inset-0 rounded-full liquid-glass-elevated noise-texture overflow-hidden">
                {/* Inner Energy */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#3FA9FF]/40 via-[#5CE1E6]/30 to-[#8B7CFF]/40" />
                
                {/* Center Pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-8 rounded-full bg-[#3FA9FF]/60"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Headline */}
        {activationStage >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 30, letterSpacing: '-0.05em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '-0.02em' }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent leading-tight">
              Intelligence Engineered
              <br />
              Beyond Human Limits.
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-[#5CE1E6]/80 font-light max-w-2xl mx-auto"
            >
              Enter the neural architecture of tomorrow's AI systems.
              <br />
              Where design meets autonomous intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
              <button className="liquid-glass-elevated energy-sweep px-8 py-4 rounded-lg text-white font-medium hover:scale-105 transition-transform duration-300">
                Activate Neural Core
              </button>
              <button className="border border-[#3FA9FF]/30 px-8 py-4 rounded-lg text-[#5CE1E6] hover:bg-[#3FA9FF]/10 transition-all duration-300">
                Explore Systems
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Floating Particles */}
      {activationStage >= 2 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${15 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
