import React from "react";
import loadGif from "../images/gif/loading-gear.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>data Loading...</h4>
      <img src={loadGif} alt="loading" />
    </div>
  );
}
