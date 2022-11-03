import React from "react";
import "./SongInfo";
const SongInfo = ({ location, item }) => {
  return (
    <div className="footer__songInfo">
      <h4>{location?.state?.artisName ?? item?.artisName ??""}</h4>
      <p> {location?.state?.songName ?? item?.songName ?? ""}</p>
    </div>
  );
};

export default SongInfo;
