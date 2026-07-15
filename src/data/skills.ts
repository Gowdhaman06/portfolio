export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
  proficiency: number;
}

export const skills: Skill[] = [
  { name: 'HTML5', icon: 'FileCode', category: 'frontend', proficiency: 95 },
  { name: 'CSS3', icon: 'Palette', category: 'frontend', proficiency: 92 },
  { name: 'JavaScript', icon: 'Braces', category: 'frontend', proficiency: 90 },
  { name: 'TypeScript', icon: 'FileType', category: 'frontend', proficiency: 85 },
  { name: 'React', icon: 'Atom', category: 'frontend', proficiency: 90 },
  { name: 'Tailwind CSS', icon: 'Wind', category: 'frontend', proficiency: 92 },
  { name: 'Node.js', icon: 'Server', category: 'backend', proficiency: 85 },
  { name: 'Express.js', icon: 'Route', category: 'backend', proficiency: 82 },
  { name: 'Supabase', icon: 'Database', category: 'backend', proficiency: 80 },
  { name: 'Firebase', icon: 'Flame', category: 'backend', proficiency: 78 },
  { name: 'VS Code', icon: 'Code', category: 'tools', proficiency: 95 },
  { name: 'Git', icon: 'GitBranch', category: 'tools', proficiency: 88 },
  { name: 'GitHub', icon: 'Github', category: 'tools', proficiency: 90 },
  { name: 'Figma', icon: 'Figma', category: 'tools', proficiency: 75 },
  { name: 'Vercel', icon: 'Triangle', category: 'tools', proficiency: 85 },
  { name: 'Postman', icon: 'Send', category: 'tools', proficiency: 82 },
];

export const skillCategories = [
  { id: 'frontend' as const, label: 'Frontend', icon: 'Monitor' },
  { id: 'backend' as const, label: 'Backend', icon: 'Server' },
  { id: 'tools' as const, label: 'Tools', icon: 'Wrench' },
];
