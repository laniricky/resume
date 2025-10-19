import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Film, Server } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Film,
      title: 'Animation & Media',
      color: 'cyan',
      skills: [
        'Toon Boom Harmony',
        'Adobe After Effects',
        'Premiere Pro',
        'Photoshop',
        'Illustrator',
        'Autodesk Maya',
        'Moho',
        'FlipaClip'
      ]
    },
    {
      icon: Code,
      title: 'Web Development',
      color: 'blue',
      skills: [
        'React',
        'Node.js',
        'Express',
        'PHP',
        'Python',
        'MySQL',
        'MongoDB',
        'TypeScript'
      ]
    },
    {
      icon: Server,
      title: 'Systems & Cloud',
      color: 'emerald',
      skills: [
        'Linux/Windows Server',
        'AWS/GCP',
        'Docker',
        'CDNs',
        'Render Pipeline Tools',
        'CI/CD',
        'Cloud Automation'
      ]
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      color: 'violet',
      skills: [
        'Figma',
        'Notion',
        'Git',
        'Jira',
        'Motion Graphics',
        'Visual Storytelling',
        'UI/UX Design'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
      cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30', iconBg: 'bg-cyan-500/20' },
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30', iconBg: 'bg-blue-500/20' },
      emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', iconBg: 'bg-emerald-500/20' },
      violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/30', iconBg: 'bg-violet-500/20' }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${colors.iconBg} rounded-lg`}>
                    <category.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className={`px-4 py-2 ${colors.bg} ${colors.text} ${colors.border} border rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Animation Direction & Pipeline Design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Full Stack Web Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Cloud Content Delivery & Media Ops</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Systems Integration & Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Team Leadership & Mentoring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Motion Graphics & Visual Storytelling</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
