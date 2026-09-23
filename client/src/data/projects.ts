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
  // FULLSTACK — 4 Projects
  // ═══════════════════════════
  {
    id: 'skillforge',
    title: 'SkillForge',
    subtitle: 'Learning & Job Platform',
    problem: 'Students, recruiters, and admins lack a unified platform combining courses, quizzes, certificates, and a job board under one roof.',
    solution: 'Built the largest full-stack project with courses, quizzes, certificates, job boards, and 3 roles (Student/Recruiter/Admin) — a complete learning ecosystem.',
    role: 'Full Stack Developer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT', 'Stripe'],
    features: [
      'Course enrollment with quizzes & certificates',
      '3-role system: Student, Recruiter, Admin',
      'Full job board with applications tracking',
      'Admin dashboard for content management',
      'Real-time progress tracking',
      'Stripe payment integration',
    ],
    liveUrl: 'https://job-student-task.vercel.app/',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/JOB-STUDENT-TASK',
    color: '#7C3AED',
    accentColor: '#06B6D4',
    image: '/images/skillforge.png',
  },
  {
    id: 'investprop-ai',
    title: 'InvestProp AI',
    subtitle: 'AI Property Investment Platform',
    problem: 'Real estate investors need AI-driven insights to make smarter investment decisions, but existing platforms lack AI-powered analysis.',
    solution: 'Built an AI-driven property platform with Claude AI investment scoring, chat assistant, and personalized property recommendations.',
    role: 'Full Stack Developer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT', 'Claude AI'],
    features: [
      'AI-powered investment scoring system',
      'Claude AI chat assistant for property advice',
      'Personalized property recommendations',
      'Real-time market analysis dashboard',
      'Role-based authentication (Admin, Investor, Agent)',
      'Interactive investment calculator',
    ],
    liveUrl: 'https://investprop-ai.vercel.app',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Investprop-Ai',
    color: '#06B6D4',
    accentColor: '#7C3AED',
    image: '/images/investprop.png',
  },
  {
    id: 'typemarket',
    title: 'TypeMarket',
    subtitle: 'Strict TypeScript Marketplace',
    problem: 'Online marketplaces need clean, type-safe codebases with admin dashboards and review systems for quality assurance.',
    solution: 'Built a strict TypeScript marketplace with full admin dashboard, product reviews, user management, and clean architecture — proving clean code proficiency.',
    role: 'Full Stack Developer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    features: [
      'Strict TypeScript throughout codebase',
      'Admin dashboard with analytics',
      'Product reviews & rating system',
      'User authentication & authorization',
      'Shopping cart with checkout flow',
      'Clean, maintainable architecture',
    ],
    liveUrl: 'https://type-script-project-nine.vercel.app',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/TypeScript-Project',
    color: '#3178C6',
    accentColor: '#06B6D4',
    image: '/images/typemarket.png',
  },
  {
    id: 'pet-adoption',
    title: 'Pet Adoption',
    subtitle: 'Community Adoption Platform',
    problem: 'Pet owners and adopters lack a centralized platform to connect, list pets, and manage adoption workflows efficiently.',
    solution: 'Built a complete real-world app with Google OAuth, image upload, adoption workflow, and community features — end-to-end pet adoption system.',
    role: 'Full Stack Developer',
    year: '2026',
    category: 'full-stack',
    featured: true,
    techStack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Google OAuth'],
    features: [
      'Google OAuth authentication',
      'Image upload via Firebase Storage',
      'Adoption request workflow management',
      'Admin dashboard for request approval',
      'User profiles with adoption history',
      'Real-time status updates',
    ],
    liveUrl: 'https://pet-adoption-client-rho-jet.vercel.app',
    githubUrl: 'https://github.com/sojibahmedshorif25-ai/Pet-Adoption-Client',
    color: '#10B981',
    accentColor: '#7C3AED',
    image: '/images/petadoption.png',
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
