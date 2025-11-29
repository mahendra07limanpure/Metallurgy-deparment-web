import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-academic-blue text-white">
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Metallurgical & Materials Engineering
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Forging the Future of Sustainable Technologies
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/about"
            className="inline-flex items-center justify-center bg-white text-academic-blue font-semibold px-8 py-4 rounded-md border border-white hover:bg-transparent hover:text-white transition-colors duration-300"
          >
            <span>Explore Department</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <Link
            to="/research"
            className="inline-flex items-center justify-center bg-transparent text-white font-semibold px-8 py-4 rounded-md border border-white hover:bg-white hover:text-academic-blue transition-colors duration-300"
          >
            <span>Our Research</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;