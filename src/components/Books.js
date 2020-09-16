import React, { useState } from 'react';

function Books() {
  const [books, setBooks] = useState([]);

  const addBook = book => {
    const newBooks = [...books];
    newBooks.push(book);
    setBooks(newBooks);
  };

  const bookItems = books.map(item => {
    return <li>{item}</li>
  });

  return (
    <div>
    </div>
  );
}

export default Books;