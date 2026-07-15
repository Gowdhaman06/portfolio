import { type ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconRight?: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  download?: boolean;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  href,
  onClick,
  className = '',
  disabled = false,
  download = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-medium rounded-xl
    transition-all duration-300 ease-out relative overflow-hidden
    focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2
    focus:ring-offset-[var(--bg-primary)] disabled:opacity-50 disabled:cursor-not-allowed
    font-[family-name:var(--font-heading)]
  `;

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]
      text-white shadow-lg hover:shadow-[var(--shadow-glow)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
    secondary: `
      bg-[var(--bg-tertiary)] text-[var(--text-primary)]
      border border-[var(--glass-border)]
      hover:bg-[var(--glass-hover)] hover:border-[var(--accent-primary)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-[var(--text-primary)]
      border border-[var(--glass-border)]
      hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-[var(--text-secondary)]
      hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        download={download || undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}
