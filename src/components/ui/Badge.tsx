import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border-[var(--glass-border)]',
    accent: 'bg-[rgba(108,99,255,0.1)] text-[var(--accent-primary)] border-[rgba(108,99,255,0.2)]',
    outline: 'bg-transparent text-[var(--text-secondary)] border-[var(--glass-border)]',
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        border transition-all duration-300
        hover:scale-105 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
