import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from '../views/register/Register'
import Login from '../views/login/Login'


const AppRoutes = () => {
  return (
    <Router>

        <Routes>
          
             <Route path='/' element={<div>Home</div>} />
             <Route path='/register' element={<Register />} />
             <Route path='/login' element={<Login />} />

        </Routes>

    </Router>
  )
}

export default AppRoutes
