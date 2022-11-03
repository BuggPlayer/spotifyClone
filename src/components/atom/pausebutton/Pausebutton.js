import React from "react";
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
const Pausebutton = ({onClick}) => {
  return (
    <PauseCircleOutlineIcon
      onClick={onClick}
      fontSize="large"
      className="pause_icon"
    />
  );
};

export default Pausebutton;
