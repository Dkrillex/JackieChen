import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Sun, Moon, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav 
        className={`
          flex items-center gap-1 sm:gap-6 px-6 py-3 
          rounded-full transition-all duration-300
          ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700' : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-transparent'}
        `}
      >
        <ul className="flex items-center gap-1 sm:gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="px-2 py-1 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
                {item.external && <ExternalLink size={12} className="opacity-50" />}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-2" />
        
        <button 
          onClick={toggleTheme}
          className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
          aria-label="Toggle theme"
        >
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </nav>
    </div>
  );
};