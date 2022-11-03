import React from "react";
import { Avatar } from "@mui/material";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Avatar
        alt="alt"
        src="https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
      />
    </div>
  );
};

export default Header;
