import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavItemBase = { name: string; path: string };
type NavItemWithChildren = NavItemBase & { children: NavItemBase[] };
type NavigationItem = NavItemBase | NavItemWithChildren;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'People',
      path: '/people/faculty',
      children: [
        { name: 'Faculty', path: '/people/faculty' },
        { name: 'Students', path: '/people/students' },
      ],
    },
    { name: 'Research', path: '/research' },
    { name: 'Programs', path: '/programs' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isPeopleActive = location.pathname.startsWith('/people');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setPeopleOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white shadow-sm'
        }`}
    >

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex justify-between items-center h-24 lg:h-48">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              {/* Use site favicon/logo from public/ (iitr.ico) as the header mark */}
              <div className="w-16 h-16 lg:w-28 lg:h-28 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src="/iitr.ico"
                  alt="MME Department logo"
                  className="w-12 h-12 lg:w-24 lg:h-24 object-contain"
                />
              </div>

            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-5xl font-extrabold text-academic-gray leading-tight">
                Metallurgical & Materials Engineering
              </h1>
              <p className="text-base lg:text-xl text-gray-600">IIT Roorkee</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2" aria-label="Main navigation">
          {navigationItems.map((item) =>
            !('children' in item) ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 font-semibold transition-all duration-200 rounded-md group ${location.pathname === item.path
                      ? 'text-academic-blue-800'
                      : 'text-academic-gray hover:text-academic-blue-800'
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-[2px] bg-academic-blue-800 transition-transform duration-300 origin-left ${location.pathname === item.path
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                  ></span>
                </Link>
              ) : (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setPeopleOpen(true)}
                  onMouseLeave={() => setPeopleOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-4 py-2 font-semibold transition-all duration-200 rounded-md ${isPeopleActive
                        ? 'text-academic-blue-800'
                        : 'text-academic-gray hover:text-academic-blue-800'
                      }`}
                    aria-expanded={peopleOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${peopleOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-[2px] bg-academic-blue-800 transition-transform duration-300 origin-left ${isPeopleActive ? 'scale-x-100' : 'scale-x-0'}`}
                  ></span>
                  {peopleOpen && 'children' in item && (
                    <div className="absolute top-full left-0 mt-1 py-1 w-44 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                      {item.children.map((child: NavItemBase) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2 text-sm font-medium ${location.pathname === child.path
                              ? 'text-academic-blue-800 bg-academic-blue/15'
                              : 'text-academic-gray hover:bg-gray-100 hover:text-academic-blue-800'
                            }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-lg bg-white border border-gray-200 text-academic-gray hover:text-academic-blue-800 transition-colors shadow-sm"

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
              {navigationItems.map((item) =>
                !('children' in item) ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 font-medium transition-colors ${location.pathname === item.path
                        ? 'text-academic-blue-800 bg-academic-blue/15 rounded-md'
                        : 'text-academic-gray hover:text-academic-blue-800'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() => setPeopleOpen(!peopleOpen)}
                      className={`flex items-center justify-between w-full px-4 py-3 font-medium transition-colors ${isPeopleActive
                          ? 'text-academic-blue-800 bg-academic-blue/15 rounded-md'
                          : 'text-academic-gray hover:text-academic-blue-800'
                        }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${peopleOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {peopleOpen &&
                      'children' in item &&
                      item.children.map((child: NavItemBase) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block pl-8 pr-4 py-2 text-sm font-medium ${location.pathname === child.path
                              ? 'text-academic-blue-800 bg-academic-blue/10 rounded-md'
                              : 'text-academic-gray hover:text-academic-blue-800'
                            }`}
                          onClick={() => { setIsMenuOpen(false); setPeopleOpen(false); }}
                        >
                          {child.name}
                        </Link>
                      ))}
                  </div>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
