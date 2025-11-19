import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-primary to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary/50 p-10 rounded-3xl border border-surface backdrop-blur-xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Collaborate</h2>
          <p className="text-zinc-400 text-lg mb-10">
            Looking for a data-driven strategist to join your team? 
            I'm available for internships and full-time roles.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex flex-col items-center p-6 bg-primary/50 rounded-xl hover:bg-primary transition-colors group border border-surface hover:border-accent"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-accent">
                <Mail size={24} />
              </div>
              <span className="text-zinc-300 text-sm md:text-base">{CONTACT_INFO.email}</span>
            </a>

            <div className="flex flex-col items-center p-6 bg-primary/50 rounded-xl border border-surface hover:border-tech hover:bg-primary transition-colors group cursor-default">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-tech">
                <Phone size={24} />
              </div>
              <span className="text-zinc-300 text-sm md:text-base">{CONTACT_INFO.phone}</span>
            </div>

             <a 
              href={`https://${CONTACT_INFO.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-6 bg-primary/50 rounded-xl hover:bg-primary transition-colors group border border-surface hover:border-blue-500"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-500">
                <Linkedin size={24} />
              </div>
              <span className="text-zinc-300 text-sm md:text-base">LinkedIn Profile</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm">
            <MapPin size={16} />
            <span>Karachi, Pakistan</span>
          </div>
        </motion.div>
        
        <footer className="mt-16 text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Saboor Ali Khan. Built with React, Tailwind & Framer Motion.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;