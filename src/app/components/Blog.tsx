import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    category: 'Research',
    title: 'Neural Architecture Evolution: The Next Generation',
    excerpt: 'Exploring autonomous neural networks that redesign themselves for optimal performance.',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
    gradient: 'from-[#3FA9FF]/20 to-[#5CE1E6]/10',
  },
  {
    category: 'Technology',
    title: 'Quantum Processing Integration in AI Systems',
    excerpt: 'How quantum computing is revolutionizing real-time AI decision-making processes.',
    date: 'Feb 12, 2026',
    readTime: '12 min read',
    gradient: 'from-[#5CE1E6]/20 to-[#8B7CFF]/10',
  },
  {
    category: 'Insights',
    title: 'The Future of Human-AI Collaboration',
    excerpt: 'Building interfaces that seamlessly blend human intuition with machine precision.',
    date: 'Feb 8, 2026',
    readTime: '6 min read',
    gradient: 'from-[#8B7CFF]/20 to-[#3FA9FF]/10',
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Neural Intelligence Insights
          </h2>
          <p className="text-[#5CE1E6]/70 text-lg font-light max-w-2xl mx-auto">
            Latest research and discoveries from the frontier of AI development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="liquid-glass noise-texture rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image Placeholder with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="liquid-glass-elevated px-3 py-1 rounded-full text-xs text-[#5CE1E6] font-light">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#5CE1E6] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-white/40 font-light mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-[#3FA9FF] text-sm font-light group-hover:gap-4 transition-all duration-300">
                  <span>Read Article</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Bottom Glow on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3FA9FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="liquid-glass-elevated energy-sweep px-8 py-4 rounded-lg text-white font-light hover:scale-105 transition-transform duration-300">
            Explore All Insights
          </button>
        </motion.div>
      </div>
    </section>
  );
}
