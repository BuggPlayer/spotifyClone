import React from "react";
import Main from "../main/Main";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div className="outerWrap">
      <div className="app">
        <NavBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
