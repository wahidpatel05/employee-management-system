import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div className="bg-[#1e293b]/80 p-6 rounded-xl mt-6 shadow-lg">
      {/* Table Header */}
      <div className="bg-sky-500/20 border border-sky-500 text-sky-300 mb-4 py-3 px-4 flex justify-between rounded-lg font-semibold">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>

      {/* Table Rows */}
      <div className="space-y-3">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a] border border-gray-700 hover:border-sky-500 transition-colors duration-300 py-3 px-4 flex justify-between rounded-lg shadow-sm"
          >
            <h2 className="text-base font-medium w-1/5 text-gray-200">
              {elem.firstName}
            </h2>
            <h3 className="text-base font-medium w-1/5 text-sky-400">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="text-base font-medium w-1/5 text-yellow-400">
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-base font-medium w-1/5 text-emerald-400">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="text-base font-medium w-1/5 text-rose-500">
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
