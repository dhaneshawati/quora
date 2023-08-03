import { Avatar } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "../styles/Box.css";
import { useSelector } from "react-redux";
import { useAuth } from "../firebase";
const Box = () => {
  const currentUser = useAuth();
  const [photoURL, setPhotoURL] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  const user = useSelector((state) => state.userInfo.user);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 425;

  useEffect(() => {
    const handleWindowResize = () => setWidth(document.body.clientWidth);
    window.addEventListener("resize", handleWindowResize);
    if (currentUser && currentUser.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [currentUser]);

  return (
    <div className="quoraBox">
      <div className="quoraBox_info">
        {width <= breakPoint ? (
          <Avatar
            className="avatar"
            src={photoURL}
            sx={{ width: 24, height: 24 }}
          />
        ) : (
          <Avatar className="avatar_box" src={photoURL} />
        )}
        <h5>{user.email}</h5>
      </div>
      <div className="quoraBox_quora">
        <p>What do you want to ask or share?</p>
      </div>
    </div>
  );
};

export default Box;
