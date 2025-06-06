export const projects = [
  {
    id: 1,
    title: "NoBi",
    description: "An innovative educational platform revolutionizing how teachers manage and engage with students. This comprehensive SaaS solution streamlines homework management, personalizes learning experiences, and gamifies education through an intuitive interface.",
    tech: ["PHP", "Laravel", "React", "Inertia.js", "TypeScript", "PostgreSQL", "Stripe", "ShadCN"],
    features: [
      "Comprehensive class and student management system",
      "AI-powered content generation for level-appropriate learning materials",
      "Text-to-speech with multilingual translation support",
      "Gamification system with streaks, points, and leaderboards",
      "Interactive calendar for homework submission tracking",
      "Multi-tier subscription model with Stripe integration"
    ],
    period: "January 2025 - Present",
    highlight: true,
    role: "Sole Developer & Product Owner",
    url: "https://nobi.jp", 
    achievements: [
      "Designed and implemented the entire platform architecture from concept to deployment",
      "Integrated advanced AI capabilities for generating educational content",
      "Built a scalable subscription model with multiple pricing tiers",
      "Created an engaging gamification system that increased student participation by 60%",
      "Implemented real-time progress tracking and notification systems"
    ]
  },
  {
    id: 2,
    title: "Project Management System",
    description: "Integrated budget management system that visualizes project budgets in real-time and detects budget overrun risks by connecting with multiple task management APIs.",
    tech: ["Next.js", "React", "TypeScript", "Laravel", "MySQL", "Stripe"],
    features: [
      "Real-time budget tracking and alerts",
      "Subscription plans (Basic, Standard, Premium)",
      "Stripe payment integration",
      "Modular API integration system",
      "Intuitive dashboard interface"
    ],
    period: "June 2024 - Present"
  },
  {
    id: 3,
    title: "Publishing Media CMS",
    description: "Strategic system redevelopment project integrating existing internal systems with official website, focusing on content management efficiency and UX improvement.",
    tech: ["Laravel", "Vue.js", "PHP", "MySQL", "AWS", "Docker"],
    features: [
      "Modern framework migration",
      "Image optimization",
      "Lazy loading implementation",
      "Dynamic content management",
      "Server resource optimization"
    ],
    period: "March 2024 - Present"
  },
  {
    id: 4,
    title: "HR Training Platform",
    description: "Next-generation educational support system for new employees featuring AI-powered real-time learning support, group work analysis, and knowledge retention features.",
    tech: ["SvelteKit", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
    features: [
      "Real-time group work functionality",
      "AI summary and analysis",
      "Interactive flashcard system",
      "Learning progress visualization",
      "Responsive design"
    ],
    period: "October 2023 - March 2024"
  }
];

export const skills = {
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'Vue.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'ShadCN',
    'DaisyUI'
  ],
  backend: [
    'Laravel',
    'PHP',
    'Node.js',
    'GraphQL',
    'REST API'
  ],
  databases: [
    'MySQL',
    'PostgreSQL'
  ],
  cloud: [
    'AWS',
    'Vercel',
    'Laravel Cloud'
  ],
  tools: [
    'Docker',
    'Git',
    'GitHub',
    'Slack',
    'Jira'
  ],
  payment: [
    'Stripe',
    'Stripe Checkout',
    'Subscription Management'
  ]
};

export const experiences = [
  {
    id: '1',
    company: 'Feliceed Co., Ltd',
    position: 'Full Stack Developer',
    period: 'October 2023 - Present',
    type: 'Full-time',
    description: 'Leading development of modern web applications with focus on user experience and performance optimization.',
    achievements: [
      'Spearheaded multiple successful full-stack projects',
      'Implemented AI features and integrations',
      'Optimized application performance by up to 40%',
      'Led small development teams using agile methodologies'
    ],
    technologies: skills
  }
];

export const aboutMe = {
  name: "Daniel Fenster",
  title: "Full Stack Developer",
  location: "Japan",
  languages: ["English (Native)", "Japanese (JLPT N1)"],
  summary: "Full stack developer with 2 years of experience building efficient and scalable web applications. Specialized in Next.js, React, Laravel, and AWS. Passionate about user experience and performance optimization. Bilingual professional bringing global perspective to development projects.",
  certifications: [
    {
      name: "JLPT N1",
      date: "December 2021"
    },
    {
      name: "AWS Solutions Architect",
      status: "In Progress",
      expectedDate: "July 2025"
    }
  ]
};

export const socialLinks = {
  github: "https://github.com/danielFeliseed",
  linkedin: "https://www.linkedin.com/in/daniel-fenster-59089b23b",
  email: "dfbusinessjp@gmail.com"
};