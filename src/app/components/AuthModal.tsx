import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
}

export function AuthModal({ isOpen, onClose, mode }: AuthModalProps) {
  const [authMode, setAuthMode] = useState(mode);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#0B0E13]/95 backdrop-blur-[80px] energy-grid"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full max-w-md"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-br from-[#3FA9FF]/20 to-[#5CE1E6]/20" />

              {/* Modal Content */}
              <div className="relative liquid-glass-elevated noise-texture rounded-2xl p-8 overflow-hidden">
                {/* Pulse Animation */}
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6] to-transparent"
                />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-light text-white mb-2">
                    {authMode === 'login' ? 'Lab Access' : 'Join Neural Network'}
                  </h2>
                  <p className="text-white/60 text-sm font-light">
                    {authMode === 'login'
                      ? 'Enter your credentials to access the AI core.'
                      : 'Create an account to begin your AI journey.'}
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-sm font-light text-white/80 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg liquid-glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]/50 transition-all duration-300"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-light text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg liquid-glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]/50 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-white/80 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-lg liquid-glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]/50 transition-all duration-300"
                    />
                  </div>

                  {authMode === 'register' && (
                    <div>
                      <label className="block text-sm font-light text-white/80 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 rounded-lg liquid-glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]/50 transition-all duration-300"
                      />
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full liquid-glass-elevated energy-sweep py-4 rounded-lg text-white font-light hover:scale-[1.02] transition-transform duration-300"
                  >
                    {authMode === 'login' ? 'Access System' : 'Create Account'}
                  </button>

                  {/* Toggle Mode */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                      className="text-sm text-[#5CE1E6] hover:text-[#3FA9FF] transition-colors font-light"
                    >
                      {authMode === 'login'
                        ? "Don't have an account? Register"
                        : 'Already have an account? Login'}
                    </button>
                  </div>
                </form>

                {/* Bottom Glow */}
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3FA9FF] to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
