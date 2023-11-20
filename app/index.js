import React from "react";
import ReactDOM from "react-dom";
import RootLayout from "./layout";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <RootLayout />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
