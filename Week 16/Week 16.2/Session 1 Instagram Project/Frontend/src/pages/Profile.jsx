import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const dummyPosts = [
    "https://i.pinimg.com/236x/ee/16/e8/ee16e8078fbce26b69497d27da5a574a.jpg", 
    "https://i.pinimg.com/236x/de/08/15/de08150134ddbab7aedb7e95a8c42d6c.jpg", 
    "https://i.pinimg.com/236x/de/08/15/de08150134ddbab7aedb7e95a8c42d6c.jpg", 
    "https://i.pinimg.com/236x/de/08/15/de08150134ddbab7aedb7e95a8c42d6c.jpg"
  ];

const Profile = () => {

  const navigate = useNavigate(); // For redirection after logout

  const logoutHandler = () => {
    localStorage.removeItem("token"); // Clear the token from local storage
    navigate("/"); // Redirect to login page
  };



    return (
        <div className="bg-black text-gray-200 min-h-screen p-6 flex flex-col items-center w-full max-w-lg mx-auto ">
          {/* Header */}
          <div className="w-full flex items-center justify-between max-w-md mb-6">
            <button  onClick={logoutHandler}
            className="ml-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Logout</button>
          </div>
          
          {/* Profile Info */}
          <div className="flex flex-col items-center w-full">
            <FaUserCircle className="text-6xl text-gray-500 mb-3" />
            <h2 className="text-2xl font-semibold">Test User</h2>
            <p className="text-gray-400">@test@testuser</p>
            <div className="flex space-x-6 text-gray-300 mt-3 w-full justify-evenly">
              <div className="text-center">
                <p className="text-lg font-semibold">24K</p>
                <p className="text-sm">Fans</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">655</p>
                <p className="text-sm">Following</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">2129</p>
                <p className="text-sm">Posts</p>
              </div>
            </div>
            <Link to="/create-post" className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-lg font-semibold text-white">Create Post</Link>

          </div>
    
          {/* Tabs Section */}
          <div className="flex justify-center space-x-6 mt-6 border-b border-gray-700 pb-2 w-full max-w-md">
            <p className="text-white border-b-2 border-white pb-1">Photo</p>
            <p className="text-gray-400">Video</p>
            <p className="text-gray-400">About</p>
            <p className="text-gray-400">Favorite</p>
          </div>
    
          {/* Posts Section */}
          <div className="grid grid-cols-2 gap-2 mt-4 max-w-md w-full min-h-[300px]  items-center justify-center bg-gray-500 rounded-md p-2 max-sm:grid-cols-1">
            {dummyPosts.length > 0 ? (
              dummyPosts.map((post, index) => (
                <img key={index} src={post} alt="Post" className="w-full rounded-lg aspect-[4/5] object-cover" />
              ))
            ) : (
              <p className="text-gray-500">No posts yet</p>
            )}
          </div>
        </div>
      );
}

export default Profile
