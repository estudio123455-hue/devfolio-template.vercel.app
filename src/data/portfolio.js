/**
 * PORTFOLIO CONFIGURATION FILE
 * 
 * This is the ONLY file you need to edit to customize your portfolio.
 * All your personal data, projects, and theme settings are here.
 * 
 * Edit the values below to make this portfolio your own!
 */

// ============================================
// PURCHASE SETTINGS (for demo/sales page)
// ============================================
export const purchase = {
  // Payhip purchase URL for selling this template
  // Set to null to hide all purchase CTAs (when using as personal portfolio)
  payhipUrl: 'https://payhip.com/b/t1VUk',
  
  // Price to display in CTAs
  price: '$12',
  
  // Product name for CTAs
  productName: 'DevFolio',
};

// ============================================
// THEME SETTINGS
// ============================================
export const theme = {
  // Primary color (used for headings, accents, buttons)
  // Options: 'blue', 'purple', 'emerald', 'rose', 'amber', 'cyan'
  primaryColor: 'blue',
  
  // Accent color (used for highlights, gradients)
  // Options: 'purple', 'pink', 'emerald', 'orange', 'cyan', 'indigo'
  accentColor: 'purple',
  
  // Font family (Google Fonts)
  // Options: 'Inter' (default), 'Space Grotesk' (modern), 'Outfit' (clean), 'Plus Jakarta Sans' (professional)
  fontFamily: 'Inter',
  
  // Dark mode is enabled by default (developers love it!)
  // Set to false to start in light mode
  darkModeDefault: true,
};

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personal = {
  // Your name
  name: 'Alex Morgan',
  
  // Your professional title/role
  title: 'Full-Stack Developer',
  
  // Short tagline that appears under your name in the hero
  tagline: 'Building beautiful, performant web experiences',
  
  // Your bio for the About section
  bio: `I'm a passionate full-stack developer with 5+ years of experience building modern web applications. I love turning complex problems into simple, elegant solutions. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.`,
  
  // Your email address
  email: 'alex@example.com',
  
  // Your location (optional)
  location: 'San Francisco, CA',
  
  // Current year (for footer copyright)
  currentYear: new Date().getFullYear(),
};

// ============================================
// SOCIAL LINKS
// ============================================
export const social = {
  // GitHub profile URL
  github: 'https://github.com/alexmorgan',
  
  // LinkedIn profile URL
  linkedin: 'https://linkedin.com/in/alexmorgan',
  
  // X (Twitter) profile URL
  twitter: 'https://twitter.com/alexmorgan',
  
  // Optional: Dribbble, Behance, or other portfolio sites
  dribbble: null,
  
  // Optional: Your personal website/blog
  website: null,
};

// ============================================
// SKILLS & TECHNOLOGIES
// ============================================
export const skills = {
  // These will be displayed as tags in the About section
  // Group them however makes sense for you
  categories: [
    {
      name: 'Frontend',
      items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
    },
    {
      name: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD'],
    },
  ],
};

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    id: 1,
    title: 'TaskFlow Pro',
    description: 'A collaborative project management tool with real-time updates, drag-and-drop task boards, and team analytics. Built for remote teams to stay organized and productive.',
    // Use placeholder images or your own project screenshots
    // Recommended size: 800x600px
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    // Tech stack tags (shown on project cards)
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    // Live demo URL
    liveUrl: 'https://taskflow-demo.example.com',
    // GitHub repository URL
    githubUrl: 'https://github.com/alexmorgan/taskflow',
    // Optional: "Featured" projects get highlighted
    featured: true,
  },
  {
    id: 2,
    title: 'EcoTrack',
    description: 'A mobile-first carbon footprint tracker that helps users monitor and reduce their environmental impact. Includes personalized tips, challenges, and community leaderboards.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Chart.js'],
    liveUrl: 'https://ecotrack-demo.example.com',
    githubUrl: 'https://github.com/alexmorgan/ecotrack',
    featured: false,
  },
  {
    id: 3,
    title: 'DevDocs Hub',
    description: 'A unified documentation search platform that aggregates docs from multiple frameworks and libraries. Features keyboard shortcuts, dark mode, and offline support.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Algolia', 'Tailwind CSS'],
    liveUrl: 'https://devdocs-demo.example.com',
    githubUrl: 'https://github.com/alexmorgan/devdocs',
    featured: true,
  },
  {
    id: 4,
    title: 'ChatGenius AI',
    description: 'An AI-powered customer support chatbot that learns from your documentation. Includes a training dashboard, analytics, and multi-language support.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Python', 'OpenAI API', 'FastAPI', 'React'],
    liveUrl: 'https://chatgenius-demo.example.com',
    githubUrl: 'https://github.com/alexmorgan/chatgenius',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Starter',
    description: 'A modern, customizable portfolio template for developers. Built with React, Vite, and Tailwind CSS. Easy to configure and deploy to Vercel.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://portfolio-demo.example.com',
    githubUrl: 'https://github.com/alexmorgan/portfolio-starter',
    featured: false,
  },
  {
    id: 6,
    title: 'WeatherNow',
    description: 'A beautiful weather app with 7-day forecasts, hourly breakdowns, and location-based alerts. Uses the OpenWeatherMap API with graceful error handling.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    tags: ['React', 'OpenWeather API', 'CSS Modules'],
    liveUrl: 'https://weathernow-demo.example.com',
    githubUrl: 'https://github.com/alexmorgan/weathernow',
    featured: false,
  },
];

// ============================================
// EXPERIENCE / EDUCATION
// ============================================
// Set to false to hide the Experience section entirely
export const showExperience = true;

export const experience = [
  {
    id: 1,
    type: 'work', // 'work' or 'education'
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-03',
    endDate: 'Present', // or 'Present' for current role
    description: [
      'Led a team of 5 developers in rebuilding the company\'s flagship product',
      'Improved page load times by 40% through performance optimization',
      'Implemented a design system that improved consistency across 12 products',
    ],
  },
  {
    id: 2,
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: '2020-01',
    endDate: '2022-02',
    description: [
      'Built and maintained multiple client-facing web applications',
      'Developed RESTful APIs using Node.js and Express',
      'Collaborated with designers to implement pixel-perfect UIs',
    ],
  },
  {
    id: 3,
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'University of Technology',
    location: 'Boston, MA',
    startDate: '2016-09',
    endDate: '2020-05',
    description: [
      'Graduated magna cum laude with a 3.8 GPA',
      'Focus on web development and software engineering',
      'President of the Computer Science Club',
    ],
  },
];

// ============================================
// CONTACT FORM
// ============================================
export const contact = {
  // Formspree endpoint (or similar service)
  // To set up: 1) Create account at formspree.io
  //           2) Create a new form
  //           3) Paste your form ID here
  // Leave empty to use the demo form (shows success message without sending)
  formspreeId: '',
  
  // Optional: Add custom fields to the contact form
  // Available field types: 'text', 'email', 'textarea'
  customFields: [],
};

// ============================================
// NAVIGATION
// ============================================
export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

// ============================================
// FOOTER
// ============================================
export const footer = {
  // Optional: Add a credit line or additional links
  credit: 'Built with React, Vite & Tailwind CSS',
  
  // Optional: Additional footer links
  links: [
    { name: 'GitHub', href: 'https://github.com/alexmorgan' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/alexmorgan' },
  ],
};
