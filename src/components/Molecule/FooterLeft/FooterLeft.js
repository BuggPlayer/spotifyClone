import React from "react";
import { useDataLayerValue } from "../../../Context/DataLayer";
import SmallImageCard from "../../atom/SmallImageCard/SmallImageCard";
import SongInfo from "../../atom/songInfo/SongInfo";

import "./FooterLeft.css";
const FooterLeft = ({ location }) => {
  const [{ item ,discover_weekly}, dispatch] = useDataLayerValue();
  console.log("item", item);

    console.log("discover_weekly" ,discover_weekly);
 const idcheck= discover_weekly?.tracks?.items?.map((f)=> f.track);
 const filtrt= idcheck.filter((f)=>f.id ===item)
 console.log("d " ,filtrt);
  return (
    <div className="footer__left">
      <SmallImageCard location={location} />
      <SongInfo location={location} />
    </div>
  );
};

export default FooterLeft;
