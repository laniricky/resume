import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Award, TrendingUp, GraduationCap, Film } from 'lucide-react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Film,
      title: 'Content Production',
      description: 'Produced 8 short animated films (2D & 3D) and 30+ commercial animation campaigns, collectively achieving 1M+ views/streams across platforms'
    },
    {
      icon: Award,
      title: 'Festival Recognition',
      description: 'Multiple films and shorts selected for screening at East African animation showcases and regional short-film festivals (2027–2029)'
    },
    {
      icon: Trophy,
      title: 'Awards & Commendations',
      description: 'Awarded jury and audience commendations at regional animation showcases for storytelling and motion design'
    },
    {
      icon: GraduationCap,
      title: 'Educational Series',
      description: 'Commissioned to develop a 3-episode animated educational series distributed to over 150 schools via partner edtech platforms'
    },
    {
      icon: TrendingUp,
      title: 'Pipeline Innovation',
      description: 'Designed and implemented an in-house animation pipeline that cut rendering and QA time by 40%, enabling higher throughput for client campaigns'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Mentored and trained over 60 junior animators and motion designers through the MTA Creative Tech Hub; several alumni now working professionally'
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <achievement.icon className="w-7 h-7 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
              <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Highlights</h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                <p>Secured multiple studio and production grants to fund creative projects and community workshops</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                <p>Led an animated public-awareness campaign that increased program engagement for a regional NGO by 120%</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                <p>Founder of MTA Creative Tech Hub (Kenya) - Training, mentorship and free workshops focused on animation, coding and digital storytelling for youth from underserved communities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
