import React from 'react';

const Card = ({ key, showing, backgroundColor, onClick}) => {
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

export default Card;
