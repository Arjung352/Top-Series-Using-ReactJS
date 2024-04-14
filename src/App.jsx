import React from "react";
import Card from "./Card";
import netflix from "./Netflix";
import amazon from "./Amazon";
let Fav = "Amazon";
function App() {
  if (Fav === "netflix") {
    return netflix.map((val, index) => (
      <Card
        key={index}
        img={val.img}
        sname={val.sname}
        title={val.title}
        link={val.link}
      />
    ));
  } else {
    return amazon.map((val, index) => (
      <Card
        key={index}
        img={val.img}
        sname={val.sname}
        title={val.title}
        link={val.link}
      />
    ));
  }
}
export { App, Fav };
