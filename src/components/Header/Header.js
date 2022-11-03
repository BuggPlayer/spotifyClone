import React from "react";
import { Avatar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./Header";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar
          alt="alt"
          src="https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        />
        <h4>display_name</h4>
      </div>
    </div>
  );
};

export default Header;
