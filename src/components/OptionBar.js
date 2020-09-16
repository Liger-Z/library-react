import React from 'react';
import AddBook from './AddBook';
import FilterBook from './FilterBook';
import SortBook from './SortBook';

function OptionBar() {
  const toggleClassClicked = event => {
    const target = event.target;
    target.classList.toggle("clicked")
  }

  return (
    <div className="option-bar inactive">
      <AddBook toggleClassClicked={toggleClassClicked}/>
      <FilterBook toggleClassClicked={toggleClassClicked}/>
      <SortBook toggleClassClicked={toggleClassClicked}/>
    </div>
  )
}

export default OptionBar;