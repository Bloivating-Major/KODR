import React, { useState } from "react";

const Login = ({ handleLogin, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please fill out all the fields.");
    } else {
      // TODO: Send login request to the server
      handleLogin(email, password);
      // Reset form
      setEmail("");
      setPassword("");
    }
    setTimeout(() => setError(""), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="p-8 space-y-6 w-full max-w-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-white">
            Login to Your Account
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Admin / Employee ID"
              className="px-4 py-3 w-full text-white bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="3 Digit Pin"
              className="px-4 py-3 w-full text-white bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="py-3 w-full font-medium text-white bg-gradient-to-r from-purple-600 to-red-500 rounded-lg transition-opacity hover:opacity-90"
          >
            Login to Your Account
          </button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <a href="#" className="text-gray-400 hover:text-purple-500">
              Forgot Password?
            </a>
          </div>

          {/* Add error message display */}
          {errorMessage && (
            <div className="p-2 mt-2 text-sm text-red-500 rounded-lg border bg-red-500/10 border-red-500/50 text-center">
              {errorMessage}
            </div>
          )}
        </form>
        {error && (
          <p className="text-sm text-red-500 text-center font-bold">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
