import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Research', path: '/research' },
    { name: 'Programs', path: '/programs' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white shadow-sm'
        }`}
    >

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              {/* Use site favicon/logo from public/ (iitr.ico) as the header mark */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src="/iitr.ico"
                  alt="MME Department logo"
                  className="w-10 h-10 object-contain"
                />
              </div>

            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-academic-gray">
                MME Department
              </h1>
              <p className="text-sm text-gray-600">IIT Roorkee</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 font-medium transition-all duration-200 rounded-md group ${location.pathname === item.path
                    ? 'text-academic-blue'
                    : 'text-academic-gray hover:text-academic-blue'
                  }`}
              >
                {item.name}

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-[2px] bg-academic-blue transition-transform duration-300 origin-left ${location.pathname === item.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                ></span>
              </Link>

            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-lg bg-white border border-gray-200 text-academic-gray hover:text-academic-blue transition-colors shadow-sm"

            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-label="Mobile menu">
            <nav className="px-4 py-6 bg-white border-t mt-2" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 font-medium transition-colors ${location.pathname === item.path
                      ? 'text-academic-blue bg-academic-blue/10 rounded-md'
                      : 'text-academic-gray hover:text-academic-blue'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;