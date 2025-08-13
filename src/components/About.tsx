import React from 'react';
import { Award, Users, BookOpen, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "World-renowned professors and researchers leading breakthrough discoveries in materials science.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Advanced Research",
      description: "Cutting-edge laboratories and facilities for nanomaterials, biomaterials, and computational materials.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Target,
      title: "Industry Impact",
      description: "Strong partnerships with leading companies and direct contribution to technological advancement.",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  const stats = [
    { number: "70+", label: "Years of Excellence" },
    { number: "25+", label: "Faculty Members" },
    { number: "500+", label: "Alumni Network" },
    { number: "150+", label: "Research Papers/Year" }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <Award className="w-4 h-4" />
            <span>About Our Department</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">
            Leading Excellence in Materials Science
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
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

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></div>
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be a globally recognized center of excellence in materials engineering education and research, 
                contributing to technological advancement and societal benefit through innovative materials solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center shadow-lg shadow-blue-100/50 border border-blue-100/50"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl shadow-gray-300/50 border border-gray-100">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Department Laboratory"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-4 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-gray-300/50 border border-gray-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Top Ranked</div>
                  <div className="text-sm text-gray-600">Materials Dept.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;