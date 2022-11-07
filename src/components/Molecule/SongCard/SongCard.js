import React from "react";
import Card from "../../atom/Card/Card";
import "./SongCard.css";
const SongCard = ({ track }) => {
  return (
    <>
      <div className="SongCardContent">
        <h2>{track?.album?.name}</h2>
        <div className="SongCardChild">
          <Card Cardtrack={track} />
        </div>
      </div>
    </>
  );
};

export default SongCard;
