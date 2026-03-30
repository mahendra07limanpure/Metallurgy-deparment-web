import React, { useEffect, useState } from 'react';

type Props = {
  images: string[];
  alt: string;
  className?: string;
  intervalMs?: number;
};

const NewsImageCarousel: React.FC<Props> = ({ images, alt, className, intervalMs = 3500 }) => {
  const safeImages = images.filter(Boolean);
  const [index, setIndex] = useState(0);

  const resolveSrc = (src: string) => {
    if (/^https?:\/\//i.test(src)) return src;
    return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`;
  };

  useEffect(() => {
    if (safeImages.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeImages.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, safeImages.length]);

  if (safeImages.length === 0) return null;

  return (
    <div className={className}>
      <div className="relative w-full h-full overflow-hidden">
        {safeImages.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={resolveSrc(src)}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        ))}
      </div>

      {safeImages.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1.5">
          {safeImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={(e) => {
                e.preventDefault();
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-white/90' : 'w-1.5 bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsImageCarousel;

