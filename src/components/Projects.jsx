import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionSpotlight from './SectionSpotlight';

const projects = [
  {
    title: "Studynotion",
    description: "A full-featured EdTech platform that enables users to explore courses, watch lectures, and make secure payments. Includes user authentication, course management, and seamless Razorpay payment integration.",
    href: "https://arya-studynotion.netlify.app/",
    tech: ["React", "Nodejs", "Razorpay Payment Gateway"],
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/10 group-hover:shadow-[0_20px_60px_rgba(6,182,212,0.3)]"
  },
  {
    title: "Thread Clone",
    description: "A social media application inspired by Threads, allowing users to create posts, interact in real-time, and engage with a dynamic feed using modern frontend and backend technologies.",
    href: "https://main--inspiring-alfajores-6ac495.netlify.app/",
    tech: ["React.js", "Node.js", "WebSockets"],
    color: "from-fuchsia-500 to-purple-500",
    glow: "shadow-fuchsia-500/10 group-hover:shadow-[0_20px_60px_rgba(217,70,239,0.3)]"
  },
  {
    title: "Codepen Clone",
    description: "A web-based code editor that allows users to write, preview, and share HTML, CSS, and JavaScript in real-time, replicating the core functionality of CodePen.",
    href: "https://main--arya-codepen.netlify.app/",
    tech: ["Firebase", "React"],
    color: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/10 group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.3)]"
  }
];

const Projects = () => {
  return (
    <section className="relative py-32 px-6" id='project'>
      <SectionSpotlight />
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Works.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 font-medium">
          Scroll down to see my latest full-stack builds stack up.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto relative w-full">
        {projects.map((project, index) => {
          const topOffset = 140 + (index * 40); 
          return (
            <div key={index} className="sticky w-full mb-32 transition-all duration-500" style={{ top: `${topOffset}px` }}>
              <div className={`w-full group bg-white/95 dark:bg-zinc-950/80 backdrop-blur-3xl border border-slate-100 dark:border-white/10 rounded-[2.5rem] shadow-2xl dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px] transition-all duration-300 hover:-translate-y-2 ${project.glow}`}>
                
                <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center relative">
                  <div className={`absolute top-0 left-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-10 dark:opacity-5 blur-[100px] pointer-events-none`}></div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 relative z-10">{project.title}</h3>
                  <p className="text-slate-700 dark:text-zinc-300 text-lg mb-8 leading-relaxed font-medium relative z-10">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-10 relative z-10">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-5 py-2 rounded-full text-sm font-bold bg-slate-100 dark:bg-black/30 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-white/5 backdrop-blur-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 mt-auto relative z-10">
                    <a href={project.href} className="flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-cyan-600 transition-colors group">
                      <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Live Site
                    </a>
                  </div>
                </div>

                <div className={`w-full md:w-1/2 h-64 md:h-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center p-8`}>
                  <div className="w-full h-full bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/30 dark:border-white/20 shadow-2xl flex flex-col overflow-hidden transition-transform duration-700">
                     <div className="h-8 bg-white/20 dark:bg-black/20 backdrop-blur-md flex items-center px-4 gap-2 w-full border-b border-white/20 dark:border-white/10">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-white/90 font-black text-3xl md:text-5xl tracking-tighter uppercase drop-shadow-lg">
                        Project {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;