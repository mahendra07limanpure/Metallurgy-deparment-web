import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section id="contact" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-academic-gray mb-6">Contact Us</h1>
            <div className="section-accent"></div>
          </div>

          <div className="bg-white rounded-md shadow-md border border-gray-100 p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-academic-gray mb-4">Department Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  Department of Metallurgical & Materials Engineering<br />
                  Indian Institute of Technology Roorkee<br />
                  Roorkee, Uttarakhand 247667<br />
                  India
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-academic-gray mb-4">Phone</h3>
                <p className="text-gray-600">
                  +91-1332-285889<br />
                  +91-1332-273560
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-academic-gray mb-4">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:hod@mt.iitr.ac.in" className="link-primary">
                    head@mt.iitr.ac.in
                  </a>
                  <br />
                  <a href="mailto:office@mt.iitr.ac.in" className="link-primary">
                    metal@iitr.ac.in
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-academic-gray mb-4">Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
