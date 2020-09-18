import React, { useState } from 'react';
import Form from './Form';

function Books() {
  const [BookList, setBookList] = useState([]);
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishDate: "",
    pages: 1,
    rating: 0,
    id: "",
  });
  //setState is async so need to figure out how to setId before adding book
  const setId = () => {
    const id = `${book.title} ${Math.floor((Math.random() * 1000)).toString()}`;
    setBook(prevState => {
      console.log(id)
      return {...prevState, id: id};
    });
  }

  const addBook = () => {
    const newBookList = [...BookList];
    newBookList.push(book);
    setBookList(newBookList);
    console.log(newBookList)
  };

  const clearBook = () => {
      setBook(prevState => {
          return {
          title: "",
          author: "",
          publishDate: "",
          pages: 1,
          rating: 0,
          id: "",
        }
      })
  }

  const removeBook = event => {
    const target = event.target;
    console.log(target)
  }


  const bookItems = BookList.map(item => {
    return (
      <div className="books-list" key={item.id}>
        <ul>
          <li>Title: {item.title}</li>
          <li>Author: {item.author}</li>
          <li>Pages: {item.pages}</li>
        </ul>

        <button className="remove-button" data-id={item.id} alt="remove button" onClick={removeBook}></button>
      </div>
    )
  });

  return (
    <div className="books-wrapper">
      <Form 
      book={book} 
      setBook={setBook}  
      addBook={addBook} 
      clearBook={clearBook} 
      setId={setId}
      />

      <div className="books-list-wrapper">
        {bookItems}
      </div>
    </div>
  );
}

export default Books;