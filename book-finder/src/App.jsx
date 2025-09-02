import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const filteredBooks = books.filter(book => book.cover_i || book.isbn);

  const sortedBooks = [...books].sort((a, b) => {
    if (!sortBy) return 0;
    const valA = a[sortBy] || '';
    const valB = b[sortBy] || '';
    const comparison = sortBy === 'first_publish_year'
      ? (valA || 0) - (valB || 0)
      : valA.toString().localeCompare(valB.toString());
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return (
    <div className="app-container">
      <h1 className="text-4xl font-bold text-indigo-700 mt-6">📚 Book Finder</h1>
      <SearchBar setBooks={setBooks} />
      <div className="filters">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="title">Book Name</option>
          <option value="author_name">Author Name</option>
          <option value="first_publish_year">Year Published</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <BookList books={sortedBooks} />
    </div>
  );
}

export default App;
