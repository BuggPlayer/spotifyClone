import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleContext } from "../../../Context/ToggleContext";
import CardContent from "../CardContent/CardContent";
import CardImage from "../cardImage/CardImage";
import Pausebutton from "../pausebutton/Pausebutton";
import Playbutton from "../Playbutton/Playbutton";
import "./Card.css";

const Card = ({ item }) => {
  const navigate = useNavigate();

  //context
  const { Play, setPlay } = useContext(ToggleContext);

  //details page
  const Navpage = (data) => {
    navigate("/details", { state: data });
  };

  const playhandler = (data) => {
  //  console.log("data",data);
    // console.log("try",item);
  
// for(  let i=0 ; i< item.song.length ; i++){

//   let count=item.song[i].id
//   console.log("i",count ===data.id);
// }




    //  item?.song.forEach(element => {

    //  if( element.id==data.id ){
    //   setPlay((pre) => !pre);
    //  }else {
    //   console.log("false");
    //  }
    //  })
     
 
    navigate("/", { state: data });
    setPlay((pre) => !pre);
  };
  return (
    <div className="cardsWrap">
      {item?.song.map((item) => {
        return (
          <div className="card">
            <CardImage onclick={() => Navpage(item)} item={item} />
            <CardContent item={item} />
            <div className="playbtnfixed">
              {Play ? (
                <Playbutton onClick={() => playhandler(item)} />
              ) : (
                <Pausebutton onClick={() => playhandler(item)} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
