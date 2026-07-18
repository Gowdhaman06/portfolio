export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  linkedin: string;
  availableForWork: boolean;
}

export const personalInfo: PersonalInfo = {
  name: 'Gowdhaman N',
  title: 'Full Stack Web Developer',
  tagline: 'Building premium digital experiences that inspire.',
  bio: 'I am a passionate Full Stack Web Developer focused on building modern, premium, responsive, and high-performance web applications. I enjoy transforming ideas into polished digital products with clean code, excellent user experience, and scalable architecture.',
  email: 'figvosupport@gmail.com',
  location: 'India',
  linkedin: 'https://linkedin.com/in/gowdhaman',
  availableForWork: true,
};

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/gowdhaman', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:figvosupport@gmail.com', icon: 'Mail' },
];

export const stats = [
  { label: 'Projects Completed', value: 3, suffix: '+' },
  { label: 'Technologies Used', value: 15, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
];
