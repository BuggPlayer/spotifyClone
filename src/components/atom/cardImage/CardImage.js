import React from "react";
import "./CardImage.css";

const CardImage = ({ img, onclick }) => {

  return (
    <div className="cardImage">
      <img onClick={onclick} src={img} alt="pic1" />
    </div>
  );
};

export default CardImage;
