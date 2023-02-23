import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-white pnFound'>   
        <Navbar />
        <div className="mt-16 fallback">
            <h3 className=' font-bold text-2xl text-[#c2211c]'>Looking for something?</h3>
            <p className='mt-4 text-lg'>We're sorry. The Web address you entered is not a functioning page on our site.</p>
            <div className="navigate">
                <h3 className='font-bold text-lg'>Go to the Quora's <Link to="/home" className=' text-blue-900 text-decoration-line: underline'>Home</Link> page instead?</h3>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound
