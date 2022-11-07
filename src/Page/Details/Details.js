import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Songs } from "../../assets/data/data";
import DetailsIcon from "../../components/atom/detialsIcon/DetailsIcon";
import Detailsbotton from "../../components/Molecule/DetailsBottom/Detailsbotton";
import DetailsInfo from "../../components/Molecule/DetailsInfo/DetailsInfo";
import { useDataLayerValue } from "../../Context/DataLayer";
import "./Details.css";
const Details = () => {
  const [{ itemId, discover_weekly, item }, dispatch] = useDataLayerValue();
  console.log("id", itemId);
  useEffect(() => {
    const idcheck = discover_weekly?.tracks?.items?.map((f) => f.track);
    const singleItem = idcheck?.filter((f) => f.id == itemId);
    console.log("singleItem", singleItem);
    dispatch({ type: "SET_ITEM", payload: singleItem });
  }, [itemId]);

  // console.log("item", item[0]?.album?.images[0]?.url);

  // tem[0]?.album?.images[0]?.url || ""
  return (
    <div className="body">
      <div className="body__info">
        {item ? (
          <>
            <img  style={{ objectFit:"fill" }} src={ item[0]?.album?.images[0]?.url} alt="" />
            <DetailsInfo />
          </>
        ) : (
          <h4>loading</h4>
        )}
      </div>

      <div className="body__songs">
        <DetailsIcon />
        {discover_weekly?.tracks?.items?.map((item) => (
          <Detailsbotton item={item} />
        ))}
      </div>
    </div>
  );
};

export default Details;
