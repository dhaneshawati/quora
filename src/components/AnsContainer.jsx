import React from 'react'
import '../styles/AnsContainer.css';
import Navbar from './Navbar'
import Answer from './Answer'
import Sidebar from './Sidebar'
import SideBlank from './SideBlank'

const AnsContainer = () => {
  return (
    <div className='ans_container'>
     <Navbar/>
    <div className="ans_container_content">
      <Sidebar/>
      <Answer />
      <SideBlank/>
    </div>
  </div>
  )
}

export default AnsContainer
