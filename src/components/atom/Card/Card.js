import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleContext } from "../../../Context/ToggleContext";
import CardContent from "../CardContent/CardContent";
import CardImage from "../cardImage/CardImage";
import Pausebutton from "../pausebutton/Pausebutton";
import Playbutton from "../Playbutton/Playbutton";
import "./Card.css";

const Card = ({ Cardtrack }) => {
  const navigate = useNavigate();

  //context
  const { Play, setPlay } = useContext(ToggleContext);

  //details page
  const Navpage = (data) => {
    navigate("/details", { state: data });
  };

  const playhandler = (data) => {
    navigate("/", { state: data });
    setPlay((pre) => !pre);
  };
  return (
    <div className="cardsWrap">
      <div className="card">
        <CardImage img={Cardtrack.album.images[0].url} />
        <CardContent artics={Cardtrack} />
      </div>
      <div className="playbtnfixed">
        {Play ? (
          <Playbutton onClick={() => playhandler()} />
        ) : (
          <Pausebutton onClick={() => playhandler()} />
        )}
      </div>
    </div>
  );
};

export default Card;
