import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, GraduationCap, ArrowUp, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About Department", href: "#about" },
    { name: "Faculty Members", href: "#faculty" },
    { name: "Research Areas", href: "#research" },
    { name: "Laboratories", href: "#labs" },
    { name: "Academic Programs", href: "#programs" },
    { name: "Admissions", href: "#admissions" },
    { name: "Publications", href: "#publications" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600", label: "Facebook" },
    { icon: Twitter, href: "#", color: "hover:bg-blue-400", label: "Twitter" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
    { icon: Youtube, href: "#", color: "hover:bg-red-600", label: "YouTube" }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Department Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-8">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur-sm opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-xl">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Metallurgical & Materials Engineering
                </h3>
                <p className="text-blue-200 font-medium">Indian Institute of Technology Roorkee</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Leading excellence in materials science education and research since 1954. 
              We are committed to advancing materials technology through innovative research, 
              quality education, and industry collaboration.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`group p-4 bg-white/10 backdrop-blur-md rounded-2xl ${social.color} transition-all duration-300 border border-white/20 shadow-lg`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4 group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors shadow-lg">
                  <MapPin size={24} className="text-blue-300 flex-shrink-0" />
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p>Department of Metallurgical</p>
                  <p>& Materials Engineering</p>
                  <p>IIT Roorkee, Uttarakhand</p>
                  <p>India - 247667</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-4 group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 bg-indigo-500/20 rounded-xl group-hover:bg-indigo-500/30 transition-colors shadow-lg">
                  <Phone size={24} className="text-indigo-300 flex-shrink-0" />
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <p>+91-1332-285889</p>
                  <p>+91-1332-273560</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-4 group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors shadow-lg">
                  <Mail size={24} className="text-purple-300 flex-shrink-0" />
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white mb-1">Email</p>
                  <p>hod@mt.iitr.ac.in</p>
                  <p>office@mt.iitr.ac.in</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span>{link.name}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Back to Top Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span className="font-medium">Back to Top</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="relative border-t border-white/10 backdrop-blur-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-300 font-medium">
              © 2024 Department of Metallurgical & Materials Engineering, IIT Roorkee. All rights reserved.
            </div>
            <div className="mt-6 md:mt-0">
              <div className="flex space-x-8 text-gray-300">
                {["Privacy Policy", "Terms of Service", "Site Map"].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="hover:text-white transition-colors font-medium"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;