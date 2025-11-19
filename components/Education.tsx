import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education Journey</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-zinc-800"></div>

          <div className="space-y-12">
            {EDUCATION_DATA.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary border-2 border-accent rounded-full z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>

                {/* Content Spacer for Desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div className={`ml-10 md:ml-0 w-full md:w-[45%] p-6 bg-secondary rounded-xl border border-surface hover:border-accent/50 transition-all shadow-lg group ${
                  index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                }`}>
                  <div className="flex items-center gap-3 mb-2 text-accent group-hover:text-highlight transition-colors">
                    <GraduationCap size={20} />
                    <h3 className="font-bold text-lg text-zinc-100">{edu.degree}</h3>
                  </div>
                  <h4 className="text-zinc-400 font-medium mb-2">{edu.institution}</h4>
                  <div className="flex items-center gap-2 text-sm text-zinc-500 font-mono">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;