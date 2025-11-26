import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 bg-amber-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-3 sm:mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-amber-800 text-center mb-8 sm:mb-12 px-4">
          We'd love to hear from you. Get in touch with us today.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-amber-200">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-4 sm:mb-6">
              Send us a Message
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-amber-900 font-medium mb-2 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 rounded border-2 border-amber-300 focus:border-amber-500 focus:outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 rounded border-2 border-amber-300 focus:border-amber-500 focus:outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2 text-sm sm:text-base">Message</label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 rounded border-2 border-amber-300 focus:border-amber-500 focus:outline-none resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                onClick={handleFormSubmit}
                className="w-full bg-amber-900 text-amber-50 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors shadow-lg text-sm sm:text-base"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-amber-200 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-4 sm:mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-amber-700 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1 text-sm sm:text-base">Email</h3>
                    <p className="text-amber-800 text-sm sm:text-base">info@zadlibrary.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-amber-700 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1 text-sm sm:text-base">Phone</h3>
                    <p className="text-amber-800 text-sm sm:text-base">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-amber-700 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1 text-sm sm:text-base">Address</h3>
                    <p className="text-amber-800 text-sm sm:text-base">
                      123 Library Street<br />
                      Knowledge District<br />
                      Booktown, BT 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-900 p-6 sm:p-8 rounded-lg shadow-lg text-amber-50">
              <h3 className="text-lg sm:text-xl font-serif font-bold mb-3">Opening Hours</h3>
              <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;