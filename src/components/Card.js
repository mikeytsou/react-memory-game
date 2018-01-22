import React from 'react';

const Card = ({ key, showing, backgroundColor, onClick}) => {
  let styles = {
    margin: "10px",
    height: "150px",
    minWidth: "100px",
    width: "10%",
    backgroundColor: "grey",
    border: "6px solid grey",
    borderRadius: "25px",
    display: "inline-block"
  };

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
