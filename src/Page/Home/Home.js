import React from "react";
import Main from "../../components/main/Main";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
const Home = () => {
  return (
    <div className="HomeWrap">
      <div className="Home">
        <NavBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
