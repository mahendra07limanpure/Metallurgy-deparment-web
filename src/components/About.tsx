import React from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "World-renowned professors and researchers leading breakthrough discoveries in materials science."
    },
    {
      icon: BookOpen,
      title: "Advanced Research",
      description: "Cutting-edge laboratories and facilities for nanomaterials, biomaterials, and computational materials."
    },
    {
      icon: Target,
      title: "Industry Impact",
      description: "Strong partnerships with leading companies and direct contribution to technological advancement."
    }
  ];

  // stats removed (unused) to satisfy linter

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-academic-blue/15 text-academic-blue-800 px-4 py-2 rounded-md text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            <span>About Our Department</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-academic-gray mb-6">
            Leading Excellence in Materials Science
          </h2>
          <div className="section-accent"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-md p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-academic-gray mb-4 flex items-center">
                <div className="w-2 h-8 bg-academic-blue-600 rounded-full mr-4"></div>
                Our Legacy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Established in 1954, the Department of Metallurgical and Materials Engineering at IIT Roorkee 
                has been at the forefront of materials science education and research for over seven decades.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We bridge the gap between fundamental science and practical engineering applications, 
                developing materials that shape the modern world.
              </p>
            </div>

            <div className="bg-white rounded-md p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-academic-gray mb-4 flex items-center">
                <div className="w-2 h-8 bg-academic-blue-600 rounded-full mr-4"></div>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to educate the next generation of materials engineers, conduct innovative research, 
                and collaborate with industry partners to address real-world challenges through materials science solutions.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative bg-white rounded-md p-4 shadow-md border border-gray-100">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Department Laboratory"
                className="w-full h-96 object-cover rounded-md"
              />
            </div>
            
            {/* Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-md p-6 shadow-md border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-academic-blue-800 rounded-md flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-academic-gray">Top Ranked</div>
                  <div className="text-sm text-gray-600">Materials Dept.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-md p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-academic-blue-800 rounded-md flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-academic-gray mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
