import React from 'react';
import { Book } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-100 py-6 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <Book className="h-5 w-5 sm:h-6 sm:w-6 text-amber-300 mr-2" />
          <span className="text-lg sm:text-xl font-serif font-bold">ZAD Library</span>
        </div>
        <p className="text-sm sm:text-base text-amber-300 mb-1.5 sm:mb-2">Where Knowledge Lives</p>
        <p className="text-xs sm:text-sm text-amber-400">© 2024 ZAD Library. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;