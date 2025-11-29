import { Calendar, MapPin, Users, Clock, ExternalLink, TrendingUp } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: 'News' | 'Event' | 'Achievement' | 'Seminar';
  description: string;
  image?: string;
  link?: string;
}

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  speaker?: string;
  description: string;
  registrationLink?: string;
}

const NewsEventsPage = () => {
  const recentNews: NewsItem[] = [
    {
      id: 1,
      title: 'Department Receives Research Grant for Advanced Materials Study',
      date: '15 October 2025',
      category: 'News',
      description: 'The department has been awarded a substantial research grant to investigate novel nanomaterials for energy storage applications.',
      image: 'https://via.placeholder.com/400x250?text=Research+Grant',
    },
    {
      id: 2,
      title: 'Three Faculty Members Win Best Paper Awards',
      date: '10 October 2025',
      category: 'Achievement',
      description: 'Faculty members recognized at the International Conference on Materials Science for their groundbreaking research in additive manufacturing.',
    },
    {
      id: 3,
      title: 'New State-of-the-Art Characterization Lab Inaugurated',
      date: '5 October 2025',
      category: 'News',
      description: 'A cutting-edge materials characterization laboratory equipped with advanced electron microscopy has been inaugurated.',
      image: 'https://via.placeholder.com/400x250?text=New+Lab',
    },
    {
      id: 4,
      title: 'Students Win National Design Competition',
      date: '28 September 2025',
      category: 'Achievement',
      description: 'Our BTech students secured first place in the National Materials Design Competition with their innovative lightweight alloy design.',
    },
    {
      id: 5,
      title: 'International Collaboration Agreement Signed',
      date: '20 September 2025',
      category: 'News',
      description: 'MoU signed with leading European research institute for collaborative research in sustainable materials.',
    },
    {
      id: 6,
      title: 'Annual Alumni Meet 2025',
      date: '15 September 2025',
      category: 'Event',
      description: 'Successful annual alumni gathering with over 200 alumni attending and sharing their experiences.',
    },
  ];

  const upcomingEvents: UpcomingEvent[] = [
    {
      id: 1,
      title: 'Guest Lecture: Future of Sustainable Materials',
      date: '25 October 2025',
      time: '3:00 PM - 4:30 PM',
      location: 'LHC-101, Main Building',
      speaker: 'Dr. Sarah Johnson, MIT',
      description: 'An insightful talk on sustainable materials development and circular economy approaches in metallurgy.',
      registrationLink: '#',
    },
    {
      id: 2,
      title: 'Workshop: Advanced Welding Techniques',
      date: '2 November 2025',
      time: '10:00 AM - 5:00 PM',
      location: 'Welding Lab, Department',
      description: 'Hands-on workshop covering modern welding technologies including friction stir welding and laser welding.',
      registrationLink: '#',
    },
    {
      id: 3,
      title: 'International Symposium on Nanomaterials',
      date: '15-17 November 2025',
      time: 'Full Day',
      location: 'Convention Center',
      description: 'Three-day international symposium featuring keynote speakers from around the world discussing latest advances in nanomaterials.',
      registrationLink: '#',
    },
    {
      id: 4,
      title: 'Industry-Academia Interaction Meet',
      date: '5 December 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Seminar Hall',
      description: 'Annual meet bringing together industry leaders and academia to discuss collaborative research opportunities.',
      registrationLink: '#',
    },
  ];

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
            <h1 className="text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest happenings in our department
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Calendar className="w-8 h-8 text-academic-blue-800" />
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-academic-blue-600"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">
                      {event.title}
                    </h3>
                    <Calendar className="w-6 h-6 text-academic-blue-800 flex-shrink-0 ml-2" />
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">
                        {event.date} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    {event.speaker && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{event.speaker}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4">{event.description}</p>

                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      className="inline-flex items-center gap-2 text-academic-blue-800 hover:text-academic-blue-700 font-medium"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
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

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-academic-blue-600 to-academic-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for latest updates and announcements
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-academic-gold"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="btn-primary px-8 py-3"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-blue-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;
