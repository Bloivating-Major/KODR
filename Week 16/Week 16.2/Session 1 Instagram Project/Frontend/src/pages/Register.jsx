import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/v1/api/users/register' , {
      username,
      email,
      password,
    }).then((res)=> {
      const data = res.data;
      localStorage.setItem('token', data.token);
      navigate('/profile');

    }).catch((err)=>{
      if(err.response.data.errors.length > 0){
        setErrors(err.response.data.errors[0].msg);
      }
    })
    setUsername('');
    setEmail('');
    setPassword('');
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
        {errors && (
        <div className=" text-red-500 p-3 rounded-md mb-4">
          {errors}
        </div>
      )}
      </div>
    </div>
  );
};

export default Register;
