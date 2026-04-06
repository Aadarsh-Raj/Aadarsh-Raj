import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Medal, ArrowRight, X } from 'lucide-react';

const achievements = [
  {
    title: "1st Place - CodeVista Hackathon (HackerRank)",
    date: "2024",
    description: "Developed a Chrome extension that allows users to instantly translate selected text or full sentences into any chosen language directly within the browser.",
    fullDetails: "Built a lightweight and user-friendly Chrome extension that enhances browsing by enabling real-time translation of selected text. Users can highlight any word or sentence on a webpage and translate it into their preferred language using an integrated translation API. The project involved working with Chrome Extension APIs, handling content scripts, and optimizing performance for seamless user experience. Focus was placed on minimal UI, fast response time, and multi-language support.",
    icon: <Trophy className="w-8 h-8 text-amber-500" />,
    glow: "group-hover:shadow-[0_20px_60px_rgba(245,158,11,0.25)]"
  },
  {
    title: "1st Place - Geekathon (Geekster)",
    date: "2023",
    description: "Led a team of developers to secure 1st place by building multiple innovative projects under tight deadlines during a competitive hackathon.",
    fullDetails: "As the team lead, I coordinated task distribution, managed development workflows, and ensured timely delivery of multiple project modules. Collaborated closely with team members to design, develop, and present solutions effectively. Focused on problem-solving, rapid prototyping, and maintaining code quality under pressure. The project was recognized for its innovation, execution, and teamwork among all participating teams.",
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    glow: "group-hover:shadow-[0_20px_60px_rgba(234,179,8,0.25)]"
  }
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section className="relative py-32 overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div className="text-center mb-24">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Milestones.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
            Recognitions, certifications, and wins that push my boundaries as a developer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.1 }} 
              className={`group relative p-10 bg-white dark:bg-zinc-950/60 backdrop-blur-3xl border border-slate-100 dark:border-white/5 rounded-[2rem] shadow-2xl dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-2 transition-all duration-500 ${item.glow} overflow-hidden flex flex-col`}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent pointer-events-none z-0"></div>
              
              <div className="relative z-10 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-amber-100/50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/50 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/50 px-4 py-2 rounded-full border border-amber-200 dark:border-amber-900/50">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-700 dark:text-zinc-400 font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <button 
                onClick={() => setSelectedAchievement(item)}
                className="relative z-10 mt-auto flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold hover:gap-4 transition-all w-fit group/btn cursor-pointer"
              >
                View Details <ArrowRight className="w-5 h-5 group-hover/btn:text-orange-500" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedAchievement && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)} 
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
              className="w-full max-w-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl dark:shadow-[0_40px_90px_rgba(0,0,0,0.8)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none"></div>

              <button 
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-amber-100 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/50">
                  {selectedAchievement.icon}
                </div>
                <span className="text-sm font-bold text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/30 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-900/50">
                  {selectedAchievement.date}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 relative z-10">
                {selectedAchievement.title}
              </h3>
              
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6 relative z-10"></div>

              <p className="text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-medium relative z-10">
                {selectedAchievement.fullDetails}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;