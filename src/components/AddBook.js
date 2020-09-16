import React from 'react';

function AddBook(props) {
  const handleClick = event => {
    props.toggleClassClicked(event);
  };

  return <button onClick={handleClick} className="option-button">Add</button>
}

export default AddBook;