import React, { useEffect, useState } from "react";
import "../styles/UserQuestion.css";
import Post from "./Post";
import QuestionDataService from "../services/questionServices";
import { deleteDoc, doc, collection, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";

const UserQuestion = () => {
  const [posts, setPosts] = useState([]);
  const qref = collection(db, "questions");
  const user = useSelector((state) => state.userInfo.user);
  const userMail = user?.email;

  const Query = query(qref, where("user", "==", `${userMail}`));

  useEffect(() => {
    getData();
    console.log(user);
  }, []);

  const getData = async () => {
    const data = await QuestionDataService.getUserActionsData(Query);
    console.log("User Questions" + data.docs);
    data.docs.map((doc) => console.log(doc.data(), doc.id));
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleDelete = async (idx) => {
    console.log("inside delete");
    await deleteDoc(doc(db, "questions", idx));
    getData();
  };
  return (
    <div className="userQuestion">
      {posts.map((doc, index) => {
        return (
          <Post
            key={doc.id}
            id={doc.id}
            image={doc.imageUrl}
            questionProp={doc.question}
            timestamp={doc.timestamp}
            qAskedBy={doc.user}
            profileURL={doc.profileURL}
            deletePost={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default UserQuestion;
