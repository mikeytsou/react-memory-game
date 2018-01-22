import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ onNewGame }) => {
  return (
    <header>
      <h2>React Memory Game</h2>

      <nav>
        <li>
          <a onClick={onNewGame}>New Game</a>
        </li>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  onNewGame: PropTypes.func.isRequired
};

export default NavBar;
