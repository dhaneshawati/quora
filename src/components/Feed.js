import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import Box from "./Box";
import Post from "./Post";
import QuestionDataService from "../services/questionServices";
import { deleteDoc, doc, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const qref = collection(db, "questions");
  const Query = query(qref, orderBy("timestamp", "desc"));
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await QuestionDataService.getSortedQuestions(Query);
    console.log(data.docs);

    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleDelete = async (idx) => {
    console.log("inside delete");
    await deleteDoc(doc(db, "questions", idx));
    getData();
  };

  return (
    <div className="feed">
      <Box />
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

export default Feed;
