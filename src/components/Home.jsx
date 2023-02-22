import React from 'react'
import '../styles/Home.css'
import Quora from '../components/Quora'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

 
const Home = () => {

  const user = useSelector(state => state.user);

  useEffect(()=>{
    console.log(user);
  },[])


  return (
    <div className="main">
      <Quora />
      {console.log(user)}
    </div>
  )
} 

export default Home
