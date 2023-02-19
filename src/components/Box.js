import { Avatar } from '@mui/material'
import React from 'react'
import '../styles/Box.css'
 
const Box = () => {
  return (
    <div className='quoraBox'>
      <div className="quoraBox_info">
        <Avatar/>
        <h5>Username</h5>
      </div>
      <div className="quoraBox_quora">
        <p>What do you want to ask or share?</p>
      </div>
    </div>
  )
}

export default Box
