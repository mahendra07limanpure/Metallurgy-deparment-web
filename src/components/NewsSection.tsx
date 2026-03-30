import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { recentNews } from '../data/newsEvents';

const NewsSection: React.FC = () => {
  const latest = recentNews.slice(0, 3);

  return (
    <aside className="bg-white rounded-2xl shadow-lg border border-gray-200 w-full h-full flex flex-col overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-academic-gray flex items-center gap-2">
          <Newspaper className="w-4 h-4 text-academic-blue-800" />
          <span>Latest News</span>
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {latest.map((n) => (
          <Link
            key={n.id}
            to="/news"
            className="block px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-academic-blue-700">
                {n.category}
              </span>
              <time className="text-[11px] text-gray-500">{n.date}</time>
            </div>
            <div className="text-sm font-semibold text-academic-gray line-clamp-2">
              {n.title}
            </div>
          </Link>
        ))}
      </div>

      <div className="px-6 py-3 border-t border-gray-200 bg-white">
        <Link
          to="/news"
          className="inline-flex items-center text-xs font-semibold text-academic-blue-800 hover:text-academic-blue-900"
        >
          <span>View all news &amp; events</span>
          <ArrowRight className="w-3 h-3 ml-1" />
        </Link>
      </div>
    </aside>
  );
};

export default NewsSection;

