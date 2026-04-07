import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import SectionSpotlight from './SectionSpotlight';
import { useState } from 'react';
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const emailAddress = "aadarshraj.dev.js@gmail.com"; // Replace with the actual email address
    const subject = `Request from ${name}`; // Replace with the desired subject
    const body = message; // Replace with the desired body

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
     Swal.fire({
    title: "Success!",
    text: `Thanks for contacting me, ${name}`,
    icon: "success",
    confirmButtonText: "OK",
  });
  };

  return (
    <section className="relative pt-32 pb-10 overflow-hidden" id={"contact"}>
      
      <SectionSpotlight />

      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 leading-tight">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">something</span> <br />
              together.
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-xl text-slate-600 dark:text-zinc-400 font-medium mb-10">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </motion.p>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="flex items-center justify-center lg:justify-start gap-6">
              <a href="mailto:aadarshraj.dev.js@gmail.com" className="group flex items-center gap-4 text-xl font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors p-4 bg-white/50 dark:bg-zinc-900/50 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-lg">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> 
                </div>
                aadarshraj.dev.js@gmail.com
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
            <form className="p-8 md:p-12 bg-white/90 dark:bg-zinc-900/60 backdrop-blur-3xl border border-slate-100 dark:border-white/10 rounded-[2.5rem] shadow-2xl dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-zinc-300 ml-2">Your Name</label>
                <input type="text" placeholder="John Doe" onChange={(e)=> setName(e.target.value)} value={name} className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600 font-medium shadow-inner" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-zinc-300 ml-2">Email Address</label>
                <input type="email" placeholder="john@example.com" onChange={(e)=> setEmail(e.target.value)} value={email} className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600 font-medium shadow-inner" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-zinc-300 ml-2">Message</label>
                <textarea rows="4" placeholder="How can I help you?" onChange={(e)=> setMessage(e.target.value)} value={message} className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600 font-medium resize-none shadow-inner"></textarea>
              </div>

              <button type="button" onClick={handleClick} className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] mt-2 cursor-pointer">
                Send Message <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-zinc-800 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 dark:text-zinc-400 font-medium">
          <p className="flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> by Aadarsh © {new Date().getFullYear()}
          </p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/Aadarsh-Raj" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/aadarsh-raj-80b862216/" target="_blank" className="hover:text-cyan-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://x.com/Aadarsh06062001" className="hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;