import React, { useState } from 'react';

function SearchBar({ setBooks }) {
  const [query, setQuery] = useState('');

  const fetchBooks = async () => {
    if (!query.trim()) return;
    const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`);
    const data = await res.json();
    setBooks(data.docs.slice(0, 20));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchBooks}>Submit</button>
    </div>
  );
}

export default SearchBar;
