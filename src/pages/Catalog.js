import React, { useState } from 'react';
import { Book, Search } from 'lucide-react';
import { books } from '../data/books';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6 sm:mb-8 text-center">
          Book Catalog
        </h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg border-2 border-amber-300 focus:border-amber-500 focus:outline-none text-sm sm:text-base text-amber-900 bg-white shadow-md"
            />
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredBooks.map(book => (
            <div key={book.id} className="bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-800 to-amber-900 h-24 sm:h-32 flex items-center justify-center">
                <Book className="h-12 w-12 sm:h-16 sm:w-16 text-amber-300" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-900 mb-2">
                  {book.title}
                </h3>
                <p className="text-sm sm:text-base text-amber-700 mb-3 sm:mb-4 italic">by {book.author}</p>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-amber-800 mb-3 sm:mb-4">
                  <p><span className="font-semibold">Publisher:</span> {book.publisher}</p>
                  <p><span className="font-semibold">Pages:</span> {book.pages}</p>
                  <p><span className="font-semibold">Copies Available:</span> {book.copies}</p>
                </div>
                <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-amber-200">
                  <span className="text-xl sm:text-2xl font-bold text-amber-900">${book.price}</span>
                  <button className="bg-amber-900 text-amber-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-amber-800 transition-colors text-xs sm:text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg sm:text-xl text-amber-700">No books found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;