import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Calendar, Sparkles } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facts = [
    { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya' },
    { icon: Mail, label: 'Email', value: 'lani@mtaanimation.com' },
    { icon: Calendar, label: 'Experience', value: '8+ Years' },
    { icon: Sparkles, label: 'Specialty', value: 'Animation & Full Stack' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-slate-700/50 shadow-xl"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Award-winning <span className="text-cyan-400 font-semibold">IT Systems Engineer, Full Stack Developer & Animator</span> with 5+ years of
              experience delivering integrated technical and creative solutions. Founder and Creative Lead at
              <span className="text-cyan-400 font-semibold"> MTAANIMATION</span>, combining systems engineering, web development and high-impact
              animation to produce commercial campaigns, educational series and interactive web
              experiences. Skilled at leading multidisciplinary teams, building animation pipelines, and
              scaling creative products for regional distribution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Quick Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <fact.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{fact.label}</p>
                      <p className="text-white font-semibold">{fact.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
