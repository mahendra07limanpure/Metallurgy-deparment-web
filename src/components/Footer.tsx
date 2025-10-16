import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, GraduationCap, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About Department", path: "/about" },
    { name: "Faculty Members", path: "/faculty" },
    { name: "Research Areas", path: "/research" },
    { name: "Contact Us", path: "/contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-academic-gray text-white relative overflow-hidden" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Department Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-academic-blue p-4 rounded-md shadow-sm">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Metallurgical & Materials Engineering
                </h3>
                <p className="text-white/80 font-medium">Indian Institute of Technology Roorkee</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              Leading excellence in materials science education and research since 1954. 
              We are committed to advancing materials technology through innovative research, 
              quality education, and industry collaboration.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-md hover:bg-academic-blue/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-white">
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-academic-blue/20 rounded-md">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="text-white/80">
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p>Department of Metallurgical</p>
                  <p>& Materials Engineering</p>
                  <p>IIT Roorkee, Uttarakhand</p>
                  <p>India - 247667</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-academic-blue/20 rounded-md">
                  <Phone size={20} className="text-white" />
                </div>
                <div className="text-white/80">
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <p>+91-1332-285889</p>
                  <p>+91-1332-273560</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-academic-blue/20 rounded-md">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="text-white/80">
                  <p className="font-semibold text-white mb-1">Email</p>
                  <p>hod@mt.iitr.ac.in</p>
                  <p>office@mt.iitr.ac.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-white">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-white/80 hover:text-white transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-academic-blue text-white px-6 py-3 rounded-md hover:bg-academic-blue/80 transition-colors focus:outline-none focus:ring-2 focus:ring-academic-blue focus:ring-offset-2"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp size={20} aria-hidden="true" />
            <span className="font-medium">Back to Top</span>
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-white/80 font-medium">
              © 2024 Department of Metallurgical & Materials Engineering, IIT Roorkee. All rights reserved.
            </div>
            <div className="mt-6 md:mt-0">
              <div className="flex space-x-8 text-white/80">
                {["Privacy Policy", "Terms of Service", "Site Map"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-white transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;