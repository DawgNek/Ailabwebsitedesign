import { motion } from 'motion/react';
import { Brain, Layers, Zap, Database } from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: 'AI Systems Architecture',
    description: 'Neural networks designed for autonomous decision-making and real-time learning.',
    gradient: 'from-[#3FA9FF]/20 to-[#5CE1E6]/10',
  },
  {
    icon: Layers,
    title: 'Neural Design Framework',
    description: 'Advanced design systems powered by machine learning and predictive algorithms.',
    gradient: 'from-[#5CE1E6]/20 to-[#8B7CFF]/10',
  },
  {
    icon: Zap,
    title: 'Automation Intelligence',
    description: 'Self-optimizing workflows that evolve with your operational patterns.',
    gradient: 'from-[#8B7CFF]/20 to-[#3FA9FF]/10',
  },
  {
    icon: Database,
    title: 'Enterprise AI Infrastructure',
    description: 'Scalable architecture built for mission-critical AI deployments.',
    gradient: 'from-[#3FA9FF]/20 to-[#8B7CFF]/10',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            AI Module Systems
          </h2>
          <p className="text-[#5CE1E6]/70 text-lg font-light max-w-2xl mx-auto">
            Discover our suite of intelligent frameworks engineered for the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="liquid-glass noise-texture rounded-2xl p-8 energy-sweep cursor-pointer group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Energy Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3FA9FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl liquid-glass-elevated flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-[#5CE1E6]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#5CE1E6] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="mt-6 text-[#3FA9FF] text-sm font-light flex items-center gap-2"
                  >
                    Explore Module
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
