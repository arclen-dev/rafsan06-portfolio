import { motion } from "motion/react";
import { education } from "../data/portfolio";
import { Mail, Phone, ExternalLink, Send, Facebook, MessageCircle, Linkedin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-surface/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-ink">Education</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-minimal p-8 group hover:border-accent/40 bg-bg"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6 block border-b border-border pb-4 group-hover:border-accent/20">{edu.period}</span>
              <h3 className="text-lg font-bold text-ink mb-1">{edu.school}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{edu.degree}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-ink mb-8 leading-tight">
              Want to <span className="text-accent">contact me?</span>
            </h3>
            
            <div className="grid gap-10 mt-16">
              <a href="mailto:mansifurrahmanr.06@gmail.com" className="group block">
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 group-hover:text-accent transition-colors">Email</p>
                <div className="flex items-center space-x-2">
                  <span className="text-lg lg:text-xl font-medium text-ink group-hover:underline underline-offset-8 decoration-accent/30 transition-all break-all">
                    mansifurrahmanr.06@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex flex-col sm:flex-row gap-10">
                <a href="https://wa.me/8801882602018" target="_blank" rel="noreferrer" className="group block">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 group-hover:text-accent-secondary transition-colors">WhatsApp</p>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent-secondary/10 rounded-lg group-hover:bg-accent-secondary/20 transition-colors">
                      <MessageCircle size={18} className="text-accent-secondary" />
                    </div>
                    <span className="text-lg font-medium text-ink">+8801882602018</span>
                  </div>
                </a>
                
                <a href="https://facebook.com/mrrafsan006" target="_blank" rel="noreferrer" className="group block">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 group-hover:text-accent transition-colors">Facebook</p>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Facebook size={18} className="text-accent" />
                    </div>
                    <span className="text-lg font-medium text-ink">mrrafsan006</span>
                  </div>
                </a>

                <a href="https://linkedin.com/in/mrrafsan06" target="_blank" rel="noreferrer" className="group block">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 group-hover:text-[#0a66c2] transition-colors">LinkedIn</p>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#0a66c2]/10 rounded-lg group-hover:bg-[#0a66c2]/20 transition-colors">
                      <Linkedin size={18} className="text-[#0a66c2]" />
                    </div>
                    <span className="text-lg font-medium text-ink">mrrafsan06</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border border-border rounded-3xl bg-surface/50 backdrop-blur-sm relative z-10 w-full"
          >
            <form action="mailto:mansifurrahmanr.06@gmail.com" className="space-y-8">
              <div className="grid gap-8">
                <div className="relative">
                  <input type="text" id="name" className="peer w-full bg-transparent border-b border-border py-2 focus:outline-hidden focus:border-accent transition-colors placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-400 text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-accent">Name</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" className="peer w-full bg-transparent border-b border-border py-2 focus:outline-hidden focus:border-accent transition-colors placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-accent">Email</label>
                </div>
                <div className="relative">
                  <textarea id="message" rows={3} className="peer w-full bg-transparent border-b border-border py-2 focus:outline-hidden focus:border-accent transition-colors placeholder-transparent resize-none" placeholder="Message" />
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-400 text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-accent">Message</label>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-ink text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center space-x-3 transition-all hover:bg-black shadow-xl"
              >
                <span>Send Message</span>
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-32 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 space-y-6 md:space-y-0 text-center">
          <p>© 2026 Mansifur Rahman Rafsan</p>
          <div className="flex items-center space-x-8">
            <a href="https://facebook.com/mrrafsan006" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Facebook</a>
            <a href="https://linkedin.com/in/mrrafsan06" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://wa.me/8801882602018" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">WhatsApp</a>
          </div>
          <p>Alias: arclen</p>
        </div>
      </div>
    </section>
  );
}

