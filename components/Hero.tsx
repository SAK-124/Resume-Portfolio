import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tech decoration line */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-70">
             <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-accent"></div>
             <span className="text-accent font-mono text-xs tracking-[0.5em] drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">SYSTEM ONLINE</span>
             <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </div>

          <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 leading-none tracking-tighter">
            SABOOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-highlight drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              ALI KHAN
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light font-sans tracking-wide">
            {CONTACT_INFO.tagline}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-highlight rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <p className="relative text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed font-mono text-sm md:text-base bg-secondary/80 p-6 rounded-lg border border-white/10 backdrop-blur-md shadow-2xl">
              <span className="text-accent">&lt;bio&gt;</span> {CONTACT_INFO.bio} <span className="text-accent">&lt;/bio&gt;</span>
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-white text-black font-bold font-display tracking-wider rounded-sm overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                <Mail size={20} />
                <span>INITIATE CONTACT</span>
              </div>
            </a>
            
            <a 
              href={`https://${CONTACT_INFO.linkedin}`}
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 border border-zinc-700 text-white font-bold font-display tracking-wider rounded-sm hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all flex items-center justify-center gap-2 bg-secondary/50 backdrop-blur-sm"
            >
              <Linkedin size={20} />
              LINKEDIN
            </a>
            
             <button 
              className="px-8 py-4 border border-zinc-700 text-white font-bold font-display tracking-wider rounded-sm hover:border-highlight hover:text-highlight hover:shadow-[0_0_20px_rgba(232,121,249,0.3)] transition-all flex items-center justify-center gap-2 bg-secondary/50 backdrop-blur-sm"
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