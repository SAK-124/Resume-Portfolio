import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tech decoration line */}
          <div className="flex items-center justify-center gap-4 mb-6 opacity-50">
             <div className="h-[1px] w-12 bg-accent"></div>
             <span className="text-accent font-mono text-xs tracking-[0.3em]">SYSTEM ONLINE</span>
             <div className="h-[1px] w-12 bg-accent"></div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-none tracking-tight">
            SABOOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-highlight">
              ALI KHAN
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto font-light font-sans">
            {CONTACT_INFO.tagline}
          </p>
          
          <p className="text-zinc-500 mb-12 max-w-3xl mx-auto leading-relaxed font-mono text-sm md:text-base bg-secondary/50 p-4 rounded border border-surface/50 backdrop-blur-sm">
            &lt;bio&gt; {CONTACT_INFO.bio} &lt;/bio&gt;
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact"
              className="px-8 py-4 bg-zinc-100 text-black font-bold font-display tracking-wider rounded-sm hover:bg-accent hover:text-white hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] clip-path-slant"
            >
              <Mail size={20} />
              INITIATE CONTACT
            </a>
            <a 
              href={`https://${CONTACT_INFO.linkedin}`}
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 border border-zinc-700 text-white font-bold font-display tracking-wider rounded-sm hover:border-accent hover:text-accent hover:scale-105 transition-all flex items-center justify-center gap-2 bg-secondary/50 backdrop-blur-sm"
            >
              <Linkedin size={20} />
              LINKEDIN
            </a>
             <button 
              className="px-8 py-4 border border-zinc-700 text-white font-bold font-display tracking-wider rounded-sm hover:border-highlight hover:text-highlight hover:scale-105 transition-all flex items-center justify-center gap-2 bg-secondary/50 backdrop-blur-sm"
            >
              <Download size={20} />
              RESUME.PDF
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent/50"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;