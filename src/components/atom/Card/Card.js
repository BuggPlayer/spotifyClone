import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const Navpage = (data) => {
    navigate("/about", { state: data });
  };
  return (
    <div className="cardsWrap">
      {item?.song.map((item) => {
        return (
          <div className="card" onClick={() => Navpage(item)}>
            <div className="cardImage">
              <img src={item.image} alt="pic1" />
            </div>

            <div className="cardContent">
              <h3 style={{ marginBottom: 4 }}>{item.songName}</h3>
              <span className="subText">
                {item.artisName}
                <br />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
