import React from "react";
import "../styles/Quora.css";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import Foot from "../Footer/Foot";

const Quora = () => {
  return (
    <div className="quora">
      <Navbar />
      <div className="quora_content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
      <Foot />
    </div>
  );
};

export default Quora;
