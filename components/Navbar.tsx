
import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-6'} shadow-lg`} 
         style={{ backgroundColor: COLORS.secondary }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold tracking-wider">Iliodora Seferli</a>
        
        <div className="hidden md:flex space-x-8">
          {['Portfolio', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white font-bold hover:text-[#B5A8D5] transition-colors nav-link tracking-widest text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <button className="md:hidden text-white border-2 border-white rounded px-3 py-1 text-sm font-bold uppercase">
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
