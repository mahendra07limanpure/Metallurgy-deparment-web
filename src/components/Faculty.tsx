import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, BookOpen } from 'lucide-react';
import { FacultyCardSkeleton } from './Skeleton';

interface FacultyMember {
  id: number;
  name: string;
  slug: string;
  designation: string;
  image: string;
  email: string;
  researchInterests: string[];
  rating?: number;
  profile_url?: string;
}

const Faculty: React.FC = () => {
  const [members, setMembers] = useState<FacultyMember[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/data/faculty.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as FacultyMember[];
        setMembers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h2>
            <p className="text-xl text-gray-600">Loading faculty members...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <FacultyCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  if (error) return <div className="py-20 text-center text-red-600">Error loading faculty: {error}</div>;
  if (!members || members.length === 0) return <div className="py-20 text-center">No faculty found.</div>;

  return (
    <section id="faculty" className="py-8 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-academic-blue/15 text-academic-blue-800 px-4 py-2 rounded-md text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Our Faculty</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-academic-gray mb-6">Meet Our Distinguished Faculty</h2>
          <div className="section-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {members.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <Link
                to={`/people/faculty/${member.slug}`}
                className="flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width:1024px) 50vw, (min-width:768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>

                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-academic-gray mb-3 group-hover:text-academic-blue-800 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-academic-blue-800 font-semibold mb-5">
                    {member.designation}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold text-academic-gray mb-2 uppercase tracking-wide">
                      Research Interests
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.researchInterests.slice(0, 3).map((interest, idx) => (
                        <span key={idx} className="badge-primary">
                          {interest}
                        </span>
                      ))}
                      {member.researchInterests.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{member.researchInterests.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              <div className="px-7 pb-6 pt-3 flex gap-3">
                <a 
                  href={`mailto:${member.email}`} 
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center space-x-2 btn-primary"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </a>
                <Link 
                  to={`/people/faculty/${member.slug}`}
                  className="flex-1 flex items-center justify-center space-x-2 border border-academic-blue-200 text-academic-blue-800 font-semibold px-4 py-3 rounded-md hover:bg-academic-blue-50 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>View Full Profile</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
