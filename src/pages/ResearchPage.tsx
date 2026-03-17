import React from 'react';
import { labs } from '../data/labs';

const ResearchPage: React.FC = () => {
  // Split labs by category
  const serviceLabs = labs.filter(lab => lab.category === 'service');
  const thematicLabs = labs.filter(lab => lab.category === 'thematic');

  return (
    <div className="pt-20 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-academic-gray">Laboratories</h1>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-academic-blue-800">Service Laboratory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceLabs.map(lab => (
            <div key={lab.slug} className="bg-white rounded-md shadow p-4 border border-gray-200">
              <img src={lab.image} alt={lab.name} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-lg font-bold mb-1">{lab.name}</h3>
              <p className="text-gray-700 mb-2">{lab.description}</p>
              <a href={`/labs/${lab.slug}`} className="text-academic-blue-600 hover:underline text-sm font-medium">View Details</a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-academic-blue-800">Thematic Research Laboratory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thematicLabs.map(lab => (
            <div key={lab.slug} className="bg-white rounded-md shadow p-4 border border-gray-200">
              <img src={lab.image} alt={lab.name} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-lg font-bold mb-1">{lab.name}</h3>
              <p className="text-gray-700 mb-2">{lab.description}</p>
              <a href={`/labs/${lab.slug}`} className="text-academic-blue-600 hover:underline text-sm font-medium">View Details</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
