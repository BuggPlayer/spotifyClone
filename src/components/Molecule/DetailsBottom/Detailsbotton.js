import React from "react";
import SmallImageCard from "../../atom/SmallImageCard/SmallImageCard";
import SongInfo from "../../atom/songInfo/SongInfo";
import "./DetailsBottom.css";
const Detailsbotton = ({ item }) => {
  // console.log("songitem", item.track.album.images[0].url);
  return (
    <div className="detailsbottom">
      <SmallImageCard img={item?.track?.album?.images[0]?.url || ""} />
      <SongInfo data={item.track.artists[0]?.name || ""}  />
    </div>
  );
};

export default Detailsbotton;
