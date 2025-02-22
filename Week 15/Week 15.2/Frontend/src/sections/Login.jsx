import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/users/login', {
      email,
      password,
    }).then((res)=>{
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      navigate('/profile');
    }).catch((err)=>{
      setError(err.response.data?.message);
    })

    setEmail('')
    setPassword('')

  };

  return (
    <>
      <div className="text-center pt-4 bg-gray-900">
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-900 flex-col">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Login
            </button>
          </form>
          {error && (
          <div className="mt-4 text-center text-red-500">
            {error}
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Login;
