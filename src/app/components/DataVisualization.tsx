import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function DataVisualization() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: 'Neural Accuracy', value: '99.7%', color: '#3FA9FF' },
    { label: 'Processing Speed', value: '2.4ms', color: '#5CE1E6' },
    { label: 'Active Nodes', value: '847K', color: '#8B7CFF' },
    { label: 'Uptime', value: '99.99%', color: '#3FA9FF' },
  ];

  const activities = [
    { time: '2.1s ago', action: 'Neural pattern recognized', status: 'success' },
    { time: '4.7s ago', action: 'Optimization cycle completed', status: 'success' },
    { time: '8.2s ago', action: 'Data stream synchronized', status: 'processing' },
    { time: '12s ago', action: 'Model parameters updated', status: 'success' },
  ];

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
            Intelligence Analytics Lab
          </h2>
          <p className="text-[#5CE1E6]/70 text-lg font-light max-w-2xl mx-auto">
            Real-time monitoring of AI core operations and neural performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 liquid-glass noise-texture rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Light Beam */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#3FA9FF]/40 via-transparent to-transparent" />
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-[#5CE1E6]/30 via-transparent to-transparent" />

            <h3 className="text-xl font-light text-white mb-8">System Performance</h3>

            {/* Circular Progress Ring */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90">
                  {/* Background Circle */}
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="rgba(63, 169, 255, 0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <motion.circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 88}
                    strokeDashoffset={2 * Math.PI * 88 * (1 - progress / 100)}
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(63, 169, 255, 0.6))',
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3FA9FF" />
                      <stop offset="50%" stopColor="#5CE1E6" />
                      <stop offset="100%" stopColor="#8B7CFF" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-light text-white">{progress}%</span>
                  <span className="text-sm text-[#5CE1E6]/70 font-light mt-1">Neural Load</span>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="liquid-glass-elevated rounded-xl p-4 text-center"
                >
                  <div
                    className="text-2xl font-light mb-1"
                    style={{ color: metric.color }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-xs text-white/60 font-light">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="liquid-glass noise-texture rounded-2xl p-8"
          >
            <h3 className="text-xl font-light text-white mb-8">Live Activity</h3>

            <div className="space-y-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-3"
                >
                  {/* Status Indicator */}
                  <div className="mt-1.5">
                    {activity.status === 'success' ? (
                      <div className="w-2 h-2 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_rgba(92,225,230,0.6)]" />
                    ) : (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-[#3FA9FF] shadow-[0_0_8px_rgba(63,169,255,0.6)]"
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-white/80 text-sm font-light leading-relaxed">
                      {activity.action}
                    </p>
                    <span className="text-xs text-white/40 font-light">{activity.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Energy Pulse at Bottom */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 h-px bg-gradient-to-r from-transparent via-[#3FA9FF] to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
