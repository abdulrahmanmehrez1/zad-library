import React, { useState } from 'react';
import { Book, Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-amber-50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => {
              setCurrentPage('home');
              setMobileMenuOpen(false);
            }}
          >
            <Book className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-amber-300 group-hover:text-amber-200 transition-colors" />
            <span className="ml-2 text-xl sm:text-2xl lg:text-3xl font-serif font-bold group-hover:text-amber-200 transition-colors">
              ZAD Library
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {['home', 'about', 'services', 'catalog', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all ${
                  currentPage === page 
                    ? 'bg-amber-800 text-amber-100' 
                    : 'text-amber-100 hover:bg-amber-800 hover:text-amber-200'
                }`}
              >
                {page === 'home' ? 'Home' : page}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-amber-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-amber-800">
            {['home', 'about', 'services', 'catalog', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 capitalize text-base rounded-lg mb-1 transition-all ${
                  currentPage === page 
                    ? 'bg-amber-800 text-amber-100 font-semibold' 
                    : 'text-amber-100 hover:bg-amber-800'
                }`}
              >
                {page === 'home' ? 'Home' : page}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;