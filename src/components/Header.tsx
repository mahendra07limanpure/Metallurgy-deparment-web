import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-academic-blue rounded-md flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-white" />
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
                className={`px-4 py-2 font-medium transition-colors duration-200 rounded-md ${
                  location.pathname === item.path
                    ? 'text-academic-blue bg-academic-blue/10'
                    : 'text-academic-gray hover:text-academic-blue'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-md bg-white text-academic-gray hover:text-academic-blue transition-colors"
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
                  className={`block px-4 py-3 font-medium transition-colors ${
                    location.pathname === item.path
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