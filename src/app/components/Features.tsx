import { motion } from 'motion/react';
import { Shield, Zap, Globe, Cpu, Lock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance standards.',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Sub-millisecond response times at global scale.',
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Distributed nodes across 6 continents.',
  },
  {
    icon: Cpu,
    title: 'Neural Processing',
    description: 'Advanced AI cores with adaptive learning.',
  },
  {
    icon: Lock,
    title: 'Zero Trust Model',
    description: 'End-to-end security at every layer.',
  },
  {
    icon: Sparkles,
    title: 'Auto Optimization',
    description: 'Self-tuning systems that evolve continuously.',
  },
];

export function Features() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Built for the Future
          </h2>
          <p className="text-[#5CE1E6]/70 text-lg font-light max-w-2xl mx-auto">
            Enterprise-grade features designed for mission-critical AI operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3FA9FF]/10 to-[#5CE1E6]/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                {/* Card */}
                <div className="relative liquid-glass noise-texture rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-500">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl liquid-glass-elevated mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-[#5CE1E6]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-light text-white mb-3 group-hover:text-[#5CE1E6] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Line Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3FA9FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
