import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
      <div className="absolute top-0 right-1/4 w-80 h-80 orb orb-violet opacity-10" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-badge mx-auto w-fit mb-3">
            <span>💬</span> Testimonials
          </div>
          <h2 className="section-heading">What People Say</h2>
          <p className="section-subheading mx-auto text-center">
            Feedback from instructors, peers, and collaborators in the developer community.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="card p-8 flex flex-col h-full relative"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-4">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-[rgba(124,58,237,0.1)]">
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--color-text-primary)]">{t.name}</div>
                  <div className="text-[10px] text-[var(--color-text-secondary)]">{t.role} · {t.company}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(124,58,237,0.1)', color: '#8B5CF6', border: '1px solid rgba(124,58,237,0.2)' }}>
                    {t.relation}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-[var(--color-text-secondary)]">
            All reviews are from real interactions in the Programming Hero community and developer circles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
