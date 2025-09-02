import React from 'react';

function BookCard({ book }) {
    const coverId = book.cover_i;
    const isbn = book.isbn?.[0];
    const coverUrl = coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : isbn
        ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
        : 'https://via.placeholder.com/150x200?text=No+Cover';
  
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300 w-48 text-center flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500 hover:bg-blue-50">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-64 object-cover rounded mb-3"
        />
        <h2 className="text-md font-semibold text-gray-800">{book.title}</h2>
        <p className="text-sm text-gray-600">
          {book.author_name?.join(', ') || 'Unknown Author'}
        </p>
      </div>
      
    );
  }
  
export default BookCard;
