import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="cardsWrap">
 
      <div className="card">
        <div className="cardImage">
          <img
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="pic1"
          />
        </div>

        <div className="cardContent">
          <h3>Likes songs</h3>
          <p style={{ fontSize: 12, marginTop: 10, letterSpacing: 0.6 }}>
            {" "}
            Relax and indulge with <br /> beautiful piano pieces
          </p>
        </div>

        <span className="playIcon">
          <svg
            role="img"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            class="Svg-ytk21e-0 eqtHWV"
          >
            <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Card;
