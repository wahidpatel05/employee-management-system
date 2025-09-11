import React from 'react'

const NewTask = ({ data, onAccept }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button
                    onClick={onAccept}
                    className='bg-blue-500 hover:bg-blue-600 rounded font-medium py-1 px-2 text-xs w-full'
                >
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask
