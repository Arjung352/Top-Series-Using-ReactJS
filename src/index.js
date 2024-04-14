import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { App } from "./App";
import Head from "./Head";
import "./index.css";
const root1 = document.querySelector("#root1");
const root2 = document.querySelector("#root2");
const head = ReactDOM.createRoot(root1);
const container = ReactDOM.createRoot(root2);
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
head.render(
  <React.StrictMode>
    <Head />
  </React.StrictMode>
);
