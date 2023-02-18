import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='container'>
    <div className='w-[400px] max-h-[600px] m-auto'>
     <div className="absolute w-[400px] max-h-[600px] flex items-center mt-4">

      <div className="w-full max-h-[550px] bg-[#f5f5f5] flex flex-col p-10 justify-between mt-16 rounded-md">
       
        <div className="w-full flex flex-col  mx-auto">

          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-serif font-semibold mb-2">Sign Up</h3>
            <p className="text-base mb-2">Please enter your details.</p>
          </div>

          <div className="w-full flex flex-col ">
          <input type="text" 
            className="w-full text-black p-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            placeholder='Username' />

            <input type="email" 
            className="w-full text-black p-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            placeholder='Email' />

            <input type="password" 
            className="w-full text-black p-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            placeholder='Set Password' />

          </div>

          <div className="w-full flex flex-col my-4 items-center">

            <button className="w-1/2 text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center hover:bg-slate-600">
              Sign up
            </button>

          </div>

        </div>

        <div className="w-full flex items-center justify-center">
          <p className='text-sm font-normal text-[#060606]'>Already have an account? <span className="font-semibold underline underline-offset-2 cursor-pointer"><Link to="/" >Log In </Link> </span></p>
        </div>


      </div>

      </div>
     </div>
    </div>
  )
}

export default SignUp
