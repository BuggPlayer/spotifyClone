import React from "react";
import { Avatar } from "@mui/material";
import "./Header.css";
import { useDataLayerValue } from "../../../Context/DataLayer";
const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  // console.log("user", user.user.display_name);
  return (
    <div className="header">
      <Avatar alt={user?.display_name??""} src={user?.images[0]?.url??""} />
      <h4>{user?.display_name }</h4>
    </div>
  );
};

export default Header;
