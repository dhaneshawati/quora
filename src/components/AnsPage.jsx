import React from "react";
import "../styles/AnsPage.css";
import AnsContainer from "./AnsContainer";
import { useLocation } from "react-router-dom";

const AnsPage = () => {
  const { state } = useLocation();
  const { isEditable, docId, ans } = state;
  return (
    <div className="main">
      <AnsContainer isEditable={isEditable} docId={docId} ans={ans} />
    </div>
  );
};

export default AnsPage;
