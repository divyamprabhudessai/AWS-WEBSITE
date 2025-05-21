import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const location = useLocation();

  // Nav items config
  const navItemsLeft = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];
  const navItemsRight = [
    { name: 'Blogs', path: '/blog' },
    { name: 'Events', path: '/events' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine if item is active or hovered
  const isActiveOrHovered = (item: { name: string; path: string }) =>
    hovered === item.name || location.pathname === item.path;

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300">
      <div className={`flex items-center px-8 py-3 rounded-full shadow-lg transition-all duration-300 ${
        scrolled ? 'bg-[#0F1624]' : 'bg-[#0F1624]/90'
      }`}>
        <ul className="flex items-center space-x-8">
          {/* Left nav items */}
          {navItemsLeft.map((item) => (
            <li key={item.name} className="relative flex items-center">
              <Link
                to={item.path}
                className="font-medium transition-colors px-4 py-2 rounded-full z-10"
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: 'relative' }}
              >
                {/* Fade-in orange background highlight */}
                <span
                  className={`absolute inset-0 rounded-full bg-orange-500 -z-10 transition-opacity duration-300 ${
                    isActiveOrHovered(item) ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>
                <span className={item.name === 'Home' ? 'font-semibold text-white' : 'text-white'}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}

          {/* Logo in the center */}
          <li className="flex items-center mx-4">
            <img
              src="https://i.ibb.co/hxjKR9TZ/aws-cloud-clubs-removebg-preview.png"
              alt="AWS Logo"
              className="w-14 h-14"
            />
          </li>

          {/* Right nav items */}
          {navItemsRight.map((item) => (
            <li key={item.name} className="relative flex items-center">
              <Link
                to={item.path}
                className="font-medium transition-colors px-4 py-2 rounded-full z-10"
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: 'relative' }}
              >
                {/* Fade-in orange background highlight */}
                <span
                  className={`absolute inset-0 rounded-full bg-orange-500 -z-10 transition-opacity duration-300 ${
                    isActiveOrHovered(item) ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>
                <span className="text-white">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
