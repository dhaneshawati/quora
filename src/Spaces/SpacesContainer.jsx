import React from "react";
import spaceJSON from "./Interests.json";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Spaces from "./Spaces";
import "./SpaceContainer.css";

function SpacesContainer() {
  const { state } = useLocation();
  const { index } = state;
  const spaceResponse = { ...spaceJSON[index] };

  return (
    <div className="SpacesContainer">
      <Navbar />
      <div className="content">
        <h1 className="heading">{spaceResponse.name}</h1>
        <div className="space">
          {spaceResponse.content.map((interestPage, index) => (
            <Spaces space={interestPage} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpacesContainer;
