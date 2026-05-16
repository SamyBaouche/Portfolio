export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export const socialLinks = {
  github: 'https://github.com/SamyBaouche',
  linkedin: 'https://www.linkedin.com/in/samy-baouche-611178246/',
  projects: '#projects'
};

export const projects = [
  {
    name: 'ZeroTrustCloud',
    description: 'Cloud Security Platform',
    image: '/zerotrustcloud.png',
    stack: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
    features: [
      'Engineered a full-stack Zero Trust cloud security platform simulating real-time access control decisions using contextual risk scoring',
      'Built a JWT-based authentication and authorization system with secure user context management',
      'Designed a risk-based decision engine supporting dynamic outcomes (ALLOW / CHALLENGE / DENY)',
      'Developed backend services for audit logging, security alerts, and policy enforcement',
      'Containerized the application with Docker and integrated a PostgreSQL database',
      'Architected the system for scalable AWS deployment (ECS/EC2, RDS, CloudWatch, Secrets Manager)'
    ],
    links: {
      github: 'https://github.com/SamyBaouche/zero-trust-cloud'
    }
  },
  {
    name: 'CourseFlow',
    description: 'Student dashboard web platform',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'SQL'],
    features: [
      'Course management',
      'Grade tracking',
      'Automatic average calculations',
      'Upcoming assessments dashboard'
    ],
    links: {
      live: 'https://example.com/courseflow-live-demo',
      github: 'https://github.com/hugobelebinda/CourseFlow'
    }
  },
  {
    name: 'EcoNova',
    description: 'Full-stack financial web application',
    stack: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    features: [
      'Secure authentication',
      'Budget tracking',
      'Stock portfolio views',
      'Financial simulations',
      'AI chatbot prototype'
    ],
    links: {
      live: 'https://example.com/econova-live-demo',
      github: 'https://github.com/blvck-M4/Econova'
    }
  },
  {
    name: 'Invasion Agricole',
    description: '2D arcade game',
    image: '/agricole.png',
    stack: ['Java', 'JavaFX'],
    features: [
      '60 FPS physics engine',
      '20+ entities',
      'Multi-level progression',
      'Real-time UI'
    ],
    links: {
      github: 'https://github.com/SamyBaouche/Invasion-Agricole'
    }
  }
];

export const languageFrameworkSkills = [
  'Java',
  'Go',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'HTML5',
  'CSS3',
  'JavaFX',
  'Node.js',
  'Express.js',
  'Django',
  'FastAPI',
  'SQL',
  'PostgreSQL',
  'MySQL',
  'Spring Boot'
];

export const toolTechnologySkills = [
  'AWS',
  'AWS Console',
  'Kubernetes',
  'Terraform',
  'Docker',
  'Windows',
  'macOS',
  'Windows Terminal',
  'Bash',
  'PowerShell',
  'Git',
  'Git/GitHub',
  'GitHub Actions',
  'JWT',
  'Context API',
  'Figma',
  'Canva',
  'VS Code',
  'IntelliJ',
  'Eclipse',
  'Postman',
  'MySQL Workbench',
  'DBeaver'
];

export const skills = [...languageFrameworkSkills, ...toolTechnologySkills];

export const skillCategories = [
  {
    title: 'Languages',
    items: ['Java', 'Go', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'PowerShell']
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Node.js', 'Express.js', 'Django', 'FastAPI', 'React', 'JavaFX']
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions']
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL']
  },
  {
    title: 'Frontend & Design',
    items: ['HTML5', 'CSS3', 'Figma', 'Canva']
  },
  {
    title: 'Tools & IDEs',
    items: ['Git', 'GitHub', 'Bash', 'Windows Terminal', 'VS Code', 'IntelliJ', 'Eclipse', 'Postman', 'DBeaver']
  }
];

export const experience = [
  {
    title: '1st Place @HACK 2026 Cybersecurity CTF',
    subtitle: 'Interac Beginner category',
    image: '/hackathon.png',
    link: 'https://www.linkedin.com/posts/samy-baouche-611178246_athack2026-cybersecurity-ctf-activity-7437992668074438657-1hRV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzknG0BnldHeznjVcXUbewhbcJeoFRtnDk'
  }
];

export const contact = {
  email: 'samy.baouche@gmail.com',
  github: 'https://github.com/SamyBaouche',
  linkedin: 'https://www.linkedin.com/in/samy-baouche-611178246/'
};
