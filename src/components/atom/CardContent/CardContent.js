import React from "react";
import "./CardContent.css";
const CardContent = ({ artics }) => {
  return (
    <div className="cardContent">
      <h3>{artics.name}</h3>
    </div>
  );
};

export default CardContent;
