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
   <section
  id="home"
  className="relative min-h-screen flex items-start justify-center text-white pb-24 md:pb-32"
>
  <div className="absolute inset-0">
    {images.map((src, i) => (
      <img
        key={src}
        src={src}
        alt="Department highlight"
        className={`absolute inset-0 w-full h-screen object-cover transition-opacity duration-700 ${
          i === index ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}
    <div className="absolute inset-0 bg-gradient-to-r from-academic-blue-900/80 via-academic-blue-800/70 to-academic-blue-700/70"></div>
  </div>

  

  {/* Scroll Indicator — fixed at bottom */}
 <button
  onClick={scrollToNext}
  className="absolute bottom-24 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
  aria-label="Scroll to next section"
>
  <ChevronDown className="w-6 h-6 text-white animate-bounce" />
</button>

</section>

  );
};

export default Hero;
