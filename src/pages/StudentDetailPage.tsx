import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, GraduationCap, User, BookOpen, ChevronLeft } from 'lucide-react';

interface StudentDetail {
  name: string;
  email: string;
  enrollment_number: string;
  supervisor_name: string;
  thesis_title?: string;
  research_area?: string;
  research_keywords?: string[];
  image?: string;
}

const StudentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [student, setStudent] = useState<StudentDetail | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    const loadStudentDetail = async () => {
      try {
        const res = await fetch(`/data/students/${slug}.json`);
        if (!res.ok) throw new Error('Student data not found');
        const data = (await res.json()) as StudentDetail;
        setStudent(data);

        const listRes = await fetch('/data/students.json');
        if (listRes.ok) {
          const list = (await listRes.json()) as Array<{ slug: string; image?: string }>;
          const matched = list.find((m) => m.slug === slug);
          if (matched && matched.image) setImageUrl(matched.image);
        }
        if (data.image) setImageUrl(data.image);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadStudentDetail();
  }, [slug]);

  if (!slug) return <div className="pt-20 py-20 text-center text-red-600">Invalid student.</div>;
  if (loading) return <div className="pt-20 py-20 text-center">Loading student profile...</div>;
  if (error) return <div className="pt-20 py-20 text-center text-red-600">Error: {error}</div>;
  if (!student) return <div className="pt-20 py-20 text-center">Student not found.</div>;

  const displayImage = !imageError && (imageUrl || student.image);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/people/students" className="inline-flex items-center text-academic-blue-800 hover:text-academic-blue-700 mb-8">
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="font-medium">Back to Students</span>
        </Link>

        <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-md overflow-hidden bg-gray-100">
                {displayImage ? (
                  <img
                    src={displayImage}
                    alt={student.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-academic-blue flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">
                      {student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-academic-gray mb-4">{student.name}</h1>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-academic-blue-800 flex-shrink-0" />
                  <a href={`mailto:${student.email}`} className="link-primary">{student.email}</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="w-5 h-5 mr-3 text-academic-blue-800 flex-shrink-0" />
                  <span>Enrollment Number: <strong>{student.enrollment_number}</strong></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-5 h-5 mr-3 text-academic-blue-800 flex-shrink-0" />
                  <span>Supervisor: <strong>{student.supervisor_name}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {(student.thesis_title || student.research_area) && (
          <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-academic-blue-800" />
              {student.thesis_title ? 'Thesis Title' : 'Research Area'}
            </h2>
            <p className="text-lg text-gray-700">
              {student.thesis_title || student.research_area}
            </p>
          </div>
        )}

        {(student.research_keywords?.length ?? 0) > 0 && (
          <div className="bg-white rounded-md shadow-md border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-academic-blue-800" />
              Research Keywords
            </h2>
            <div className="flex flex-wrap gap-3">
              {(student.research_keywords ?? []).map((keyword, idx) => (
                <span key={idx} className="px-4 py-2 bg-academic-blue/15 text-academic-blue-800 rounded-md font-medium">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetailPage;
