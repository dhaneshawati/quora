import { ExpandMore, Link, PeopleAltOutlined } from "@mui/icons-material";
import { Avatar, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../styles/Question.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../firebase";

const Question = () => {
  const user = useSelector((state) => state.userInfo.user);
  const navigate = useNavigate();

  const currentUser = useAuth();
  const [userName, setUserName] = useState("");
  const [photoURL, setPhotoURL] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  const [question, setQuestion] = useState("");
  const [inputURL, setInputURL] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 425;
  const blank_Post = "";

  useEffect(() => {
    const handleWindowResize = () => setWidth(document.body.clientWidth);
    window.addEventListener("resize", handleWindowResize);

    if (currentUser && currentUser.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
    if (currentUser && currentUser.displayName) {
      setUserName(currentUser.displayName);
    }
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [currentUser]);

  function handleCancel() {
    navigate("/home");
  }
  const handleQuestion = async (e) => {
    e.preventDefault();
    try {
      if (question) {
        await addDoc(collection(db, "questions"), {
          question: question,
          imageUrl: inputURL ? inputURL : blank_Post,
          timestamp: serverTimestamp(),
          user: user.email,
          profileURL: photoURL,
        });

        setQuestion("");
        setInputURL("");
        navigate("/home");
      } else {
        alert("Question field can not be empty");
      }
    } catch (err) {
      console.log("Error adding document: ", err);
    }
  };
  return (
    <div className="question">
      <div className="question_title">
        <h5>Add Question</h5>
        <h5>Share Link</h5>
      </div>
      <div className="question_info">
        {width <= breakPoint ? (
          <Avatar
            className="avatar"
            src={photoURL}
            sx={{ width: 24, height: 24 }}
          />
        ) : (
          <Avatar className="avatar_question" src={photoURL} />
        )}
        <p>{userName ? userName : user.email} asked </p>
        <div className="question_scope">
          <PeopleAltOutlined />
          <p>Public</p>
          {/* <ExpandMore /> */}
        </div>
      </div>
      <div className="question_field">
        <Input
          type="text"
          className="input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Start your question with 'What','How','Why',etc"
          required
        />

        <div className="question_fieldLink">
          <Link />
          <Input
            type="text"
            className="input"
            placeholder="Optional: include a link"
            onChange={(e) => setInputURL(e.target.value)}
          />
        </div>
      </div>

      <div className="question_btns">
        <button className="question_Cancelbtn" onClick={handleCancel}>
          Cancel
        </button>
        <button
          type="Submit"
          className="question_Addbtn"
          onClick={handleQuestion}
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default Question;
