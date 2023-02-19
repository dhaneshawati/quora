import React from 'react'
import '../styles/Quora.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Widget from './Widget'

const Quora = ({handleLogOut}) => {
  return (
    <div className='quora'>
      <Navbar handleLogOut={handleLogOut}/>
      <div className="quora_content">
      <Sidebar />
      <Feed/>
      <Widget/>
      </div>

      
    </div>
  )
}

export default Quora
