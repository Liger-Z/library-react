import React from 'react';

function AddBook(props) {
  const handleClick = event => {
    props.toggleClassClicked(event);
    showForm();
  };

  const showForm = () => {
    const form = document.querySelector('.form-wrapper')
    form.classList.toggle('inactive');
  }

  return <button onClick={handleClick} className="option-button">Add</button>
}

export default AddBook;