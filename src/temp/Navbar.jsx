import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Moon, Code2 } from "lucide-react";

const Navbar = ({ activeSection }) => {
  const [isDark, setIsDark] = useState(true);
  const { scrollY } = useScroll();

  const navAvatarOpacity = useTransform(scrollY, [100, 300], [0, 1]);
  const navAvatarScale = useTransform(scrollY, [100, 300], [0.2, 1]);
  const navAvatarWidth = useTransform(scrollY, [100, 300], [0, 32]);
  const navAvatarMargin = useTransform(scrollY, [100, 300], [0, 12]);
  const codeIconWidth = useTransform(scrollY, [100, 300], [24, 0]);
  const codeIconOpacity = useTransform(scrollY, [100, 300], [1, 0]);
  const codeIconMargin = useTransform(scrollY, [100, 300], [8, 0]);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "project", label: "Project" },
    { id: "achievement", label: "Achievement" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-6 inset-x-0 flex justify-center z-[100] px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between px-6 py-3 w-full max-w-5xl bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl border border-white/50 dark:border-zinc-700/50 rounded-full shadow-xl dark:shadow-black/50"
      >
        <a href="/">
          <div className="flex items-center text-xl font-black tracking-tighter text-slate-900 dark:text-white overflow-visible">
            <motion.div
              style={{
                opacity: navAvatarOpacity,
                scale: navAvatarScale,
                width: navAvatarWidth,
                marginRight: navAvatarMargin,
              }}
              className="h-8 rounded-full overflow-hidden border-2 border-cyan-500 shrink-0 shadow-lg"
            >
              <img
                src="https://res.cloudinary.com/denl6qm57/image/upload/v1773929817/IMG_20250322_171436_030_tkiwfd.webp"
                alt="Aadarsh"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                width: codeIconWidth,
                opacity: codeIconOpacity,
                marginRight: codeIconMargin,
              }}
              className="shrink-0 overflow-hidden flex items-center"
            >
              <Code2 className="text-cyan-500 w-6 h-6 shrink-0" />
            </motion.div>
            Aadarsh<span className="text-cyan-500">.</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1 text-sm font-bold text-slate-600 dark:text-zinc-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${isActive ? "text-slate-900 dark:text-white" : "hover:text-cyan-600 dark:hover:text-cyan-400"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-slate-200/50 dark:bg-zinc-800/60 rounded-full -z-10 border border-slate-300/50 dark:border-zinc-700/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2.5 rounded-full bg-slate-200/50 dark:bg-zinc-800/50 text-slate-800 dark:text-zinc-200 hover:scale-110 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-all cursor-pointer"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </motion.nav>
    </div>
  );
};

export default Navbar;
