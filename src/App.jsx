import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Results from './components/Results';
import TargetAudience from './components/TargetAudience';
import Contact from './components/Contact';
import FluidCursor from './components/FluidCursor';

function App() {



  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-neon-green selection:text-dark-bg cursor-none relative">
      <div className="noise-overlay" />

      {/* Fluid Cursor */}
      <FluidCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Plans />
        <Results />
        <TargetAudience />
        <Contact />
      </main>

      <footer className="py-8 bg-black text-center text-gray-500 text-sm border-t border-white/5">
        <p>Â© {new Date().getFullYear()} Pedro Silva Personal Trainer. Todos os direitos reservados.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="https://www.instagram.com/pdrpersonal" target="_blank" rel="noopener noreferrer" className="hover:text-neon-orange transition-colors">Instagram</a>
          <a href="https://wa.me/5583999373803" target="_blank" rel="noopener noreferrer" className="hover:text-neon-orange transition-colors">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}

export default App;