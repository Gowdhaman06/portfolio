export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: 'Business Websites',
    description: 'Professional, conversion-optimized websites tailored for businesses that want to establish a strong online presence.',
    icon: 'Building2',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
  },
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture leads and drive results with stunning visuals and clear CTAs.',
    icon: 'Rocket',
    features: ['A/B Testing Ready', 'Lead Capture', 'Analytics Integration'],
  },
  {
    title: 'Portfolio Websites',
    description: 'Stunning portfolio websites that showcase your work, skills, and personality with premium design and smooth animations.',
    icon: 'Briefcase',
    features: ['Custom Animations', 'Gallery Views', 'Case Studies'],
  },
  {
    title: 'Restaurant Websites',
    description: 'Appetizing restaurant websites with online menus, reservation systems, and a delightful user experience.',
    icon: 'UtensilsCrossed',
    features: ['Online Menu', 'Reservations', 'Location Maps'],
  },
  {
    title: 'Admin Dashboards',
    description: 'Feature-rich admin dashboards with data visualization, user management, and real-time analytics.',
    icon: 'LayoutDashboard',
    features: ['Data Visualization', 'Role Management', 'Real-time Updates'],
  },
  {
    title: 'Full Stack Web Apps',
    description: 'End-to-end web applications with robust frontend interfaces, backend APIs, and database integration.',
    icon: 'Layers',
    features: ['API Integration', 'Authentication', 'Database Design'],
  },
  {
    title: 'UI/UX Development',
    description: 'Pixel-perfect implementation of UI/UX designs with attention to detail, micro-interactions, and accessibility.',
    icon: 'Sparkles',
    features: ['Pixel Perfect', 'Micro-interactions', 'Accessibility'],
  },
  {
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern, fast, and visually stunning experiences that drive engagement.',
    icon: 'RefreshCcw',
    features: ['Modern Design', 'Performance Boost', 'UX Improvement'],
  },
];
