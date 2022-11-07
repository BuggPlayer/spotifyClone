import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "../Page/Details/Details";
import Home from "../Page/Home/Home";

const index = ({spotify}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default index;
