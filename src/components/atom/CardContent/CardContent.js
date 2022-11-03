import React from "react";
import "./CardContent.css";
const CardContent = ({item}) => {
  return (
    <div className="cardContent">
      <h3 >{item.songName}</h3>
      <span className="subText">
        {item.artisName}
        <br />
      </span>
    </div>
  );
};

export default CardContent;
