import React from 'react';
import BookCard from './BookCard';

function BookList({ books }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8 px-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    );
  }
  

export default BookList;
