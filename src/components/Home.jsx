import React from 'react'
import '../styles/Home.css'
import Quora from '../components/Quora'
import { useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onSignOut } from '../redux/actions/actionCreator';
 
const Home = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(()=>{
    console.log(user);
  },[])

  const handleLogOut = async()=>{
    try{
      console.log("Inside Home")
      await signOut(auth)
      console.log("Home Logout")
      dispatch(onSignOut());
      console.log(user);
      
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
