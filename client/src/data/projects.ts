// ============================
// PROJECTS DATA — 10 Real Projects
// ============================

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  role: string;
  year: string;
  category: 'full-stack' | 'frontend' | 'backend';
  featured: boolean;
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  docsUrl?: string;
  color: string;
  accentColor: string;
  image: string;
}

export const projects: Project[] = [
  // ═══════════════════════════
  // FULLSTACK — 4 Flagship Projects
  // ═══════════════════════════
  {
    id: 'shopx-bd-enterprise',
    title: 'ShopX BD Enterprise',
    subtitle: 'Hyperlocal Multi-Vendor E-Commerce & DEX Logistics',
    problem: 'Traditional e-commerce platforms struggle with real-time delivery telemetry, multi-vendor isolation, and high database query latency during peak traffic.',
    solution: 'Architected a high-performance enterprise ecosystem featuring 4 isolated role portals (Customer, Seller, Super Admin with 2FA Email OTP, Delivery Hero Rider with KYC), Upstash Redis caching (-45% DB load, <50ms latency), and real-time GPS telemetry.',
    role: 'Full Stack Architect & Developer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Upstash Redis', 'Leaflet Maps', 'Nodemailer', 'Tailwind CSS', 'Vite'],
    features: [
      '4 isolated authentication gateways (Customer, Seller, Super Admin 2FA OTP, Delivery Hero Rider KYC)',
      'Real-time GPS rider tracking with dynamic ETA & automated Nodemailer SMTP status (99.8% delivery)',
      'Upstash Redis caching with in-memory TTL fallbacks (-45% DB query overhead, <50ms API latency)',
      'Instant multi-vendor shop onboarding, coupon engines, ledger reconciliation & multi-gateway payments (bKash, Nagad, Rocket, COD)',
    ],
    liveUrl: 'https://shopx-bd-enterprise-jpqg.vercel.app',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Shopx-BD-Enterprise',
    color: '#7C3AED',
    accentColor: '#06B6D4',
    image: '/images/shopx.png',
  },
  {
    id: 'foodflow',
    title: 'FoodFlow (Team Project)',
    subtitle: 'AI Multi-Vendor Food Delivery & Logistics Platform',
    problem: 'Multi-vendor food logistics face latency in order dispatching, complex permission management, and low cart conversion rates without smart recommendations.',
    solution: 'Engineered an AI-powered delivery platform with full-duplex Socket.IO & Leaflet GIS rider telemetry (-25% delivery latency), type-safe RBAC across 4 portals using Next.js 15 App Router, and Google Gemini AI recommendation pipeline (+30% cart conversion).',
    role: 'Full Stack & AI Engineer (Team Project)',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Socket.IO', 'Gemini AI', 'Stripe', 'Leaflet Maps', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Full-duplex Socket.IO & Leaflet GIS for live rider geolocation telemetry (-25% delivery latency)',
      'Type-safe RBAC across 4 dedicated user portals (Customer, Restaurant, Rider, Super Admin) with Next.js 15',
      'Google Gemini AI pipelines for personalized meal recommendations & semantic search (+30% conversion)',
      'Stripe payment workflows with automated coupon validations & client-side instant PDF invoice generation (jsPDF) (99.9% success)',
    ],
    liveUrl: 'https://fooddeliveryplatform.vercel.app',
    githubUrl: 'https://github.com/khalid66527/food_flow-client',
    docsUrl: 'https://github.com/khalid66527/food_flow-server',
    color: '#10B981',
    accentColor: '#7C3AED',
    image: '/images/foodflow.png',
  },
  {
    id: 'skillforge',
    title: 'SkillForge',
    subtitle: 'AI Learning, Code Sandbox & Career Recruitment Platform',
    problem: 'Developers and students lack an integrated environment combining interactive learning, live in-browser code execution, ATS resume scoring, and recruiter hiring boards.',
    solution: 'Built a unified AI career platform with an in-browser live JavaScript execution engine, ATS resume keyword scoring, Google OAuth (Better Auth) with RBAC, and containerized Docker microservices with GitHub Actions CI/CD.',
    role: 'Lead Full Stack Developer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Express.js', 'MongoDB Atlas', 'Better Auth', 'Docker', 'GitHub Actions', 'React Query', 'Tailwind CSS v4'],
    features: [
      'In-browser live JavaScript execution engine & real-time ATS resume keyword scoring with instant PDF export',
      'Secure Google OAuth (Better Auth) with RBAC protecting student workspaces, recruiter candidate boards, and owner controls',
      'Containerized backend microservices using Docker & automated GitHub Actions CI/CD (-60% deployment cycle)',
      'High-throughput REST APIs optimized with React Query & SSR (achieving 98+ Google Lighthouse score)',
    ],
    liveUrl: 'https://job-student-task.vercel.app',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/JOB-STUDENT-TASK',
    color: '#3B82F6',
    accentColor: '#8B5CF6',
    image: '/images/skillforge.png',
  },
  {
    id: 'startupforge',
    title: 'StartupForge',
    subtitle: 'AI Startup Team Ecosystem & ATS Platform',
    problem: 'Founders and tech co-builders struggle to match, conduct technical interviews, manage recruitment pipelines, and secure escrow contracts in one place.',
    solution: 'Built an enterprise startup co-builder ecosystem featuring Socket.IO live chat & WebRTC 1-on-1 HD technical video interviews, Gemini AI pitch deck generator/mock interviewer, and Kanban ATS recruitment board.',
    role: 'Full Stack & WebRTC Engineer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'Google Gemini AI', 'Stripe', 'PWA', 'Tailwind CSS'],
    features: [
      'Real-time Socket.IO live chat & WebRTC for 1-on-1 HD technical video interviews',
      'Google Gemini AI pipelines for 1-click pitch deck PDF export, ATS scoring, and mock interviews',
      'Interactive Kanban ATS recruitment pipeline (Applied, Screening, Accepted) with drag-and-drop',
      'Google OAuth/JWT role-based access, Stripe subscriptions, and Web3 escrow hub',
    ],
    liveUrl: 'https://startupforge-ruby.vercel.app/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/startupforge',
    color: '#06B6D4',
    accentColor: '#EC4899',
    image: '/images/startupforge.png',
  },

  // ═══════════════════════════
  // FRONTEND — 3 Projects
  // ═══════════════════════════
  {
    id: 'keen-keeper',
    title: 'Keen Keeper',
    subtitle: 'Modern Web Application',
    problem: 'Users need a modern, visually appealing platform to manage and organize their content with a great user experience.',
    solution: 'Built a clean, responsive frontend application with smooth animations, modern design patterns, and intuitive UX.',
    role: 'Frontend Developer',
    year: '2026',
    category: 'frontend',
    featured: false,
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    features: [
      'Modern, responsive UI design',
      'Smooth page transitions & animations',
      'Dynamic content filtering',
      'Mobile-first responsive layout',
      'Dark mode support',
      'Fast SPA with React Router',
    ],
    liveUrl: 'https://b13-a7-keen-keeper-liard.vercel.app/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/keenkeper-website',
    color: '#8B5CF6',
    accentColor: '#06B6D4',
    image: '/images/keenkeeper.png',
  },
  {
    id: 'github-issue-tracker',
    title: 'GitHub Issue Tracker',
    subtitle: 'Issue Management Dashboard',
    problem: 'Developers need a visual interface to track, filter, and manage GitHub issues with better UX than the default GitHub UI.',
    solution: 'Built a sleek issue tracking dashboard with advanced filtering, label management, and visual priority indicators.',
    role: 'Frontend Developer',
    year: '2026',
    category: 'frontend',
    featured: false,
    techStack: ['React.js', 'Tailwind CSS', 'GitHub API', 'Axios'],
    features: [
      'GitHub API integration for live data',
      'Advanced issue filtering & search',
      'Label-based categorization',
      'Visual priority indicators',
      'Responsive grid layout',
      'Real-time data fetching',
    ],
    liveUrl: 'https://fabulous-profiterole-d6e817.netlify.app/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/github-issue-tracker',
    color: '#EC4899',
    accentColor: '#7C3AED',
    image: '/images/issuetracker.png',
  },
  {
    id: 'digitools',
    title: 'DigiTools Platform',
    subtitle: 'Digital Tools Collection',
    problem: 'Users need a centralized platform offering various digital tools with a beautiful, easy-to-use interface.',
    solution: 'Built a comprehensive digital tools platform with multiple utility tools, clean UI design, and responsive experience.',
    role: 'Frontend Developer',
    year: '2026',
    category: 'frontend',
    featured: false,
    techStack: ['React.js', 'Tailwind CSS', 'React Router', 'JavaScript'],
    features: [
      'Multiple digital tools in one platform',
      'Clean, intuitive user interface',
      'Tool categorization & search',
      'Responsive across all devices',
      'Smooth navigation with React Router',
      'Modern component architecture',
    ],
    liveUrl: 'https://friendly-fenglisu-79624c.netlify.app/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/digitools-platfrom-1',
    color: '#F59E0B',
    accentColor: '#06B6D4',
    image: '/images/digitools.png',
  },

  // ═══════════════════════════
  // BACKEND — 3 Projects
  // ═══════════════════════════
  {
    id: 'pet-adoption-server',
    title: 'Pet Adoption Server',
    subtitle: 'Express + MongoDB + Google OAuth API',
    problem: 'Applications need robust backend APIs with authentication, file handling, and proper data management.',
    solution: 'Built a production-ready REST API with Express, MongoDB, Google OAuth, and image upload handling for the Pet Adoption platform.',
    role: 'Backend Developer',
    year: '2026',
    category: 'backend',
    featured: false,
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Google OAuth', 'JWT', 'Multer'],
    features: [
      'RESTful API with full CRUD operations',
      'Google OAuth 2.0 authentication',
      'Image upload & storage management',
      'JWT token-based session management',
      'Input validation & error handling',
      'CORS & security middleware',
    ],
    liveUrl: 'https://pet-adoption-server-6v5r.onrender.com',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Pet-Adoption-Server',
    docsUrl: 'https://pet-adoption-server-6v5r.onrender.com',
    color: '#10B981',
    accentColor: '#06B6D4',
    image: '/images/petadoption.png',
  },
  {
    id: 'job-finder-server',
    title: 'Job Finder Server',
    subtitle: 'Express + MongoDB + Stripe API',
    problem: 'Job platforms need secure, scalable backends with payment integration and advanced search capabilities.',
    solution: 'Built a comprehensive job board backend with Stripe payment processing, JWT auth, and advanced job search filtering.',
    role: 'Backend Developer',
    year: '2026',
    category: 'backend',
    featured: false,
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Stripe', 'Bcrypt'],
    features: [
      'Full job listing CRUD API',
      'Stripe payment integration',
      'JWT authentication & authorization',
      'Advanced search & filtering queries',
      'Application tracking system',
      'Rate limiting & security middleware',
    ],
    liveUrl: 'https://job-finder-client.vercel.app',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Job-Finder',
    color: '#06B6D4',
    accentColor: '#7C3AED',
    image: '/images/skillforge.png',
  },
  {
    id: 'job-tracker-backend',
    title: 'Job Tracker Backend',
    subtitle: 'Express + Mongoose + Cloudinary',
    problem: 'Job seekers need a backend to track applications, upload documents, and manage their job search workflow.',
    solution: 'Built a monorepo backend with Express, Mongoose, and Cloudinary integration for job application tracking with document uploads.',
    role: 'Backend Developer',
    year: '2026',
    category: 'backend',
    featured: false,
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Cloudinary', 'JWT', 'Multer'],
    features: [
      'Job application CRUD with status tracking',
      'Cloudinary image/document upload',
      'User authentication & profile management',
      'Application status workflow',
      'Statistics & analytics endpoints',
      'Monorepo architecture',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/job-tracker',
    color: '#7C3AED',
    accentColor: '#EC4899',
    image: '/images/typemarket.png',
  },
];
