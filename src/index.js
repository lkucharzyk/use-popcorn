import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating maxRating={8} size={30} color="orange" defaultRating={3} />
  </React.StrictMode>
);
