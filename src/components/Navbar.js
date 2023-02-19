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
import { logOut } from '../redux/actions/actionCreator';
// import { auth } from "../../firebase";
// import {signOut} from "firebase/auth";

const Navbar = ({handleLogOut}) => {
  // const handleSubmit = async ()=>{
  //   console.log("LOGOUT");
  //   try{
  //     await logOut();
  //     console.log("LOGOUT");
  //   }catch (err) {
  //     console.log(err.message);
  //   }
  // }
// function handleOut(){
//   console.log("LOGOUT");
  
// }
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
            <FeaturedPlayListOutlinedIcon />
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
        <Avatar/>
        </div>
        <LanguageIcon />
        <Button>Add Question</Button>
        <div className="qHeader_icon">
           <div><PowerSettingsNewOutlinedIcon onClick={()=>handleLogOut()} /></div> 
        </div>
      </div>
    </div>
  )
}

export default Navbar
