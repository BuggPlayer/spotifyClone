import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./Playbutton.css";
const Playbutton = ({onClick , className}) => {
  return (
    <PlayCircleOutlineIcon
      onClick={onClick}
      fontSize="large"
      className={className}
    />
  );
};

export default Playbutton;
