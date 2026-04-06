import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextValue = prev + Math.floor(Math.random() * 8) + 2;
        
        if (nextValue >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoaded(true), 400); 
          setTimeout(() => onComplete(), 1400); 
          
          return 100;
        }
        return nextValue;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);
  const doorTransition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

  return (
    <div className="fixed inset-0 z-[999] pointer-events-none flex flex-col">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isLoaded ? "-100vh" : 0 }}
        transition={doorTransition}
        className="relative w-full h-1/2 bg-[#09090b] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '24px 24px', color: '#fff' }}></div>
        <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[22vw] md:text-[14vw] font-black text-white tracking-tighter leading-none m-0 select-none">
          AADARSH
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isLoaded ? "100vh" : 0 }}
        transition={doorTransition}
        className="relative w-full h-1/2 bg-[#09090b] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '24px 24px', color: '#fff' }}></div>

        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] md:text-[14vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-800 tracking-tighter leading-none m-0 select-none">
          AADARSH
        </h1>
        <motion.div 
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-baseline gap-2"
        >
          <span className="text-4xl md:text-6xl font-black text-white">{progress}</span>
          <span className="text-xl md:text-2xl font-bold text-cyan-500">%</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ 
          opacity: isLoaded ? 0 : 1,
          scaleY: isLoaded ? 0 : 1 
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-900 -translate-y-1/2 z-10"
      >
        <motion.div
          className="h-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        />
      </motion.div>

    </div>
  );
};

export default Loader;