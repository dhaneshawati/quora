import React from 'react'
import "../styles/Container.css"
import Navbar from './Navbar'
import Question from './Question'
import Sidebar from './Sidebar'
import SideBlank from './SideBlank'

const Container = () => {
  return (
    <div className='container'>
      <Navbar/>
      <div className="container_content">
        <Sidebar/>
        <Question/>
        <SideBlank/>
      </div>
    </div>
  )
} 

export default Container
