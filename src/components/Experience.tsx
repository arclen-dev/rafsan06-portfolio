import { motion } from "motion/react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-ink">Professional Path</h2>
        </motion.div>

        <div className="space-y-16">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start group"
            >
              <div className="pt-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 group-hover:text-accent transition-colors">
                  {item.period}
                </span>
              </div>
              
              <div className="pb-8 border-b border-border last:border-0 last:pb-0">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-bold text-accent transition-colors mb-1">{item.role}</h3>
                  <p className="text-accent-secondary text-sm font-bold tracking-wide">{item.company}</p>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


