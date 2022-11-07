import React from "react";
import "./SongInfo";
const SongInfo = ({ data, item }) => {
  return (
    <div className="footer__songInfo">
      <h4>{data ?? "nope"}</h4>
    </div>
  );
};

export default SongInfo;
