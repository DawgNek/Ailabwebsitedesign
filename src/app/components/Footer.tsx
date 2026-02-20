import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Product: ['Features', 'Solutions', 'Pricing', 'Documentation'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Community', 'Support', 'API Reference', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance'],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/5 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3FA9FF] to-[#5CE1E6] flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#0B0E13]" />
                </div>
                <span className="text-white text-xl font-light">AI Labs</span>
              </div>
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
                Engineering intelligence beyond human limits. Building the neural architecture of tomorrow.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg liquid-glass flex items-center justify-center text-white/60 hover:text-[#5CE1E6] hover:scale-110 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-light mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-[#5CE1E6] text-sm font-light transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-sm font-light">
            © 2026 AI Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_rgba(92,225,230,0.6)] animate-pulse" />
            <span className="text-white/40 text-sm font-light">System Operational</span>
          </div>
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3FA9FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5CE1E6]/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
}
