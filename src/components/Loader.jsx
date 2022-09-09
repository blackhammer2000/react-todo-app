import React from "react";
import "./css/style.css";

const Loader = () => {
  return (
    <div className="main">
      <div className="large spinner"></div>
      <div className="mid spinner"></div>
      <div className="small spinner"></div>
      <div className="loading-text">
        <h3>Fetching Data...</h3>
      </div>
    </div>
  );
};

export default Loader;
