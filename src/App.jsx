import React from "react";
import Card from "./Card";
import source from "./Source";

function App() {
  return source.map((val, index) => (
    <Card
      key={index}
      img={val.img}
      sname={val.sname}
      title={val.title}
      link={val.link}
    />
  ));
}

export default App;
