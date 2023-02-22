import React from 'react'
import {Button,Avatar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined' 
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onSignOut } from '../redux/actions/actionCreator';
import { useAuth } from '../firebase';

const Navbar = () => {
  const currentUser = useAuth();
  const[photoURL,setPhotoURL] = useState("https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg");
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector(state => state.userInfo.user); 
  const navigate = useNavigate();

  useEffect(()=>{
    if(currentUser && currentUser.photoURL){
        
        setPhotoURL(currentUser.photoURL)
    }
},[currentUser])

  const handleLogOut = async()=>{
    try{
      console.log("Inside Navbar")
      await signOut(auth)
      console.log("Home Logout")
      dispatch(onSignOut());
      navigate("/");
      console.log(user);
      
    }catch (err) {
      console.log(err.message);
    }
  }

  function handleQuestion(){
    navigate("/home/questions");
  }
  function handleAnswer(){
    navigate("/home/answers");
  }
  return (
    <div className='navbar'>
      <div className="qHeader_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
         alt="Quora" />
      </div>
      <div className="qHeader_icons">
        <div className="qHeader_icon">
        <HomeIcon />
        </div>
        <div className="qHeader_icon">
            <FeaturedPlayListOutlinedIcon  onClick={handleAnswer}/>
        </div>
        <div className="qHeader_icon">
            <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="qHeader_icon">
            <PeopleAltOutlinedIcon />
        </div>
        <div className="qHeader_icon">
            <NotificationsOutlinedIcon />
        </div>

      </div>
      <div className="qHeader_input">
        <SearchIcon />
        <input type="text" placeholder='Search Quora'/>
      </div>
      <div className="qHeader_Rem">
        <div className="qHeader_avatar">
        <Avatar src={photoURL}/>
        </div>
        <LanguageIcon />
        <Button onClick={handleQuestion}>Add Question</Button>
        <div className="qHeader_icon">
           <div><PowerSettingsNewOutlinedIcon onClick={()=>handleLogOut()} /></div> 
        </div>
      </div>
    </div>
  )
}

export default Navbar
