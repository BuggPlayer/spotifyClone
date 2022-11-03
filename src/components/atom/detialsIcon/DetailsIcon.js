import React from 'react'

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Playbutton from '../Playbutton/Playbutton';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./DetailsIcon.css"

const DetailsIcon = () => {
  return (
    <div className="body__icons">
    <Playbutton className="body__shuffle" />
    <FavoriteBorderIcon fontSize="large" />
    <MoreHorizIcon />
  </div>
  )
}

export default DetailsIcon
