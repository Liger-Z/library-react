import React from 'react';

function FilterBook(props) {
  const handleClick = event => {
    props.toggleClassClicked(event);
  };

  return <button onClick={handleClick} className="option-button">Filter</button>
}

export default FilterBook;