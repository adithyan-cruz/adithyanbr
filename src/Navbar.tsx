import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/work', label: 'Work' },
  { path: '/social', label: 'Social' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <nav className="flex justify-between items-center w-full px-gutter py-6 max-w-container-max mx-auto">
        <Link to="/" className="font-headline-md text-headline-md text-stark-white dark:text-stark-white tracking-tighter uppercase hover:opacity-80 transition-opacity">
          ADITHYAN
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            // Treat /social as active when on /social or /Portfolio
            // (Since Portfolio.tsx is mapped to /social in App.tsx)
            const isActive = location.pathname === link.path || (link.path === '/social' && location.pathname === '/Portfolio');
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body-md text-body-md uppercase tracking-widest transition-colors duration-300 relative ${
                  isActive ? 'text-neon-lime font-bold' : 'text-stark-white hover:text-neon-lime'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-lime rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <Link to="/contact" className="bg-neon-lime text-pure-black px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-95 transition-all duration-200">
          Say Hello
        </Link>
      </nav>
    </header>
  );
}
