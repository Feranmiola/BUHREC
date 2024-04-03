import React from 'react'
import { Link } from 'react-router-dom'

const SignedOut = () => {
  return (
    <div className='items-center justify-center'>
        <h1 className='h1-bold'>You have been signed out successfully</h1>
        <p className='h3-semibold flex flex-center'>Return to 
          <Link to="/" className=' text-blue-600 ml-1'>  Home Page </Link>
          </p>
    </div>
  )
}

export default SignedOut