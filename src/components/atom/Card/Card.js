import React from "react";
import { useNavigate } from "react-router-dom";
import { useDataLayerValue } from "../../../Context/DataLayer";
import CardContent from "../CardContent/CardContent";
import CardImage from "../cardImage/CardImage";
import Pausebutton from "../pausebutton/Pausebutton";
import Playbutton from "../Playbutton/Playbutton";
import "./Card.css";

const Card = ({ Cardtrack }) => {
  const [{ playing, item }, dispatch] = useDataLayerValue();
  console.log("item", item);
  const navigate = useNavigate();

  const playhandler = (data) => {
    console.log("hell", Cardtrack.id);
    dispatch({ type: "SET_PLAYING", payload: true });
    dispatch({ type: "SET_ITEM", payload: Cardtrack.id });
  };

  const pauseHandler = (id) => {
    dispatch({ type: "SET_PLAYING", payload: false });
  };
  return (
    <div style={{ backgroundColor: "rebeccapurple" }} className="cardsWrap">
      <div className="card">
        <CardImage
          img={Cardtrack.album.images[0].url}
          onclick={() => console.log("try")}
        />
        <CardContent artics={Cardtrack} />
      </div>
      <div className="playbtnfixed">
        {playing ? (
          <Pausebutton onClick={() => pauseHandler()} />
        ) : (
          <Playbutton onClick={playhandler} />
        )}
      </div>
    </div>
  );
};

export default Card;
