import React from 'react'
import '../styles/Feed.css'
import Box from './Box'
import Post from './Post'

const Feed = () => {
  return (
    <div className='feed'>
      <Box/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed
