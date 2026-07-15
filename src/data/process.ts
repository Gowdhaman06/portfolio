export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  activities: string[];
  deliverables?: string[];
  tools?: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Requirement Analysis',
    description: 'Understanding the project goals, target audience, and functional requirements before writing any code.',
    icon: 'Search',
    activities: ['Meet with the client', 'Understand business goals', 'Identify target audience', 'Gather functional requirements', 'Define project scope', 'Research competitors', 'Create feature list'],
    deliverables: ['Project Requirements Document', 'Feature Checklist', 'Project Timeline'],
  },
  {
    step: 2,
    title: 'Planning & UI/UX Design',
    description: 'Designing the user experience with wireframes, component planning, and visual design.',
    icon: 'PenTool',
    activities: ['Create wireframes', 'Plan user journey', 'Design page layouts', 'Select color palette', 'Choose typography', 'Create reusable UI components', 'Plan responsive breakpoints'],
    tools: ['Figma', 'Excalidraw', 'Pen & Paper'],
    deliverables: ['Wireframes', 'UI Design', 'Component Library'],
  },
  {
    step: 3,
    title: 'Development in VS Code',
    description: 'Building a scalable project foundation and developing features using professional development tools.',
    icon: 'Code',
    activities: ['Create Vite React project', 'Initialize Git repository', 'Organize folder structure', 'Build reusable components', 'Develop responsive layouts', 'Implement animations', 'Connect backend services', 'Commit changes regularly'],
    tools: ['VS Code', 'Vite', 'React', 'Tailwind CSS', 'Git'],
  },
  {
    step: 4,
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing across browsers, devices, and accessibility standards.',
    icon: 'CheckCircle',
    activities: ['Cross-browser testing', 'Mobile responsiveness', 'Accessibility checks', 'Performance optimization', 'Form validation testing', 'Bug fixing & debugging'],
    deliverables: ['Testing Checklist', 'Bug Report', 'Performance Report'],
  },
  {
    step: 5,
    title: 'Deployment & Launch',
    description: 'Building for production and deploying to a live environment with SSL and SEO verification.',
    icon: 'Rocket',
    activities: ['Build production version', 'Deploy to Vercel', 'Configure domain', 'SSL certificate setup', 'SEO verification', 'Final testing on live site'],
    deliverables: ['Live Website', 'Deployment Documentation'],
  },
  {
    step: 6,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance including feature updates, performance monitoring, and security patches.',
    icon: 'Shield',
    activities: ['Feature enhancements', 'Performance monitoring', 'Security updates', 'Dependency updates', 'Bug fixes', 'Client support'],
  },
];
