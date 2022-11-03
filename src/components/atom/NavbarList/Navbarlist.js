import React from "react";
import "./Navbarlist.css";
const Navbarlist = ({ item }) => {
  return (
    <ul>
      <li className={item.className}>
        {item.icon} {item.name}{" "}
      </li>
    </ul>
  );
};

export default Navbarlist;
