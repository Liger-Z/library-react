import React from 'react';

function Form(props) {
  const handleChange = event => {
    const target = event.target;
    
    props.setBook(prevState => {
      return {...prevState, [target.name]: target.name === "completed" ? !prevState.completed : target.value}
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    props.addBook();
    props.clearBook();
  }

  return (
    <div className="form-wrapper inactive">
      <h1 className="form-title">Add Book</h1>

      <form className="add-book-form" onSubmit={handleSubmit}>
        <label>
          Title
          <br />
          <input 
            type="text" 
            name="title"
            value={props.book.title}
            onChange={handleChange}
            required
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
            required
          />
        </label><br />

        <label>
          Pages
          <br />
          <input
            type="number"
            name="pages"
            min="1"
            value={props.book.pages}
            onChange={handleChange}
            required
          />
        </label><br />

        <label className="form-checkbox">
          Completed
          <input
            type="checkbox"
            name="completed"
            value={props.book.completed}
            onChange={handleChange}
          />
        </label>

        <button className="submit-button">Add</button>
      </form>
    </div>
  );
}

export default Form;