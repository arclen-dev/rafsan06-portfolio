import { motion } from "motion/react";
import { projects } from "../data/portfolio";
import { ExternalLink, Monitor, Palette, Globe, Layers } from "lucide-react";

const getIcon = (type: string) => {
  switch (type) {
    case "Personal Project": return <Monitor size={18} />;
    case "Club Site": return <Globe size={18} />;
    case "SaaS": return <Layers size={18} />;
    case "Freelance": return <Palette size={18} />;
    default: return <ExternalLink size={18} />;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface relative">
      <div className="absolute inset-0 decoration-dots opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-ink mb-4">Projects</h2>
          <p className="text-slate-500 dark:text-slate-400 font-light max-w-xl">A curation of digital products, systems, and identities developed for institutional and personal contexts.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-minimal group hover:border-accent/30 p-8 flex flex-col"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="text-slate-400 group-hover:text-accent transition-colors">
                  {getIcon(project.type)}
                </div>
                {project.status && (
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-accent-secondary/10 text-accent-secondary rounded-full border border-accent-secondary/10">
                    {project.status}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3 text-ink group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-light mb-8 flex-grow leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-6 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-ink transition-all"
                >
                  <span>Explore Project</span>
                  <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


