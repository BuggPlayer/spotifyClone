import React, { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid, Slider } from "@mui/material";
import "./Footer.css";
import Playbutton from "../atom/Playbutton/Playbutton";

const Footer = () => {
  const [playing, setPlaying] = useState(true);
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          // src={item?.album.images[0].url}
          // alt={item?.name}
          src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="pic1"
        />

        <div className="footer__songInfo">
          <h4>item.name</h4>
          <p> artist.name</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={{}} className="footer__icon" />
        {playing ? (
          <Playbutton />
        ) : (
          <PlayCircleOutlineIcon
            onClick={{}}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon onClick={{}} className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
