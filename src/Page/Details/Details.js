import React from "react";

import { useLocation } from "react-router-dom";
import { Songs } from "../../assets/data/data";
import DetailsIcon from "../../components/atom/detialsIcon/DetailsIcon";
import Detailsbotton from "../../components/Molecule/DetailsBottom/Detailsbotton";
import DetailsInfo from "../../components/Molecule/DetailsInfo/DetailsInfo";
import "./Details.css";
const Details = () => {
  const location = useLocation();

  return (
    <div className="body">
      <div className="body__info">
        <img src={location.state.image} alt="" />
        <DetailsInfo />
      </div>

      <div className="body__songs">
        <DetailsIcon />
        {Songs.map((item) => (
          <Detailsbotton item={item} />
        ))}
      </div>
    </div>
  );
};

export default Details;
