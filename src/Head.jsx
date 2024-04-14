import React from "react";
import { Fav } from "./App";
function Head() {
  let c = {
    color: "red",
  };
  if (Fav === "Amazon") {
    c.color = "blue";
  }
  return (
    <h1 style={c} className="Heading">
      My Top {Fav} Binge Watch {console.log(c)}
    </h1>
  );
}
export default Head;
