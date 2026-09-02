import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, BookOpen, Tag, ArrowRight, Search, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    id: 'node-api-guide',
    title: 'Building Scalable REST APIs with Node.js and Express',
    excerpt: 'A comprehensive guide to designing production-ready APIs with authentication, rate limiting, validation, and proper error handling.',
    category: 'Node.js',
    tags: ['Node.js', 'Express.js', 'REST API', 'Backend'],
    readTime: '8 min read',
    date: 'Aug 2026',
    featured: true,
    gradient: '#7C3AED',
  },
  {
    id: 'react-performance',
    title: 'React Performance Optimization: 10 Proven Techniques',
    excerpt: "From useMemo to code splitting, here are the optimization strategies I use to achieve 95+ Lighthouse scores in every React project.",
    category: 'React',
    tags: ['React.js', 'Performance', 'Optimization', 'Frontend'],
    readTime: '6 min read',
    date: 'Jul 2026',
    featured: false,
    gradient: '#06B6D4',
  },
  {
    id: 'mongodb-schema-design',
    title: 'MongoDB Schema Design Best Practices for MERN Apps',
    excerpt: 'Deep dive into embedding vs referencing, aggregation pipelines, and indexing strategies for high-performance MongoDB applications.',
    category: 'MongoDB',
    tags: ['MongoDB', 'Database', 'Schema Design', 'Backend'],
    readTime: '7 min read',
    date: 'Jun 2026',
    featured: false,
    gradient: '#10B981',
  },
  {
    id: 'jwt-auth-guide',
    title: 'JWT Authentication Complete Guide: From Basics to Production',
    excerpt: 'Everything about JWT — access tokens, refresh token rotation, token blacklisting, and securing your Node.js + React application.',
    category: 'Security',
    tags: ['JWT', 'Authentication', 'Security', 'Node.js'],
    readTime: '10 min read',
    date: 'May 2026',
    featured: false,
    gradient: '#EC4899',
  },
];

const categories = ['All', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'Security'];

export default function Blog() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="blog" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-badge mx-auto w-fit mb-3">
            <span>✍️</span> Blog
          </div>
          <h2 className="section-heading">Thinking Out Loud</h2>
          <p className="section-subheading mx-auto text-center">
            Technical articles on MERN Stack development, best practices, and lessons learned.
          </p>
        </motion.div>

        {/* Search + Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-12"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
            <input
              id="blog-search"
              type="search"
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] outline-none focus:ring-1 focus:ring-[rgba(124,58,237,0.5)]"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  cat === 'All'
                    ? 'text-white'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
                style={cat === 'All' ? {
                  background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                } : {
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {blogPosts.filter(p => p.featured).map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            className="card p-8 mb-8 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${post.gradient}, transparent)` }} />
            
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={13} className="text-[#F59E0B]" />
              <span className="text-xs font-semibold text-[#F59E0B]">Featured Article</span>
              <span className="blog-tag">{post.category}</span>
            </div>

            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[#8B5CF6] transition-colors">
              {post.title}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 max-w-2xl">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map(tag => (
                  <span key={tag} className="tech-badge text-[10px]">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 ml-auto text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-1"><Clock size={12} />{post.readTime}</div>
                <div className="flex items-center gap-1"><BookOpen size={12} />{post.date}</div>
                <button className="flex items-center gap-1 text-[#8B5CF6] font-medium hover:gap-2 transition-all">
                  Read More <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Other posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.filter(p => !p.featured).map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="card p-6 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="blog-tag">{post.category}</span>
                <span className="text-xs text-[var(--color-text-secondary)]">{post.date}</span>
              </div>

              <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[#8B5CF6] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-1">
                  <Clock size={11} />
                  {post.readTime}
                </div>
                <button className="flex items-center gap-1 text-[#8B5CF6] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight size={11} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-[var(--color-text-secondary)]">More articles coming soon! I write regularly about MERN stack development.</p>
        </motion.div>
      </div>
    </section>
  );
}
