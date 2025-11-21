import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA, GITHUB_REPOS, CERTIFICATIONS_DATA } from '../constants';
import { Award, Github, Star, GitFork, ExternalLink } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left: Skills List (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10 flex items-center gap-3">
                <span className="text-accent">04.</span> TECHNICAL ARSENAL
              </h2>

              <div className="grid gap-6">
                {SKILLS_DATA.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-secondary/40 p-6 rounded-r-xl border-l-4 border-l-accent border-y border-r border-surface backdrop-blur-sm hover:bg-secondary/60 transition-colors group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="text-accent group-hover:text-white transition-colors" size={24} />
                        <h3 className="text-xl font-display font-bold text-zinc-200">{category.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-primary/80 text-zinc-300 text-sm font-mono rounded border border-surface hover:border-accent hover:text-accent transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: GitHub & Certs (5 Cols) */}
          <div className="lg:col-span-5 space-y-10">

            {/* GitHub Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                  <Github className="text-white" /> Code Repositories
                </h3>
                <a href="https://github.com/SAK-124" target="_blank" rel="noreferrer" className="text-sm text-accent hover:text-highlight transition-colors font-mono">
                  View Profile &rarr;
                </a>
              </div>

              <div className="space-y-4">
                {GITHUB_REPOS.map((repo, i) => (
                  <a
                    key={i}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-5 bg-secondary rounded-lg border border-surface hover:border-accent transition-all group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-highlight font-bold group-hover:text-accent transition-colors">{repo.name}</h4>
                      <ExternalLink size={14} className="text-zinc-600 group-hover:text-accent" />
                    </div>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2 font-light">{repo.description}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-tech"></span>
                        {repo.language}
                      </span>
                      <span className="flex items-center gap-1 hover:text-white transition-colors">
                        <Star size={12} /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1 hover:text-white transition-colors">
                        <GitFork size={12} /> {repo.forks}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Award className="text-yellow-400" /> Certifications
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {CERTIFICATIONS_DATA.map((cert, index) => (
                  <div key={index} className="p-4 bg-secondary/50 border border-surface rounded hover:bg-secondary transition-colors flex items-center justify-between">
                    <div>
                      <h4 className="text-zinc-200 font-semibold text-sm">{cert.name}</h4>
                      <p className="text-zinc-500 text-xs font-mono mt-1">{cert.issuer}</p>
                    </div>
                    {cert.date && (
                      <span className="text-xs text-zinc-500 bg-primary px-2 py-1 rounded border border-surface">{cert.date}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;