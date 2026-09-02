import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, GitBranch, ArrowRight, Layers, Code, Server } from 'lucide-react';
import { projects } from '../../data/projects';

type Category = 'all' | 'full-stack' | 'frontend' | 'backend';

const categoryIcons = {
  'all': Layers,
  'full-stack': Layers,
  'frontend': Code,
  'backend': Server,
};

const categoryLabels = {
  'all': 'All Projects',
  'full-stack': 'Full Stack',
  'frontend': 'Frontend',
  'backend': 'Backend',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 orb orb-cyan opacity-08" aria-hidden="true" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto w-fit mb-3">
            <span>🚀</span> Projects
          </div>
          <h2 className="section-heading">Selected Work</h2>
          <p className="section-subheading mx-auto text-center">
            10+ real-world projects built with modern technologies and production-grade code.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-14"
          role="tablist"
          aria-label="Project category filter"
        >
          {(['all', 'full-stack', 'frontend', 'backend'] as Category[]).map((cat) => {
            const Icon = categoryIcons[cat];
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(cat)}
                role="tab"
                aria-selected={activeFilter === cat}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'text-white shadow-lg'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
                style={activeFilter === cat ? {
                  background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                } : {
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
                id={`filter-${cat}`}
              >
                <Icon size={15} />
                {categoryLabels[cat]}
                <span className="text-xs opacity-70">
                  ({cat === 'all' ? projects.length : projects.filter(p => p.category === cat).length})
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="project-card card group relative overflow-hidden"
                style={{
                  '--project-color': project.color,
                } as React.CSSProperties}
                aria-label={`${project.title} - ${project.subtitle}`}
              >
                {/* Top color line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
                  style={{
                    background: hoveredProject === project.id
                      ? `linear-gradient(90deg, ${project.color}, ${project.accentColor})`
                      : `linear-gradient(90deg, ${project.color}50, transparent)`,
                  }}
                />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      {/* Category badge */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="tech-badge text-[10px]">{project.category === 'full-stack' ? 'Full Stack' : project.category === 'frontend' ? 'Frontend' : 'Backend'}</span>
                        <span className="text-xs text-[var(--color-text-secondary)]">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[#8B5CF6] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{project.subtitle}</p>
                    </div>

                    {/* Number */}
                    <div className="text-4xl font-black opacity-10 font-mono"
                      style={{ color: project.color }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Problem / Solution preview */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-semibold text-[#EC4899] mt-0.5">Problem</span>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-semibold text-[#10B981] mt-0.5">Solution</span>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Key features (hover) */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-1.5">
                          {project.features.slice(0, 4).map(feature => (
                            <div key={feature} className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
                              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 5).map(tech => (
                      <span key={tech} className="tech-badge text-[10px]">{tech}</span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="tech-badge text-[10px]">+{project.techStack.length - 5}</span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(124,58,237,0.1)]">
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      Role: <span className="text-[var(--color-text-primary)] font-medium">{project.role}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                        style={{ background: 'rgba(124,58,237,0.08)' }}
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GitBranch size={15} />
                      </motion.a>
                      {project.category !== 'backend' && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                          style={{ background: 'rgba(124,58,237,0.08)' }}
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={15} />
                        </motion.a>
                      )}
                      {project.docsUrl && (
                        <motion.a
                          href={project.docsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                          style={{ background: 'rgba(124,58,237,0.08)', color: '#8B5CF6', border: '1px solid rgba(124,58,237,0.2)' }}
                          aria-label={`${project.title} API docs`}
                        >
                          API Docs
                          <ArrowRight size={11} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}05, transparent 60%)` }}
                />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            All projects are available on GitHub with full documentation.
          </p>
          <motion.a
            href="https://github.com/sojibahmedshorif25-ai"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(124,58,237,0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary inline-flex"
            id="view-all-github"
          >
            <GitBranch size={16} />
            View All on GitHub
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
