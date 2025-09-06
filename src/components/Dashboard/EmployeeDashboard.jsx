import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div className='p-5 bg-[#1c1c1c] h-screen courier-prime-regular' >
        <Header />
        <TaskListNumbers />
        <TaskList />
        
    </div>
  )
}

export default EmployeeDashboard