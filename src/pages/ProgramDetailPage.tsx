import { useState, memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, ClipboardList, GraduationCap, ChevronLeft, ChevronDown, ChevronRight, Users } from 'lucide-react';
import { programDetails } from '../data/programsData';

interface CourseSyllabus {
  topics: string[];
  pdf?: string;
}

interface Course {
  code: string;
  title: string;
  credits: number;
  type: string;
  lectureHours: number;
  tutorialHours: number;
  labHours: number;
  description?: string;
  faculty?: string[];
  syllabus?: CourseSyllabus;
}

interface Semester {
  name: string;
  season: 'Autumn' | 'Spring';
  totalCredits: number;
  courses: Course[];
}

interface YearStructure {
  year: number;
  semesters: Semester[];
}

// Memoized course card component for better performance
const CourseCard = memo(({ course, idx }: { course: Course; idx: number }) => (
  <div key={idx} className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-academic-blue-600 p-4 rounded">
    <div className="flex items-start justify-between mb-2">
      <div>
        <h5 className="font-bold text-gray-900">{course.code}: {course.title}</h5>
        <p className="text-sm text-gray-600">{course.type}</p>
      </div>
      <span className="bg-academic-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
        {course.credits} Credits
      </span>
    </div>
    
    {course.description && (
      <p className="text-sm text-gray-700 mb-2">{course.description}</p>
    )}

    <div className="grid grid-cols-3 gap-2 text-xs mb-3">
      <div className="bg-blue-50 p-2 rounded">
        <span className="text-gray-600">Lectures:</span>
        <p className="font-semibold text-gray-900">{course.lectureHours} hrs</p>
      </div>
      <div className="bg-green-50 p-2 rounded">
        <span className="text-gray-600">Tutorials:</span>
        <p className="font-semibold text-gray-900">{course.tutorialHours} hrs</p>
      </div>
      <div className="bg-orange-50 p-2 rounded">
        <span className="text-gray-600">Lab:</span>
        <p className="font-semibold text-gray-900">{course.labHours} hrs</p>
      </div>
    </div>

    {course.faculty && course.faculty.length > 0 && (
      <div className="bg-purple-50 p-3 rounded mb-3 border-l-2 border-purple-500">
        <h6 className="text-xs font-semibold text-purple-900 mb-1 flex items-center">
          <Users className="w-3 h-3 mr-1" />
          Faculty
        </h6>
        <p className="text-xs text-gray-700">
          {course.faculty.join(', ')}
        </p>
      </div>
    )}

    {course.syllabus && course.syllabus.topics.length > 0 && (
      <div className="bg-indigo-50 p-3 rounded border-l-2 border-indigo-500">
        <h6 className="text-xs font-semibold text-indigo-900 mb-1 flex items-center">
          <BookOpen className="w-3 h-3 mr-1" />
          Syllabus Topics
        </h6>
        <ul className="text-xs text-gray-700 space-y-1">
          {course.syllabus.topics.map((topic, i) => (
            <li key={i} className="flex items-start gap-1">
              <span className="text-indigo-600 mt-0.5">•</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
        {course.syllabus.pdf && (
          <a 
            href={course.syllabus.pdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700 transition"
          >
            📄 Download Syllabus PDF
          </a>
        )}
      </div>
    )}
  </div>
));

const CourseStructureView = memo(({ courseStructure }: { courseStructure: YearStructure[] | undefined }) => {
  const [expandedYear, setExpandedYear] = useState<number | null>(1);
  const [expandedSemester, setExpandedSemester] = useState<string | null>('1-Autumn');

  if (!courseStructure) return null;

  return (
    <div className="space-y-4">
      {courseStructure.map((yearData) => (
        <div key={yearData.year} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedYear(expandedYear === yearData.year ? null : yearData.year)}
            className="w-full bg-gradient-to-r from-academic-blue-600 to-academic-blue-700 text-white p-4 flex items-center justify-between hover:from-academic-blue-700 hover:to-academic-blue-800 transition"
          >
            <h3 className="text-lg font-bold">Year {yearData.year}</h3>
            {expandedYear === yearData.year ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </button>

          {expandedYear === yearData.year && (
            <div className="bg-gray-50 p-4 space-y-3">
              {yearData.semesters.map((semester) => {
                const semesterId = `${yearData.year}-${semester.season}`;
                const isExpanded = expandedSemester === semesterId;

                return (
                  <div key={semesterId} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedSemester(isExpanded ? null : semesterId)}
                      className="w-full bg-gray-100 p-4 flex items-center justify-between hover:bg-gray-200 transition text-left"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800">{semester.name} - {semester.season}</h4>
                        <p className="text-sm text-gray-600">Total Credits: {semester.totalCredits}</p>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4 space-y-3">
                        {semester.courses.map((course, idx) => (
                          <CourseCard key={idx} course={course} idx={idx} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

const ProgramDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? programDetails[slug] : undefined;

  if (!program) {
    return (
      <div className="pt-20 py-16 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/programs" className="inline-flex items-center text-academic-blue-800 hover:text-academic-blue-700 mb-6">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="font-medium">Back to Programs</span>
          </Link>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Program details not found</h1>
            <p className="text-gray-600">Please return to the programs page and select a valid program.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-academic-blue-600 to-academic-blue-800 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/programs" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="font-medium">Back to Programs</span>
          </Link>
          <h1 className="text-4xl font-bold mb-2">{program.degree} - {program.title}</h1>
          <p className="text-blue-100">Duration: {program.duration}</p>
          <p className="mt-4 max-w-3xl text-blue-50">{program.overview}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-4 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-academic-blue-800" />
              Program Structure
            </h2>
            <ul className="space-y-3">
              {program.structure.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-academic-gold mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {program.courseStructure && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-academic-gray mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-academic-blue-800" />
                Detailed Course Structure
              </h2>
              <CourseStructureView courseStructure={program.courseStructure} />
            </div>
          )}

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-academic-blue-800" />
              Core Courses
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {program.courses.map((course, idx) => (
                <div key={idx} className="rounded-md border border-gray-200 p-3 text-gray-700">
                  {course}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-academic-gray mb-4 flex items-center">
              <ClipboardList className="w-6 h-6 mr-3 text-academic-blue-800" />
              Syllabus & Curriculum
            </h2>
            <ul className="space-y-3">
              {program.syllabus.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-academic-gold mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              For official documents and detailed semester-wise syllabus, please refer to the department academic office.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetailPage;
