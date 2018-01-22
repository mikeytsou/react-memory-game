import React from 'react';

const NavBar = ({ onReset }) => {
  return (
    <header>
      <h2>React Memory Game</h2>

      <nav>
        <li>
          <a onClick={onReset}>New Game</a>
        </li>
      </nav>
    </header>
  );
}

export default NavBar;
