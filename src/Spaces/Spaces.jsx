import React from "react";
import "./Spaces.css";

function Spaces({ space }) {
  return (
    <div className="spaces">
      <div className="title">
        <h3>{space.event}</h3>
        <p>{` Year - ${space.year}`}</p>
      </div>
      <div className="description">
        <p className="text">{space.description}</p>
      </div>
      <div className="image">
        <img src={space.image} alt={space.event} />
      </div>
    </div>
  );
}

export default Spaces;
