import React, { useState } from 'react';
import Form from './Form';

function Book() {
  const [BookList, setBookList] = useState([]);
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishDate: "",
    pages: 1,
    rating: 0,
  });

  const addBook = () => {
    const newBookList = [...BookList];
    newBookList.push(book);
    setBookList(newBookList);
  };

  const clearBook = () => {
      setBook({
        title: "",
        author: "",
        publishDate: "",
        pages: 1,
        rating: 0,
      })
  }

  const bookItems = BookList.map(item => {
    return (
      <ul>
        <li>{item.title}</li>
        <li>{item.author}</li>
        <li>{item.pages}</li>
      </ul>
    )
  });

  return (
    <div className="books-wrapper">
      <Form 
      book={book} 
      setBook={setBook}  
      addBook={addBook} 
      clearBook={clearBook} 
      />
      {bookItems}
    </div>
  );
}

export default Book;