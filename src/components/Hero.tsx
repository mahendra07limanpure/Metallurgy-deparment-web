import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Newspaper, ArrowRight } from 'lucide-react';
import { recentNews, type NewsCategory } from '../data/newsEvents';

const categoryStyles: Record<NewsCategory, string> = {
  News: 'bg-blue-100 text-blue-700',
  Achievement: 'bg-yellow-100 text-yellow-700',
  Event: 'bg-green-100 text-green-700',
  Seminar: 'bg-purple-100 text-purple-700',
};

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
    <section id="home" className="relative flex h-screen gap-6 bg-gray-100 px-6 pt-6 pb-14">
      {/* Left: Image Carousel Card */}
      <div className="relative w-[70%] h-full rounded-2xl overflow-hidden shadow-md bg-gray-200">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Department highlight"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Right: News Panel Card */}
      <div className="w-[30%] h-full rounded-2xl bg-white shadow-md flex flex-col px-6 py-6 overflow-hidden">
        {/* Panel Header */}
        <div className="flex items-center gap-2 mb-4">
          <Newspaper className="w-5 h-5 text-academic-blue-800" />
          <h2 className="text-lg font-semibold text-academic-blue-800 tracking-wide">
            Latest News
          </h2>
        </div>

        {/* News Cards */}
        <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
          {recentNews.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryStyles[item.category]}`}>
                  {item.category}
                </span>
                <time className="text-xs text-gray-400">{item.date}</time>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="pt-4 border-t border-gray-100 mt-3">
          <Link
            to="/news"
            className="inline-flex items-center gap-1 text-sm font-medium text-academic-blue-700 hover:text-academic-blue-900 transition-colors"
          >
            View all news
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-10 h-10 bg-white rounded-full shadow hover:shadow-md transition-shadow duration-300 z-10"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-5 h-5 text-academic-blue-800" />
      </button>
    </section>
  );
};

export default Hero;
