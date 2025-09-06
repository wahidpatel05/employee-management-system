import React, { useState } from 'react'

function Login({handleLogin}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#111]">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-emerald-600 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Login</h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full text-white placeholder-gray-400 bg-transparent border border-emerald-600 rounded-full py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your password"
            className="w-full text-white placeholder-gray-400 bg-transparent border border-emerald-600 rounded-full py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-3 px-5 text-lg font-semibold transition duration-200 shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
