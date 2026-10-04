import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../../data/skills';

function SkillIcon({ name, color }: { name: string; color: string }) {
  const iconMap: Record<string, string> = {
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'JavaScript (ES6+)': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'Framer Motion': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg',
    'HTML5 & CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'Vite & PWA': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    'TanStack Query': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'Socket.IO': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
    'WebRTC': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webrtc/webrtc-original.svg',
    'Upstash Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
    'MongoDB & Mongoose': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'Firebase Auth': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'Better Auth & OAuth': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'Git & GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    'Git & GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    'Postman & Swagger': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    'Vercel & Render': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    'Multer & Cloudinary': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudinary/cloudinary-original.svg',
  };

  if (iconMap[name]) {
    return <img src={iconMap[name]} alt={name} className="w-7 h-7 object-contain" />;
  }

  return (
    <div 
      className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-inner"
      style={{ backgroundColor: color }}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const activeCategory = skillCategories.find(c => c.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Ambience */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] orb orb-violet opacity-15 pointer-events-none blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="section-badge mx-auto w-fit mb-3">
            <span>⚡</span> Technical Skills & Stack
          </div>
          <h2 className="section-heading">Production Tech Stack</h2>
          <p className="section-subheading mx-auto text-center max-w-2xl">
            Real-world technologies and tools battle-tested across my 10 live production and enterprise projects.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab(cat.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`skills-panel-${cat.id}`}
                id={`skills-tab-${cat.id}`}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? 'text-white border-primary shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                    : 'text-[var(--color-text-secondary)] border-[var(--color-border)] hover:text-[var(--color-text-primary)] hover:border-primary/40 bg-[var(--color-surface)]/60'
                }`}
                style={isActive ? {
                  background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                } : undefined}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-[var(--color-text-secondary)]'
                }`}>
                  {cat.skills.length}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Clean Modern Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            id={`skills-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`skills-tab-${activeTab}`}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-4 rounded-2xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)] hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(124,58,237,0.15)] flex items-center gap-4"
              >
                {/* Glow on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ background: skill.color }}
                />

                {/* Tech Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{ 
                    background: `${skill.color}15`, 
                    border: `1px solid ${skill.color}35` 
                  }}
                >
                  <SkillIcon name={skill.name} color={skill.color} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-[var(--color-text-primary)] group-hover:text-primary transition-colors truncate">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 line-clamp-2 leading-snug">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
