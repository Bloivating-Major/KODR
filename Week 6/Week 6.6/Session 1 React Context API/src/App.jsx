import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'

const App = () => {
  return (
    <div>
          <nav className='p-10 flex justify-center items-center gap-10 text-xl font-medium uppercase'>
            <Link to="/" >Home</Link>
            <Link to="/user" >User</Link>
            <Link to="/about" >About</Link>
          </nav>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
          </Routes>

    </div>
  )
}

export default App
