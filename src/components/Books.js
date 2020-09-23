import React, { useState } from 'react';
import Form from './Form';

function Books() {
  //TODO: Add Read status functionality

  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: 1,
    completed: false,
  });

  function addBook() {
    const newBookList = [...bookList];
    newBookList.push(book);
    console.log(newBookList);
    setBookList(newBookList);
  };

  function clearBook() {
      setBook(prevState => {
          return {
          title: "",
          author: "",
          pages: 1,
          completed: false,
        }
      });
  };

  function findBookIndex(event) {
    const target = event.target;
    const bookTitle = (target.parentNode.parentNode.attributes[1].nodeValue);
    const bookAuthor = (target.parentNode.parentNode.attributes[2].nodeValue);
    const bookPages = (target.parentNode.parentNode.attributes[3].nodeValue)
    const index = bookList.findIndex(item => {
      return item.title === bookTitle && item.author === bookAuthor && item.pages === bookPages;
    });

    return index;
  }

  function removeBook(event) {
    const index = findBookIndex(event);

    let newBookList = [...bookList];
    newBookList.splice(index, 1);
    setBookList(newBookList);
  };

  function toggleCompleted(event) {
    const index = findBookIndex(event);
    const book = bookList[index];
    const newBook = { ...book, completed: !book.completed };
    const newBookList = [ ...bookList ];
    newBookList[index] = newBook;
    
    setBookList(newBookList);
  };

  const bookItems = bookList.map(item => {
    return (
      <div 
      className={item.completed ? "book-list-wrapper completed" : "book-list-wrapper"} 
      attribute-title={item.title}
      attribute-author={item.author}
      attribute-pages={item.pages} 
      key={`${item.title} ${Math.floor(Math.random * 99999999)}`}
      >
        <ul>
          <li>Title: {item.title}</li>
          <li>Author: {item.author}</li>
          <li>Pages: {item.pages}</li>
        </ul>

        <div className="book-button-wrapper">
          <button 
          className={item.completed ? "completed-button completed" : "completed-button"} 
          onClick={toggleCompleted}>
            {item.completed ? "Read" : "Unread"}
          </button>

          <button 
          className="remove-button" 
          alt="remove button" 
          onClick={removeBook}>
          </button>
        </div>
      </div>
    );
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
};

export default Books;