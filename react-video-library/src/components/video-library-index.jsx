import React from 'react'
import { Link } from 'react-router-dom'

const VideoLibraryIndex = () => {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
    <Link className='btn btn-primary mx-3'>User Login</Link> 
     <Link to='/admin-login'className='btn btn-warning'>Admin Login</Link>
    </div>
  )
}

export default VideoLibraryIndex