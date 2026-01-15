
import React from 'react';
import { COLORS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: COLORS.secondary }}>
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-2xl font-bold mb-4">LOCATION</h4>
          <p className="text-lg">
            Chania, Crete, Greece<br />
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">AROUND THE WEB</h4>
          <div className="flex justify-center gap-4">
            {[
              { icon: faGithub, link: 'https://github.com/ISeferli' },
              { icon: faLinkedin, link: 'https://www.linkedin.com/in/iliodora-seferli-926ab8187/' },
              { icon: faItchIo, link: 'https://iseferli.itch.io' },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.link} 
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-800 transition-all duration-300"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-8 bg-slate-900/50">
        <p className="text-sm">Copyright © Sungift 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
