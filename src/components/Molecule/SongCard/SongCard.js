import React, { useState } from "react";
import Card from "../../atom/Card/Card";
import "./SongCard.css";
const SongCard = ({ track, idhandller }) => {

  // const handler = () => {
  //   console.log("ggg");
  // };
  return (
    <>
      <div className="SongCardContent">
        <h2>{track?.album?.name}</h2>
        <div className="SongCardChild">
          <Card  Cardtrack={track}  />
        </div>
      </div>
    </>
  );
};

export default SongCard;
