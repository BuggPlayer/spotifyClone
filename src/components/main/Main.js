import React from "react";
import "./Main.css";

import Card from "../Card/Card";
const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">dumy text</div>

      <div className="mainContent">
        <h2 style={{ padding: ".7rem 0 1rem 0" }}>Spotify Playlists</h2>
        <div style={{ display: "flex" }}>
          {[1, 2].map((item) => (
            <Card />
          ))}
        </div>

        <h2 style={{ padding: ".7rem 0 1rem 0" }}>Focus</h2>
        <div style={{ display: "flex" }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Card />
          ))}
        </div>

        <h2 style={{ padding: ".7rem 0 1rem 0" }}>Mood</h2>
        <div style={{ display: "flex" }}>
          {[1, 2].map((item) => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
