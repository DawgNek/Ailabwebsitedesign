import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative liquid-glass-elevated noise-texture rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-[#3FA9FF]/10 via-[#5CE1E6]/15 to-[#8B7CFF]/10 opacity-50"
            style={{
              backgroundSize: '200% 100%',
            }}
          />

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#3FA9FF]/20 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#5CE1E6]/20 to-transparent rounded-tl-full" />

          {/* Energy Lines */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6] to-transparent"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3FA9FF] to-transparent"
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity },
              }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl liquid-glass-elevated mb-8"
            >
              <Sparkles className="w-8 h-8 text-[#5CE1E6]" />
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-light mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Ready to Experience
              <br />
              The Future of AI?
            </h2>

            <p className="text-white/70 text-lg font-light max-w-2xl mx-auto mb-10">
              Join thousands of innovators building the next generation of intelligent systems.
              Start your journey into neural architecture today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="liquid-glass-elevated energy-sweep px-8 py-4 rounded-xl text-white font-light hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(92,225,230,0.3)]">
                Start Free Trial
              </button>
              <button className="border border-[#3FA9FF]/30 px-8 py-4 rounded-xl text-[#5CE1E6] hover:bg-[#3FA9FF]/10 transition-all duration-300 font-light">
                Schedule Demo
              </button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-light text-[#5CE1E6] mb-1">10K+</div>
                <div className="text-sm text-white/60 font-light">Active Projects</div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#3FA9FF] mb-1">99.9%</div>
                <div className="text-sm text-white/60 font-light">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#8B7CFF] mb-1">24/7</div>
                <div className="text-sm text-white/60 font-light">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Floating Orbs */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 right-10 w-20 h-20 rounded-full bg-[#3FA9FF]/20 blur-xl"
          />
          <motion.div
            animate={{
              y: [10, -10, 10],
              x: [5, -5, 5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[#5CE1E6]/20 blur-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
