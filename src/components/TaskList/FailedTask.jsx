import React from 'react'

const FailedTask = ({data}) => {
  return (
     <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl '>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
          <p className='text-sm'>
           {data.taskDescription}
          </p>
          <div className='flex justify-center mt-2'>
            <button className='bg-red-400 py-1 px-16 text-sm'>Failed</button>
          </div>
        </div>
  )
}

export default FailedTask