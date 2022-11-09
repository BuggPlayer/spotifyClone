import React from "react";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import Playbutton from "../../atom/Playbutton/Playbutton";
import Pausebutton from "../../atom/pausebutton/Pausebutton";
import { useDataLayerValue } from "../../../Context/DataLayer";

import "./CenterFooter.css";

const CenterFooter = () => {
  const [{ playing }, dispatch] = useDataLayerValue();

  const playhandler = () => {
    dispatch({ type: "SET_PLAYING", payload: true });
  };

  const pauseHandler = () => {
    dispatch({ type: "SET_PLAYING", payload: false });
  };

  return (
    <div className="footer__center">
      <ShuffleIcon className="footer__green" />
      <SkipPreviousIcon className="footer__icon" />
      {playing ? (
        <Pausebutton onClick={pauseHandler} />
      ) : (
        <Playbutton onClick={playhandler} />
      )}
      <SkipNextIcon className="footer__icon" />
      <RepeatIcon className="footer__green" />
    </div>
  );
};

export default CenterFooter;
