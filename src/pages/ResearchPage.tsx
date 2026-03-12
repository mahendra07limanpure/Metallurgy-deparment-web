import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Microscope } from 'lucide-react';
import { labs } from '../data/labs';

const ResearchPage: React.FC = () => {
  const serviceLabs = labs.filter((lab) => lab.category === 'service');
  const thematicLabs = labs.filter((lab) => lab.category === 'thematic');

  return (
    <main className="pt-24 pb-16 bg-gradient-to-b from-white via-academic-blue/5 to-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <header className="mb-10">
          <div className="inline-flex items-center space-x-2 bg-academic-blue/15 text-academic-blue-800 px-4 py-2 rounded-md text-sm font-semibold mb-4">
            <Microscope className="w-4 h-4" />
            <span>Research Facilities</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-academic-gray mb-3">
            Laboratories
          </h1>
          <p className="max-w-3xl text-gray-600">
            The department operates dedicated service and thematic research laboratories that support teaching,
            sponsored research and consultancy activities.
          </p>
        </header>

        {/* Service Labs */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-academic-blue-800 flex items-center gap-2">
              <Beaker className="w-5 h-5" />
              <span>Service Laboratories</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceLabs.map((lab) => (
              <article
                key={lab.slug}
                className="bg-white/90 backdrop-blur rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="relative h-44 bg-gray-100">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-academic-gray mb-2">
                    {lab.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {lab.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/labs/${lab.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-academic-blue-700 hover:text-academic-blue-900"
                    >
                      <span>View details</span>
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Thematic Labs */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-academic-blue-800 flex items-center gap-2">
              <Microscope className="w-5 h-5" />
              <span>Thematic Research Laboratories</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {thematicLabs.map((lab) => (
              <article
                key={lab.slug}
                className="bg-white/90 backdrop-blur rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="relative h-44 bg-gray-100">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-academic-gray mb-2">
                    {lab.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {lab.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/labs/${lab.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-academic-blue-700 hover:text-academic-blue-900"
                    >
                      <span>View details</span>
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ResearchPage;
