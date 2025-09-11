import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {/* New Task */}
      <div className="rounded-xl p-6 bg-[#0f172a] border border-sky-500/40 hover:border-sky-500 transition shadow-md">
        <h2 className="text-3xl font-bold text-sky-400">{data.taskCounts.newTask}</h2>
        <h3 className="text-lg mt-1 font-medium text-gray-300">New Task</h3>
      </div>

      {/* Completed */}
      <div className="rounded-xl p-6 bg-[#0f172a] border border-emerald-500/40 hover:border-emerald-500 transition shadow-md">
        <h2 className="text-3xl font-bold text-emerald-400">{data.taskCounts.completed}</h2>
        <h3 className="text-lg mt-1 font-medium text-gray-300">Completed Task</h3>
      </div>

      {/* Active */}
      <div className="rounded-xl p-6 bg-[#0f172a] border border-yellow-500/40 hover:border-yellow-500 transition shadow-md">
        <h2 className="text-3xl font-bold text-yellow-400">{data.taskCounts.active}</h2>
        <h3 className="text-lg mt-1 font-medium text-gray-300">Active Task</h3>
      </div>

      {/* Failed */}
      <div className="rounded-xl p-6 bg-[#0f172a] border border-rose-500/40 hover:border-rose-500 transition shadow-md">
        <h2 className="text-3xl font-bold text-rose-400">{data.taskCounts.failed}</h2>
        <h3 className="text-lg mt-1 font-medium text-gray-300">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
