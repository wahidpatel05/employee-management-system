import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-8 text-white">
      {/* Header */}
      <Header changeUser={props.changeUser} data={props.data} />

      {/* Stats Section */}
      <div className="mt-6">
        <div className="bg-[#1e293b]/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-sky-400 mb-4">
            📊 Task Overview
          </h2>
          <TaskListNumbers data={props.data} />
        </div>
      </div>

      {/* Task List Section */}
      <div className="mt-8">
        <div className="bg-[#1e293b]/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-emerald-400 mb-4">
            ✅ Your Tasks
          </h2>
          <TaskList data={props.data} />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
