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

interface ProgramDetail {
  degree: string;
  title: string;
  duration: string;
  overview: string;
  structure: string[];
  courses: string[];
  syllabus: string[];
  courseStructure?: YearStructure[];
}

// Lazy load B-Tech course structure data
const btechCourseStructure: YearStructure[] = [
  {
    year: 1,
    semesters: [
      {
        name: 'Semester 1',
        season: 'Autumn',
        totalCredits: 23,
        courses: [
          {
            code: 'HSL-101',
            title: 'Soft Skills',
            credits: 3,
            type: 'HSSC',
            lectureHours: 2,
            tutorialHours: 0,
            labHours: 2,
            description: 'Communication, presentation, and interpersonal skills'
          },
          {
            code: 'MAI-101',
            title: 'Mathematics-I',
            credits: 4,
            type: 'BSC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 0,
            description: 'Calculus, differential equations, and linear algebra'
          },
          {
            code: 'PHI-101',
            title: 'Physics-I',
            credits: 4,
            type: 'BSC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 2,
            description: 'Mechanics, waves, and heat transfer'
          },
          {
            code: 'MTC-101',
            title: 'Computer Programming',
            credits: 4,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 2,
            description: 'Programming fundamentals and algorithms'
          },
          {
            code: 'TMI-101',
            title: 'Tinkering and Mentoring',
            credits: 4,
            type: 'TMI',
            lectureHours: 2,
            tutorialHours: 2,
            labHours: 0,
            description: 'Hands-on learning and mentorship'
          },
          {
            code: 'MIE-101',
            title: 'Engineering Mechanics',
            credits: 4,
            type: 'ESC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 0,
            description: 'Statics, dynamics, and structural analysis'
          },
        ]
      },
      {
        name: 'Semester 2',
        season: 'Spring',
        totalCredits: 23,
        courses: [
          {
            code: 'HSL-102',
            title: 'Indian Knowledge System',
            credits: 2,
            type: 'HSSC',
            lectureHours: 2,
            tutorialHours: 0,
            labHours: 0,
            description: 'Indian heritage, sciences, and contributions'
          },
          {
            code: 'CYB-103',
            title: 'Physical Chemistry-I',
            credits: 4,
            type: 'BSC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 2,
            description: 'Thermodynamics, chemical equilibrium, and kinetics'
          },
          {
            code: 'MAI-102',
            title: 'Mathematics-II',
            credits: 4,
            type: 'BSC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 0,
            description: 'Complex variables, Fourier series, and transforms'
          },
          {
            code: 'ESS-104',
            title: 'Environmental Science and Sustainability',
            credits: 3,
            type: 'ESSC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Environmental issues and sustainable development'
          },
          {
            code: 'CSE-101',
            title: 'Data Structures and Algorithms',
            credits: 4,
            type: 'ESC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 0,
            description: 'Data structures, algorithms, and computational complexity'
          },
          {
            code: 'MTC-102',
            title: 'Introduction to Materials Engineering',
            credits: 3,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Introduction to material properties and classification'
          },
          {
            code: 'MTC-104',
            title: 'Metallurgical Thermodynamics and Kinetics',
            credits: 3,
            type: 'PCC',
            lectureHours: 2,
            tutorialHours: 1,
            labHours: 0,
            description: 'Thermodynamics and reaction kinetics in metallurgy'
          },
        ]
      }
    ]
  },
  {
    year: 2,
    semesters: [
      {
        name: 'Semester 3',
        season: 'Autumn',
        totalCredits: 23,
        courses: [
          {
            code: 'OEC-I',
            title: 'Open Elective Course-I',
            credits: 3,
            type: 'OEC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Student choice from open electives'
          },
          {
            code: 'DAI-101',
            title: 'Data Science',
            credits: 4,
            type: 'DSC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 0,
            description: 'Data analysis, statistics, and machine learning fundamentals'
          },
          {
            code: 'ECE-101',
            title: 'Fundamentals of Electronics',
            credits: 4,
            type: 'ESC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 0,
            description: 'Electronic devices, circuits, and applications'
          },
          {
            code: 'MTC-201',
            title: 'Phase Transformation and Heat Treatment',
            credits: 4,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 2,
            description: 'Phase diagrams, transformations, and heat treatment processes'
          },
          {
            code: 'MTC-203',
            title: 'Mechanical Behaviour of Materials',
            credits: 4,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 2,
            description: 'Stress-strain relationships, deformation, and failure mechanisms'
          },
          {
            code: 'MTC-205',
            title: 'Iron and Steel Making',
            credits: 4,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 2,
            description: 'Iron production, steelmaking processes, and quality control'
          },
        ]
      },
      {
        name: 'Semester 4',
        season: 'Spring',
        totalCredits: 24,
        courses: [
          {
            code: 'OEC-II',
            title: 'Open Elective Course-II',
            credits: 3,
            type: 'OEC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Student choice from open electives'
          },
          {
            code: 'HSSEC-I',
            title: 'HSS Elective Course',
            credits: 3,
            type: 'HSSEC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Humanities and social sciences elective'
          },
          {
            code: 'MSI-101',
            title: 'Fundamentals of Management',
            credits: 3,
            type: 'MC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Management principles, planning, and organizational behavior'
          },
          {
            code: 'EEE-102',
            title: 'Basic Electrical Engineering',
            credits: 4,
            type: 'ESC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 2,
            description: 'Electrical circuits, power systems, and machines'
          },
          {
            code: 'MTC-202',
            title: 'Metal Processing',
            credits: 4,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 0,
            description: 'Casting, forging, rolling, and extrusion processes'
          },
          {
            code: 'MTC-204',
            title: 'Characterization Techniques for Materials',
            credits: 4,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 2,
            description: 'SEM, XRD, TEM, and other advanced characterization methods'
          },
          {
            code: 'MTC-206',
            title: 'Engineering Polymers and Composites',
            credits: 3,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Polymer materials, composite design, and applications'
          },
        ]
      }
    ]
  },
  {
    year: 3,
    semesters: [
      {
        name: 'Semester 5',
        season: 'Autumn',
        totalCredits: 20,
        courses: [
          {
            code: 'OEC-III',
            title: 'Open Elective Course-III',
            credits: 3,
            type: 'OEC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Student choice from open electives'
          },
          {
            code: 'MTC-351',
            title: 'AI/ML in Materials Engineering',
            credits: 2,
            type: 'PCC',
            lectureHours: 2,
            tutorialHours: 0,
            labHours: 0,
            description: 'Application of artificial intelligence and machine learning in materials science'
          },
          {
            code: 'MTC-301',
            title: 'Electrical and Electronic Materials',
            credits: 3,
            type: 'PCC',
            lectureHours: 2,
            tutorialHours: 0,
            labHours: 2,
            description: 'Electronic and electrical properties of materials'
          },
          {
            code: 'MTC-303',
            title: 'Metal Processing Lab',
            credits: 2,
            type: 'PCC',
            lectureHours: 0,
            tutorialHours: 0,
            labHours: 4,
            description: 'Practical experiments in metal processing and manufacturing'
          },
          {
            code: 'MTC-391',
            title: 'Technical Communication',
            credits: 2,
            type: 'PCC',
            lectureHours: 0,
            tutorialHours: 2,
            labHours: 0,
            description: 'Technical writing and presentation skills'
          },
          {
            code: 'MTC-399',
            title: 'Community Outreach',
            credits: 2,
            type: 'CORE',
            lectureHours: 2,
            tutorialHours: 0,
            labHours: 0,
            description: 'Community engagement and outreach activities'
          },
          {
            code: 'MTT-I',
            title: 'Talent Enhancement Course-I',
            credits: 3,
            type: 'TEB',
            lectureHours: 2,
            tutorialHours: 1,
            labHours: 0,
            description: 'Specialized skill development course'
          },
          {
            code: 'MTL-I',
            title: 'Program Elective Course-I',
            credits: 3,
            type: 'PEC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Elective course from program specialization track'
          },
        ]
      },
      {
        name: 'Semester 6',
        season: 'Spring',
        totalCredits: 23,
        courses: [
          {
            code: 'HSSEC-II',
            title: 'HSS Elective Course-II',
            credits: 3,
            type: 'HSSEC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Humanities and social sciences elective'
          },
          {
            code: 'MTC-300',
            title: 'Engineering Analysis and Design',
            credits: 4,
            type: 'PCC',
            lectureHours: 2,
            tutorialHours: 0,
            labHours: 4,
            description: 'Analytical design methods and optimization'
          },
          {
            code: 'MTC-302',
            title: 'Corrosion Engineering',
            credits: 3,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 2,
            description: 'Corrosion mechanisms, prevention, and mitigation strategies'
          },
          {
            code: 'MTC-304',
            title: 'Ceramics and Metal Powder Processing',
            credits: 4,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 2,
            description: 'Processing and characterization of ceramics and metal powders'
          },
          {
            code: 'MTT-II',
            title: 'Talent Enhancement Course-II',
            credits: 3,
            type: 'TEB',
            lectureHours: 2,
            tutorialHours: 1,
            labHours: 0,
            description: 'Specialized skill development course'
          },
          {
            code: 'MTL-II',
            title: 'Program Elective Course-II',
            credits: 3,
            type: 'PEC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Elective course from program specialization track'
          },
          {
            code: 'MSC/DHC-I',
            title: 'Minor Specialization Course-I / Departmental Honours Course-I',
            credits: 3,
            type: 'MSC/DHC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Minor specialization or departmental honours track'
          },
        ]
      }
    ]
  },
  {
    year: 4,
    semesters: [
      {
        name: 'Semester 7',
        season: 'Autumn',
        totalCredits: 20,
        courses: [
          {
            code: 'MTC-401',
            title: 'Advanced Materials Engineering',
            credits: 3,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Emerging materials and advanced processing'
          },
          {
            code: 'MTC-402',
            title: 'Materials Modeling and Simulation',
            credits: 3,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Computational approaches to materials science'
          },
          {
            code: 'MTC-403',
            title: 'Quality Control and Assurance',
            credits: 3,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Quality management and testing standards'
          },
          {
            code: 'MTC-Elec-3',
            title: 'Elective-III',
            credits: 4,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 0,
            description: 'Student choice from specialized topics'
          },
          {
            code: 'HSL-401',
            title: 'Entrepreneurship and Innovation',
            credits: 2,
            type: 'HSSC',
            lectureHours: 2,
            tutorialHours: 0,
            labHours: 0,
            description: 'Business development and innovation strategies'
          },
          {
            code: 'MTC-411',
            title: 'Capstone Project',
            credits: 5,
            type: 'PCC',
            lectureHours: 0,
            tutorialHours: 0,
            labHours: 10,
            description: 'Major project or research thesis'
          },
        ]
      },
      {
        name: 'Semester 8',
        season: 'Spring',
        totalCredits: 20,
        courses: [
          {
            code: 'MTC-404',
            title: 'Materials for Energy Applications',
            credits: 3,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Materials for renewable energy and storage'
          },
          {
            code: 'MTC-405',
            title: 'Environmental Impact and Sustainability',
            credits: 3,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 0,
            labHours: 0,
            description: 'Life cycle assessment and sustainable practices'
          },
          {
            code: 'MTC-406',
            title: 'Industrial Training and Internship',
            credits: 4,
            type: 'PCC',
            lectureHours: 0,
            tutorialHours: 0,
            labHours: 0,
            description: 'Practical experience in industry'
          },
          {
            code: 'MTC-Elec-4',
            title: 'Elective-IV',
            credits: 4,
            type: 'PCC',
            lectureHours: 3,
            tutorialHours: 1,
            labHours: 0,
            description: 'Student choice from specialized topics'
          },
          {
            code: 'MTC-412',
            title: 'Capstone Project Seminar',
            credits: 3,
            type: 'PCC',
            lectureHours: 0,
            tutorialHours: 2,
            labHours: 2,
            description: 'Thesis documentation and presentation'
          },
        ]
      }
    ]
  },
];

export const programDetails: Record<string, ProgramDetail> = {
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
    courseStructure: btechCourseStructure,
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
