import React from 'react';
import { ArrowRight, Microscope, Zap, Cpu, Heart, Wrench, Atom, ExternalLink } from 'lucide-react';

interface ResearchLab {
  id: number;
  name: string;
  description: string;
  image: string;
  focus: string[];
  publications: number;
  funding: string;
}

const Research: React.FC = () => {
  const researchLabs: ResearchLab[] = [
    {
      id: 1,
      name: "Advanced Materials Characterization Lab",
      description: "State-of-the-art facility for comprehensive materials analysis using electron microscopy, X-ray diffraction, and spectroscopic techniques.",
      image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=600",
      focus: ["SEM/TEM Analysis", "XRD", "Spectroscopy", "Microstructure Analysis"],
      publications: 45,
      funding: "₹2.5Cr"
    },
    {
      id: 2,
      name: "Nanomaterials Synthesis Laboratory",
      description: "Cutting-edge research in synthesis and application of nanomaterials for electronics, energy storage, and biomedical applications.",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600",
      focus: ["Nanoparticle Synthesis", "Thin Films", "2D Materials", "Quantum Dots"],
      publications: 38,
      funding: "₹3.2Cr"
    },
    {
      id: 3,
      name: "High Temperature Materials Lab",
      description: "Research on materials behavior at extreme conditions for aerospace, nuclear, and industrial applications.",
      image: "https://images.pexels.com/photos/2280564/pexels-photo-2280564.jpeg?auto=compress&cs=tinysrgb&w=600",
      focus: ["Superalloys", "Refractory Materials", "Thermal Barrier Coatings", "Creep Testing"],
      publications: 32,
      funding: "₹1.8Cr"
    },
    {
      id: 4,
      name: "Computational Materials Science Lab",
      description: "Advanced modeling and simulation of materials properties using density functional theory and molecular dynamics.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
      focus: ["DFT Calculations", "Molecular Dynamics", "Phase Field Modeling", "Materials Design"],
      publications: 52,
      funding: "₹2.1Cr"
    },
    {
      id: 5,
      name: "Biomaterials Research Center",
      description: "Development of biocompatible materials for medical implants, drug delivery systems, and tissue engineering applications.",
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600",
      focus: ["Biocompatibility", "Implant Materials", "Drug Delivery", "Tissue Engineering"],
      publications: 41,
      funding: "₹2.8Cr"
    },
    {
      id: 6,
      name: "Materials Processing Laboratory",
      description: "Advanced processing techniques including additive manufacturing, casting, and powder metallurgy for novel material development.",
      image: "https://images.pexels.com/photos/2280548/pexels-photo-2280548.jpeg?auto=compress&cs=tinysrgb&w=600",
      focus: ["3D Printing", "Powder Metallurgy", "Casting", "Surface Treatment"],
      publications: 29,
      funding: "₹1.5Cr"
    }
  ];

  const labIcons = [Microscope, Atom, Zap, Cpu, Heart, Wrench];

  return (
    <section id="research" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-academic-blue/15 border border-academic-blue/20 text-academic-blue-800 px-4 py-2 rounded-md text-sm font-semibold mb-4">
            <Microscope className="w-4 h-4" />
            <span>Research Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-academic-gray mb-6">
            Research & Laboratories
          </h2>
          <p className="text-xl text-academic-gray/80 max-w-3xl mx-auto mb-6">
            Explore our world-class research facilities and cutting-edge laboratories driving innovation in materials science
          </p>
          <div className="section-accent"></div>
        </div>

        {/* Research Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {researchLabs.map((lab, index) => {
            const IconComponent = labIcons[index % labIcons.length];
            return (
              <div
                key={lab.id}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Lab Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-sm">
                      <IconComponent className="w-5 h-5 text-academic-blue-800" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="bg-white rounded-md px-3 py-1 shadow-sm">
                      <span className="text-xs font-semibold text-academic-gray">{lab.publications} Papers</span>
                    </div>
                    <div className="bg-white rounded-md px-3 py-1 shadow-sm">
                      <span className="text-xs font-semibold text-academic-gray">{lab.funding}</span>
                    </div>
                  </div>
                </div>

                {/* Lab Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-academic-gray mb-4 hover:text-academic-blue-800 transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-academic-gray/80 leading-relaxed mb-6 text-sm">
                    {lab.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-academic-gray mb-3 uppercase tracking-wide">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {lab.focus.map((area, idx) => (
                        <span
                          key={idx}
                          className="badge-primary"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-md transition-all duration-300 border border-gray-200">
                    <span className="text-sm font-semibold text-academic-blue-800">Explore Lab</span>
                    <div className="flex items-center space-x-2">
                      <ArrowRight size={16} className="text-academic-blue-800" />
                      <ExternalLink size={14} className="text-academic-gray" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Highlights */}
        <div className="relative bg-gradient-to-r from-academic-blue-600 to-academic-blue-800 rounded-lg p-12 md:p-16 overflow-hidden">
          <div className="relative text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-12">
              Research Impact & Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "237+", label: "Publications per Year" },
                { number: "₹15Cr+", label: "Research Funding" },
                { number: "35+", label: "Industry Partnerships" },
                { number: "12+", label: "Patent Applications" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-3">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
