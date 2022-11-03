import React from "react";
import { Grid } from "@mui/material";
import "./RightSideFooter.css";
import { rightsideData } from "../../../assets/data/data";
const RightSideFooter = () => {

  return (
    <div className="footer__right">
      <Grid container spacing={2}>
        {rightsideData.map((item) => (
          <Grid key={item.id} item>{item.icon}</Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RightSideFooter;
