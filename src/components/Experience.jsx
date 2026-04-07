import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionSpotlight from './SectionSpotlight';

const experiences = [
  {
    role: "Web Developer",
    company: "Virtual Tech Masters",
    duration: "2024 - Present",
    description: "Leading full-stack development initiatives. Architecting modern web solutions to optimize digital ad performance and user experience.",
    tech: ["React", "TypeScript", "Node.js", "AWS", "MongoDb", "PostgressSql", "cPanel", "Supabase"]
  },
  {
    role: "MERN Stack Web Developer",
    company: "Geekster",
    duration: "2023 - 2024",
    description: "Producing minor and major projects.",
    tech: ["HTML", "CSS", "JavaScript", "Figma", "React.js", "Node.js", "MongoDb"]
  }
];

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress: pathProgress } = useScroll({ target: timelineRef, offset: ["start center", "end center"] });
  const lineHeight = useTransform(pathProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32 overflow-hidden min-h-screen" id='experience'>
      <SectionSpotlight />
      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div className="text-center mb-32">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Journey.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
            A timeline of my professional experience and the teams I've had the privilege to work with.
          </motion.p>
        </div>

        <div className="relative pb-20" ref={timelineRef}>
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-zinc-800 -translate-x-1/2 rounded-full"></div>

          <motion.div style={{ height: lineHeight }} className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-fuchsia-500 -translate-x-1/2 rounded-full z-10">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-t from-fuchsia-500 to-transparent blur-md translate-y-1/2 opacity-70"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_5px_rgba(217,70,239,1)] translate-y-1/2"></div>
          </motion.div>

          <div className="space-y-24 pt-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-20 md:pl-0`}>
                  <motion.div 
                    initial={{ backgroundColor: "#e2e8f0", borderColor: "#f8fafc", scale: 0.8 }} 
                    whileInView={{ backgroundColor: "#d946ef", borderColor: "#fdf4ff", scale: 1.2, boxShadow: "0 0 20px 4px rgba(217,70,239,0.5)" }}
                    viewport={{ once: true, margin: "-50% 0px -50% 0px" }} 
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full border-4 z-20 mt-6 md:mt-0"
                  ></motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50% 0px -50% 0px" }} 
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3, delay: 0.15 }}
                    className={`w-full md:w-[45%] bg-white dark:bg-zinc-950/60 backdrop-blur-3xl border border-slate-100 dark:border-white/5 rounded-3xl p-8 shadow-2xl dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(99,102,241,0.15)]`}
                  >
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-500">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-zinc-400 font-bold mt-2">
                          <Briefcase className="w-4 h-4" /> {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 px-4 py-2 rounded-full border border-indigo-100 dark:border-indigo-900/50 w-fit">
                        <Calendar className="w-4 h-4" /> {exp.duration}
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-zinc-300 mb-8 leading-relaxed font-medium">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-black/50 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;