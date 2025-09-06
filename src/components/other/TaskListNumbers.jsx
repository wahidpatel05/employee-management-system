import React from 'react'

function TaskListNumbers() {
  return (
    <div className="flex w-full justify-between gap-5 mt-10">
      <div className="rounded-xl h-40 w-1/4 py-6 px-9 bg-red-400">
        <h2 className="text-2xl font-bold">1</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl h-40 w-1/4 py-6 px-9 bg-blue-400">
        <h2 className="text-2xl font-bold">3</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl h-40 w-1/4 py-6 px-9 bg-green-600">
        <h2 className="text-2xl font-bold">0</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl h-40 w-1/4 py-6 px-9 bg-indigo-500">
        <h2 className="text-2xl font-bold">0</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
