import React from "react";
import ReactDOM from "react-dom/client";

//import "./index.css";
//import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRaiting={5} messages={["terible"]} />
    <StarRating size={24} color="red" />
  </React.StrictMode>
);
