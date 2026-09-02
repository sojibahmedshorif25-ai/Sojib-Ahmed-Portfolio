import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../../data/skills';

const levelColors = {
  Expert: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)', text: '#10B981' },
  Advanced: { bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.3)', text: '#8B5CF6' },
  Intermediate: { bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.3)', text: '#06B6D4' },
};

// Real skill icons as SVG components
function SkillIcon({ name, color }: { name: string; color: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    'React.js': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    ),
    'Next.js': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14.5h-9v-1h9v1zm0-3h-9v-1h9v1zm0-3h-9v-1h9v1zm0-3h-9v-1h9v1z" />
      </svg>
    ),
    'TypeScript': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TS</text>
      </svg>
    ),
    'JavaScript': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <text x="12" y="16" textAnchor="middle" fill="black" fontSize="10" fontWeight="bold">JS</text>
      </svg>
    ),
    'Tailwind CSS': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.13 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.92 7.15 14.77 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.92 13.15 9.77 12 7 12z" />
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.09-.21-.21-.21H8.22c-.12 0-.21.09-.21.21v8.06c0 .66-.68 1.31-1.77.76L4.16 16.2a.27.27 0 01-.13-.22V7.41c0-.09.05-.17.13-.22l7.44-4.29a.27.27 0 01.26 0l7.44 4.29c.08.05.13.13.13.22v8.58c0 .09-.05.17-.13.22l-7.44 4.29a.26.26 0 01-.26 0l-1.88-1.12a.19.19 0 00-.22 0c-.61.35-.73.38-1.29.51-.12.03-.24.04-.36.04-.71 0-1.27-.38-1.27-1.15V9.29c0-.49.34-.92.82-1.03l7.44-4.3c.23-.13.5-.2.78-.2z" />
      </svg>
    ),
    'Express.js': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke={color} strokeWidth="2" />
        <text x="12" y="15" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold">Express</text>
      </svg>
    ),
    'MongoDB': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M17.19 10.5c-.2-3.5-2.5-5.5-5.19-5.5S7 7 6.8 10.5H6c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h.8c.2 3.5 2.5 5.5 5.2 5.5s5-2 5.2-5.5H18c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-.81z" />
      </svg>
    ),
    'Docker': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M13.98 8.94l.78-3.2c.07-.28-.12-.54-.4-.54h-3.16c-.28 0-.47.26-.4.54l.78 3.2c.07.28.35.46.63.46h1.74c.28 0 .56-.18.63-.46zm-1.57-1.05h-1.2l-.4-1.6h1.2l-.4 1.6zM5.07 10.54l.78-3.2c.07-.28-.12-.54-.4-.54H2.29c-.28 0-.47.26-.4.54l.78 3.2c.07.28.35.46.63.46h1.74c.28 0 .56-.18.63-.46zm-1.57-1.05H2.3l-.4-1.6h1.2l-.4 1.6z" />
        <path d="M22.34 10.54l.78-3.2c.07-.28-.12-.54-.4-.54h-3.16c-.28 0-.47.26-.4.54l.78 3.2c.07.28.35.46.63.46h1.74c.28 0 .56-.18.63-.46zm-1.57-1.05h-1.2l-.4-1.6h1.2l-.4 1.6z" />
        <path d="M17.19 10.5c-.2-3.5-2.5-5.5-5.19-5.5S7 7 6.8 10.5H6c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h.8c.2 3.5 2.5 5.5 5.2 5.5s5-2 5.2-5.5H18c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-.81z" />
      </svg>
    ),
    'Git': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.347 2.358l2.67 2.67a1.838 1.838 0 11-1.102 1.035l-2.482-2.482v6.53a1.838 1.838 0 11-1.532-.03v-6.43a1.838 1.838 0 01-1.002-2.41L7.651 4.445.452 11.644a1.55 1.55 0 000 2.188l10.48 10.48a1.55 1.55 0 002.186 0l10.43-10.43a1.55 1.55 0 000-2.052z" />
      </svg>
    ),
    'GitHub': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    'VS Code': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M17.583 2.427L13.016 6.99 8.45 2.427 7.01 3.867l4.566 4.566-4.566 4.566 1.44 1.44 4.566-4.566 4.566 4.566 1.44-1.44-4.566-4.566 4.566-4.566z" />
      </svg>
    ),
    'Figma': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-20C5.8 4 4 5.8 4 8s1.8 4 4 4h4V4H8zm0-4C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm12 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-8 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
      </svg>
    ),
    'Vercel': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
    ),
    'npm/pnpm': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019v13.395H18.3V5.323h-2.333V17.2H7.466V5.323H5.13z" />
      </svg>
    ),
    'REST API': (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill={color}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  };

  return iconMap[name] || (
    <div 
      className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
      style={{ backgroundColor: color }}
    >
      {name.slice(0, 2)}
    </div>
  );
}

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
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit mb-4">
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
          className="flex flex-wrap justify-center gap-3 mb-14"
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
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                  className="card p-6 cursor-default relative overflow-hidden group"
                  style={{ '--hover-color': skill.color } as React.CSSProperties}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at center, ${skill.color}10, transparent)` }} />

                  <div className="relative z-10">
                    {/* Icon & Name */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}>
                          <SkillIcon name={skill.name} color={skill.color} />
                        </div>
                        <span className="font-bold text-sm text-[var(--color-text-primary)]">{skill.name}</span>
                      </div>
                      <span
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
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
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5"
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
              className="card p-6 text-center"
            >
              <div className="text-3xl font-black mb-2" style={{ color }}>{count}+</div>
              <div className="text-xs text-[var(--color-text-secondary)]">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
