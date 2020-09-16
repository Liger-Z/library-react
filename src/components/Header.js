import React from 'react';

function Header() {
  // add and remove clicked class for animation purposes
  
  const handleClick = (event) => {
    const optionBar = document.querySelector(".option-bar");
    optionBar.classList.toggle('inactive');
    optionBar.classList.toggle('animate');

    const target = event.target;
    target.classList.add('clicked');
    setTimeout(() => {
      target.classList.remove('clicked')
    }, 150)

  };

  return (
    <div className="site-header">
      <h1 className="header-title">Liger's Library</h1>
      <button className="menu-button" onClick={handleClick}></button>
    </div>
  );
};

export default Header;