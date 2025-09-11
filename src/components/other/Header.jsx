import React from 'react'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  // ✅ If data exists → show employee name, else → show Admin
  const username = props.data?.firstName || 'Admin'

  return (
    <div className="flex items-center justify-between bg-[#1e293b]/80 px-6 py-4 rounded-xl shadow-lg">
      {/* Greeting */}
      <h1 className="text-2xl font-medium text-gray-200">
        Hello 👋 <br />
        <span className="text-3xl font-semibold text-sky-400">
          {username}
        </span>
      </h1>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="bg-rose-500 hover:bg-rose-600 transition px-5 py-2 rounded-lg font-medium shadow-md text-white"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
