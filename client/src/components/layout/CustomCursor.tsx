import { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const ringSpringConfig = { damping: 20, stiffness: 200, mass: 0.8 };

  const dotX = useSpring(0, springConfig);
  const dotY = useSpring(0, springConfig);
  const ringX = useSpring(0, ringSpringConfig);
  const ringY = useSpring(0, ringSpringConfig);

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth <= 768) return;

    const updateCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseEnter = (el: Element) => {
      const ring = ringRef.current;
      if (!ring) return;
      
      if (el.classList.contains('btn-primary') || el.tagName === 'BUTTON') {
        ring.classList.add('expanded');
        ring.style.background = 'rgba(124,58,237,0.08)';
      } else if (el.tagName === 'A' || el.hasAttribute('href')) {
        ring.classList.add('expanded');
      } else if (el.classList.contains('project-card')) {
        ring.classList.add('text-mode');
        if (textRef.current) textRef.current.textContent = 'VIEW';
      }
    };

    const handleMouseLeave = () => {
      const ring = ringRef.current;
      if (!ring) return;
      ring.classList.remove('expanded', 'text-mode');
      ring.style.background = '';
      if (textRef.current) textRef.current.textContent = '';
    };

    const handleClickables = () => {
      document.querySelectorAll('a, button, [data-cursor], .project-card, .btn-primary, .btn-secondary').forEach(el => {
        el.addEventListener('mouseenter', () => handleMouseEnter(el));
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    document.addEventListener('mousemove', updateCursor);
    handleClickables();

    // Reattach on DOM changes
    const observer = new MutationObserver(handleClickables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      observer.disconnect();
    };
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <div className="custom-cursor" aria-hidden="true">
      {/* Main dot */}
      <motion.div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none z-[99999]"
        style={{ x: dotX, y: dotY }}
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="cursor-ring fixed pointer-events-none z-[99998]"
        style={{ x: ringX, y: ringY }}
      >
        <span
          ref={textRef}
          className="text-[10px] font-bold text-white flex items-center justify-content-center w-full h-full text-center"
          style={{ lineHeight: '40px', fontSize: '9px', letterSpacing: '0.05em' }}
        />
      </motion.div>
    </div>
  );
}
