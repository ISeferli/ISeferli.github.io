
import React from 'react';
import { StarSeparator, COLORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <header className="pt-40 pb-24 text-center px-4" style={{ backgroundColor: COLORS.primary }}>
      <div className="container mx-auto flex flex-col items-center">
        <img 
          src="/profile.jpg" 
          alt="Avatar" 
          className="rounded-full w-64 h-64 border-8 border-white shadow-2xl mb-8"
        />
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Iliodora Seferli</h1>
        <StarSeparator light />
        <p className="text-white text-xl md:text-2xl font-light">
          Software Engineer - Game Developer
        </p>
      </div>
    </header>
  );
};

export default Hero;
