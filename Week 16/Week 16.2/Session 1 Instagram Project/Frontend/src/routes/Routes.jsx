import {Routes, Route, Link, useLocation} from 'react-router-dom'
import Register from "../pages/Register"
import Login from "../pages/Login"
import Protected from '../components/Protected'
import Profile from '../pages/Profile'
import CreatePost from '../pages/CreatePost'


const AppRoutes = () => {

    const location = useLocation();
  const hideNavbar = ["/register", "/login", "/profile", "/create-post"].includes(location.pathname);

    return (
        <div className="bg-black text-gray-200 min-h-screen font-sans">
        {!hideNavbar && (
          <nav className="p-4 flex justify-between items-center bg-gray-900 shadow-md">
            <h1 className="text-2xl font-semibold tracking-wide">Instagram</h1>
            <div className="space-x-4">
              <Link to="/register" className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition">Register</Link>
              <Link to="/login" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">Login</Link>
            </div>
          </nav>
        )}
        <div className="p-6 flex justify-center items-center min-h-[80vh]">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Protected>
                <Profile />
            </Protected>} />
            <Route path='/create-post' element={<Protected><CreatePost /></Protected>} />
          </Routes>
        </div>
      </div>
      );
}

export default AppRoutes
