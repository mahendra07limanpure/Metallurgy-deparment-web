import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const images = [
    '/data/Hero/one.jpeg',
    '/data/Hero/two.jpg',
    '/data/Hero/three.jpg',
    '/data/Hero/four.jpeg',
    '/data/Hero/five.jpg',
    '/data/Hero/six.jpeg',
    '/data/Hero/seven.jpeg',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center text-white pb-24 md:pb-32">
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Department highlight"
            className={`absolute inset-0 w-full h-screen object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-academic-blue-900/80 via-academic-blue-800/70 to-academic-blue-700/70"></div>
      </div>
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Main Heading */}
        <h1 className="inline-block px-4 py-2 rounded-md bg-black/60 drop-shadow-2xl text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Metallurgical & Materials Engineering
        </h1>

        {/* Subtitle */}
        <p className="inline-block px-4 py-2 rounded-md bg-black/50 text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Forging the Future of Sustainable Technologies
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-20">
          <Link
            to="/programs"
            className="inline-flex items-center justify-center bg-white text-academic-blue-800 font-semibold px-8 py-4 rounded-md border border-white hover:bg-transparent hover:text-white transition-colors duration-300"
          >
            <span>Explore Department</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <Link
            to="/research"
            className="inline-flex items-center justify-center bg-black/60 text-white font-semibold px-8 py-4 rounded-md border border-white hover:bg-white hover:text-academic-blue-800 transition-colors duration-300"
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
