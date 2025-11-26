import React from 'react';
import { Book, DollarSign, Search, Users } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-3 sm:mb-4 text-center">
          Our Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-amber-800 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Dedicated to serving your literary needs with excellence and care
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-amber-200">
            <div className="bg-amber-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Book className="h-7 w-7 sm:h-8 sm:w-8 text-amber-900" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-3 sm:mb-4">
              Book Borrowing
            </h3>
            <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
              Take home your favorite books with our flexible borrowing system. Enjoy extended loan periods and easy renewals for your convenience.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-amber-200">
            <div className="bg-amber-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <DollarSign className="h-7 w-7 sm:h-8 sm:w-8 text-amber-900" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-3 sm:mb-4">
              Book Buying
            </h3>
            <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
              Build your personal library with our carefully curated selection of books available for purchase at competitive prices.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-amber-200">
            <div className="bg-amber-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Search className="h-7 w-7 sm:h-8 sm:w-8 text-amber-900" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-3 sm:mb-4">
              Reading Suggestions
            </h3>
            <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
              Not sure what to read next? Our knowledgeable staff provides personalized recommendations based on your interests and reading history.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-amber-200">
            <div className="bg-amber-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Users className="h-7 w-7 sm:h-8 sm:w-8 text-amber-900" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-3 sm:mb-4">
              Customer Support
            </h3>
            <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
              Our friendly team is always here to help with any questions, requests, or assistance you may need during your visit or inquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;