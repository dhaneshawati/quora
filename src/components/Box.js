import { Avatar } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Box.css'
import { useSelector } from 'react-redux';
import { useAuth } from '../firebase';
const Box = () => {
  const currentUser = useAuth();
    const[photoURL,setPhotoURL] = useState("https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg");
    const user = useSelector((state)=>state.user);

    useEffect(()=>{
        if(currentUser && currentUser.photoURL){
            
            setPhotoURL(currentUser.photoURL)
        }
    },[currentUser])

  return (
    <div className='quoraBox'>
      <div className="quoraBox_info">
        <Avatar src={photoURL}/>
        <h5>{user.email}</h5>
      </div>
      <div className="quoraBox_quora">
        <p>What do you want to ask or share?</p>
      </div>
    </div>
  )
}

export default Box
