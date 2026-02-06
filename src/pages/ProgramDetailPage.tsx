import { Link, useParams } from 'react-router-dom';
import { BookOpen, ClipboardList, GraduationCap, ChevronLeft } from 'lucide-react';

interface ProgramDetail {
  degree: string;
  title: string;
  duration: string;
  overview: string;
  structure: string[];
  courses: string[];
  syllabus: string[];
}

const programDetails: Record<string, ProgramDetail> = {
  btech: {
    degree: 'B.Tech',
    title: 'Bachelor of Technology',
    duration: '4 Years',
    overview:
      'A comprehensive undergraduate program that builds a strong foundation in metallurgical and materials engineering with balanced theory, lab work, and industry exposure.',
    structure: [
      'Year 1: Engineering fundamentals, mathematics, physics, and introductory materials science',
      'Year 2: Core metallurgy and materials characterization courses with lab components',
      'Year 3: Process metallurgy, thermodynamics, kinetics, and electives',
      'Year 4: Advanced electives, capstone project, and industrial training',
    ],
    courses: [
      'Physical Metallurgy',
      'Thermodynamics of Materials',
      'Materials Characterization',
      'Extractive Metallurgy',
      'Phase Transformations',
      'Mechanical Behavior of Materials',
    ],
    syllabus: [
      'Semester-wise curriculum with credits and prerequisites',
      'Laboratory modules and project guidelines',
      'Elective baskets for specialization tracks',
    ],
  },
  mtech: {
    degree: 'M.Tech',
    title: 'Master of Technology',
    duration: '2 Years',
    overview:
      'An advanced postgraduate program focused on specialization, research methodology, and thesis work in key areas of metallurgy and materials engineering.',
    structure: [
      'Semester 1: Advanced core courses and research methodology',
      'Semester 2: Specialization electives and laboratory/research work',
      'Semester 3-4: Thesis and industry/research collaboration',
    ],
    courses: [
      'Advanced Phase Transformations',
      'Computational Materials Science',
      'Corrosion Science and Engineering',
      'Welding Metallurgy',
      'Materials Processing and Design',
    ],
    syllabus: [
      'Specialization-wise elective list',
      'Thesis requirements and evaluation criteria',
      'Seminar and research publication guidelines',
    ],
  },
  phd: {
    degree: 'Ph.D.',
    title: 'Doctor of Philosophy',
    duration: '3-5 Years',
    overview:
      'A research-intensive program aimed at advancing knowledge through original research, scholarly publications, and interdisciplinary collaboration.',
    structure: [
      'Coursework and comprehensive examination (as per regulations)',
      'Research proposal and progress seminars',
      'Thesis submission and defense',
    ],
    courses: [
      'Advanced Research Methods',
      'Special Topics in Materials Engineering',
      'Scientific Writing and Ethics',
    ],
    syllabus: [
      'Program milestones and evaluation process',
      'Research publication expectations',
      'Thesis format and submission checklist',
    ],
  },
};

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
