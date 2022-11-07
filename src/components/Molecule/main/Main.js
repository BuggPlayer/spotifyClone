import React from "react";

import { SongData } from "../../../assets/data/data";
import { useDataLayerValue } from "../../../Context/DataLayer";
import Header from "../../atom/Header/Header";
import SongCard from "../SongCard/SongCard";
import "./Main.css";
const Main = () => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  // console.log("discover_weekly",discover_weekly);
  return (
    <div className="main">
      <Header />
      {discover_weekly?.tracks?.items?.map((item) => (
        <SongCard track={item.track} />
      ))}
    </div>
  );
};

export default Main;
