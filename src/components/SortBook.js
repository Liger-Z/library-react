import React from 'react';

function SortBook(props) {
  const handleClick = event => {
    props.toggleClassClicked(event);
  };

  return <button onClick={handleClick} className="option-button">Sort</button>
}

export default SortBook;