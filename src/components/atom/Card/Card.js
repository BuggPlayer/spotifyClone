import React from "react";
import { useNavigate } from "react-router-dom";
import { useDataLayerValue } from "../../../Context/DataLayer";
import CardContent from "../CardContent/CardContent";
import CardImage from "../cardImage/CardImage";
import Pausebutton from "../pausebutton/Pausebutton";
import Playbutton from "../Playbutton/Playbutton";
import "./Card.css";

const Card = ({ Cardtrack }) => {
  const navigate = useNavigate();
  const [{ playing }, dispatch] = useDataLayerValue();



  const playhandler = () => {
    // console.log("hell", Cardtrack.id);
    dispatch({ type: "SET_PLAYING", payload: true });
    dispatch({ type: "SET_ITEM_ID", payload: Cardtrack.id });
    
  };

  const pauseHandler = (id) => {
    dispatch({ type: "SET_PLAYING", payload: false });
  };

  const navigateTodetial = () => {
    dispatch({ type: "SET_ITEM_ID", payload: Cardtrack.id });
    navigate("/details")
  };
  return (
    <div className="cardsWrap">
      <div className="card">
        <CardImage
          img={Cardtrack.album.images[0].url}
          onclick={navigateTodetial}
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
