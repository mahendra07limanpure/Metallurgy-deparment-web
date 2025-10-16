import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const ProgramsPage = () => {
  const programs = [
    {
      degree: 'B.Tech',
      title: 'Bachelor of Technology',
      duration: '4 Years',
      icon: GraduationCap,
      description: 'Comprehensive undergraduate program providing strong foundation in metallurgical and materials engineering principles.',
      highlights: [
        'Core courses in physical metallurgy, process metallurgy, and materials characterization',
        'Hands-on laboratory experience with state-of-the-art equipment',
        'Industrial training and project work',
        'Placement opportunities in leading industries',
      ],
      intake: '60 students per year',
      eligibility: 'JEE Advanced qualified candidates',
    },
    {
      degree: 'M.Tech',
      title: 'Master of Technology',
      duration: '2 Years',
      icon: BookOpen,
      description: 'Advanced postgraduate program for specialization in various areas of metallurgical and materials engineering.',
      highlights: [
        'Specializations: Process Metallurgy, Materials Science, Welding Technology',
        'Research-oriented curriculum with thesis work',
        'Collaborative projects with industry and national laboratories',
        'Teaching assistantship opportunities',
      ],
      intake: '40 students per year',
      eligibility: 'GATE qualified candidates with B.Tech/B.E. in relevant discipline',
    },
    {
      degree: 'Ph.D.',
      title: 'Doctor of Philosophy',
      duration: '3-5 Years',
      icon: Award,
      description: 'Doctoral research program for advanced research and innovation in cutting-edge areas of materials science.',
      highlights: [
        'World-class research facilities and laboratories',
        'Interdisciplinary research opportunities',
        'Financial support through fellowships',
        'International collaborations and publications',
      ],
      intake: 'Rolling admissions',
      eligibility: 'M.Tech/M.E./M.Sc. with valid GATE score or equivalent',
    },
  ];

  const researchAreas = [
    'Advanced Materials Processing',
    'Nanomaterials and Nanocomposites',
    'Computational Materials Science',
    'Corrosion Science and Engineering',
    'Powder Metallurgy',
    'Welding and Joining Technology',
    'Additive Manufacturing',
    'Biomaterials',
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-academic-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              World-class education in Metallurgical and Materials Engineering at IIT Roorkee
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-academic-blue to-blue-700 p-8 text-white flex flex-col justify-center items-center">
                      <Icon className="w-16 h-16 mb-4" />
                      <h2 className="text-4xl font-bold mb-2">{program.degree}</h2>
                      <h3 className="text-xl mb-4">{program.title}</h3>
                      <div className="bg-white/20 px-4 py-2 rounded-lg">
                        <p className="font-semibold">{program.duration}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <p className="text-gray-700 text-lg mb-6">{program.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-academic-blue mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Program Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {program.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-academic-gold mt-1">•</span>
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Intake</p>
                          <p className="text-gray-600">{program.intake}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Eligibility</p>
                          <p className="text-gray-600">{program.eligibility}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our department offers cutting-edge research opportunities in diverse areas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-academic-blue hover:text-white transition-colors cursor-pointer"
              >
                <p className="font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-16 bg-gradient-to-r from-academic-blue to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Applications for the upcoming academic year are now open
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.iitr.ac.in/admissions/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-academic-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-academic-blue transition-colors"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
