import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'For emerging AI projects',
    features: [
      'Up to 100K neural operations',
      'Basic AI infrastructure',
      'Community support',
      '99.9% uptime SLA',
      'Standard processing speed',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$1,999',
    period: '/month',
    description: 'For production AI systems',
    features: [
      'Unlimited neural operations',
      'Advanced AI architecture',
      'Priority 24/7 support',
      '99.99% uptime SLA',
      'Ultra-fast processing',
      'Custom model training',
      'Dedicated infrastructure',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For mission-critical deployments',
    features: [
      'Everything in Pro',
      'White-glove onboarding',
      'Dedicated AI architect',
      'Custom SLA agreements',
      'On-premise deployment',
      'Advanced security features',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Neural Architecture Pricing
          </h2>
          <p className="text-[#5CE1E6]/70 text-lg font-light max-w-2xl mx-auto">
            Choose the intelligence tier that scales with your ambitions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: plan.highlighted ? 1.05 : 1.02, y: -8 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'liquid-glass-elevated holographic scale-105 md:scale-110'
                  : 'liquid-glass'
              } noise-texture overflow-hidden group cursor-pointer`}
            >
              {/* Holographic Sweep for Pro Plan */}
              {plan.highlighted && (
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-[#3FA9FF]/10 via-[#5CE1E6]/10 to-[#8B7CFF]/10 opacity-50"
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
              )}

              <div className="relative z-10">
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 -right-4">
                    <div className="liquid-glass-elevated px-4 py-1 rounded-full text-xs text-[#5CE1E6] font-light">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 text-sm font-light mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className={`text-4xl md:text-5xl font-light ${
                    plan.highlighted ? 'text-[#5CE1E6]' : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-white/60 text-lg font-light">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted
                          ? 'bg-[#5CE1E6]/20'
                          : 'bg-[#3FA9FF]/10'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.highlighted ? 'text-[#5CE1E6]' : 'text-[#3FA9FF]'
                        }`} />
                      </div>
                      <span className="text-white/80 text-sm font-light flex-1">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-light transition-all duration-300 ${
                    plan.highlighted
                      ? 'liquid-glass-elevated energy-sweep text-white hover:scale-105'
                      : 'border border-[#3FA9FF]/30 text-[#5CE1E6] hover:bg-[#3FA9FF]/10'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Activate Plan'}
                </button>
              </div>

              {/* Bottom Glow */}
              {plan.highlighted && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
