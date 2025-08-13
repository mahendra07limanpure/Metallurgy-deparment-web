import React from 'react';
import { ArrowRight, Microscope, Zap, Cpu, Heart, Wrench, Atom, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="research" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/15 rounded-full blur-3xl"
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <Microscope className="w-4 h-4" />
            <span>Research Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-indigo-600 bg-clip-text text-transparent mb-6">
            Research & Laboratories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Explore our world-class research facilities and cutting-edge laboratories driving innovation in materials science
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Research Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {researchLabs.map((lab, index) => {
            const IconComponent = labIcons[index % labIcons.length];
            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 cursor-pointer"
              >
                {/* Lab Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="bg-white/90 backdrop-blur-md rounded-full px-3 py-1 shadow-lg">
                      <span className="text-xs font-semibold text-gray-800">{lab.publications} Papers</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-md rounded-full px-3 py-1 shadow-lg">
                      <span className="text-xs font-semibold text-gray-800">{lab.funding}</span>
                    </div>
                  </div>
                </div>

                {/* Lab Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {lab.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-800 mb-3 uppercase tracking-wide">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {lab.focus.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-xs rounded-full font-medium border border-indigo-200/50 shadow-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <motion.div
                    className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 px-4 py-3 rounded-2xl transition-all duration-300 group-hover:shadow-md border border-indigo-100/50"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-sm font-semibold text-indigo-600">Explore Lab</span>
                    <div className="flex items-center space-x-2">
                      <ArrowRight size={16} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                      <ExternalLink size={14} className="text-indigo-400" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Research Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          
          <div className="relative text-center text-white">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Research Impact & Excellence
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "237+", label: "Publications per Year", delay: 0 },
                { number: "₹15Cr+", label: "Research Funding", delay: 0.1 },
                { number: "35+", label: "Industry Partnerships", delay: 0.2 },
                { number: "12+", label: "Patent Applications", delay: 0.3 }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;