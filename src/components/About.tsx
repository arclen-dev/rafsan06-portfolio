import { motion } from "motion/react";
import { Code, Palette, Monitor, PenTool, Brain } from "lucide-react";

const skills = [
  { icon: Code, name: "Web Dev" },
  { icon: Palette, name: "Brand Design" },
  { icon: Monitor, name: "Systems" },
  { icon: PenTool, name: "Writing" },
  { icon: Brain, name: "AI Tools" },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border bg-bg relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink mb-8">
              Background
            </h2>
            <div className="space-y-6 text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-light">
              <p>
                I am currently a student at the <span className="text-accent font-medium">Institute of Business Administration (IBA), University of Dhaka</span>. My work exists at the intersection of logical infrastructure and creative expression.
              </p>
              <p>
                From coordinating digital departments for the <span className="text-accent-secondary font-medium italic">Notre Dame Information Technology Club</span> to developing exposure frameworks for speech fluency, I focus on building tools that facilitate better communication and organization.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-5 py-2.5 rounded-full border border-border bg-surface flex items-center space-x-3 text-sm font-medium text-slate-500 dark:text-slate-400"
                >
                  <skill.icon size={16} className="text-accent" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-square bg-accent/5 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-accent/10 transition-colors">
                <Code size={40} className="text-accent mb-4 transform group-hover:scale-110 transition-transform" />
                <h4 className="text-ink font-bold">Dev</h4>
              </div>
              <div className="aspect-[4/3] bg-accent-secondary/5 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-accent-secondary/10 transition-colors">
                <Palette size={32} className="text-accent-secondary mb-3 transform group-hover:scale-110 transition-transform" />
                <h4 className="text-ink font-bold">Design</h4>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] bg-accent-secondary/5 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-accent-secondary/10 transition-colors">
                <Brain size={32} className="text-accent-secondary mb-3 transform group-hover:scale-110 transition-transform" />
                <h4 className="text-ink font-bold">AI</h4>
              </div>
              <div className="aspect-square bg-accent/5 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-accent/10 transition-colors">
                <Monitor size={40} className="text-accent mb-4 transform group-hover:scale-110 transition-transform" />
                <h4 className="text-ink font-bold">Arch</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



