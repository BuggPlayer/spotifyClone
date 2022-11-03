import React from "react";
import { policyData } from "../../../assets/data/data";
import "./Policy.css";
const Policy = () => {
  return (
    <div className="cookies">
      {policyData.map((item) => (
        <span>{item.name}</span>
      ))}

    </div>
  );
};

export default Policy;
