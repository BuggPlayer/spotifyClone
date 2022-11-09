import React, { useEffect } from "react";
import { useDataLayerValue } from "../../../Context/DataLayer";
import SmallImageCard from "../../atom/SmallImageCard/SmallImageCard";
import SongInfo from "../../atom/songInfo/SongInfo";

import "./FooterLeft.css";
const FooterLeft = () => {
  const [{ itemId, discover_weekly, item }, dispatch] = useDataLayerValue();

  useEffect(() => {
    
    const idcheck = discover_weekly?.tracks?.items?.map((f) => f.track);
    const singleItem = idcheck?.filter((f) => f.id == itemId);

    dispatch({ type: "SET_ITEM", payload: singleItem });
  }, [itemId]);

  return (
    <div className="footer__left">
      {item ? (
        <>
          <SmallImageCard img={item[0]?.album?.images[0]?.url || ""} />
          <SongInfo data={item[0]?.artists[0]?.name || ""} />
        </>
      ) : (
        <h4>Loaging...</h4>
      )}
    </div>
  );
};

export default FooterLeft;
