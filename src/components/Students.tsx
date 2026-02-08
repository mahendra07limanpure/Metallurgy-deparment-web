import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, GraduationCap, User, BookOpen } from 'lucide-react';
import { FacultyCardSkeleton } from './Skeleton';

export interface StudentMember {
  id: number;
  name: string;
  slug: string;
  email: string;
  enrollment_number: string;
  supervisor_name: string;
  thesis_title?: string;
  research_area?: string;
  research_keywords?: string[];
  image: string;
}

const Students: React.FC = () => {
  const [members, setMembers] = useState<StudentMember[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/data/students.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as StudentMember[];
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Students</h2>
            <p className="text-xl text-gray-600">Loading students...</p>
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

  if (error) return <div className="py-20 text-center text-red-600">Error loading students: {error}</div>;
  if (!members || members.length === 0) return <div className="py-20 text-center">No students found.</div>;

  return (
    <section id="students" className="py-8 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-academic-blue/15 text-academic-blue-800 px-4 py-2 rounded-md text-sm font-semibold mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Our Students</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-academic-gray mb-6">Meet Our Research Scholars</h2>
          <div className="section-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="group bg-white rounded-md overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <Link to={`/people/student/${member.slug}`} className="block">
                <div className="relative w-full aspect-[1] bg-gray-100 overflow-hidden">
                  <img
                    src={member.image.startsWith('/') ? encodeURI(member.image) : member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/data/placeholder.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-academic-gray mb-2 group-hover:text-academic-blue-800 transition-colors">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </p>
                  <p className="text-sm text-academic-blue-800 font-medium mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 flex-shrink-0" />
                    Enrollment: {member.enrollment_number}
                  </p>
                  <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 flex-shrink-0" />
                    Supervisor: {member.supervisor_name}
                  </p>
                  {(member.thesis_title || member.research_area) && (
                    <p className="text-sm text-gray-700 font-medium mb-2 line-clamp-2">
                      {member.thesis_title || member.research_area}
                    </p>
                  )}
                  {(member.research_keywords?.length ?? 0) > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {(member.research_keywords ?? []).slice(0, 3).map((kw, idx) => (
                        <span key={idx} className="badge-primary text-xs">{kw}</span>
                      ))}
                      {(member.research_keywords?.length ?? 0) > 3 && (
                        <span className="text-xs text-gray-500">+{(member.research_keywords?.length ?? 0) - 3}</span>
                      )}
                    </div>
                  )}
                </div>
              </Link>

              <div className="px-6 pb-6">
                <a
                  href={`mailto:${member.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center space-x-2 btn-primary w-full"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Students;
