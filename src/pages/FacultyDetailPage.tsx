import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, ExternalLink, BookOpen, Award, Briefcase, GraduationCap, FileText, Users, ChevronLeft } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  specialization?: string;
  year: string | number;
}

interface ProfessionalBackground {
  position: string;
  organization: string;
  period: string;
}

interface ResearchProject {
  title: string;
  funding_agency: string;
  amount_lakhs?: number;
  date: string;
}

interface Publication {
  title: string;
  year: number;
  authors: string[];
  journal: string;
  publisher: string;
  volume?: string;
  pages?: string;
}

interface Book {
  title: string;
  authors?: string[];
  editors?: string[];
  editor?: string;
  publication?: string;
  publisher?: string;
  volume?: string;
  year: number;
}

interface Membership {
  organization: string;
  period: string;
}

interface TeachingEngagement {
  course: string;
  semester: string;
}

interface FacultyDetail {
  name: string;
  designation: string;
  email: string;
  room_no?: string;
  telephone_no?: string;
  profile_url?: string;
  google_scholar?: string;
  linkedin?: string;
  research_interests: string[];
  education: Education[];
  professional_background: ProfessionalBackground[];
  research_projects?: ResearchProject[];
  publications?: Publication[];
  books?: Book[];
  memberships?: Membership[];
  teaching_engagements?: TeachingEngagement[];
}

const FacultyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [faculty, setFaculty] = useState<FacultyDetail | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFacultyDetail = async () => {
      try {
        const res = await fetch(`/data/faculty/${slug}.json`);
        if (!res.ok) throw new Error(`Faculty data not found`);
        const data = (await res.json()) as FacultyDetail;
        setFaculty(data);

        const listRes = await fetch('/data/faculty.json');
        if (listRes.ok) {
          const list = (await listRes.json()) as Array<{ slug: string; image?: string }>;
          const matched = list.find((m) => m.slug === slug);
          if (matched && matched.image) setImageUrl(matched.image);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadFacultyDetail();
  }, [slug]);

  if (loading) return <div className="pt-20 py-20 text-center">Loading faculty profile...</div>;
  if (error) return <div className="pt-20 py-20 text-center text-red-600">Error: {error}</div>;
  if (!faculty) return <div className="pt-20 py-20 text-center">Faculty not found.</div>;

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/faculty" className="inline-flex items-center text-academic-blue-800 hover:text-academic-blue-700 mb-8">
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="font-medium">Back to Faculty</span>
        </Link>

        {/* Header Section */}
        <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-md overflow-hidden bg-gray-100">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-academic-blue flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">
                      {faculty.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-academic-gray mb-2">{faculty.name}</h1>
              <p className="text-xl text-academic-blue-800 font-semibold mb-4">{faculty.designation}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-academic-blue-800" />
                  <a href={`mailto:${faculty.email}`} className="link-primary">{faculty.email}</a>
                </div>
                {faculty.telephone_no && (
                  <div className="flex items-center text-gray-600">
                    <span className="w-5 h-5 mr-3">📞</span>
                    <span>{faculty.telephone_no}</span>
                  </div>
                )}
                {faculty.room_no && (
                  <div className="flex items-center text-gray-600">
                    <span className="w-5 h-5 mr-3">🚪</span>
                    <span>Room: {faculty.room_no}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {faculty.profile_url && (
                  <a href={faculty.profile_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-academic-blue-800 text-white px-4 py-2 rounded-md hover:bg-academic-blue-700 text-sm font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Profile Page
                  </a>
                )}
                {faculty.google_scholar && (
                  <a href={faculty.google_scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 text-sm font-medium">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Google Scholar
                  </a>
                )}
                {faculty.linkedin && (
                  <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
                    <Users className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-academic-gray mb-4 flex items-center">
            <Award className="w-6 h-6 mr-3 text-academic-blue-800" />
            Research Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {faculty.research_interests.map((interest, idx) => (
              <span key={idx} className="px-4 py-2 bg-academic-blue/15 text-academic-blue-800 rounded-md font-medium">
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-academic-gray mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-academic-blue-800" />
            Education
          </h2>
          <div className="space-y-6">
            {faculty.education.map((edu, idx) => (
              <div key={idx} className="border-l-4 border-academic-blue-600 pl-6">
                <h3 className="text-lg font-bold text-academic-gray">{edu.degree}</h3>
                {edu.specialization && <p className="text-gray-600">{edu.specialization}</p>}
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Background */}
        <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-academic-gray mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-academic-blue-800" />
            Professional Background
          </h2>
          <div className="space-y-6">
            {faculty.professional_background.map((job, idx) => (
              <div key={idx} className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-lg font-bold text-academic-gray">{job.position}</h3>
                <p className="text-gray-600">{job.organization}</p>
                <p className="text-sm text-gray-500">{job.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        {faculty.research_projects && faculty.research_projects.length > 0 && (
          <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-academic-blue-800" />
              Research Projects
            </h2>
            <div className="space-y-6">
              {faculty.research_projects.map((project, idx) => (
                <div key={idx} className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-academic-gray">{project.title}</h3>
                  <p className="text-gray-600">Funding Agency: {project.funding_agency}</p>
                  {project.amount_lakhs && <p className="text-gray-600">Amount: ₹{project.amount_lakhs} Lakhs</p>}
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Publications */}
        {faculty.publications && faculty.publications.length > 0 && (
          <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-academic-blue-800" />
              Selected Publications ({faculty.publications.length})
            </h2>
            <div className="space-y-6">
              {faculty.publications.map((pub, idx) => (
                <div key={idx} className="pb-6 border-b border-gray-200 last:border-0">
                  <h3 className="text-lg font-semibold text-academic-gray mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-1">{pub.authors.join(', ')}</p>
                  <p className="text-gray-600">
                    <span className="font-medium">{pub.journal}</span>, {pub.publisher} ({pub.year})
                  </p>
                  {(pub.volume || pub.pages) && (
                    <p className="text-sm text-gray-500">
                      {pub.volume && `Vol. ${pub.volume}`}{pub.volume && pub.pages && ', '}
                      {pub.pages && `pp. ${pub.pages}`}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Books */}
        {faculty.books && faculty.books.length > 0 && (
          <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-academic-blue" />
              Books & Book Chapters
            </h2>
            <div className="space-y-6">
              {faculty.books.map((book, idx) => (
                <div key={idx} className="pb-6 border-b border-gray-200 last:border-0">
                  <h3 className="text-lg font-semibold text-academic-gray mb-2">{book.title}</h3>
                  {book.authors && <p className="text-gray-600">Authors: {book.authors.join(', ')}</p>}
                  {book.editors && <p className="text-gray-600">Editors: {book.editors.join(', ')}</p>}
                  {book.editor && <p className="text-gray-600">Editor: {book.editor}</p>}
                  {book.publisher && <p className="text-gray-600">{book.publisher}</p>}
                  {book.publication && <p className="text-gray-600">{book.publication}</p>}
                  {book.volume && <p className="text-gray-600">{book.volume}</p>}
                  <p className="text-sm text-gray-500">{book.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Teaching Engagements */}
        {faculty.teaching_engagements && faculty.teaching_engagements.length > 0 && (
          <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-academic-blue-800" />
              Teaching Engagements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faculty.teaching_engagements.map((course, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-semibold text-academic-gray">{course.course}</h3>
                  <p className="text-sm text-gray-600">{course.semester} Semester</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Memberships */}
        {faculty.memberships && faculty.memberships.length > 0 && (
          <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-academic-blue-800" />
              Professional Memberships
            </h2>
            <div className="space-y-4">
              {faculty.memberships.map((membership, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{membership.organization}</span>
                  <span className="text-sm text-gray-500">{membership.period}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyDetailPage;
