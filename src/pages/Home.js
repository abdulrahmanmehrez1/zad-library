import React from 'react';
import { Book, DollarSign, Search } from 'lucide-react';

const Home = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-900 mb-3 md:mb-4">
            Welcome to ZAD Library
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-amber-800 mb-6 md:mb-8 font-light px-4">
            Discover, browse, and enjoy timeless knowledge
          </p>
          <button
            onClick={() => setCurrentPage('catalog')}
            className="bg-amber-900 text-amber-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-amber-800 transition-colors shadow-lg"
          >
            View Catalog
          </button>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-amber-900 text-amber-50 py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-300">1000+</div>
            <div className="text-xs sm:text-sm uppercase tracking-wide mt-1">Books Available</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-300">50+</div>
            <div className="text-xs sm:text-sm uppercase tracking-wide mt-1">Categories</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-300">5000+</div>
            <div className="text-xs sm:text-sm uppercase tracking-wide mt-1">Happy Readers</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16 md:py-20 px-4 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center text-amber-900 mb-8 sm:mb-12">
            Why Choose ZAD Library
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-xl transition-shadow">
              <Book className="h-10 w-10 sm:h-12 sm:w-12 text-amber-700 mb-4" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-3">
                Huge Book Collection
              </h3>
              <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                Explore thousands of titles across all genres, from classic literature to modern bestsellers.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-xl transition-shadow">
              <DollarSign className="h-10 w-10 sm:h-12 sm:w-12 text-amber-700 mb-4" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-3">
                Affordable Prices
              </h3>
              <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                Quality books at prices that won't break the bank. Knowledge should be accessible to everyone.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-xl transition-shadow sm:col-span-2 md:col-span-1">
              <Search className="h-10 w-10 sm:h-12 sm:w-12 text-amber-700 mb-4" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-3">
                Easy Browsing
              </h3>
              <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                Find exactly what you're looking for with our intuitive search and category system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;