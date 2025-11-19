import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research & Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of strategic analysis and data modeling projects bridging business and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const Icon = project.icon!;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-secondary rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-surface"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="p-8 h-full flex flex-col relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary rounded-lg text-accent group-hover:text-white group-hover:bg-accent transition-colors border border-surface">
                      <Icon size={24} />
                    </div>
                    <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-highlight mb-4 font-medium">{project.subtitle}</p>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {project.description.slice(0, 2).map((desc, i) => (
                      <li key={i} className="text-zinc-400 text-sm line-clamp-3 list-disc list-inside marker:text-accent">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-surface">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 bg-primary text-zinc-300 rounded border border-surface/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;