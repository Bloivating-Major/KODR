import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send registration request to the server

    axios.post('http://localhost:3000/users/register' , {
      username,
      email,
      password,
    }).then((res)=> {
      const data = res.data;
      localStorage.setItem('token', data.token);
      navigate('/profile');

    }).catch((err)=>{
      setError(err.response.data?.message);
    })



    setUsername('');
    setEmail('');
    setPassword('');

  };

  return (
    <>
      <div className="text-center pt-4 bg-gray-900">
        <Link to="/" className="text-blue-500">
          Back to Home
        </Link>
      </div>

      <div className="flex justify-center flex-col items-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96 ">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Register</h2>
          <form onSubmit={handleSubmit} className="text-white">
            <div className="mb-4">
              <label className="block text-gray-300">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
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
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Register
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

export default Register;
