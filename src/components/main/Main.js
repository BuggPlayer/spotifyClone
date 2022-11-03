import React from "react";
import "./Main.css";
import { Avatar } from "@mui/material";
import Card from "../Card/Card";
import Header from "../Header/Header";
import { data } from "../../assets/data/data";
const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">
        {/* <Header /> */}
        <div className="upperNav__right">
          <Avatar
            alt="alt"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div>
      </div>

      {data.map((item) => {
        // console.log("item", item);
        return <SongCaterogry item={item} />;
      })}
    </div>
  );
};

const SongCaterogry = ({ item }) => {
  console.log("item2", item.title);
  return (
    <div className="mainContent">
      <h2 style={{ padding: ".7rem 0 1rem 0" }}>{item.title}</h2>
      <div style={{ display: "flex" }}>
        {item?.song?.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};
export default Main;
