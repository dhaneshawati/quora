import React from "react";
import "../styles/Answer.css";
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import QuestionDataService from "../services/questionServices";

const Answer = ({ isEditable, docId, ans }) => {
  const textRef = useRef();
  const [answer, setAnswer] = useState(ans);
  const navigate = useNavigate();
  const questionId = useSelector((state) => state.questionInfo.questionId);
  const question = useSelector((state) => state.questionInfo.questionName);
  const timestamp = useSelector((state) => state.questionInfo.timestamp);
  const questionAskedBy = useSelector((state) => state.questionInfo.qSeeker);
  const user = useSelector((state) => state.userInfo.user);
  // const docRef = doc(
  //   db,
  //   `questions/${questionId}`,
  //   "answers",
  //   "yOG9EiCET09NNdaLE0oE"
  // );
  const docRef = doc(db, `questions/${questionId}`, "answers", `${docId}`);

  useEffect(() => {
    if (question != null) {
      textRef.current.focus();
      print();
    } else {
      console.log("Haven't any unanswered questions");
    }
  }, []);
  const print = async () => {
    const editDoc = await QuestionDataService.getSingleDoc(docRef);
    console.log(editDoc.data());
    console.log("Prop Passed: " + docId);
  };
  function handleCancel() {
    navigate("/home");
  }
  async function handleAnswer(e) {
    e.preventDefault();
    console.log(user);
    console.log(questionAskedBy);
    if (answer) {
      // console.log(answer);
      const docRef = doc(db, `questions/${questionId}`);
      await addDoc(collection(docRef, "answers"), {
        answer: answer,
        user: user.email,
        answerId: questionId,
        timestamp: serverTimestamp(),
        userDisplayName: user.displayName,
      });
      setAnswer("");
      navigate("/home");
    } else {
      alert("Answer field can not be Empty");
    }
    // console.log(answer);
  }
  async function updateAnswer(e) {
    e.preventDefault();
    // chaanges data stored in database - Only answer and timestamp fields
    await updateDoc(docRef, {
      answer: answer,
      timestamp: serverTimestamp(),
    });
    navigate("/home");
  }
  return (
    <div className="answer">
      {question ? (
        <>
          <div className="answer_title">
            <h1>{question ? question : "Question"}</h1>
            <p>
              asked by <span className="name">{questionAskedBy}</span> {""}
              on{" "}
              <span className="name">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </span>
            </p>
          </div>
          <div className="answer_body">
            <textarea
              type="text"
              placeholder="Enter your answer here..."
              cols="30"
              rows="10"
              ref={textRef}
              value={answer}
              required
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div className="question_btns">
            <button className="question_Cancelbtn" onClick={handleCancel}>
              Cancel
            </button>
            {isEditable ? (
              <button
                type="Submit"
                className="question_Addbtn"
                onClick={updateAnswer}
              >
                Update Answer
              </button>
            ) : (
              <button
                type="Submit"
                className="question_Addbtn"
                onClick={handleAnswer}
              >
                Add Answer
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="fallback">
          <p className="fbtext">
            You don't have left any unanswered question yet
          </p>
          <p className="fbtext">
            Go back to{" "}
            <Link to={"/home"} className="link">
              Home
            </Link>{" "}
            page instead ?
          </p>
        </div>
      )}
    </div>
  );
};

export default Answer;
