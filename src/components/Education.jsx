import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code, Database } from 'lucide-react';

const Education = () => {
  return (
    <section className="relative py-32 overflow-hidden min-h-screen" id='education'>
      <div className="max-w-5xl mx-auto relative z-10 px-6">
        <div className="text-center mb-24">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Education.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
            The academic foundation that drives my logical thinking and software architecture.
          </motion.p>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, type: "spring" }} className="w-full max-w-4xl relative group">
            
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-black rounded-full z-20 border-r border-slate-200 dark:border-white/10 hidden md:block"></div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-black rounded-full z-20 border-l border-slate-200 dark:border-white/10 hidden md:block"></div>

            <div className="w-full bg-white dark:bg-zinc-900/60 backdrop-blur-3xl border border-slate-100 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_70px_rgba(20,184,166,0.15)] transition-all duration-300 overflow-hidden flex flex-col md:flex-row gap-8 items-center">
              
              <div className="md:w-1/3 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-zinc-800 pb-8 md:pb-0 md:pr-8 text-center">
                <div className="p-5 bg-teal-100/50 dark:bg-teal-950/40 rounded-full mb-4 shadow-sm dark:shadow-inner">
                  <GraduationCap className="w-12 h-12 text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">Session</span>
                <span className="text-2xl font-black text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/30 px-4 py-1 rounded-full border border-teal-200 dark:border-teal-900/50">
                  2024 — Present
                </span>
              </div>

              <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                  Master in Computer Applications
                </h3>
                <h4 className="text-xl font-bold text-slate-600 dark:text-zinc-400 mb-6 flex items-center gap-2 justify-center md:justify-start">
                  <BookOpen className="w-5 h-5" /> Parul University
                </h4>
                <p className="text-slate-700 dark:text-zinc-300 font-medium mb-8 leading-relaxed">
                  Focusing heavily on data structures, algorithms, and AI ML learnings. Actively applying theoretical computer science concepts to build real-world applications.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 w-full">
                  <span className="px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 dark:bg-black/50 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/5 flex items-center gap-2">
                    <Code className="w-4 h-4" /> Algorithms
                  </span>
                  <span className="px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 dark:bg-black/50 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/5 flex items-center gap-2">
                    <Database className="w-4 h-4" /> DBMS
                  </span>
                   <span className="px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 dark:bg-black/50 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/5 flex items-center gap-2">
                    <Database className="w-4 h-4" /> AI ML
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;