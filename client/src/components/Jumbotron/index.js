import React from "react";
import "./style.css";

const Jumbotron = ({ children }) => {
  return (
    <div className="jumbotron">
      <div class="text">
        <h1>React Google Book Search</h1>
      </div>

      {/* <img src="./google-logo.png" alt="google-logo" style={{ height: "200px" }} /> */}
    </div>
  );
}

export default Jumbotron;