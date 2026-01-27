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
  rating: number;
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
          <h2 className="text-4xl md:text-5xl font-bold text-academic-gray mb-6">Meet Our Faculty</h2>
          <div className="section-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="group bg-white rounded-md overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <Link to={`/people/${member.slug}`} className="block">
                <div className="relative w-full aspect-[1] bg-gray-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-academic-gray mb-2 group-hover:text-academic-blue-800 transition-colors">{member.name}</h3>
                  <p className="text-academic-blue-800 font-semibold mb-4">{member.designation}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-academic-gray mb-3 uppercase tracking-wide">Research Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.researchInterests.map((interest, idx) => (
                        <span key={idx} className="badge-primary">{interest}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>

              <div className="px-6 pb-6 flex gap-3">
                <a 
                  href={`mailto:${member.email}`} 
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center space-x-2 btn-primary"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </a>
                <Link 
                  to={`/faculty/${member.slug}`}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-academic-gray font-semibold px-4 py-3 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>View Profile</span>
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
