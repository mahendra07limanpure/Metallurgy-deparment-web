import React from 'react';
import { Mail, ExternalLink, Award, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  email: string;
  researchInterests: string[];
  rating: number;
}

const Faculty: React.FC = () => {
  const facultyMembers: FacultyMember[] = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head of Department",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "rajesh.kumar@mt.iitr.ac.in",
      researchInterests: ["Advanced Materials", "Metallurgy", "Materials Characterization"],
      rating: 4.9
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "priya.sharma@mt.iitr.ac.in",
      researchInterests: ["Nanomaterials", "Biomaterials", "Surface Engineering"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Dr. Amit Singh",
      designation: "Associate Professor",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "amit.singh@mt.iitr.ac.in",
      researchInterests: ["Computational Materials", "Phase Transformations", "Alloy Design"],
      rating: 4.7
    },
    {
      id: 4,
      name: "Dr. Kavya Reddy",
      designation: "Assistant Professor",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "kavya.reddy@mt.iitr.ac.in",
      researchInterests: ["Ceramic Materials", "High Temperature Materials", "Materials Processing"],
      rating: 4.6
    },
    {
      id: 5,
      name: "Dr. Vikram Gupta",
      designation: "Assistant Professor",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "vikram.gupta@mt.iitr.ac.in",
      researchInterests: ["Materials Modeling", "Electronic Materials", "Thin Films"],
      rating: 4.8
    },
    {
      id: 6,
      name: "Dr. Neha Agarwal",
      designation: "Assistant Professor",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "neha.agarwal@mt.iitr.ac.in",
      researchInterests: ["Polymer Materials", "Composites", "Materials Testing"],
      rating: 4.5
    }
  ];

  return (
    <section id="faculty" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <Award className="w-4 h-4" />
            <span>Meet Our Experts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent mb-6">
            Distinguished Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Meet our world-class faculty members who are leaders in materials science research and education
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500"
            >
              {/* Faculty Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{member.rating}</span>
                </div>

                {/* Research Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 flex items-center space-x-2 shadow-lg">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-800">Research Leader</span>
                </div>
              </div>

              {/* Faculty Information */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-6 text-lg">
                  {member.designation}
                </p>

                {/* Research Interests */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                    Research Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.researchInterests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs rounded-full font-medium border border-blue-200/50 hover:border-blue-300/50 transition-colors shadow-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <motion.a
                  href={`mailto:${member.email}`}
                  className="group/btn w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={18} className="group-hover/btn:scale-110 transition-transform" />
                  <span>Contact</span>
                  <ExternalLink size={14} className="opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faculty Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="relative text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Faculty Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
                <div className="text-blue-100 font-medium">Faculty Members</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-blue-100 font-medium">Professors</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                <div className="text-blue-100 font-medium">Research Papers</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-100 font-medium">Awards</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faculty;