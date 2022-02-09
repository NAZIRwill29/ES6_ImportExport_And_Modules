import React from "react";
import ReactDOM from "react-dom";
// import the variable and function
import Pi, { DoublePi, TriplePi } from "./Math";

ReactDOM.render(
  <ul>
    <li>{Pi}</li>
    {/* execute the function */}
    <li>{DoublePi()}</li>
    <li>{TriplePi()}</li>
  </ul>,
  document.getElementById("root")
);
