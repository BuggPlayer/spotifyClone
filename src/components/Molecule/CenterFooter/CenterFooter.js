import React from "react";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import Playbutton from "../../atom/Playbutton/Playbutton";
import Pausebutton from "../../atom/pausebutton/Pausebutton";

import "./CenterFooter.css";
const CenterFooter = ({playing =true}) => {
  return (
    <div className="footer__center">
      <ShuffleIcon className="footer__green" />
      <SkipPreviousIcon className="footer__icon" />
      {playing ? <Playbutton /> : <Pausebutton />}
      <SkipNextIcon className="footer__icon" />
      <RepeatIcon className="footer__green" />
    </div>
  );
};

export default CenterFooter;
