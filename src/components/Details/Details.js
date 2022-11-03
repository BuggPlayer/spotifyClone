import React from "react";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation } from "react-router-dom";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./Details.css";
import Showrow from "../Showrow/Showrow";

const Details = () => {
  const location = useLocation();
  console.log("tran", location.state);

  return (
    <div className="body">
      <div className="body__info">
        <img src={location.state.image} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>discover_weekly?.description</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" onClick={{}} />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {[1, 23, 4, , 47635, 624].map((item) => (
          <Showrow playSong={{}} />
        ))}
      </div>
    </div>
  );
};

export default Details;
