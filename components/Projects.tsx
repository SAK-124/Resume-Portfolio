import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-secondary/30 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
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
                className="group relative h-full"
              >
                {/* Card Background & Border */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="p-4 bg-surface rounded-xl text-accent group-hover:text-white group-hover:bg-accent transition-all duration-300 border border-white/5 shadow-lg group-hover:shadow-accent/50">
                      <Icon size={28} />
                    </div>
                    <a href="#" className="p-2 text-zinc-500 hover:text-white transition-colors">
                      <ArrowUpRight size={24} />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 font-display tracking-wide group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-highlight mb-6 font-medium uppercase tracking-wider opacity-80">{project.subtitle}</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {project.description.slice(0, 3).map((desc, i) => (
                      <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1.5 bg-white/5 text-zinc-300 rounded-full border border-white/5 group-hover:border-accent/30 transition-colors">
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