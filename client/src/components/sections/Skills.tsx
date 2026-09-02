import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../../data/skills';

const levelColors = {
  Expert: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)', text: '#10B981' },
  Advanced: { bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.3)', text: '#8B5CF6' },
  Intermediate: { bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.3)', text: '#06B6D4' },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const activeCategory = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 orb orb-violet opacity-10 -translate-x-1/2" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-badge mx-auto w-fit mb-3">
            <span>⚡</span> Skills
          </div>
          <h2 className="section-heading">My Arsenal</h2>
          <p className="section-subheading mx-auto text-center">
            A comprehensive toolkit built through intensive learning and real-world projects.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(cat.id)}
              role="tab"
              aria-selected={activeTab === cat.id}
              aria-controls={`skills-panel-${cat.id}`}
              id={`skills-tab-${cat.id}`}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? 'text-white shadow-lg'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(124,58,237,0.08)]'
              }`}
              style={activeTab === cat.id ? {
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              } : {
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            id={`skills-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`skills-tab-${activeTab}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {activeCategory?.skills.map((skill, i) => {
              const levelStyle = levelColors[skill.level];
              const isHovered = hoveredSkill === `${activeTab}-${skill.name}`;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onHoverStart={() => setHoveredSkill(`${activeTab}-${skill.name}`)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="card p-5 cursor-default relative overflow-hidden group"
                  style={{ '--hover-color': skill.color } as React.CSSProperties}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at center, ${skill.color}08, transparent)` }} />

                  <div className="relative z-10">
                    {/* Icon & Name */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-bold text-sm text-[var(--color-text-primary)]">{skill.name}</span>
                      </div>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                        style={{
                          background: levelStyle.bg,
                          borderColor: levelStyle.border,
                          color: levelStyle.text,
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="skill-bar mb-3">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: inView ? `${skill.percentage}%` : 0 }}
                        transition={{ duration: 1.2, delay: i * 0.06, ease: 'easeOut' }}
                      />
                    </div>

                    {/* Projects used */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--color-text-secondary)]">{skill.projects}</span>
                      <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Tooltip on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute inset-x-0 -bottom-0 translate-y-full z-50 mt-1"
                        >
                          <div className="glass rounded-xl p-3 mx-1 border border-[rgba(124,58,237,0.3)] shadow-2xl">
                            <p className="text-xs text-[var(--color-text-secondary)]">{skill.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Total Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: 'Expert Skills', count: skillCategories.flatMap(c => c.skills).filter(s => s.level === 'Expert').length, color: '#10B981' },
            { label: 'Advanced Skills', count: skillCategories.flatMap(c => c.skills).filter(s => s.level === 'Advanced').length, color: '#8B5CF6' },
            { label: 'Intermediate', count: skillCategories.flatMap(c => c.skills).filter(s => s.level === 'Intermediate').length, color: '#06B6D4' },
            { label: 'Total Technologies', count: skillCategories.flatMap(c => c.skills).length, color: '#F59E0B' },
          ].map(({ label, count, color }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.03 }}
              className="card p-5 text-center"
            >
              <div className="text-3xl font-black mb-1" style={{ color }}>{count}+</div>
              <div className="text-xs text-[var(--color-text-secondary)]">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
