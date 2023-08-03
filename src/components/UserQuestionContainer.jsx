import React from "react";
import "../styles/UserQuestionContainer.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UserQuestion from "./UserQuestion";
import SideBlank from "./SideBlank";
import Foot from "../Footer/Foot";

function UserQuestionContainer() {
  return (
    <div className="userContainer">
      <Navbar />
      <div className="userContainer_questions">
        <Sidebar />
        <UserQuestion />
        <SideBlank />
      </div>
      <Foot />
    </div>
  );
}

export default UserQuestionContainer;
