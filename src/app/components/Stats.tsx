import { motion, useInView } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ end, suffix, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-light bg-gradient-to-br from-[#5CE1E6] to-[#3FA9FF] bg-clip-text text-transparent mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-white/60 font-light">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem end={10} suffix="K+" label="Active Projects" delay={0} />
          <StatItem end={99} suffix=".9%" label="Uptime Guarantee" delay={0.1} />
          <StatItem end={24} suffix="/7" label="Expert Support" delay={0.2} />
          <StatItem end={150} suffix="+" label="Countries Served" delay={0.3} />
        </div>
      </div>

      {/* Ambient Light Line */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6]/50 to-transparent"
      />
    </section>
  );
}
