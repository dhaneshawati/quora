import { Avatar } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import '../styles/Post.css'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
// import { useSelector } from 'react-redux';


const Post = ({ id,image,questionProp,timestamp,qAskedBy,profileURL }) => {
   
    // const user = useSelector((state)=>state.user);
    const [upvote,setUpvote] = useState(100);
    const [downvote,setDownvote] = useState(2);

    function handleUpvote(e){
        setUpvote(upvote + 1);
        e.target.style.color = "dodgerblue";
    }
    function handleDownvote(e){
        setDownvote(downvote + 1);
        e.target.style.color = "red";
    }
 
  return (
    <div className='post'>
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
                <button className='post_btnAnswer'>Answer</button>
            </div>
            <div className="post_answer">
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
