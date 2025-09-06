import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard() {
  return (
    <div className="h-screen w-full p-10 bg-[#111] text-white courier-prime-regular">
      <Header />
      <CreateTask />
      <AllTask />

      
    </div>
  )
}

export default AdminDashboard
