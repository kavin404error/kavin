import { useState, useEffect } from 'react';
import { ArrowUp, Shield } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative py-12 px-4 border-t border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              KAVIN KUMAR K
            </h3>
            <p className="text-gray-400">SOC L1 Analyst</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#soc-section" className="hover:text-cyan-400 transition-colors">
              SOC Levels
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">Monitoring. Detecting. Defending.</p>
            <p>Copyright © 2026 KAVIN KUMAR K. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 group z-50"
          aria-label="Scroll to top"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
          <div className="relative p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110">
            <ArrowUp className="w-6 h-6 text-white" />
          </div>
        </button>
      )}
    </>
  );
}
