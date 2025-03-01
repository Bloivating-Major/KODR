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
    
        axios.post('http://localhost:3000/v1/api/users/login', {
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
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full p-3 bg-blue-600 hover:bg-blue-500 rounded text-white font-semibold">
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Dont have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
        {error && (
          <div className="mt-4 text-center text-red-500">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
