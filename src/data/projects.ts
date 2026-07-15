export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  challenge: string;
  solution: string;
  results: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
  timeline: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'FoodieSpot',
    subtitle: 'Restaurant & Food Ordering Platform',
    description: 'A premium restaurant website with online ordering, table reservations, and a beautiful menu showcase.',
    longDescription: 'FoodieSpot is a comprehensive restaurant platform that combines elegant design with powerful functionality. Built with React and Firebase, it features a dynamic menu system, real-time table reservations, and a seamless food ordering experience that drives customer engagement and boosts revenue.',
    features: ['Interactive Menu with Categories', 'Online Table Reservation', 'Cart & Order Management', 'Responsive Mobile Design', 'Admin Dashboard', 'Real-time Order Tracking'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
    challenge: 'The client needed a restaurant platform that could handle online orders, table reservations, and menu management — all with a premium look and feel that matched their brand.',
    solution: 'Built a full-stack React application with Firebase for real-time data, implemented a component-based architecture for the menu system, and used Framer Motion for smooth page transitions and micro-interactions.',
    results: 'Delivered a fully responsive platform that increased online orders by 40% and reduced reservation no-shows through automated confirmation emails.',
    liveUrl: '#',
    githubUrl: '#',
    image: '/projects/project-1.webp',
    timeline: '4 Weeks',
    category: 'Full Stack',
  },
  {
    id: 'project-2',
    title: 'TaskFlow Pro',
    subtitle: 'Project Management Dashboard',
    description: 'A modern project management dashboard with task tracking, team collaboration, and analytics.',
    longDescription: 'TaskFlow Pro is a feature-rich project management dashboard designed for teams. It provides real-time task tracking, drag-and-drop board management, team analytics, and progress visualization — all wrapped in a sleek, dark-themed interface.',
    features: ['Drag & Drop Task Boards', 'Team Member Management', 'Progress Analytics', 'Real-time Collaboration', 'Priority & Status Filters', 'Activity Timeline'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'GSAP'],
    challenge: 'Creating a complex dashboard with multiple interactive features while maintaining performance and a clean, intuitive user experience.',
    solution: 'Implemented a modular React architecture with Supabase for real-time backend services. Used GSAP for smooth animations and Tailwind CSS for a consistent, responsive design system.',
    results: 'Built a production-ready dashboard that handles complex state management efficiently, with smooth 60fps animations and a fully responsive layout.',
    liveUrl: '#',
    githubUrl: '#',
    image: '/projects/project-2.webp',
    timeline: '5 Weeks',
    category: 'Dashboard',
  },
  {
    id: 'project-3',
    title: 'DevConnect',
    subtitle: 'Developer Portfolio & Blog Platform',
    description: 'A premium developer portfolio platform with integrated blog, project showcase, and contact management.',
    longDescription: 'DevConnect is a next-level portfolio platform for developers. It combines a stunning project showcase with an integrated blog system, SEO optimization, and a modern contact form — designed to help developers stand out and attract opportunities.',
    features: ['Dynamic Project Gallery', 'Markdown Blog System', 'SEO Optimization', 'Contact Form with EmailJS', 'Dark/Light Theme', 'Smooth Page Transitions'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
    challenge: 'Building a portfolio platform that balances visual impact with fast loading times and excellent SEO performance.',
    solution: 'Leveraged React with code splitting and lazy loading for optimal performance. Implemented server-side meta tags for SEO, and used CSS animations instead of heavy JavaScript libraries where possible.',
    results: 'Achieved a Lighthouse score of 95+ across all categories, with a visually stunning design that loads in under 2 seconds.',
    liveUrl: '#',
    githubUrl: '#',
    image: '/projects/project-3.webp',
    timeline: '3 Weeks',
    category: 'Web App',
  },
];
