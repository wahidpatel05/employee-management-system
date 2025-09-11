import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      id: Date.now(),
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    const updatedData = userData.map((emp) => {
      if (emp.id === parseInt(assignTo)) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1,
          },
        }
      }
      return emp
    })

    setUserData(updatedData)

    // reset form
    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className="p-6 bg-[#1e293b]/80 mt-5 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-5 text-emerald-400">
        📝 Create Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between gap-6"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4">
          {/* Task Title */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
              type="date"
              required
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Assign To
            </label>
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
              required
            >
              <option value="">Select Employee</option>
              {userData.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.firstName}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
              type="text"
              placeholder="Design, Dev, etc"
              required
            />
          </div>
        </div>

        {/* Right Section - Description */}
        <div className="w-full md:w-2/5 flex flex-col space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-44 p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition resize-none"
              placeholder="Explain the task in detail..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-500 py-3 px-5 rounded-lg font-medium hover:bg-emerald-600 hover:shadow-md transition w-full"
          >
            ➕ Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
