import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900/50 to-slate-900"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Fredrick Lani
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-cyan-400 mb-4 font-light">
              Founder & Creative Technologist
            </h2>
            <p className="text-xl md:text-2xl text-cyan-300/80 mb-8">
              at MTAANIMATION
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Blending technology, creativity, and storytelling
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="./resume.pdf"
              download
              className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border-2 border-cyan-500/50 hover:border-cyan-500 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 justify-center mt-12"
          >
            <a
              href="https://linkedin.com/in/fredricklani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:lani@mtaanimation.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
