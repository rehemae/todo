import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'

const TaskTile = ({ task }) => {
    const handleClick = (e) => {
        console.log(task.title)
    }
  return (
    <div className="w-full h-24 bg-gray-100 rounded-lg shadow flex flex-row items-center px-4 justify-around mb-1">
        <span className='text-3xl font-bold'>{ task.title } </span>
        <div className='flex flex-row'>
        < CiEdit
            onClick={handleClick}
        className='text-4xl bg-slate-200 rounded-full p-1 mr-10 hover:bg-slate-300 cursor-pointer'/>
        <MdDeleteOutline className='text-4xl bg-slate-200 rounded-full p-1 hover:bg-slate-300 cursor-pointer'/>
        </div>
    </div>
  )
}

export default TaskTile