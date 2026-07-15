import { motion } from 'motion/react';
import { fadeInUp } from '../../animations/variants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'center', className = '' }: SectionHeadingProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {subtitle && (
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)]">
        <span className="gradient-text">{title}</span>
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
