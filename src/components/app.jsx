import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Results from './components/Results';
import TargetAudience from './components/TargetAudience';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  };

  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-neon-green selection:text-dark-bg cursor-none relative">
      <div className="noise-overlay" />

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-neon-orange/30 rounded-full pointer-events-none z-[100] backdrop-blur-[2px] border border-neon-orange/50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Small dot follower */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-orange rounded-full pointer-events-none z-[101] hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      />

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