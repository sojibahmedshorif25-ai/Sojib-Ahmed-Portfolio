// ============================
// SKILLS DATA WITH REAL ICONS
// ============================

export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  projects: string;
  description: string;
  icon: string;
  color: string;
  percentage: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', level: 'Expert', projects: '8+ projects', description: 'Component architecture, hooks, performance optimization', icon: '⚛️', color: '#61DAFB', percentage: 95 },
      { name: 'Next.js', level: 'Advanced', projects: '3+ projects', description: 'SSR, SSG, App Router, API routes, middleware', icon: '▲', color: '#000000', percentage: 85 },
      { name: 'TypeScript', level: 'Advanced', projects: '4+ projects', description: 'Type safety, generics, interfaces, advanced types', icon: 'TS', color: '#3178C6', percentage: 83 },
      { name: 'JavaScript', level: 'Expert', projects: 'All projects', description: 'ES6+, async/await, closures, prototype chain', icon: 'JS', color: '#F7DF1E', percentage: 95 },
      { name: 'Tailwind CSS', level: 'Expert', projects: 'All projects', description: 'Utility-first styling, responsive design, dark mode', icon: '🌊', color: '#06B6D4', percentage: 95 },
      { name: 'Framer Motion', level: 'Advanced', projects: '5+ projects', description: 'Animations, gestures, layout transitions, variants', icon: 'FM', color: '#BB4B96', percentage: 82 },
      { name: 'GSAP', level: 'Intermediate', projects: '3+ projects', description: 'ScrollTrigger, timeline animations, advanced effects', icon: 'GS', color: '#88CE02', percentage: 70 },
      { name: 'HTML5', level: 'Expert', projects: 'All projects', description: 'Semantic markup, accessibility, SEO, Canvas', icon: 'H5', color: '#E34F26', percentage: 98 },
      { name: 'CSS3', level: 'Expert', projects: 'All projects', description: 'Flexbox, Grid, animations, custom properties', icon: 'C3', color: '#1572B6', percentage: 95 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Expert', projects: 'All backend', description: 'Event loop, streams, middleware, cluster', icon: '🟢', color: '#339933', percentage: 92 },
      { name: 'Express.js', level: 'Expert', projects: 'All backend', description: 'REST API design, middleware, routing, error handling', icon: 'EX', color: '#000000', percentage: 92 },
      { name: 'REST API', level: 'Expert', projects: 'All projects', description: 'CRUD operations, versioning, documentation', icon: '🔌', color: '#FF6C37', percentage: 95 },
      { name: 'GraphQL', level: 'Intermediate', projects: '2+ projects', description: 'Schema design, resolvers, Apollo Server', icon: 'GQ', color: '#E10098', percentage: 68 },
      { name: 'Socket.IO', level: 'Advanced', projects: '3+ projects', description: 'Real-time events, rooms, namespaces, scaling', icon: '⚡', color: '#010101', percentage: 80 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MongoDB Atlas', level: 'Expert', projects: 'All projects', description: 'Aggregation pipeline, indexing, Atlas cluster, transactions', icon: '🍃', color: '#47A248', percentage: 94 },
      { name: 'Upstash Redis', level: 'Advanced', projects: '3+ projects', description: 'In-memory caching, TTL strategies, sub-50ms latency', icon: '⚡', color: '#FF4438', percentage: 85 },
      { name: 'Mongoose', level: 'Expert', projects: 'All projects', description: 'Schema design, virtuals, middleware, population', icon: 'MG', color: '#880000', percentage: 92 },
      { name: 'PostgreSQL', level: 'Intermediate', projects: '2+ projects', description: 'Relational modeling, joins, transactions', icon: '🐘', color: '#336791', percentage: 70 },
      { name: 'Firebase Storage', level: 'Advanced', projects: '4+ projects', description: 'Firestore, Realtime DB, Cloud Storage', icon: '🔥', color: '#FFCA28', percentage: 85 },
    ],
  },
  {
    id: 'auth',
    label: 'Auth & Security',
    skills: [
      { name: 'JWT & 2FA OTP', level: 'Expert', projects: 'All auth', description: 'Token rotation, blacklisting, 2-Factor Email OTP', icon: '🔐', color: '#D63AFF', percentage: 95 },
      { name: 'OAuth 2.0 / Better Auth', level: 'Expert', projects: '4+ projects', description: 'Google OAuth, Better Auth integration, PKCE', icon: '🔑', color: '#4285F4', percentage: 90 },
      { name: 'RBAC Security', level: 'Expert', projects: 'All portals', description: 'Multi-role isolation, permission middleware, KYC', icon: '🛡️', color: '#7C3AED', percentage: 92 },
      { name: 'Firebase Auth', level: 'Advanced', projects: '4+ projects', description: 'Social login, custom tokens, security rules', icon: '🔥', color: '#FFCA28', percentage: 88 },
    ],
  },
  {
    id: 'state',
    label: 'State Mgmt',
    skills: [
      { name: 'TanStack Query', level: 'Expert', projects: 'All projects', description: 'Server state, caching, optimistic updates, SSR', icon: 'TQ', color: '#FF4154', percentage: 90 },
      { name: 'Redux / Context API', level: 'Advanced', projects: '4+ projects', description: 'Global state, createSlice, async workflows', icon: 'RT', color: '#764ABC', percentage: 85 },
      { name: 'Zustand', level: 'Advanced', projects: '3+ projects', description: 'Lightweight global state, middleware, persist', icon: '🐻', color: '#443E38', percentage: 85 },
    ],
  },
  {
    id: 'ai',
    label: 'AI & LLM',
    skills: [
      { name: 'Gemini AI Pipelines', level: 'Expert', projects: 'FoodFlow, StartupForge', description: 'Multimodal recommendations, semantic search, pitch decks', icon: '💎', color: '#4285F4', percentage: 90 },
      { name: 'OpenAI API', level: 'Advanced', projects: '3+ projects', description: 'GPT-4, function calling, embeddings, streaming', icon: '🤖', color: '#10A37F', percentage: 82 },
      { name: 'AI Chatbot & ATS', level: 'Expert', projects: 'SkillForge, Portfolio', description: 'Conversational UX, ATS scoring, context management', icon: '💬', color: '#7C3AED', percentage: 88 },
    ],
  },
  {
    id: 'realtime',
    label: 'Real-Time & Media',
    skills: [
      { name: 'Socket.IO', level: 'Expert', projects: 'FoodFlow, StartupForge', description: 'Full-duplex telemetry, chat rooms, live events', icon: '⚡', color: '#010101', percentage: 92 },
      { name: 'WebRTC', level: 'Advanced', projects: 'StartupForge', description: '1-on-1 HD technical video interviews, peer connections', icon: '📹', color: '#339933', percentage: 80 },
      { name: 'Leaflet GIS Maps', level: 'Expert', projects: 'ShopX, FoodFlow', description: 'Real-time GPS rider tracking, route estimation', icon: '🗺️', color: '#10B981', percentage: 90 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    skills: [
      { name: 'AWS', level: 'Intermediate', projects: '2+ projects', description: 'EC2, S3, CloudFront, IAM basics', icon: '☁️', color: '#FF9900', percentage: 60 },
      { name: 'AWS S3', level: 'Intermediate', projects: '1+ project', description: 'Object storage, pre-signed URLs, CDN', icon: '🗄️', color: '#FF9900', percentage: 65 },
      { name: 'Cloudinary', level: 'Advanced', projects: '4+ projects', description: 'Image optimization, transformations, CDN', icon: '🖼️', color: '#3448C5', percentage: 85 },
      { name: 'Firebase Storage', level: 'Expert', projects: '4+ projects', description: 'File uploads, security rules, CDN delivery', icon: '🔥', color: '#FFCA28', percentage: 88 },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment',
    skills: [
      { name: 'Vercel', level: 'Expert', projects: 'All frontend', description: 'Edge functions, previews, analytics, domains', icon: '▲', color: '#000000', percentage: 95 },
      { name: 'Netlify', level: 'Advanced', projects: '3+ projects', description: 'CI/CD, serverless functions, forms', icon: '🌐', color: '#00C7B7', percentage: 85 },
      { name: 'Render', level: 'Advanced', projects: '4+ projects', description: 'Web services, PostgreSQL, auto-deploy', icon: '🚀', color: '#46E3B7', percentage: 82 },
      { name: 'Railway', level: 'Intermediate', projects: '2+ projects', description: 'Full-stack deployments, databases, volumes', icon: '🚂', color: '#B03060', percentage: 70 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    skills: [
      { name: 'Docker', level: 'Intermediate', projects: '2+ projects', description: 'Containerization, docker-compose, Dockerfile', icon: '🐳', color: '#2496ED', percentage: 65 },
      { name: 'GitHub Actions', level: 'Advanced', projects: '3+ projects', description: 'CI/CD pipelines, automated testing, deployment', icon: 'GH', color: '#2088FF', percentage: 78 },
      { name: 'CI/CD', level: 'Advanced', projects: '3+ projects', description: 'Automated pipelines, staging, rollback strategies', icon: '🔄', color: '#10B981', percentage: 78 },
    ],
  },
  {
    id: 'testing',
    label: 'Testing',
    skills: [
      { name: 'Jest', level: 'Advanced', projects: '4+ projects', description: 'Unit testing, mocking, coverage, snapshots', icon: '🃏', color: '#C21325', percentage: 80 },
      { name: 'Vitest', level: 'Intermediate', projects: '2+ projects', description: 'Vite-native testing, fast HMR tests', icon: '⚡', color: '#6E9F18', percentage: 70 },
      { name: 'RTL', level: 'Advanced', projects: '3+ projects', description: 'Component testing, user-event simulation', icon: '🧪', color: '#E33332', percentage: 78 },
      { name: 'Postman', level: 'Expert', projects: 'All API projects', description: 'API testing, collections, environments, automation', icon: '📮', color: '#FF6C37', percentage: 92 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', level: 'Expert', projects: 'All projects', description: 'Branching, rebasing, merge strategies, hooks', icon: '🔀', color: '#F05032', percentage: 95 },
      { name: 'GitHub', level: 'Expert', projects: 'All projects', description: 'PRs, Issues, Actions, Projects, Pages', icon: '🐙', color: '#ffffff', percentage: 95 },
      { name: 'VS Code', level: 'Expert', projects: 'All projects', description: 'Extensions, debugging, snippets, keybindings', icon: '💙', color: '#007ACC', percentage: 98 },
      { name: 'npm/pnpm', level: 'Expert', projects: 'All projects', description: 'Package management, scripts, workspaces', icon: '📦', color: '#CB3837', percentage: 95 },
      { name: 'ESLint', level: 'Advanced', projects: 'All projects', description: 'Custom rules, Prettier integration, pre-commit', icon: '🔍', color: '#4B32C3', percentage: 85 },
      { name: 'Prettier', level: 'Advanced', projects: 'All projects', description: 'Code formatting, editor integration', icon: '✨', color: '#F7B93E', percentage: 88 },
    ],
  },
  {
    id: 'uiux',
    label: 'UI/UX',
    skills: [
      { name: 'Figma', level: 'Advanced', projects: 'All projects', description: 'Wireframing, prototyping, design systems', icon: '🎨', color: '#F24E1E', percentage: 80 },
      { name: 'Responsive Design', level: 'Expert', projects: 'All projects', description: 'Mobile-first, breakpoints, fluid layouts', icon: '📱', color: '#06B6D4', percentage: 95 },
      { name: 'Accessibility', level: 'Advanced', projects: 'All projects', description: 'WCAG 2.1 AA, ARIA, screen readers', icon: '♿', color: '#10B981', percentage: 82 },
    ],
  },
  {
    id: 'performance',
    label: 'Performance',
    skills: [
      { name: 'SEO', level: 'Advanced', projects: 'All projects', description: 'Meta tags, structured data, sitemaps, Core Web Vitals', icon: '🔍', color: '#4285F4', percentage: 85 },
      { name: 'Lighthouse', level: 'Expert', projects: 'All projects', description: 'Auditing, performance budgets, optimization', icon: '💡', color: '#FF6C37', percentage: 90 },
      { name: 'Caching', level: 'Advanced', projects: '3+ projects', description: 'HTTP caching, Redis, memoization, React Query', icon: '⚡', color: '#7C3AED', percentage: 80 },
      { name: 'Core Web Vitals', level: 'Advanced', projects: 'All projects', description: 'LCP, FID, CLS optimization strategies', icon: '📊', color: '#10B981', percentage: 82 },
    ],
  },
];
