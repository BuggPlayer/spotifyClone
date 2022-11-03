import React from "react";
import SmallImageCard from "../../atom/SmallImageCard/SmallImageCard";
import SongInfo from "../../atom/songInfo/SongInfo";

import "./FooterLeft.css";
const FooterLeft = ({ location }) => {
  return (
    <div className="footer__left">
      <SmallImageCard location={location} />
      <SongInfo location={location} />
    </div>
  );
};

export default FooterLeft;
