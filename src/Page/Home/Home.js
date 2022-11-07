import React from "react";

import Main from "../../components/Molecule/main/Main";
import Footer from "../../components/Molecule/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
const Home = () => {
  return (
    <div className="HomeWrap">
      <div className="Home">
        <NavBar />
        <Main  /> 
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
