import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import CenterFooter from "../CenterFooter/CenterFooter";
import FooterLeft from "../FooterLeft/FooterLeft";
import RightSideFooter from "../RightSideFooter/RightSideFooter";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const [playing, setPlaying] = useState(true);
  return (
    <div className="footer">
      <FooterLeft location={location} />
      <CenterFooter />
      <RightSideFooter />
    </div>
  );
};

export default Footer;
