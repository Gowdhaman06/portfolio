import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from '../ui/Logo';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo size={60} showText={false} />
              <motion.div
                className="absolute -inset-6 rounded-full border-2 border-[var(--accent-primary)]"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-0.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>

            {/* Text */}
            <motion.p
              className="text-sm text-[var(--text-secondary)] font-medium tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
