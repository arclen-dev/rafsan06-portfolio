import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden hero-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-accent-secondary/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left w-full lg:max-w-[90%]"
        >
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-ink mb-6 leading-[1.05] tracking-tight">
            Hi, I am <br />
            <span className="text-accent underline decoration-accent/20 underline-offset-8">Mansifur Rahman Rafsan.</span>
          </h1>
          
          <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-slate-500 dark:text-slate-400 mb-10 font-light italic leading-relaxed">
            {"{ "} 
            <span className="text-ink font-semibold">IBA BBA Student</span>, 
            Creative Learner and 
            <span className="text-accent-secondary font-mono"> Linux Enthusiast </span>
            {" }"}
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-ink text-bg rounded-2xl font-bold shadow-xl shadow-ink/10 flex items-center space-x-3 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "var(--color-border)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-border text-ink rounded-2xl font-bold transition-all flex items-center space-x-3"
            >
              <span>Say Hello</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative max-w-[320px] md:max-w-md mx-auto lg:ml-auto group"
        >
          {/* Decorative Ring */}
          <div className="absolute -inset-4 bg-linear-to-tr from-accent/30 to-accent-secondary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-1000 opacity-50" />
          
          {/* Circular Image Container */}
          <div className="relative aspect-square rounded-full border-8 border-bg overflow-hidden shadow-2xl z-10">
            <img 
              src="/profile.jpg" 
              alt="Mansifur Rahman Rafsan"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 p-5 bg-bg border border-border rounded-2xl shadow-2xl z-20 hidden sm:block">
            <Terminal size={24} className="text-accent mb-2" />
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-secondary">ARCLEN</p>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
      >
        <div className="w-1 h-12 bg-linear-to-b from-accent to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}



