import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return;

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? '40px' : '8px',
          height: isHovering ? '40px' : '8px',
          background: isHovering ? 'rgba(108, 99, 255, 0.2)' : 'var(--accent-primary)',
          marginLeft: isHovering ? '-16px' : '0',
          marginTop: isHovering ? '-16px' : '0',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          borderColor: isHovering ? 'var(--accent-secondary)' : 'rgba(108, 99, 255, 0.5)',
          marginLeft: isHovering ? '-10px' : '0',
          marginTop: isHovering ? '-10px' : '0',
        }}
      />
    </>
  );
}
