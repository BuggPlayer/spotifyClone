import React, { useState } from "react";
import Card from "../../atom/Card/Card";
import "./SongCard.css";
const SongCard = ({ item }) => {
  const [singleData, setsingleData] = useState("");

  console.log("singleData", singleData);
  return (
    <>
      <div className="SongCardContent">
        <h2>{item.title}</h2>
        <div className="SongCardChild">
          <Card item={item} />
        </div>

        {/* <div className="SongCardChild">
          {item?.song?.map((item) => {
            console.log("itemclick", item);
            return (
              <Card      key={item.id} setsingleData={setsingleData} item={item} />
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default SongCard;
