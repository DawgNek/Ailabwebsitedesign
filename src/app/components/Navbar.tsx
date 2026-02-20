import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export function Navbar({ onLoginClick, onRegisterClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Solutions', 'Documentation', 'Blog', 'Pricing', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <div
          className={`liquid-glass noise-texture px-6 py-4 rounded-2xl transition-all duration-500 ${
            scrolled ? 'backdrop-blur-[100px]' : 'backdrop-blur-[60px]'
          }`}
        >
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3FA9FF] to-[#5CE1E6] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#0B0E13]" />
              </div>
              <span className="text-white font-light text-lg hidden sm:block">AI Labs</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  className="text-white/70 hover:text-[#5CE1E6] transition-colors duration-300 text-sm font-light relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#3FA9FF] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3 ml-4">
              <button
                onClick={onLoginClick}
                className="text-white/70 hover:text-white transition-colors duration-300 px-4 py-2 text-sm font-light"
              >
                Login
              </button>
              <button
                onClick={onRegisterClick}
                className="liquid-glass-elevated energy-sweep px-5 py-2 rounded-lg text-white text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-auto text-white/70 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0B0E13]/95 backdrop-blur-[80px]"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative z-50 flex flex-col items-center justify-center h-full">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-light py-4 hover:text-[#5CE1E6] transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}

            <div className="flex flex-col gap-4 mt-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLoginClick();
                }}
                className="border border-[#3FA9FF]/30 px-8 py-3 rounded-lg text-[#5CE1E6]"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="liquid-glass-elevated px-8 py-3 rounded-lg text-white"
              >
                Register
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
