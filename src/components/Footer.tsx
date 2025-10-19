import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; 2025 MTAANIMATION. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" /> by Fredrick Lani
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
