import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Facebook, Send } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/mrrafsan06", color: "hover:text-[#0077b5]" },
    { icon: Facebook, href: "https://fb.com/mrrafsan06", color: "hover:text-[#1877f2]" },
  ];

  return (
    <footer id="contact" className="py-24 bg-surface pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 capitalize">Let's build <br /> <span className="text-gradient">the next idea.</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether it's a brand identity, a system rice, or a business strategy—I'm always open to new challenges.
            </p>

            <div className="space-y-6">
              <a href="mailto:mansifurrahmanr.06@gmail.com" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Mail</p>
                  <p className="text-white font-medium">mansifurrahmanr.06@gmail.com</p>
                </div>
              </a>

              <a href="tel:+8801882602018" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Call</p>
                  <p className="text-white font-medium">+880 1882 602018</p>
                </div>
              </a>
            </div>

            <div className="flex space-x-4 mt-12">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 ${social.color} transition-all hover:scale-110`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <form action="mailto:mansifurrahmanr.06@gmail.com" method="get" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-accent transition-colors" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-accent transition-colors" placeholder="Inquiry" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-accent transition-colors resize-none" placeholder="Your idea..."></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all glow active:scale-95"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-4 md:space-y-0">
          <p>© 2026 Mansifur Rahman Rafsan. Built with React & ArcOS Spirit.</p>
          <p className="font-mono uppercase tracking-widest">Done is better than perfect.</p>
        </div>
      </div>
    </footer>
  );
}
