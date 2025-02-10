import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditItems = () => {

  const navigate = useNavigate()

  const handleAddClick = () => {
    navigate('/edit')
  }

  return (
    <div className='flex justify-end mt-10 w-[90%] gap-7'>
        <button onClick={handleAddClick} className='px-3 text-[20px] p-3 rounded-[7px] border border-gray-300 font-bold cursor-pointer'>
            Edit
        </button>
    </div>
  ) 
}

export default EditItems
