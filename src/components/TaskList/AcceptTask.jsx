import React from 'react'

const AcceptTask = ({data}) => {

  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-sm px-2'>{data.taskDate}</h4>
        </div>
         <h2 className='mt-5 text-xl font-bold '>{data.taskTitle}</h2>
         <p className='text-'>
          {data.taskDescription}
         </p>
         <div className='flex justify-between'>
            <button className='bg-green-400 py-1 px-2 text-sm'> Mark as Completed</button>
            <button className='bg-red-400 rounded py-1 px-2 text-sm'> Mark as Failed</button>
         </div>
        </div>
  )
}

export default AcceptTask