import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'I start by deeply understanding your requirements, goals, and target audience. Clear communication upfront prevents costly changes later.',
    color: '#7C3AED',
    details: ['Requirements analysis', 'Goal definition', 'Audience research', 'Competitive analysis'],
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Architecture design, technology selection, and project roadmapping. I present a clear plan before writing a single line of code.',
    color: '#06B6D4',
    details: ['System architecture', 'Tech stack selection', 'Database modeling', 'Timeline & milestones'],
  },
  {
    number: '03',
    title: 'Development',
    description: 'Clean, efficient, and well-documented code following industry best practices. Regular updates keep you in the loop at every stage.',
    color: '#10B981',
    details: ['Iterative development', 'Code reviews', 'Version control (Git)', 'Regular progress updates'],
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Thorough testing, performance optimization, and deployment. I ensure everything is production-ready before going live.',
    color: '#F59E0B',
    details: ['Testing & QA', 'Performance optimization', 'CI/CD deployment', 'Post-launch support'],
  },
];

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="process" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="section-badge mx-auto w-fit mb-3">
            <span>⚙️</span> Process
          </div>
          <h2 className="section-heading">How I Bring Ideas to Life</h2>
          <p className="section-subheading mx-auto text-center">
            A transparent, structured approach that ensures on-time delivery and excellent results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, #7C3AED, #06B6D4, #10B981, #F59E0B)' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="card p-8 h-full relative z-10 text-center"
            >
              {/* Number bubble */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10"
                style={{ background: `${step.color}20`, border: `2px solid ${step.color}50` }}>
                <span className="text-xl font-black" style={{ color: step.color }}>{step.number}</span>
              </div>

              <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2">{step.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">{step.description}</p>

              <ul className="space-y-1.5">
                {step.details.map(detail => (
                  <li key={detail} className="flex items-center gap-2 text-[11px] text-[var(--color-text-secondary)]">
                    <div className="w-1 h-1 rounded-full" style={{ background: step.color }} />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            id="process-start-project"
          >
            Start a Project
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
