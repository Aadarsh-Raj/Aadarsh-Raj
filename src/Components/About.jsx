import { motion } from 'framer-motion';
import { Layout, Server, Database } from 'lucide-react';

const skills = [
  {
    category: "Frontend Architecture",
    icon: <Layout className="w-8 h-8 text-cyan-500 dark:text-cyan-400 mb-4" />,
    desc: "Building buttery-smooth, responsive UIs with React, Next.js, and Framer Motion.",
    span: "md:col-span-2",
    glow: "group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)] dark:group-hover:shadow-[0_20px_60px_rgba(6,182,212,0.3)]"
  },
  {
    category: "Backend Systems",
    icon: <Server className="w-8 h-8 text-fuchsia-500 dark:text-fuchsia-400 mb-4" />,
    desc: "Architecting robust APIs and servers with Node.js and Express.",
    span: "md:col-span-1",
    glow: "group-hover:shadow-[0_20px_50px_rgba(217,70,239,0.2)] dark:group-hover:shadow-[0_20px_60px_rgba(217,70,239,0.3)]"
  },
  {
    category: "Database & Cloud Infrastructure",
    icon: <Database className="w-8 h-8 text-emerald-500 dark:text-emerald-400 mb-4" />,
    desc: "Managing complex data and seamless deployments using MongoDB, PostgreSQL, Docker, and AWS.",
    span: "md:col-span-3",
    glow: "group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] dark:group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.3)]"
  }
];

const tools = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "text-[#61DAFB]" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "text-slate-900 dark:text-white", filter: "dark:invert" },
  { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "text-[#06B6D4]" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "text-[#339933]" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "text-[#47A248]" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", color: "text-[#2496ED]" },
  { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "text-[#FF9900]", filter: "dark:invert" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", color: "text-[#F24E1E]" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "text-[#F05032]" },
];

const About = () => {
  return (
    <section className="relative pt-32 overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-5xl mx-auto relative z-10 px-6 w-full mb-32">
        <div className="text-center mb-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Arsenal.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            The elite stack and tools I use to build scalable, high-performance web applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} 
              className={`group relative p-8 rounded-[2rem] bg-white dark:bg-zinc-950/60 backdrop-blur-3xl border border-slate-100 dark:border-white/5 shadow-2xl dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10 ${skill.span} ${skill.glow}`}
            >
              <div className="relative z-10">
                {skill.icon}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{skill.category}</h3>
                <p className="text-slate-700 dark:text-zinc-300 font-medium leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full relative z-10 overflow-hidden flex bg-white/60 dark:bg-black/40 backdrop-blur-xl border-y border-slate-200 dark:border-white/10 py-10 shadow-sm dark:shadow-inner mt-auto">
        <motion.div animate={{ x: [0, -2000] }} transition={{ repeat: Infinity, ease: "linear", duration: 35 }} className="flex whitespace-nowrap gap-16 px-8 items-center">
          {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
            <div key={index} className="flex items-center gap-4 cursor-default group">
              <img src={tool.img} alt={tool.name} className={`w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 ${tool.filter || ''}`} />
              <span className={`text-4xl md:text-5xl font-black uppercase tracking-widest transition-all duration-500 ${tool.color} opacity-40 group-hover:opacity-100`}>
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;