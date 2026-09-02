import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Code2, Brain, Heart, Rocket, CheckCircle2 } from 'lucide-react';
import { timeline } from '../../data/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const traits = [
  { icon: Code2, color: '#7C3AED', title: 'Who I Am', desc: 'A dedicated MERN Stack Developer from Rangpur, Bangladesh with a passion for building products that matter.' },
  { icon: Brain, color: '#06B6D4', title: 'How I Think', desc: 'I approach problems systematically — breaking complex challenges into clean, maintainable solutions.' },
  { icon: Heart, color: '#EC4899', title: 'Why I Care', desc: 'I believe great software is about the people using it. UX is never an afterthought in my work.' },
  { icon: Rocket, color: '#10B981', title: 'What Drives Me', desc: "Commitment to real-world impact. I don't build for demos — I build for users and production." },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 orb orb-violet opacity-10" aria-hidden="true" />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="section-badge mx-auto w-fit">
            <span>👤</span> About Me
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-heading mt-2">
            More Than Just a Developer.
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subheading mx-auto text-center">
            A self-driven full-stack developer who transforms ideas into elegant, scalable web applications.
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-16 items-start mb-24">
          {/* Left: Profile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Avatar */}
            <div className="relative mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full max-w-xs mx-auto lg:mx-0"
              >
                {/* Glow border */}
                <div className="absolute -inset-1 rounded-3xl opacity-60 blur-sm"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }} />
                
                <div className="relative rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-[rgba(124,58,237,0.2)] to-[rgba(6,182,212,0.1)] flex items-center justify-center"
                  style={{ background: 'var(--color-surface-2)' }}>
                  {/* Fallback initials avatar */}
                  <div className="text-center">
                    <div className="text-8xl font-black gradient-text">SA</div>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-2">Sojib Ahmed</p>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,8,0.4)] to-transparent" />
                </div>

                {/* Status badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(16,185,129,0.3)] whitespace-nowrap">
                  <div className="status-dot" />
                  <span className="text-xs font-semibold text-[#10B981]">Available Now</span>
                </div>
              </motion.div>
            </div>

            {/* Quick info */}
            <div className="mt-8 space-y-3">
              {[
                { icon: MapPin, label: 'Location', value: 'Rangpur, Bangladesh' },
                { icon: Code2, label: 'Specialization', value: 'MERN Stack' },
                { icon: Rocket, label: 'Experience', value: '8+ Months Intensive' },
                { icon: CheckCircle2, label: 'Status', value: 'Open to Opportunities' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(124,58,237,0.1)' }}>
                    <Icon size={15} className="text-[#8B5CF6]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)]">{label}</div>
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3 space-y-8"
          >
            {/* Intro paragraph */}
            <motion.div variants={fadeUp}>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                I'm <span className="text-[var(--color-text-primary)] font-semibold">Sojib Ahmed</span>, a passionate MERN Stack Developer who completed an{' '}
                <span className="gradient-text font-semibold">8-month intensive full-stack web development program</span>{' '}
                at Programming Hero, building 10+ real-world projects along the way.
              </p>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                My focus is on crafting applications that are not just functional — but fast, secure, scalable, and a joy to use. I believe the best code is code that solves real problems elegantly.
              </p>
            </motion.div>

            {/* Traits grid */}
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
              {traits.map(({ icon: Icon, color, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="card p-5"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">{title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* What makes me different */}
            <motion.div variants={fadeUp} className="highlight-box">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">What Makes Me Different</h3>
              <ul className="space-y-1.5">
                {[
                  "I build for real users, not just to complete tasks",
                  "Clean, documented, maintainable code is non-negotiable",
                  "I stay current with the latest web technologies & best practices",
                  "I communicate proactively and meet deadlines consistently",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 size={14} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="section-badge mx-auto w-fit mb-3">
              <span>📅</span> Journey
            </div>
            <h3 className="text-3xl font-bold text-[var(--color-text-primary)]">
              My Learning Timeline
            </h3>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, #7C3AED, rgba(124,58,237,0.1))' }} />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-6 pl-14"
                >
                  {/* Dot */}
                  <div className="absolute left-3.5 top-4 -translate-x-1/2">
                    <div className={`w-5 h-5 rounded-full border-2 border-[#050508] flex items-center justify-center ${
                      item.highlight ? 'ring-2 ring-[rgba(124,58,237,0.5)]' : ''
                    }`}
                      style={{ background: item.highlight ? 'linear-gradient(135deg, #7C3AED, #06B6D4)' : '#1A1A2E' }}>
                      {item.highlight && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className={`card flex-1 p-5 ${item.highlight ? 'border-[rgba(124,58,237,0.3)]' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="font-bold text-[var(--color-text-primary)] text-sm">{item.title}</h4>
                        <p className="text-xs text-[#8B5CF6] mt-0.5">{item.subtitle}</p>
                      </div>
                      <span className="text-xs font-mono text-[var(--color-text-secondary)] whitespace-nowrap px-2 py-1 rounded-lg"
                        style={{ background: 'rgba(124,58,237,0.08)' }}>
                        {item.date}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-3">{item.description}</p>
                    {item.skills && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map(skill => (
                          <span key={skill} className="tech-badge text-[10px]">{skill}</span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
