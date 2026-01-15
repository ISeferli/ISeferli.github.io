
import React from 'react';
import { StarSeparator, COLORS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: COLORS.primary }}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">ABOUT</h2>
        <StarSeparator light />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-lg mt-12 max-w-4xl mx-auto leading-relaxed">
          <p>
            I’m a passionate software developer with a strong interest in both web and game development. I enjoy exploring new technologies and applying them to solve real-world challenges. Currently, I’m working on small-scale projects and following courses on various game engines to better understand the mechanics, physics, and design principles behind different game genres. 
          </p>
          <p>
            This helps me become familiar with how games work under the hood and improve my overall development skills.
            I’m always looking for ways to grow as a developer, and discovering a new project to work on is something I truly enjoy. I hope you like the games I’ve created so far, and feel free to leave any feedback or comments on my itch.io page—your input helps me improve and refine my projects.
          </p>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/Iliodora_Seferli_cv.pdf" 
            className="inline-flex items-center gap-2 border-2 border-[#B5A8D5] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#B5A8D5] hover:text-[#211C84] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            Download CV!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
