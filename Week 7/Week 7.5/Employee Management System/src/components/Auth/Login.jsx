import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send login request to the server
    console.log(`Logging in as ${email} with password ${password}`);
    // Reset form
    setEmail('');
    setPassword('');
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900'>
      <div className='p-8 space-y-6 w-full max-w-md'>

        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold text-white'>Login to Your Account</h1>
        </div>

        {/* Form */}
        <form className='space-y-4' onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <input 
              type="email" 
              placeholder='Teacher / Student ID' 
              className='px-4 py-3 w-full text-white bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500'
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>

          {/* Password Input */}
          <div>
            <input 
              type="password" 
              placeholder='8 Digit Pin' 
              className='px-4 py-3 w-full text-white bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500'
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className='py-3 w-full font-medium text-white bg-gradient-to-r from-purple-600 to-red-500 rounded-lg transition-opacity hover:opacity-90'
          >
            Login to Your Account
          </button>

          {/* Forgot Password Link */}
          <div className='text-center'>
            <a href="#" className='text-gray-400 hover:text-purple-500'>Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
