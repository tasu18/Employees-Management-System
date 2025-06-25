import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm px-2'>{data.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-xl font-bold'>{data.taskTitle}</h2>
          <p className='text-sm'>
            {data.Description}
          </p>
          <div className='flex justify-center mt-2'> 
            <button className='bg-green-400 rounded font-medium py-1 px-16 text-sm'> Complete</button>
          </div>
        </div>
  )
}

export default CompleteTask