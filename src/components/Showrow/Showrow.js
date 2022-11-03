import React from "react";
import "./ShowRow.css";
const Showrow = () => {
  return (
    <div className="songRow" onClick={{}}>
      <img
        className="songRow__album"
        src="https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        alt=""
        s
      />
      <div className="songRow__info">
        <h1>track.name</h1>
        <p>track.album.name</p>
      </div>
    </div>
  );
};

export default Showrow;
