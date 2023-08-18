import React, { useEffect, useState } from "react";
import "../styles/Quora.css";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import Foot from "../Footer/Foot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import SidePanel from "../SidePanel/SidePanel";

const Quora = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 460;
  const [showSide, setShowSide] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => setWidth(document.body.clientWidth);
    window.addEventListener("resize", handleWindowResize);
    setShowSide(false);
    if (document.body.clientWidth > breakPoint) {
      setShowSide(false);
    }
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="quora">
      <Navbar />
      <div className="quora_content">
        {width <= breakPoint && !showSide && (
          <>
            <FontAwesomeIcon icon={faBars} onClick={() => setShowSide(true)} />
            <Sidebar />
            <Feed />
            <Widget />
          </>
        )}

        {width > breakPoint && (
          <>
            <Sidebar />
            <Feed />
            <Widget />
          </>
        )}
        {width <= breakPoint && showSide && (
          <>
            <SidePanel />
            <div className="close_Btn">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setShowSide(false)}
              />
            </div>
          </>
        )}
      </div>
      {width <= breakPoint && !showSide && <Foot />}
      {width > breakPoint && <Foot />}
    </div>
  );
};

export default Quora;
