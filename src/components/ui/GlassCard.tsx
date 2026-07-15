import { type ReactNode, useState } from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', hover = true, tilt = false, onClick }: GlassCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 20);
    setRotateY((centerX - x) / 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`
        relative rounded-2xl overflow-hidden
        bg-[var(--glass-bg)] backdrop-blur-xl
        border border-[var(--glass-border)]
        transition-all duration-500
        ${hover ? 'hover:bg-[var(--glass-hover)] hover:border-[rgba(108,99,255,0.2)] hover:shadow-[0_8px_40px_rgba(108,99,255,0.1)]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        transform: tilt ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
        transition: 'transform 0.1s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}
