import React from 'react';

function Form(props) {
  const handleChange = event => {
    const target = event.target;
    
    props.setBook(prevState => {
      return {...prevState, [target.name]: target.value}
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    
    props.addBook();
    props.clearBook();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <br />
          <input 
            type="text" 
            name="title"
            value={props.book.title}
            onChange={handleChange}
          />
        </label><br />

        <label>
          Author
          <br />
          <input 
            type="text"
            name="author"
            value={props.book.author}
            onChange={handleChange}
          />
        </label><br />

        <label>
          Pages
          <br />
          <input
            type="number"
            name="pages"
            min="0"
            value={props.book.pages}
            onChange={handleChange}
          />
        </label><br />

        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;