import React from 'react'
import { Link} from "react-router-dom";
import {Home} from "lucide-react";


const NotFound = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className='w-full md:w-2/3 h-1/2 md:h-2/3 shadow-2xl flex items-center justify-around'>
        <div className='md:ml-14 ml-2'>
            <div className='flex flex-col items-center md:items-start gap-5'>
            <h1 className='text-blue-600 text-6xl font-bold'>Eduverse</h1>
            <p className='font-bold text-xl'>404. <span className='font-medium text-lg text-gray-500'>That's an error.</span></p>
            <div><p className='font-medium text-lg text-center md:text-start'>The requested URL/404 was not found on this server.</p>
            <p className='font-medium text-md text-gray-500  text-center md:text-start'>That's all we know.</p></div>
            <div className='flex justify-start'>
                      <Link to="/" className="font-semibold text-lg flex items-center gap-2 group/button">
                        <div className="relative px-6 py-1 flex items-center duration-500 rounded-md bg-blue-600 justify-center overflow-hidden">
    
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover/button:opacity-100 group-hover/button:w-40 group-hover/button:h-40 group-hover/button:scale-150" style={{ zIndex: 1 }}></div>

                        <span className="text-white relative flex justify-center items-center gap-1 " style={{ zIndex: 10 }}><Home/>Return Home </span>
  
                         </div>
                        </Link></div>
            </div>

        </div>
        <img src="/is.jpg" className='w-1/2 mb-1 hidden lg:block' alt="" />
        </div>
    </div>
  )
}

export default NotFound