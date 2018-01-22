import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ showing, backgroundColor, onClick}) => {
  let styles = {};

  if(showing) {
    styles.backgroundColor = backgroundColor;
  }

  return (
    <div
      className="card-container"
      style={styles}
      onClick={onClick}
    />
  );
}

Card.propTypes = {
  showing: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
