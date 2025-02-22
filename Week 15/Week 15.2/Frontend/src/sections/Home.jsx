import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-3xl font-bold mb-4 text-violet-400">Welcome</h1>
        <p className="text-gray-300 mb-4">Navigate to Register or Login</p>
        <div className="space-y-4">
          <Link
            to="/register"
            className="block w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="block w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
