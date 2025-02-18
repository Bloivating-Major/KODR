import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const Navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username, email, password);
    
    axios
      .post('http://localhost:3000/users/register', {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        localStorage.setItem('token', data.token);
        Navigate('/profile');
      })
      .catch((err) => {
        if (err.response.data?.message) {
          setError(err.response.data.message);
        }
      });

      setUsername('');
      setEmail('');
      setPassword('');
  }

  return (
    <main className="flex items-center justify-center w-full h-screen bg-gray-100">
      <section className="w-full max-w-md px-8 pt-6 pb-8 mb-4 bg-gray-200 rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name = "username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name = "email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name = "password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-4 text-center text-red-500">
            {error}
          </div>
        )}
      </section>
    </main>
  );
};

export default Register;
