import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Terminal, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 400], [0, -50]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const avatarMoveY = useTransform(scrollY, [0, 300], [0, -80]);
  const avatarScale = useTransform(scrollY, [0, 300], [1, 0.85]);
  const avatarOpacity = useTransform(scrollY, [200, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } }
  };

  const floatAnimation = (duration, yOffset) => ({
    y: [0, yOffset, 0],
    transition: { duration: duration, repeat: Infinity, ease: "easeInOut" }
  });

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-24 lg:pb-0 px-4 sm:px-6 z-10">
      <div className="absolute right-[-20%] top-[10%] lg:top-1/2 lg:-translate-y-1/2 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute left-[-10%] bottom-[-10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-fuchsia-400/10 dark:bg-fuchsia-500/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none -z-10"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
        
        <motion.div 
          style={{ y: textY, opacity: textOpacity }} 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 lg:gap-3 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm mb-6 lg:mb-8 backdrop-blur-md transition-all hover:scale-105 hover:border-cyan-200 dark:hover:border-cyan-500/30 cursor-default">
            <div className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 lg:h-2.5 lg:w-2.5 bg-cyan-500"></span>
            </div>
            <span className="text-xs lg:text-sm font-semibold text-slate-700 dark:text-zinc-300">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-4 lg:mb-6 leading-[1.1] lg:leading-[1.1]">
            Full-Stack <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 pr-2">
              Web Developer.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-xl text-slate-600 dark:text-zinc-400 text-base sm:text-lg lg:text-xl font-medium mb-8 lg:mb-10 leading-relaxed px-2 lg:px-0">
            Hi, I'm Aadarsh. I architect and build highly performant, scalable web applications from robust backend systems to pixel-perfect, interactive frontend interfaces.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-2 lg:px-0">
            <a 
              href="#project" 
              onClick={(e) => { e.preventDefault(); document.getElementById('project').scrollIntoView({ behavior: 'smooth' }); }} 
              className="group relative flex items-center justify-center gap-3 px-8 py-3.5 lg:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.2)] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2 text-sm lg:text-base">
                View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 h-full w-full translate-x-[-100%] bg-white/20 dark:bg-black/10 group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
            </a>
            
            <div className="flex items-center justify-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
              <a href="https://github.com/Aadarsh-Raj" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3.5 lg:p-4 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 hover:scale-110 transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aadarsh-raj-80b862216/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3.5 lg:p-4 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 hover:scale-110 transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: avatarMoveY, scale: avatarScale, opacity: avatarOpacity }} className="flex-1 relative flex justify-center items-center w-full max-w-[14rem] sm:max-w-sm lg:max-w-md z-50 origin-center mt-4 lg:mt-0">
          <motion.div animate={floatAnimation(4, -15)} className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 lg:-top-10 lg:-left-10 p-2.5 lg:p-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-xl lg:rounded-2xl shadow-xl z-20">
            <Terminal className="w-4 h-4 lg:w-8 lg:h-8 text-cyan-500" />
          </motion.div>
          <motion.div animate={floatAnimation(5, 20)} className="absolute bottom-4 -right-2 sm:bottom-10 sm:-right-4 lg:bottom-16 lg:-right-8 p-2 lg:p-3.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-xl lg:rounded-2xl shadow-xl z-20">
            <Code2 className="w-3.5 h-3.5 lg:w-7 lg:h-7 text-indigo-500" />
          </motion.div>
          <motion.div animate={floatAnimation(3.5, -10)} className="absolute top-1/4 -right-3 sm:top-1/3 sm:-right-6 lg:top-1/4 lg:-right-12 p-1.5 lg:p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-full shadow-lg z-20">
            <Sparkles className="w-3 h-3 lg:w-5 lg:h-5 text-fuchsia-500" />
          </motion.div>

          <motion.div initial={{ scale: 0.8, opacity: 0, rotate: -10 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ duration: 0.8, type: "spring", bounce: 0.4 }} className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-400 animate-spin-slow opacity-40 dark:opacity-60 blur-xl lg:blur-3xl"></div>
            <div className="absolute inset-1.5 lg:inset-3 rounded-full bg-white dark:bg-zinc-900 overflow-hidden border-[3px] lg:border-4 border-white/80 dark:border-zinc-800 z-10 shadow-2xl">
              <img src="https://res.cloudinary.com/denl6qm57/image/upload/v1773929817/IMG_20250322_171436_030_tkiwfd.webp" alt="Aadarsh Raj" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;