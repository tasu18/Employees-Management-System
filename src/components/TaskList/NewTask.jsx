import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm px-2'>{data.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
          <p className='text-sm'>
            {data.taskDescription}
            </p>
          <div className='flex justify-center mt-4'>
            <button className='bg-blue-400 py-1 px-16 text-sm'> Accept Task</button>
          </div>
        </div>
  )
}

export default NewTask