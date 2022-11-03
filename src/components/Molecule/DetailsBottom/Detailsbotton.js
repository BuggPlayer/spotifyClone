import React from "react";
import SmallImageCard from "../../atom/SmallImageCard/SmallImageCard";
import SongInfo from "../../atom/songInfo/SongInfo";
import "./DetailsBottom.css";
const Detailsbotton = ({ item }) => {
  return (
    <div className="detailsbottom">
      <SmallImageCard item={item} />
      <SongInfo item={item} />
    </div>
  );
};

export default Detailsbotton;
