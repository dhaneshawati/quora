import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import Box from './Box'
import Post from './Post'
import QuestionDataService from "../services/questionServices";


const Feed = () => {

  const [posts,setPosts] = useState([]);
  
  useEffect(()=>{
   getData();
  },[])


  const getData = async () => {
    const data = await QuestionDataService.getAllQuestions()
    console.log(data.docs);
    setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  };

  return (
    <div className='feed'>
      <Box />
      {
        posts.map((doc,index) => {
            return (
            <Post key={doc.id} id={doc.id} image={doc.imageUrl} questionProp={doc.question}
              timestamp = {doc.timestamp} qAskedBy = {doc.user} profileURL = {doc.profileURL} />
              )
            } 
          )
      }
      
    </div>
  )
}

export default Feed
