import React from 'react'
import { FaGripLines } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const SlideBar = () => {
  return (
    <div className='w-[5%] h-[100vh] flex flex-col items-center gap-5 border-r border-gray-300'>
      <FaGripLines className='text-4xl mt-5' />
      <FaRegCircle className='text-4xl' />
    </div>
  )
}

export default SlideBar
