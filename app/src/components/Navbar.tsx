import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300">
      <div className={`flex items-center px-8 py-3 rounded-full shadow-lg transition-all duration-300 ${
        scrolled ? 'bg-[#0F1624]' : 'bg-[#0F1624]/90'
      }`}>
        <ul className="flex items-center space-x-8">
          <li>
            <Link to="/">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-all">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-orange-300 transition-colors font-medium">
              About
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <img
              src="https://i.ibb.co/hxjKR9TZ/aws-cloud-clubs-removebg-preview.png"
              alt="AWS Logo"
              className="w-14 h-14"
            />
          </li>
          <li>
            <Link to="/blog" className="text-white hover:text-orange-300 transition-colors font-medium">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/events" className="text-white hover:text-orange-300 transition-colors font-medium">
              Events
            </Link>
          </li>
          <li>
            <Link to="/teams" className="text-white hover:text-orange-300 transition-colors font-medium">
              Teams
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
