import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); // for showing message

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const handleSignupClick = () => {
    setErrorMsg("❌ Only Admin can create new accounts!");
    setTimeout(() => setErrorMsg(""), 3000); // hide after 3s
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-emerald-600/50 rounded-2xl shadow-2xl p-8 animate-fadeIn">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-emerald-400 mb-6 tracking-wide">
          Welcome Back
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Please enter your credentials to continue
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email Address"
            className="w-full text-white placeholder-gray-400 bg-black/40 border border-emerald-500/50 rounded-xl py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className="w-full text-white placeholder-gray-400 bg-black/40 border border-emerald-500/50 rounded-xl py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 px-5 text-lg font-semibold transition transform hover:scale-[1.02] shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Error / Info Message */}
        {errorMsg && (
          <p className="mt-4 text-center text-red-400 font-medium animate-pulse">
            {errorMsg}
          </p>
        )}

        {/* Footer */}
        <p className="text-sm text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={handleSignupClick}
            className="text-emerald-400 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
