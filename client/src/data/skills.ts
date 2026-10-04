// ============================
// AUTHENTIC SKILLS & TECH STACK (Derived from All 10 Projects)
// ============================

export interface Skill {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'all',
    label: 'All Skills',
    skills: [
      { name: 'React.js', description: 'Components, Custom Hooks, State & Modern Virtual DOM', icon: '⚛️', color: '#61DAFB' },
      { name: 'Next.js', description: 'App Router, SSR, SSG, Server Actions & Dynamic Routes', icon: '▲', color: '#ffffff' },
      { name: 'TypeScript', description: 'End-to-End Type Safety, Generics & Strict Interfaces', icon: 'TS', color: '#3178C6' },
      { name: 'JavaScript (ES6+)', description: 'Async/Await, Closures, Event Loop & Web APIs', icon: 'JS', color: '#F7DF1E' },
      { name: 'Tailwind CSS', description: 'Modern Utility Styling, Responsive Design & Dark Mode', icon: '🌊', color: '#06B6D4' },
      { name: 'TanStack Query', description: 'Server State, Optimistic Updates, Cache Invalidation', icon: 'TQ', color: '#FF4154' },
      { name: 'Framer Motion', description: 'Fluid Page Transitions, Scroll Animations & Gestures', icon: '✨', color: '#FF0055' },
      { name: 'Node.js', description: 'Asynchronous Event Loop, RESTful Endpoints & File I/O', icon: '🟢', color: '#339933' },
      { name: 'Express.js', description: 'Robust Routing, Error Middleware, CORS & Request Validation', icon: '🚂', color: '#ffffff' },
      { name: 'MongoDB & Mongoose', description: 'Document Modeling, Aggregation Pipelines & Atlas Cluster', icon: '🍃', color: '#47A248' },
      { name: 'Upstash Redis', description: 'Sub-50ms In-Memory Caching & Distributed Rate Limiting', icon: '⚡', color: '#FF4438' },
      { name: 'Socket.IO', description: 'Bi-directional Real-Time Events & Telemetry Streaming', icon: '⚡', color: '#010101' },
      { name: 'WebRTC', description: 'Peer-to-Peer 1-on-1 Video & Audio Telephony Channels', icon: '📹', color: '#339933' },
      { name: 'Google Gemini AI', description: 'Generative AI Pipelines, Smart Search & Automated Scoring', icon: '💎', color: '#4285F4' },
      { name: 'JWT & OAuth Auth', description: 'Secure Token Verification, Refresh Tokens & Better Auth', icon: '🔒', color: '#00B4D8' },
      { name: 'Stripe & SSLCommerz', description: 'Automated Payment Webhooks & Multi-Currency Checkout', icon: '💳', color: '#635BFF' },
      { name: 'Leaflet GIS Maps', description: 'Real-Time GPS Telemetry, Dynamic Markers & Route ETA', icon: '🗺️', color: '#10B981' },
      { name: 'Docker', description: 'Containerization, Multi-Stage Builds & Docker Compose', icon: '🐳', color: '#2496ED' },
      { name: 'Git & GitHub Actions', description: 'Automated CI/CD Workflows, Branch Protection & PRs', icon: '⚙️', color: '#2088FF' },
      { name: 'Postman & Swagger', description: 'API Contract Testing, Environment Workspaces & OpenApi', icon: '📮', color: '#FF6C37' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', description: 'Components, Custom Hooks, State & Modern Virtual DOM', icon: '⚛️', color: '#61DAFB' },
      { name: 'Next.js', description: 'App Router, SSR, SSG, Server Actions & Dynamic Routes', icon: '▲', color: '#ffffff' },
      { name: 'TypeScript', description: 'End-to-End Type Safety, Generics & Strict Interfaces', icon: 'TS', color: '#3178C6' },
      { name: 'JavaScript (ES6+)', description: 'Async/Await, Closures, Event Loop & Web APIs', icon: 'JS', color: '#F7DF1E' },
      { name: 'Tailwind CSS', description: 'Modern Utility Styling, Responsive Design & Dark Mode', icon: '🌊', color: '#06B6D4' },
      { name: 'TanStack Query', description: 'Server State, Optimistic Updates, Cache Invalidation', icon: 'TQ', color: '#FF4154' },
      { name: 'Framer Motion', description: 'Fluid Page Transitions, Scroll Animations & Gestures', icon: '✨', color: '#FF0055' },
      { name: 'HTML5 & CSS3', description: 'Semantic Layouts, CSS Grid, Flexbox & Responsive UI', icon: '🌐', color: '#E34F26' },
      { name: 'Vite & PWA', description: 'Blazing Fast HMR, Service Workers & Offline Readiness', icon: '⚡', color: '#646CFF' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    skills: [
      { name: 'Node.js', description: 'Asynchronous Event Loop, RESTful Endpoints & File I/O', icon: '🟢', color: '#339933' },
      { name: 'Express.js', description: 'Robust Routing, Error Middleware, CORS & Request Validation', icon: '🚂', color: '#ffffff' },
      { name: 'Socket.IO', description: 'Bi-directional Real-Time Events & Telemetry Streaming', icon: '⚡', color: '#010101' },
      { name: 'WebRTC', description: 'Peer-to-Peer 1-on-1 Video & Audio Telephony Channels', icon: '📹', color: '#339933' },
      { name: 'Upstash Redis', description: 'Sub-50ms In-Memory Caching & Distributed Rate Limiting', icon: '⚡', color: '#FF4438' },
      { name: 'Nodemailer SMTP', description: 'Automated Transactional Emails & OTP Verification', icon: '✉️', color: '#00B4D8' },
      { name: 'Multer & Cloudinary', description: 'Multipart File Processing, Transformations & CDN Uploads', icon: '🖼️', color: '#3448C5' },
    ],
  },
  {
    id: 'database',
    label: 'Database & Auth',
    skills: [
      { name: 'MongoDB & Mongoose', description: 'Document Modeling, Aggregation Pipelines & Atlas Cluster', icon: '🍃', color: '#47A248' },
      { name: 'JWT & Session Security', description: 'HTTP-Only Cookies, Refresh Tokens & Token Revocation', icon: '🔒', color: '#00B4D8' },
      { name: 'Better Auth & OAuth', description: 'Google OAuth 2.0, Secure Session Tokens & CSRF Guard', icon: '🔑', color: '#4285F4' },
      { name: 'RBAC Architecture', description: 'Multi-Role Portals (Admin, Seller, Rider, Customer)', icon: '🛡️', color: '#7C3AED' },
      { name: 'Firebase Auth', description: 'Social Providers, Custom Claims & Token Synchronization', icon: '🔥', color: '#FFCA28' },
    ],
  },
  {
    id: 'ai-integrations',
    label: 'AI & Services',
    skills: [
      { name: 'Google Gemini AI', description: 'Generative AI Pipelines, Smart Search & Automated Scoring', icon: '💎', color: '#4285F4' },
      { name: 'Stripe & SSLCommerz', description: 'Automated Payment Webhooks & Multi-Currency Checkout', icon: '💳', color: '#635BFF' },
      { name: 'Leaflet GIS Maps', description: 'Real-Time GPS Telemetry, Dynamic Markers & Route ETA', icon: '🗺️', color: '#10B981' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    skills: [
      { name: 'Docker', description: 'Containerization, Multi-Stage Builds & Docker Compose', icon: '🐳', color: '#2496ED' },
      { name: 'Git & GitHub', description: 'Git Flow, Feature Branches, PR Reviews & Releases', icon: '🐙', color: '#F05032' },
      { name: 'GitHub Actions', description: 'Automated CI/CD Testing & Production Deployment Pipelines', icon: '⚙️', color: '#2088FF' },
      { name: 'Vercel & Render', description: 'Serverless Edge Hosting, Automatic Builds & SSL', icon: '▲', color: '#ffffff' },
      { name: 'Postman & Swagger', description: 'API Contract Testing, Environment Workspaces & OpenApi', icon: '📮', color: '#FF6C37' },
    ],
  },
];
