import React from "react";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./Details.css";
import Showrow from "../Showrow/Showrow";

const Details = () => {
  return (
    <div className="body">
      <div className="body__info">
        <img
          src="https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          alt=""
        />
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
