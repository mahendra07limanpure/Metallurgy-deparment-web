import React from 'react';
import { Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { labs } from '../data/labs';

const Research: React.FC = () => {

  const serviceLabs: string[] = [
    'Ceramic Laboratory',
    'Corrosion Laboratory',
    'Fabrication Laboratory',
    'Fatigue Testing Laboratory',
    'Foundry Laboratory',
    'Heat Treatment Laboratory',
    'HR-TEM Laboratory',
    'Magnetic Materials Research Laboratory',
    'Materials Characterization (XRD) Laboratory',
    'Materials Testing Laboratory',
    'Metal Forming Laboratory',
    'Metallography Laboratory',
    'Mineral Dressing Laboratory',
    'Nano-Mechanics Laboratory',
    'Polymer Laboratory',
    'SEM Laboratory',
    'Spark Plasma Sintering Laboratory',
    'Thermo-Mechanical Simulator Laboratory',
    'Tribology Laboratory',
    'Welding Laboratory',
  ];

  const thematicLabs: string[] = [
    'Adhesive Joining Laboratory',
    'Bio-Materials and Multiscale Mechanics Laboratory',
    'Cellular and Composite Materials Laboratory',
    'Electrometallurgy Research Laboratory',
    'Energy Materials Laboratory',
    'Erosion Testing Laboratory',
    'Materials Processing Laboratory',
    'Nano Materials and Application Laboratory',
    'Phase Transformation Laboratory',
  ];

  return (
    <section id="research" className="py-8 bg-gray-50 relative overflow-hidden">
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

        {/* Official Lab Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-academic-gray mb-6">Laboratories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labs.map((lab) => (
              <Link
                key={lab.slug}
                to={`/labs/${lab.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                aria-label={`Open ${lab.name}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-md bg-academic-blue/15 text-academic-blue-800">
                      {lab.category === 'service' ? 'Service' : 'Thematic'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-academic-gray mb-2 group-hover:text-academic-blue-800 transition-colors">{lab.name}</h4>
                  <p className="text-sm text-academic-gray/80 line-clamp-2">{lab.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Comprehensive Laboratory Listings */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-16" aria-label="Laboratory listings">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section aria-labelledby="service-labs-heading">
              <h3 id="service-labs-heading" className="text-2xl font-bold text-academic-gray mb-3">Service Laboratories</h3>
              <div className="section-accent mb-6"></div>
              <ol className="space-y-2 list-decimal pl-6">
                {serviceLabs.map((lab) => (
                  <li key={lab} className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3">
                    <span className="text-academic-gray font-medium">{lab}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="thematic-labs-heading">
              <h3 id="thematic-labs-heading" className="text-2xl font-bold text-academic-gray mb-3">Thematic Research Laboratories</h3>
              <div className="section-accent mb-6"></div>
              <ol className="space-y-2 list-decimal pl-6">
                {thematicLabs.map((lab) => (
                  <li key={lab} className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3">
                    <span className="text-academic-gray font-medium">{lab}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
