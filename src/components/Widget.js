import React from 'react'
import '../styles/Widget.css'
import WidgetOptions from './WidgetOptions'

const Widget = () => {
  return (
    <div className='widget'>
        <div className="widget_header">
            <h5>Spaces to follow</h5>
        </div>
     <WidgetOptions/>
    </div>
  )
}

export default Widget
