import React from 'react';

interface LogoProps {
  /** Size of the logo icon in pixels. Default is 32. */
  size?: number;
  /** Whether to show the "Figvo" text. Default is true. */
  showText?: boolean;
  /** Whether to show the slogan "BUILD • INNOVATE • GROW". Default is false. */
  showSlogan?: boolean;
  /** Custom class for the wrapper container. */
  className?: string;
  /** Alignment of text. Default is 'horizontal' (logo and text side-by-side). Use 'vertical' for stacked (like in footer/loading). */
  layout?: 'horizontal' | 'vertical';
}

export function Logo({
  size = 32,
  showText = true,
  showSlogan = false,
  className = '',
  layout = 'horizontal',
}: LogoProps) {
  const isVertical = layout === 'vertical';

  return (
    <div className={`flex ${isVertical ? 'flex-col items-center text-center' : 'items-center gap-2.5'} ${className}`}>
      {/* SVG F-Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          {/* Top violet/purple gradient */}
          <linearGradient id="violet-grad" x1="36" y1="20" x2="80" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A15FF" />
            <stop offset="100%" stopColor="#B625FF" />
          </linearGradient>

          {/* Middle pink gradient */}
          <linearGradient id="pink-grad" x1="38" y1="44" x2="70" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF2A7A" />
            <stop offset="100%" stopColor="#9E1FFF" />
          </linearGradient>

          {/* Bottom cyan/blue gradient */}
          <linearGradient id="blue-grad" x1="28" y1="95" x2="48" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>

          {/* O-ring gradient */}
          <linearGradient id="o-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2A7A" />
            <stop offset="100%" stopColor="#00F0FF" />
          </linearGradient>
        </defs>

        {/* Top Purple/Violet Ribbon of F */}
        <path
          d="M 36,60 C 36,32 50,20 80,20 C 86,20 86,34 80,34 C 55,34 48,45 48,60 Z"
          fill="url(#violet-grad)"
        />

        {/* Middle Pink Ribbon of F */}
        <path
          d="M 38,70 C 38,52 46,44 70,44 C 76,44 76,58 70,58 C 50,58 48,64 48,70 Z"
          fill="url(#pink-grad)"
        />

        {/* Bottom Blue Stem of F (curves down and to the left) */}
        <path
          d="M 48,55 C 48,75 42,95 28,95 C 22,95 22,81 28,81 C 36,81 36,70 36,55 Z"
          fill="url(#blue-grad)"
        />
      </svg>

      {/* Brand Text & Slogan Container */}
      {showText && (
        <div className={`flex flex-col ${isVertical ? 'items-center mt-3' : 'items-start'}`}>
          <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)] select-none flex items-center text-[var(--text-primary)]">
            Figv
            {/* The O is a gradient ring */}
            <svg
              className="w-[0.72em] h-[0.72em] ml-[0.05em] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="7.5"
                stroke="url(#o-grad)"
                strokeWidth="4.5"
              />
            </svg>
          </span>

          {showSlogan && (
            <div className="text-[8px] tracking-[0.2em] text-[var(--text-secondary)] font-bold uppercase mt-1 flex items-center gap-1 select-none">
              <span>Build</span>
              <span className="w-1 h-1 rounded-full bg-[#FF2A7A] shrink-0" />
              <span>Innovate</span>
              <span className="w-1 h-1 rounded-full bg-[#00F0FF] shrink-0" />
              <span>Grow</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
