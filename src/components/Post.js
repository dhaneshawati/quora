import { Avatar } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Post.css'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setQuestionInfo } from "../redux/actions/actionCreator";
import QuestionDataService from "../services/questionServices";
import { doc } from 'firebase/firestore'
import { db } from '../firebase'



const Post = ({ id,image,questionProp,timestamp,qAskedBy,profileURL }) => {
    
    const [upvote,setUpvote] = useState(100);
    const [downvote,setDownvote] = useState(2);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [answers,setAnswers] = useState([]);
    
    useEffect(()=>{
        const docRef = doc(db,`questions/${id}`);
        getAnswers(docRef);
    },[])
  
  
    const getAnswers = async (ansRef) => {
      const data = await QuestionDataService.getAllAnswers(ansRef)
    //   console.log(data.docs);
      setAnswers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    function handleUpvote(e){
        setUpvote(upvote + 1);
        e.target.style.color = "dodgerblue";
    }
    function handleDownvote(e){
        setDownvote(downvote + 1);
        e.target.style.color = "red";
    }
    function handleAnswer(){
        navigate("/home/answers");
    }
    function handleQuestionDispatch(){
        console.log("Inside dispatch answer");
        dispatch(setQuestionInfo({
            questionId: id,
            questionName: questionProp,
            timestamp: timestamp,
            qSeeker: qAskedBy
        }));
    }

  return (
    <div className='post' onClick={handleQuestionDispatch}>
        <div className="post_info">
            <Avatar src={profileURL}/>
            <h5>{qAskedBy}</h5>
            
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            <div className="right">
                <MoreHorizOutlinedIcon/>
                <CloseOutlinedIcon/>
            </div>
        </div>
        <div className="post_body">
            <div className="post_question">
                <p>{questionProp}</p>
                <button className='post_btnAnswer' onClick={handleAnswer}>Answer</button>
            </div>
            <div className="post_answer">
                {
                    answers.map((doc,id)=>{
                        return(
                        <div key={doc?.id} className="flex flex-col">
                            
                            <p className='mb-4 text-justify'>
                                <span className='font-serif text-justify'>{doc?.answer}</span> 
                                <span className='mr-4 font-medium ml-8'>Answered by: {doc?.user}</span>
                                <span className='font-medium'>on - {new Date(doc.timestamp?.toDate()).toLocaleString()}</span>
                            </p>
                        </div>)
                    })
                }
                <p></p>
            </div>
            <img src={image} alt="post" />
        </div>
        <div className="post_footer">
            <div className="post_footerAction">
                <ArrowUpwardOutlinedIcon onClick={handleUpvote}/>
                <p>{upvote}</p> 
                <ArrowDownwardOutlinedIcon onClick={handleDownvote}/>
                <p>{downvote}</p> 
            </div>
            <RepeatOutlinedIcon/>
            <ChatBubbleOutlineOutlinedIcon/>
        </div>
    </div>
  )
}

export default Post
