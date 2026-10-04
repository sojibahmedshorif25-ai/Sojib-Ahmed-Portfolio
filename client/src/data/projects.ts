// ============================
// PROJECTS DATA — 10 Flagship & Production Projects
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
  // ==========================================
  // FULL-STACK (4 Flagship Projects)
  // ==========================================
  {
    id: 'shopx-bd-enterprise',
    title: 'ShopX BD Enterprise',
    subtitle: 'Hyperlocal Multi-Vendor E-Commerce & DEX Logistics Platform',
    problem: 'Traditional e-commerce platforms struggle with real-time delivery telemetry, multi-vendor isolation, and high database query latency during peak traffic.',
    solution: 'Built an enterprise-grade multi-vendor eCommerce ecosystem featuring 4 isolated role portals, automated DEX logistics, Upstash Redis caching (<50ms latency), and real-time GPS telemetry.',
    role: 'Full-Stack Developer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Upstash Redis', 'Tailwind CSS', 'Leaflet Maps', 'Nodemailer', 'Vite'],
    features: [
      'Multi-Role Security: Architected 4 isolated authentication gateways for Customers, Sellers, Super Admin (2-Factor Email OTP with zero autofill leaks), and Delivery Hero Riders with admin-controlled KYC approval.',
      'Live GPS Telemetry: Implemented real-time interactive GPS rider tracking with dynamic ETA route estimation, triggering automated transactional order status updates via Nodemailer SMTP with 99.8% inbox delivery.',
      'High Throughput & Caching: Integrated Upstash Redis caching with in-memory TTL fallbacks, reducing database query overhead by 45% and delivering sub-50ms API response latency across high-traffic catalog endpoints.',
      'Commerce & SaaS Engine: Enabled instant multi-vendor shop onboarding, catalog management, coupon engines, automated financial ledger reconciliation, and multi-gateway mobile payments (bKash, Nagad, Rocket, COD).',
    ],
    liveUrl: 'https://shopx-bd-enterprise.vercel.app/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Shopx-BD-Enterprise',
    color: '#7C3AED',
    accentColor: '#06B6D4',
    image: '/images/shopx.png',
  },
  {
    id: 'foodflow',
    title: 'FoodFlow (Team Project)',
    subtitle: 'AI-Powered Multi-Vendor Food Delivery & Logistics Platform',
    problem: 'Multi-vendor food logistics face latency in order dispatching, complex permission management, and low cart conversion rates without smart recommendations.',
    solution: 'Built a high-concurrency multi-role food delivery platform connecting customers, restaurants, riders, and administrators with real-time tracking and generative AI capabilities.',
    role: 'Full-Stack Developer — Team Project',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Socket.IO', 'Google Gemini AI', 'Stripe', 'Leaflet Maps', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Real-Time GIS Logistics: Engineered full-duplex Socket.IO communication and Leaflet GIS mapping for live rider geolocation telemetry, reducing average order delivery latency by 25%.',
      'Multi-Role Ecosystem: Architected type-safe Role-Based Access Control (RBAC) across 4 dedicated user portals (Customer, Restaurant Partner, Delivery Rider, Super Admin) using Next.js App Router and TypeScript.',
      'AI Recommendation Pipeline: Integrated Google Gemini AI pipelines delivering dynamic personalized meal recommendations and intelligent semantic search, increasing user cart conversion by 30%.',
      'Payment & Invoice Engine: Built secure Stripe payment processing workflows with automated coupon validations and client-side instant PDF invoice generation (jsPDF) with 99.9% transaction success rate.',
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
    subtitle: 'Full-Stack AI Learning, Code Sandbox & Career Recruitment Platform',
    problem: 'Developers and students lack an integrated environment combining interactive learning, live in-browser code execution, ATS resume scoring, and recruiter hiring boards.',
    solution: 'Built an all-in-one career acceleration platform connecting students with courses, in-browser live code execution, and recruiter matching.',
    role: 'Full-Stack Developer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Express.js', 'MongoDB Atlas', 'Better Auth', 'Docker', 'GitHub Actions', 'Tailwind CSS v4', 'React Query'],
    features: [
      'Live Code Sandbox: Built an in-browser live JavaScript execution engine and real-time ATS resume keyword scoring pipeline with instant PDF export and verified certificate generation.',
      'Enterprise RBAC Auth: Implemented secure Google OAuth (Better Auth) with role-based access control protecting student workspaces, recruiter candidate boards, and owner-only administrative controls.',
      'DevOps & Containerization: Containerized backend microservices using Docker and built automated GitHub Actions CI/CD pipelines, cutting deployment cycle times by 60%.',
      'State & Speed Optimization: Designed high-throughput REST APIs optimized with React Query and server-side rendering (SSR), achieving a 98+ Google Lighthouse performance score.',
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
    subtitle: 'AI-Powered Startup Team Ecosystem & ATS Platform',
    problem: 'Founders and tech co-builders struggle to match, conduct technical interviews, manage recruitment pipelines, and secure escrow contracts in one place.',
    solution: 'Built an enterprise ecosystem connecting founders with co-builders featuring AI automation, WebRTC video interviews, and ATS recruitment.',
    role: 'Full-Stack Developer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Socket.IO', 'WebRTC', 'Google Gemini AI', 'Stripe', 'PWA', 'Tailwind CSS'],
    features: [
      'Real-Time Collaboration: Integrated Socket.IO live chat and WebRTC for 1-on-1 HD technical video interviews.',
      'Generative AI Engine: Built Gemini AI pipelines for 1-click pitch deck PDF export, ATS scoring, and mock interviews.',
      'ATS Recruitment Pipeline: Developed an interactive Kanban board (Applied, Screening, Accepted) with drag-and-drop.',
      'Secure Auth & Web3 Hub: Implemented Google OAuth/JWT role-based access, Stripe subscriptions, and Web3 escrow.',
    ],
    liveUrl: 'https://startupforge-ruby.vercel.app/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/startupforge',
    color: '#06B6D4',
    accentColor: '#EC4899',
    image: '/images/startupforge.png',
  },

  // ==========================================
  // FRONTEND (3 Best Frontend Projects)
  // ==========================================
  {
    id: 'pawadopt-platform',
    title: 'PawAdopt Platform',
    subtitle: 'Community Pet Adoption & Rescue Ecosystem',
    problem: 'Animal shelters and pet lovers need an intuitive, responsive interface to manage adoption applications, pet profiles, and donation campaigns.',
    solution: 'Engineered a modern, accessible frontend with instant multi-criteria filtering, smooth application modals, donation progress widgets, and Firebase Authentication.',
    role: 'Frontend Developer',
    year: '2026',
    category: 'frontend',
    featured: false,
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase Auth', 'Axios'],
    features: [
      'Instant pet filtering by breed, age, size, and gender with real-time UI transitions',
      'Interactive adoption application modal with multi-step validation and applicant tracking',
      'Crowdfunding donation campaign tracker with dynamic progress visualization',
      'Fully responsive, mobile-first design with accessible contrast and glassmorphism cards',
    ],
    liveUrl: 'https://pet-adoption-platform.vercel.app',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Pet-Adoption-Client',
    color: '#10B981',
    accentColor: '#7C3AED',
    image: '/images/petadoption.png',
  },
  {
    id: 'jobfinder-pro',
    title: 'JobFinder Pro',
    subtitle: 'Modern Career Search & Application Platform',
    problem: 'Job seekers struggle with cluttered interfaces, lack of salary transparent filters, and difficulty tracking multiple ongoing job applications.',
    solution: 'Created a sleek, high-conversion career search frontend featuring salary range sliders, live application status tracking, and company profile showcases.',
    role: 'Frontend Developer',
    year: '2026',
    category: 'frontend',
    featured: false,
    techStack: ['React.js', 'Tailwind CSS', 'React Router', 'Lucide React', 'Context API'],
    features: [
      'Dynamic multi-facet job search (Remote/On-site, salary slider, experience level, industry)',
      'Visual application status tracker (Applied, Interviewing, Offer) with saved jobs bookmarks',
      'Featured employer showcases with company profile views and open positions list',
      'High-performance client routing with sub-second page transitions',
    ],
    liveUrl: 'https://job-finder-client.vercel.app',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Job-Finder-Client',
    color: '#06B6D4',
    accentColor: '#3B82F6',
    image: '/images/jobfinder.png',
  },
  {
    id: 'devtrack-issues',
    title: 'DevTrack Kanban Suite',
    subtitle: 'GitHub Issue & Sprint Management Dashboard',
    problem: 'Engineering teams need an agile, visual Kanban workflow connected directly to their GitHub issues and repository commit logs.',
    solution: 'Built a high-performance developer dashboard that integrates with GitHub REST API v3 to provide drag-and-drop Kanban columns, priority tagging, and commit graphs.',
    role: 'Frontend Developer',
    year: '2026',
    category: 'frontend',
    featured: false,
    techStack: ['React.js', 'GitHub API v3', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
    features: [
      '4-stage Kanban issue board (Todo, In Progress, Done, Closed) with live priority tags',
      'Visual 14-day commit activity timeline graph with code coverage health metrics',
      'Advanced issue filtering by sprint, milestone, author, and severity label',
      'Optimistic UI state updates for immediate feedback during agile sprint planning',
    ],
    liveUrl: 'https://github-issue-tracker-delta.vercel.app',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/my-project',
    color: '#8B5CF6',
    accentColor: '#10B981',
    image: '/images/issuetracker.png',
  },

  // ==========================================
  // BACKEND (3 Best REST API & Microservice Projects)
  // ==========================================
  {
    id: 'petstore-api',
    title: 'PetStore REST Engine',
    subtitle: 'Express + MongoDB + OAuth API Microservice',
    problem: 'Modern web applications require secure, scalable, and well-documented REST APIs with JWT authentication and file upload handling.',
    solution: 'Architected a production-ready REST API microservice with Express, MongoDB Atlas, Google OAuth 2.0, Cloudinary image streaming, and interactive Swagger docs.',
    role: 'Backend Developer',
    year: '2026',
    category: 'backend',
    featured: false,
    techStack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'JWT', 'Cloudinary', 'Swagger'],
    features: [
      'Robust CRUD endpoints for pet listings, user adoption requests, and shelter management',
      'Dual authentication system: JWT bearer tokens with refresh rotation and Google OAuth 2.0',
      'Cloudinary media pipeline with automated compression and secure pre-signed uploads',
      'Complete Swagger OpenAPI 3.0 documentation and automated request rate limiting',
    ],
    liveUrl: 'https://pet-adoption-server-6v5r.onrender.com/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Pet-Adoption-Server',
    docsUrl: 'https://pet-adoption-server-6v5r.onrender.com/',
    color: '#10B981',
    accentColor: '#06B6D4',
    image: '/images/petadoption_server.png',
  },
  {
    id: 'jobportal-api',
    title: 'JobPortal API Gateway',
    subtitle: 'Express + MongoDB + Stripe Payment Gateway',
    problem: 'Recruitment and job board platforms require secure payment gateways, applicant resume parsing endpoints, and indexed search queries.',
    solution: 'Developed a high-throughput backend API featuring Stripe checkout integration, MongoDB compound indexing, and automated email transactional alerts.',
    role: 'Backend Developer',
    year: '2026',
    category: 'backend',
    featured: false,
    techStack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'Stripe API', 'Nodemailer'],
    features: [
      'Stripe webhook integration for recruiter job posting subscriptions and invoices',
      'MongoDB compound text indexing enabling sub-30ms full-text job search filtering',
      'Nodemailer SMTP integration for automated applicant status change notifications',
      'Strict input sanitization, CORS configuration, and bcrypt password hashing',
    ],
    liveUrl: 'https://job-finder-server.onrender.com/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Job-Portal',
    docsUrl: 'https://job-finder-server.onrender.com/',
    color: '#3B82F6',
    accentColor: '#7C3AED',
    image: '/images/petadoption_server.png',
  },
  {
    id: 'cloudinary-microservice',
    title: 'Media Asset Cloud Engine',
    subtitle: 'Express + Mongoose + Cloudinary Microservice',
    problem: 'Applications managing large user-uploaded media face storage bottleneck and lack automated image transformation and thumbnail generation.',
    solution: 'Engineered a scalable media management microservice handling multipart form uploads, Cloudinary on-the-fly transformations, and secure access URLs.',
    role: 'Backend Developer',
    year: '2026',
    category: 'backend',
    featured: false,
    techStack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Cloudinary SDK', 'Multer', 'JWT'],
    features: [
      'Multer stream upload directly to Cloudinary with automatic format optimization (WebP/AVIF)',
      'Dynamic image transformations: face-crop, auto-scaling, and secure CDN delivery',
      'MongoDB Mongoose schema validation with soft-delete and automated garbage collection',
      'Centralized error handling middleware with Winston structured logging',
    ],
    liveUrl: 'https://job-task-server.onrender.com/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Job-Task',
    docsUrl: 'https://job-task-server.onrender.com/',
    color: '#8B5CF6',
    accentColor: '#EC4899',
    image: '/images/petadoption_server.png',
  },
];
