import React from "react";

import { SongData } from "../../assets/data/data";
import Header from "../atom/Header/Header";
import SongCard from "../Molecule/SongCard/SongCard";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <Header />

      {SongData.map((item) => (
        <SongCard item={item} />
      ))}
    </div>
  );
};

export default Main;
