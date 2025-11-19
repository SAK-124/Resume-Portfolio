import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BackgroundEffect from './components/BackgroundEffect';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-zinc-100 font-sans selection:bg-accent selection:text-white overflow-x-hidden">
      <BackgroundEffect />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;