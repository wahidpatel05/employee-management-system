import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateEmployee = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const newEmployee = {
      id: Date.now(),
      firstName,
      email,
      password,
      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    }

    // add new employee
    const updatedEmployees = [...userData, newEmployee]
    setUserData(updatedEmployees)

    // persist to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    // reset form
    setFirstName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-6 bg-[#1e293b]/80 mt-5 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-5 text-sky-400">
        👤 Create New Employee
      </h2>

      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Employee Name"
          className="p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Employee Email"
          className="p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Employee Password"
          className="p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
          required
        />

        <button
          type="submit"
          className="bg-emerald-500 py-3 px-4 rounded-lg font-medium hover:bg-emerald-600 hover:shadow-md transition"
        >
          ➕ Add Employee
        </button>
      </form>
    </div>
  )
}

export default CreateEmployee
