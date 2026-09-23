import { motion } from 'framer-motion';

const stats = [
  { value: '8+', label: 'Months Learning' },
  { value: '10+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '100%', label: 'Passion' },
];

const ticker = '8+ Months Intensive Learning • 10+ Projects Built • 15+ Technologies Mastered • Full Stack Developer • React • Node.js • MongoDB • TypeScript • Available for Hire';

export default function TrustBar() {
  return (
    <div className="relative py-10 overflow-hidden border-y border-[rgba(124,58,237,0.1)]"
      style={{ background: 'var(--color-surface)' }}>
      {/* Ticker */}
      <div className="ticker-wrap mb-10">
        <div className="ticker-content gap-8">
          {[...ticker.split(' • '), ...ticker.split(' • ')].map((item, i) => (
            <span key={i} className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] font-medium whitespace-nowrap pr-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-black gradient-text mb-1">{value}</div>
              <div className="text-sm text-[var(--color-text-secondary)]">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
