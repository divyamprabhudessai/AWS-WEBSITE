import React, { useState, useEffect } from 'react';
import { Cloud } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300`}>
      <div className={`flex items-center px-8 py-3 rounded-full shadow-lg transition-all duration-300 ${
        scrolled ? 'bg-[#0F1624]' : 'bg-[#0F1624]/90'
      }`}>
        <ul className="flex items-center space-x-8">
          <li>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-all">
              Home
            </button>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-orange-300 transition-colors font-medium">About</a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-orange-300 transition-colors font-medium">Service</a>
          </li>
          <li className="flex items-center space-x-1">
            <Cloud size={20} className="text-[#FF9900]" />
            <span className="text-[#FF9900] font-bold text-lg">AWS</span>
          </li>
          <li>
            <a href="#resume" className="text-white hover:text-orange-300 transition-colors font-medium">Resume</a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-orange-300 transition-colors font-medium">Project</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-orange-300 transition-colors font-medium">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
