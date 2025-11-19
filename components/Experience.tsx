import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-highlight mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-8">
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/80 backdrop-blur-sm rounded-2xl p-8 border border-surface hover:border-highlight/50 transition-all shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                  <div className="flex items-center gap-2 text-highlight text-lg">
                    <Briefcase size={18} />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className="px-4 py-1 bg-surface/50 rounded-full text-sm text-zinc-300 whitespace-nowrap font-mono border border-surface">
                  {job.period}
                </div>
              </div>

              <div className="space-y-3">
                {job.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 shrink-0" size={18} />
                    <p className="text-zinc-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;