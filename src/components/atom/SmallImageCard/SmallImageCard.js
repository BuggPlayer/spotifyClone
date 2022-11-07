import React from "react";

import "./SmallImagecard.css";
const SmallImageCard = ({img}) => {
  return (
    <img
      className="albumLogo"
      src={img ?? ""}
      alt="No Image"
    />
  );
};

export default SmallImageCard;
