import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className='flex justify-between gap-5 secreen'>
        <div className=' rounded-xl w-[30%] p-6 px-10 py- bg-red-400'>
            <h2 className='text-2xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'> New Task</h3>
        </div>
        <div className=' rounded-xl w-[30%] p-6 px-10 py- bg-blue-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'> Completed Task</h3>
        </div>
        <div className=' rounded-xl w-[30%] p-6 px-10 py- bg-green-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'> Accepted Task</h3>
        </div>
        <div className=' rounded-xl w-[30%] p-6 px-10 py- bg-yellow-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'> Failed Task</h3>
        </div>
        
    </div>
  )
}

export default TaskListNum