import { Avatar } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "../styles/Post.css";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionInfo } from "../redux/actions/actionCreator";
import QuestionDataService from "../services/questionServices";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

const Post = ({
  id,
  image,
  questionProp,
  timestamp,
  qAskedBy,
  profileURL,
  deletePost,
}) => {
  const [upvote, setUpvote] = useState(100);
  const [downvote, setDownvote] = useState(2);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const user = useSelector((state) => state.userInfo.user);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(document.body.clientWidth);
    window.addEventListener("resize", handleWindowResize);
    const docRef = doc(db, `questions/${id}`);
    getAnswers(docRef);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const getAnswers = async (ansRef) => {
    const data = await QuestionDataService.getAllAnswers(ansRef);
    //   console.log(data.docs);
    setAnswers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    data.docs.forEach((doc, i) => {
      console.log("Answer edit Testing " + doc.data().user);
      console.log("Answer edit Testing ID: " + doc.data().answerId);
      console.log("Ans id: " + doc.id);
      if (doc.data().user === user.email) {
        setIsEditable(true);
      }
    });
    console.log("Testing answer length: " + data.docs.length);
  };

  function handleUpvote(e) {
    setUpvote(upvote + 1);
    e.target.style.color = "dodgerblue";
  }
  function handleDownvote(e) {
    setDownvote(downvote + 1);
    e.target.style.color = "red";
  }
  function handleAnswer(isEditable, id, ans) {
    navigate("/home/answers", { state: { isEditable, docId: id, ans } });
  }
  function handleQuestionDispatch() {
    console.log("Inside dispatch answer");
    dispatch(
      setQuestionInfo({
        questionId: id,
        questionName: questionProp,
        timestamp: timestamp,
        qSeeker: qAskedBy,
      })
    );
  }
  //   const handleDelete = async () => {
  //     console.log("inside delete");
  //     await deleteDoc(doc(db, "questions", id));
  //   };

  return (
    <div className="post" onClick={handleQuestionDispatch}>
      <div className="post_info">
        {width <= breakPoint ? (
          <Avatar
            className="avatar"
            src={profileURL}
            sx={{ width: 24, height: 24 }}
          />
        ) : (
          <Avatar className="avatar_post" src={profileURL} />
        )}
        {width <= breakPoint ? (
          <div className="qInfo">
            <h5>{qAskedBy}</h5>

            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
          </div>
        ) : (
          <>
            <h5>{qAskedBy}</h5>

            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
          </>
        )}

        <div className="right">
          {qAskedBy === user.email && (
            <CloseOutlinedIcon
              onClick={() => {
                deletePost(id);
              }}
            />
          )}
        </div>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>{questionProp}</p>
          {qAskedBy !== user.email && !isEditable && (
            <button
              className="post_btnAnswer"
              onClick={() => {
                handleAnswer(isEditable, id, "");
              }}
            >
              Answer
            </button>
          )}
        </div>
        <div className="post_answer">
          {answers.map((doc, id) => {
            return (
              <div key={doc?.id} className="flex flex-col">
                <p className="mb-4 text-justify flex flex-col">
                  <span className="font-serif text-justify">
                    {id + 1} - {doc?.answer}
                  </span>
                  <p className="editInfo flex flex-row">
                    <span className="mr-4 font-medium ml-8">
                      Answered by: {doc?.user}
                    </span>
                    <span className="font-medium">
                      on - {new Date(doc.timestamp?.toDate()).toLocaleString()}
                    </span>
                    <span className="edit">
                      {isEditable && doc.user === user.email && (
                        <ModeEditOutlinedIcon
                          onClick={() => {
                            handleAnswer(isEditable, doc.id, doc.answer);
                          }}
                        />
                      )}
                    </span>
                  </p>
                </p>
              </div>
            );
          })}
          <p></p>
        </div>
        {image ? <img src={image} alt="post" /> : ""}
      </div>
      <div className="post_footer">
        <div className="post_footerAction">
          <ArrowUpwardOutlinedIcon onClick={handleUpvote} />
          <p>{upvote}</p>
          <ArrowDownwardOutlinedIcon onClick={handleDownvote} />
          <p>{downvote}</p>
        </div>
        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
      </div>
    </div>
  );
};

export default Post;
