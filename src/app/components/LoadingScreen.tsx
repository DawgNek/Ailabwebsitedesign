import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'initializing' | 'loading' | 'complete'>('initializing');

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStage('complete');
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Set to loading stage after brief delay
    setTimeout(() => setStage('loading'), 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[1000] bg-[#0B0E13] flex items-center justify-center"
      >
        {/* Energy Grid */}
        <div className="absolute inset-0 energy-grid opacity-30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Core Animation */}
          <motion.div
            animate={
              stage === 'initializing'
                ? {
                    scale: [0, 1],
                    opacity: [0, 1],
                  }
                : {
                    scale: [1, 1.1, 1],
                    rotate: 360,
                  }
            }
            transition={
              stage === 'initializing'
                ? { duration: 0.6 }
                : { rotate: { duration: 3, repeat: Infinity, ease: 'linear' } }
            }
            className="mb-12"
          >
            {/* Outer Ring */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="rgba(63, 169, 255, 0.1)"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="url(#loadingGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 60}
                  strokeDashoffset={2 * Math.PI * 60 * (1 - progress / 100)}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(63, 169, 255, 0.6))',
                  }}
                />
                <defs>
                  <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3FA9FF" />
                    <stop offset="50%" stopColor="#5CE1E6" />
                    <stop offset="100%" stopColor="#8B7CFF" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3FA9FF] to-[#5CE1E6] ai-core-glow"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl font-light text-white mb-3">
              {stage === 'initializing' && 'Initializing Neural Core'}
              {stage === 'loading' && 'Loading Intelligence Systems'}
              {stage === 'complete' && 'System Ready'}
            </h2>
            
            {/* Progress */}
            <div className="flex items-center gap-4">
              <div className="w-64 h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#3FA9FF] via-[#5CE1E6] to-[#8B7CFF]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-[#5CE1E6] text-sm font-light w-12">{progress}%</span>
            </div>

            {/* Status */}
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/40 text-sm font-light mt-4"
            >
              Establishing secure connection...
            </motion.p>
          </motion.div>

          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: ['100%', '-100%'],
                  x: [0, Math.sin(i) * 50],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute left-1/2 w-1 h-1 rounded-full bg-[#5CE1E6]"
                style={{ left: `${50 + Math.sin(i * 2) * 30}%` }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
