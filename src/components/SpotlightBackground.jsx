import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SpotlightBackground = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50 dark:bg-zinc-950">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.1),rgba(255,255,255,0))]"></div>

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-60 dark:opacity-30 pointer-events-none"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(217,70,239,0.2) 40%, transparent 70%)"
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
      
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-zinc-950"></div>
    </div>
  );
};

export default SpotlightBackground;