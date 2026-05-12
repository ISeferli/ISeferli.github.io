
import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { label: 'Home',     path: '/' },
    { label: 'Projects', path: '/projects' },
    // { label: 'Blog',     path: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-6'} shadow-lg`} 
      style={{ backgroundColor: COLORS.secondary , opacity: isScrolled ? 0.8 : 1}}
    >
      <div className="container mx-auto px-4 flex relative items-center">
        <a href="#" className="text-white text-2xl font-bold tracking-wider absolute left-4">Iliodora Seferli</a>
        
        <div className="hidden md:flex space-x-8 mx-auto">
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className="relative text-white font-bold hover:text-[#B5A8D5] transition-colors nav-link tracking-widest text-sm"
              >
                {label}
                {isActive && (
                  <span className="absolute -top-1.5 -right-1.5 w-1.5 h-1.5 bg-[#B5A8D5] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>  

        {/* Mobile Menu Icon (Placeholder) */}
        <button className="md:hidden text-white border-2 border-white rounded px-3 py-1 text-sm font-bold uppercase ml-auto">
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
