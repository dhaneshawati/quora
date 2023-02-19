import React, { useState } from 'react'
import '../styles/Home.css'
import Quora from '../components/Quora'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { setUser } from '../redux/actions/actionCreator';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/actionCreator';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  useEffect(()=>{
   const unsubscibe = onAuthStateChanged(auth, (currentUser)=>{
      dispatch(setUser(currentUser));
    })

    return unsubscibe();
  },[])

  const handleLogOut = async()=>{
    try{
      console.log("Inside Home")
      await logOut();
      console.log("Home Logout")
      console.log(user);
      navigate("/");

    }catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="main">
      <Quora handleLogOut={handleLogOut}/>
      {console.log(user)}
    </div>
  )
}

export default Home
