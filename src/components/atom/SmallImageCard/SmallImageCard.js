import React from "react";

import "./SmallImagecard.css";
const SmallImageCard = ({location , item}) => {
  return (
    <img
      className="albumLogo"
      src={location?.state?.image ?? item?.image}
      alt="No Image"
    />
  );
};

export default SmallImageCard;
