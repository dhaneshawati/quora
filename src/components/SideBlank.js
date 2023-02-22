import React from 'react'
import "../styles/SideBlank.css"
import SideOptions from "./SideOptions";

const SideBlank = () => {
  return (
    <div className='side'>
      <div className="side_header">
            <h5>More Questions</h5>
      </div>
      <SideOptions/>
    </div>
  )
} 

export default SideBlank
