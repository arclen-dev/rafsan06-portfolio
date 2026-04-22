import { motion } from "motion/react";
import { Menu, X, Github, Linkedin, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold tracking-tight text-ink"
        >
          RAFSAN<span className="text-accent">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-ink transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-5 border-l border-border pl-8">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-ink transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="https://github.com/arclen-dev" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-ink transition-all">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/mrrafsan06" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-ink transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-slate-400"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="text-ink" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden absolute top-full left-0 w-full bg-bg border-b border-border py-8 flex flex-col items-center space-y-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-ink"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-8 pt-4">
            <a href="https://github.com/arclen-dev" target="_blank" rel="noreferrer" className="text-slate-400">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/mrrafsan06" target="_blank" rel="noreferrer" className="text-slate-400">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}


