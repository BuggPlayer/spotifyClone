import React from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Playbutton from "../Playbutton/Playbutton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./DetailsIcon.css";
import { useDataLayerValue } from "../../../Context/DataLayer";
import Pausebutton from "../pausebutton/Pausebutton";

const DetailsIcon = () => {
  const [{ playing }, dispatch] = useDataLayerValue();

  const playhandler = () => {
    dispatch({ type: "SET_PLAYING", payload: true });
  };

  const pauseHandler = () => {
    dispatch({ type: "SET_PLAYING", payload: false });
  };
  return (
    <div className="body__icons">
      {playing ? (
        <Pausebutton classname="body__shuffle" onClick={pauseHandler} />
      ) : (
        <Playbutton className="body__shuffle" onClick={playhandler} />
      )}

      <FavoriteBorderIcon fontSize="large" />
      <MoreHorizIcon />
    </div>
  );
};

export default DetailsIcon;
