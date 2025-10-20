import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Founder & Creative Lead',
      company: 'MTAANIMATION',
      location: 'Nairobi, Kenya',
      period: '2022 – Present',
      achievements: [
        'Founded and scaled MTAANIMATION into a full-service creative tech studio specializing in animation, motion design and web experiences',
        'Produced and delivered 30+ client animation campaigns (2D explainer videos, motion graphics, short-form ads) and 8 short films (2D & 3D)',
        'Built a reproducible production pipeline (storyboard → rigging → animation → compositing → delivery) that reduced turnaround time by 40%',
        'Implemented cloud-based asset management and CDN workflows enabling secure global distribution and streaming of animated content',
        'Oversaw creative direction, sound design coordination, voiceover casting and final delivery for broadcast and web',
        'Led workshops and bootcamps that trained 60+ junior animators and motion designers',
        'Collaborated with NGOs, edtech platforms and commercial brands to create socially impactful animated campaigns and learning series'
      ]
    },
    {
      title: 'IT Consultant & Systems Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2023 – 2025',
      achievements: [
        'Designed and deployed automation and cloud workflows for small businesses; built client sites and interactive microsites using React and Node.js',
        'Provided creative technical support for animation projects, integrating render farms and CI/CD for media assets'
      ]
    },
    {
      title: 'IT Personnel',
      company: 'Color Labels',
      location: 'Nairobi, Kenya',
      period: '2021 – 2022',
      achievements: [
        'Managed hardware/software installations, supported network and backup systems, and helped digitize workflows'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              >
                <div className="flex items-start gap-6">
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-800 z-10"></div>
                  <div className="md:hidden absolute left-8 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-800 z-10"></div>

                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700/50 shadow-xl hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-cyan-400 mb-1">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <p className="text-slate-400 text-sm">{exp.location}</p>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-lg">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
