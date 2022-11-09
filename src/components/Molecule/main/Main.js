import React from "react";

import { SongData } from "../../../assets/data/data";
import { useDataLayerValue } from "../../../Context/DataLayer";
import Header from "../../atom/Header/Header";
import SongCard from "../SongCard/SongCard";
import SkeletonElement from "../../skeletonCompo/SkeletonElement";
import "./Main.css";
const Main = () => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="main">
      <Header />

      {discover_weekly &&
        discover_weekly?.tracks?.items?.map((item) => {
          return <SongCard key={Math.random()} track={item.track} />;
        })}
      {!discover_weekly && (
        <>
          {[1, 2, 3, 4, 5, 6, 6].map(() => (
            <SkeletonElement type="article" />
          ))}
        </>
      )}
    </div>
  );
};

export default Main;
