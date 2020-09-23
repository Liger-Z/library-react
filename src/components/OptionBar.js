import React from 'react';
import AddTab from './AddTab';
import FilterTab from './FilterTab';
import SortTab from './SortTab';

function OptionBar() {
  const toggleClassClicked = event => {
    const target = event.target;
    target.classList.toggle("clicked")
  }

  return (
    <div className="option-bar inactive">
      <AddTab toggleClassClicked={toggleClassClicked}/>
      <FilterTab toggleClassClicked={toggleClassClicked}/>
      <SortTab toggleClassClicked={toggleClassClicked}/>
    </div>
  )
}

export default OptionBar;