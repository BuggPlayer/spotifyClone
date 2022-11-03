import React from "react";
import "./Navbar.css";

import Navbarlist from "../atom/NavbarList/Navbarlist";
import { navbarListdata } from "../../assets/data/data";
import Policy from "../atom/Policy/Policy";
import Logo from "../atom/Logo/Logo";

const NavBar = () => {
  return (
    <div className="navBar">
      <Logo />
      {navbarListdata?.map((item) => (
        <Navbarlist key={item.id} item={item} />
      ))}
      <Policy />
    </div>
  );
};

export default NavBar;
