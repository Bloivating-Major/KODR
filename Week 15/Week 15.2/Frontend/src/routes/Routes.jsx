import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Register from '../sections/Register'
import Login from '../sections/Login'
import Home from '../sections/Home'
import Profile from '../sections/Profile'
import CreatePost from '../sections/CreatePost'
import Protected from '../components/Protected'
import Feed from '../sections/Feed'

const AppRoutes = () => {
  return (
    <div>

        <Router>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/register' exact element={<Register/>} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/profile' element={<Protected><Profile/></Protected>} />
                <Route path='/create-post' element={<Protected><CreatePost/></Protected>} />
                <Route path='/feed' element={<Protected><Feed /></Protected> } />
            </Routes>
        </Router>

      
    </div>
  )
}

export default AppRoutes
