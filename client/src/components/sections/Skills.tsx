import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../../data/skills';

const levelColors = {
  Expert: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)', text: '#10B981' },
  Advanced: { bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.3)', text: '#8B5CF6' },
  Intermediate: { bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.3)', text: '#06B6D4' },
};

function SkillIcon({ name, color }: { name: string; color: string }) {
  const iconMap: Record<string, string> = {
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'Framer Motion': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'Mongoose': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'Firebase Auth': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'Firebase Storage': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
    'Redux Toolkit': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
    'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
    'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
    'Render': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/render/render-original.svg',
    'ESLint': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg',
  };

  if (iconMap[name]) {
    return <img src={iconMap[name]} alt={name} className="w-6 h-6 object-contain" />;
  }

  return (
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
          className="text-center mb-12"
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
          className="flex flex-wrap justify-center gap-2 mb-10"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
                  className="card p-8 cursor-default relative overflow-hidden group"
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
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8"
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
              <div className="text-2xl font-black mb-1" style={{ color }}>{count}+</div>
              <div className="text-[11px] text-[var(--color-text-secondary)]">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
