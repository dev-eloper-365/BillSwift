import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddItems = () => {

  const navigate = useNavigate()

  const handleAddClick = () => {
    navigate('/add')
  }

  return (
    <div className='flex justify-end mt-10 w-[90%] gap-7'>
        <button onClick={handleAddClick} className='px-3 text-[20px] p-3 rounded-[7px] border border-gray-300 font-bold cursor-pointer'>
            Add
        </button>
    </div>
  ) 
}

export default AddItems
