export type Project = {
  id: 'probetect' | 'creditor' | 'uddnrs';
  name: string;
  title: string;
  description: string;
  technologies: string[];
  screenshot: { src: string; alt: string };
  github?: string;
  demo?: string;
};

type EducationEntry = {
  institution: string;
  program: string;
  details: string;
  graduation: { label: string; dateTime: string };
  highlights: string[];
};

export const portfolio = {
  name: 'Kurt David M. Monteclaro',
  nameLines: ['Kurt David M.', 'Monteclaro'],
  shortName: 'Kurt Monteclaro',
  headline: 'Aspiring Software Developer | IT Student',
  location: 'Cebu City, Philippines',
  email: 'kdmonteclaro@gmail.com',
  github: 'https://github.com/kurtmonteclaro',
  githubHandle: 'kurtmonteclaro',
  introduction:
    'I’m an IT student interested in full-stack development, building useful web applications, and exploring emerging technologies.',
  aboutPortrait: {
    src: '/images/about-portrait.webp',
    alt: 'Kurt David M. Monteclaro wearing a dark suit and tie',
    width: 840,
    height: 1050,
  },
  about: [
    'I’m pursuing a Bachelor of Science in Information Technology at Cebu Institute of Technology – University. Through coursework and team projects, I’ve explored how interfaces, APIs, and databases work together to solve practical problems.',
    'I enjoy breaking down problems and learning the tools that help me solve them. I’m seeking an IT internship or OJT where I can contribute to a development team and learn from its day-to-day work.',
  ],
  education: [
    {
      institution: 'Cebu Institute of Technology – University',
      program: 'Bachelor of Science in Information Technology',
      details: 'Programming, database management, networking, and systems development',
      graduation: { label: 'Expected graduation in June', dateTime: '2027-06' },
      highlights: ['GWA 4.6', '2nd Year – Top 4 Overall BSIT'],
    },
    {
      institution: 'University of Cebu – Main Campus',
      program: 'Senior High School',
      details: 'Science, Technology, Engineering, and Mathematics (STEM)',
      graduation: { label: 'Graduated', dateTime: '2022' },
      highlights: ['High Honors'],
    },
  ] satisfies EducationEntry[],
  resume: {
    href: '/kurt-david-monteclaro-resume.pdf',
    filename: 'Kurt-David-Monteclaro-Resume.pdf',
  },
};

export const navigation = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const skills = [
  { id: 'languages', title: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'Kotlin', 'SQL', 'PHP'] },
  { id: 'frontend', title: 'Frontend', items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { id: 'backend', title: 'Backend', items: ['Django', 'Spring Boot', 'Node.js', 'Express.js'] },
  { id: 'databases', title: 'Databases', items: ['PostgreSQL', 'MySQL', 'Supabase'] },
  { id: 'tools', title: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Render', 'ServiceNow'] },
] as const;

export const projects: Project[] = [
  {
    id: 'probetect',
    name: 'ProbeTect',
    title: 'AI-powered quiz generation web application',
    description: 'Turns uploaded PDFs into practice quizzes with AI. Includes document management, Gemini integration, and an interactive dashboard.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Supabase', 'Gemini API', 'Tailwind CSS'],
    screenshot: { src: '/images/projects/probetect.webp', alt: 'ProbeTect homepage showing a PDF-to-quiz preview' },
    github: 'https://github.com/primzcm/CSIT327-G7-ProbeTect',
    demo: 'https://csit327-g7-probetect.onrender.com/',
  },
  {
    id: 'creditor',
    name: 'CrediTOR',
    title: 'Secure transcript of records verification system',
    description: 'Manages academic transcripts and verifies them with QR codes. The system includes authentication and audit logs.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
    screenshot: { src: '/images/projects/creditor.webp', alt: 'CrediTOR transcript verification portal' },
    github: 'https://github.com/xaviersabornido/CrediTOR',
    demo: 'https://credi-tor.vercel.app/',
  },
  {
    id: 'uddnrs',
    name: 'UDDNRS',
    title: 'Unified Disaster Damage and Needs Reporting System',
    description: 'Tracks disaster damage and needs reports through verification workflows, with role-based permissions for platform users.',
    technologies: ['ServiceNow', 'React', 'JavaScript'],
    screenshot: { src: '/images/projects/uddnrs.webp', alt: 'UDDNRS homepage with disaster report submission and tracking options' },
    github: 'https://github.com/kurtmonteclaro/Unified-Disaster-Damage-and-Needs-Reporting-System',
  },
];
