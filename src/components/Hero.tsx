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
  className="relative min-h-screen bg-white"
>
  <div className="mx-auto max-w-7xl px-6 pt-8 pb-24">
    {/* Grid layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      
      {/* LEFT: Hero Image / Slideshow */}
      <div className="relative lg:col-span-2 h-[80vh] rounded-2xl bg-gray-50 overflow-hidden flex items-center justify-center">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Department highlight"
            className={`absolute max-h-full max-w-full transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectFit: "contain" }}
          />
        ))}
      </div>

      {/* RIGHT: Announcements */}
      <aside className="h-full">
        <div className="sticky top-8 min-h-[80vh] rounded-2xl border border-gray-200 bg-white p-6 shadow-lg flex flex-col">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            📢 Announcements
          </h3>

          <ul className="space-y-4 flex-1 overflow-y-auto pr-2">
            <li>
              <p className="font-medium text-gray-900">
                Semester Results Released
              </p>
              <p className="text-sm text-gray-600">
                B.Tech & M.Tech results are now available on the portal.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-900">
                Internship Drive 2026
              </p>
              <p className="text-sm text-gray-600">
                Core metallurgy companies visiting campus in February.
              </p>
            </li>

            <li>
              <p className="font-medium text-gray-900">
                Workshop on Advanced Materials
              </p>
              <p className="text-sm text-gray-600">
                Register before 10th Feb. Limited seats.
              </p>
            </li>
          </ul>

          <Link
            to="/announcements"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
          >
            View all announcements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </aside>
    </div>
  </div>

  {/* Scroll Indicator */}
  <button
    onClick={scrollToNext}
    className="absolute bottom-20 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200/70 transition hover:bg-gray-300"
    aria-label="Scroll to next section"
  >
    <ChevronDown className="h-6 w-6 text-gray-700 animate-bounce" />
  </button>
</section>




  );
};

export default Hero;
