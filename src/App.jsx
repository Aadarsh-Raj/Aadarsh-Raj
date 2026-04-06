import { useState, useEffect } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import Loader from './components/Loader';
import SpotlightBackground from './components/SpotlightBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const { scrollY, scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('home');
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const scale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.4]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0); 
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 }); 

    const sections = document.querySelectorAll('[data-section="true"]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 300) setShowButton(true);
      else setShowButton(false);

      if (latest < 100) setActiveSection('home');
    });
  }, [scrollY]);

  const sectionNames = {
    home: 'Home', 
    skills: 'Skills', 
    experience: 'Experience', 
    education: 'Education', 
    project: 'Project', 
    achievement: 'Achievement', 
    contact: 'Contact'
  };

  return (
    <div className="bg-slate-50 dark:bg-zinc-950 selection:bg-cyan-500/30 transition-colors duration-300 font-sans relative min-h-screen text-slate-900 dark:text-white">
      
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} key="loader" />}
      </AnimatePresence>

      <SpotlightBackground />

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <motion.div data-section="true" id="home" style={{ scale, opacity }} className="sticky top-0 w-full h-screen overflow-hidden origin-top z-0">
          <div className="absolute inset-0"><Hero /></div>
        </motion.div>

        <div data-section="true" id="skills" className="relative z-10 bg-white dark:bg-zinc-900 rounded-t-[3rem] shadow-[0_-30px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_rgba(0,0,0,0.6)] border-t border-slate-200 dark:border-zinc-800">
          <About />
        </div>
        
        <div data-section="true" id="experience" className="relative z-20 bg-slate-50 dark:bg-zinc-950 rounded-t-[3rem] shadow-[0_-30px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_rgba(0,0,0,0.6)] border-t border-slate-200 dark:border-zinc-800">
          <Experience />
        </div>
        
        <div data-section="true" id="education" className="relative z-30 bg-white dark:bg-zinc-900 rounded-t-[3rem] shadow-[0_-30px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_rgba(0,0,0,0.6)] border-t border-slate-200 dark:border-zinc-800">
          <Education />
        </div>
        
        <div data-section="true" id="project" className="relative z-40 bg-slate-50 dark:bg-zinc-950 rounded-t-[3rem] shadow-[0_-30px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_rgba(0,0,0,0.6)] border-t border-slate-200 dark:border-zinc-800">
          <Projects />
        </div>
        
        <div data-section="true" id="achievement" className="relative z-50 bg-white dark:bg-zinc-900 rounded-t-[3rem] shadow-[0_-30px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_rgba(0,0,0,0.6)] border-t border-slate-200 dark:border-zinc-800">
          <Achievements />
        </div>
        
        <div data-section="true" id="contact" className="relative z-[60] bg-slate-100 dark:bg-black rounded-t-[3rem] shadow-[0_-30px_70px_rgba(0,0,0,0.12)] dark:shadow-[0_-30px_70px_rgba(0,0,0,0.8)] border-t border-slate-300 dark:border-zinc-800 min-h-screen">
          <Contact />
        </div>
      </main>

      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[110] flex items-center gap-4 px-3 py-3 pr-6 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl text-slate-900 dark:text-white shadow-xl dark:shadow-black/50 hover:scale-105 transition-all group border border-slate-200 dark:border-white/10"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-black/50 rounded-full">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-200 dark:stroke-zinc-700" strokeWidth="3" />
                <motion.circle 
                  cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="3"
                  className="text-cyan-500"
                  style={{ pathLength: scrollYProgress, strokeLinecap: 'round' }}
                />
              </svg>
              <ArrowUp className="w-4 h-4 text-cyan-500 group-hover:-translate-y-1 transition-transform relative z-10" />
            </div>

            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-400 font-bold mb-1">Current</span>
              <span className="text-sm font-black uppercase tracking-wider">{sectionNames[activeSection] || 'Home'}</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App;