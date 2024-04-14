import React from "react";
import { Fav } from "./App";
function Card(prop) {
  let css = {
    color: "red",
  };
  if (Fav === "Amazon") {
    css.color = "blue";
  }
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={prop.img} alt="Series_pic" className="card_img"></img>
          <div className="class_info">
            <h1 style={css} className="card_catagory">
              {prop.title}
            </h1>
            <h3 className="card_title">{prop.sname}</h3>
            <a href={prop.link} target="_Blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
