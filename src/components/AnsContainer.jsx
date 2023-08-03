import React from "react";
import "../styles/AnsContainer.css";
import Navbar from "./Navbar";
import Answer from "./Answer";
import Sidebar from "./Sidebar";
import SideBlank from "./SideBlank";

const AnsContainer = ({ isEditable, docId, ans }) => {
  return (
    <div className="ans_container">
      <Navbar />
      <div className="ans_container_content">
        <Sidebar />
        <Answer isEditable={isEditable} docId={docId} ans={ans} />
        <SideBlank />
      </div>
    </div>
  );
};

export default AnsContainer;
