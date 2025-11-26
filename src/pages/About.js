import React from 'react';

const About = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6 sm:mb-8 text-center">
          About ZAD Library
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-amber-800 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Founded on the belief that knowledge should be accessible to all, ZAD Library has been serving our community with distinction for years. We are more than just a collection of books—we are a sanctuary for readers, learners, and dreamers.
          </p>
          <p className="text-amber-800 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            Our mission is to cultivate a love for reading and lifelong learning by providing a warm, welcoming environment where people of all ages can discover the transformative power of books.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-900 mb-4 sm:mb-6 mt-8 sm:mt-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-900 mb-2 sm:mb-3">Simplicity</h3>
              <p className="text-sm sm:text-base text-amber-800">
                We believe in making the joy of reading accessible and uncomplicated for everyone.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-900 mb-2 sm:mb-3">Knowledge</h3>
              <p className="text-sm sm:text-base text-amber-800">
                Every book is a doorway to new worlds, ideas, and perspectives worth exploring.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-amber-200 sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-900 mb-2 sm:mb-3">Tradition</h3>
              <p className="text-sm sm:text-base text-amber-800">
                We honor the timeless tradition of libraries as community pillars and learning centers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;