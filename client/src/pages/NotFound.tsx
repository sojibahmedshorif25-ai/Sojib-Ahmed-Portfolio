import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 orb orb-violet opacity-15" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb orb-cyan opacity-10" aria-hidden="true" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[clamp(120px,20vw,200px)] font-black leading-none gradient-text mb-4 select-none"
            aria-hidden="true"
          >
            404
          </motion.div>

          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            Looks like you took a wrong turn.
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-md mx-auto mb-10 leading-relaxed">
            But don't worry — the page you're looking for doesn't exist, but I do. Let's get you back on track.
          </p>

          {/* Terminal hint */}
          <div className="terminal max-w-xs mx-auto mb-10">
            <div className="terminal-header">
              <div className="terminal-dot bg-[#FF5F56]" />
              <div className="terminal-dot bg-[#FFBD2E]" />
              <div className="terminal-dot bg-[#27C93F]" />
            </div>
            <div className="terminal-body text-left">
              <div className="flex gap-2"><span className="terminal-prompt">$</span><span className="terminal-text">curl /page-not-found</span></div>
              <div className="terminal-dim">Error 404: Page not found</div>
              <div className="flex gap-2 mt-1"><span className="terminal-prompt">$</span><span className="terminal-text">cd ~</span></div>
              <div className="terminal-dim">Navigating to home...</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
              id="notfound-home"
            >
              <Home size={16} />
              Back to Home
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.history.back()}
              className="btn-secondary"
              id="notfound-back"
            >
              <ArrowLeft size={16} />
              Go Back
            </motion.button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
