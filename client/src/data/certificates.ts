// ============================
// CERTIFICATES DATA
// ============================

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  duration: string;
  skills: string[];
  verifyUrl: string;
  credentialId: string;
  color: string;
  featured: boolean;
}

export const certificates: Certificate[] = [
  {
    id: 'ph-complete-web-dev',
    title: 'Complete Web Development Course',
    issuer: 'Programming Hero',
    issuerLogo: '🦸',
    date: 'January 2026 – August 2026',
    duration: '8 Months Intensive Training',
    skills: ['MERN Stack', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    verifyUrl: '#',
    credentialId: 'PH-2026-MERN-SOJIB',
    color: '#7C3AED',
    featured: true,
  },
  {
    id: 'mongodb-associate',
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    issuerLogo: '🍃',
    date: '2026',
    duration: 'Self-paced',
    skills: ['MongoDB', 'Aggregation', 'Indexing', 'Atlas', 'Mongoose'],
    verifyUrl: '#',
    credentialId: 'MDB-2026-DEV',
    color: '#47A248',
    featured: false,
  },
  {
    id: 'react-developer',
    title: 'React Developer Certification',
    issuer: 'Meta (Coursera)',
    issuerLogo: '⚛️',
    date: '2026',
    duration: '4 months',
    skills: ['React.js', 'Hooks', 'Redux', 'Testing', 'Performance'],
    verifyUrl: '#',
    credentialId: 'META-REACT-2026',
    color: '#61DAFB',
    featured: false,
  },
  {
    id: 'git-github',
    title: 'Git & GitHub Mastery',
    issuer: 'GitHub Education',
    issuerLogo: '🐙',
    date: '2026',
    duration: '2 months',
    skills: ['Git', 'GitHub', 'CI/CD', 'GitHub Actions', 'Branching'],
    verifyUrl: '#',
    credentialId: 'GH-2026-GIT',
    color: '#F05032',
    featured: false,
  },
];
