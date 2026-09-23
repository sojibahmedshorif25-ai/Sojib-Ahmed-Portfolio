import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 40 ? 3 : prev < 70 ? 2 : prev < 90 ? 1.5 : 0.8;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 orb orb-violet opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb orb-cyan opacity-20" />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Animated SA Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
          >
            <div className="relative w-24 h-24">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7C3AED, #06B6D4, #10B981, #7C3AED)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full" style={{ background: '#050508' }} />
              </motion.div>

              {/* Center SA */}
              <div className="absolute inset-1 rounded-full flex items-center justify-center"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent)' }}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  SA
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Name & title */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-bold tracking-[0.2em] text-[var(--color-text-primary)]"
            >
              SOJIB AHMED
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm tracking-[0.3em] mt-1"
              style={{ color: '#7C3AED' }}
            >
              FULL STACK DEVELOPER
            </motion.p>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="w-64"
          >
            <div className="h-px bg-[rgba(124,58,237,0.2)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
                  width: `${progress}%`,
                  transition: 'width 0.1s ease',
                }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-[var(--color-text-secondary)] font-mono">Initializing</span>
              <span className="text-xs font-mono" style={{ color: '#7C3AED' }}>{Math.round(progress)}%</span>
            </div>
          </motion.div>

          {/* Status text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-xs text-[var(--color-text-secondary)]"
          >
            {progress < 30 ? '$ Loading modules...' : progress < 60 ? '$ Mounting components...' : progress < 90 ? '$ Preparing experience...' : '$ Ready to launch 🚀'}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
