import React from "react";
import "./CardImage.css"

const CardImage = ({item ,onclick}) => {
  return (
    <div className="cardImage">
      <img onClick={onclick}  src={item.image} alt="pic1" />
    </div>
  );
};

export default CardImage;
