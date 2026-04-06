import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SectionSpotlight = () => {
  const containerRef = useRef(null);
  
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  const smoothX = useSpring(cursorX, { damping: 40, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(cursorY, { damping: 40, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const parent = container.parentElement;
    
    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      cursorX.set(e.clientX - rect.left);
      cursorY.set(e.clientY - rect.top);
    };
    
    const handleMouseLeave = () => {
      cursorX.set(-1000);
      cursorY.set(-1000);
    };

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-t-[3rem]">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-60 dark:opacity-30"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(217,70,239,0.15) 40%, transparent 70%)"
        }}
      />
      <div
        className="absolute inset-0 z-10 opacity-[0.5] dark:opacity-[0.2]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          color: 'var(--tw-colors-slate-400)'
        }}
      ></div>
    </div>
  );
};

export default SectionSpotlight;