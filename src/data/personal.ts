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
  linkedin: 'https://www.linkedin.com/company/figvo',
  availableForWork: true,
};

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/figvo', icon: 'Linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/figvo_?igsh=MTMxOXF0d3htN2prOQ==', icon: 'Instagram' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1BcDhpCET6/', icon: 'Facebook' },
  { name: 'Email', url: 'mailto:figvosupport@gmail.com', icon: 'Mail' },
];

export const stats = [
  { label: 'Projects Completed', value: 3, suffix: '+' },
  { label: 'Technologies Used', value: 15, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
];
