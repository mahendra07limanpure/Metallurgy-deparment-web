import { Calendar, MapPin, Users, Clock, ExternalLink, TrendingUp } from 'lucide-react';
import { recentNews, upcomingEvents, type NewsItem } from '../data/newsEvents';

const NewsEventsPage = () => {
  const getCategoryColor = (category: NewsItem['category']) => {
    switch (category) {
      case 'News':
        return 'bg-blue-100 text-blue-800';
      case 'Event':
        return 'bg-green-100 text-green-800';
      case 'Achievement':
        return 'bg-yellow-100 text-yellow-800';
      case 'Seminar':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-academic-blue-600 to-academic-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">News &amp; Events</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest happenings in our department
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Calendar className="w-8 h-8 text-academic-blue-800" />
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Event
                    </span>
                    <time className="text-sm text-gray-500">
                      {event.date}
                    </time>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    {event.speaker && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.speaker}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      className="inline-flex items-center gap-2 text-academic-blue-800 hover:text-academic-blue-700 font-medium text-sm"
                    >
                      Register now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-8 h-8 text-academic-blue-800" />
            <h2 className="text-3xl font-bold text-gray-900">Recent News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news) => (
              <article
                key={news.id}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {news.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                        news.category
                      )}`}
                    >
                      {news.category}
                    </span>
                    <time className="text-sm text-gray-500">{news.date}</time>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.description}
                  </p>

                  {news.link && (
                    <a
                      href={news.link}
                      className="inline-flex items-center gap-1 text-academic-blue-800 hover:text-academic-blue-700 font-medium text-sm"
                    >
                      Read More
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* (Newsletter section removed as requested) */}
    </div>
  );
};

export default NewsEventsPage;
