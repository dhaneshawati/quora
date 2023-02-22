import React from 'react'
import '../styles/Answer.css';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Answer = () => {
    const textRef = useRef();
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const questionId = useSelector((state)=>state.questionInfo.questionId);
    const question = useSelector((state)=>state.questionInfo.questionName);
    const timestamp = useSelector((state)=>state.questionInfo.timestamp);
    const questionAskedBy = useSelector((state)=>state.questionInfo.qSeeker);
    const user = useSelector((state)=>state.userInfo.user);
    // const [values, loading, error, snapshot] = useCollectionData(query);

    useEffect(()=>{
        textRef.current.focus();
    },[])

    function handleCancel(){
        navigate("/home");
    }
    async function handleAnswer(e){
        e.preventDefault();
        console.log(user);
        console.log(questionAskedBy);
        if(answer)
        {
            console.log(answer);
            const docRef = doc(db,`questions/${questionId}`);
            await addDoc(collection(docRef,"answers"),{
                answer: answer,
                user: user.email,
                answerId: questionId,
                timestamp: serverTimestamp()
            })
            setAnswer("");
            navigate("/home");
        } else{
            alert("Answer field can not be Empty");
        }
        // console.log(answer);
        
    }
  return (
    <div className='answer'>
       <div className="answer_title">
            <h1>{question?question : "Question"}</h1>
            <p>
                asked by <span className="name">{questionAskedBy}</span> {""}
                on <span className="name">{new Date(timestamp?.toDate()).toLocaleString()}</span>
            </p>
       </div>
       <div className="answer_body">
        <textarea type="text" placeholder='Enter your answer here...' cols="30" rows="10" 
        ref={textRef} value ={answer} required
        onChange={(e)=>setAnswer(e.target.value)}/>
       </div>
        <div className="question_btns">
            <button className="question_Cancelbtn" onClick={handleCancel}>Cancel</button>
            <button type='Submit' className="question_Addbtn" onClick={handleAnswer}>Add Answer</button>
        </div>
    </div>
  )
}

export default Answer
