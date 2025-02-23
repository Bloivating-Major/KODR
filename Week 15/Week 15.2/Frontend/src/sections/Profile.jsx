import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // For redirection after logout

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/users/profile", {
        headers: {
          authorization: "bearer " + token,
        },
      });

      setUser(response?.data);
    } catch (error) {
      console.log(error.response?.data?.message || "Error fetching profile");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token"); // Clear the token from local storage
    navigate("/login"); // Redirect to login page
  };

  return user == null ? (
    <h1>Not Rendered</h1>
  ) : (
    <main>
      <section className="flex flex-col items-start max-w-5xl m-auto min-h-screen bg-gray-950 p-6">
        <div className="flex w-full items-center justify-between gap-5 py-2 px-1">
          <div>

          <Link to="/create-post" className="text-blue-500 hover:underline mb-10">
            Create Post
          </Link>
          </div>

        <div>
          <Link to="/feed" className="text-blue-500 hover:underline mb-10">
            Feed
          </Link>
        </div>

          {/* Logout Button */}
          <button
            onClick={logoutHandler}
            className="ml-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md flex w-full gap-5 items-center">
          <img
            src={user.profileImage || "https://i.pinimg.com/736x/6b/cd/97/6bcd978e2fc96100d4b29c866c702f6d.jpg"}
            alt="avatar"
            className="w-16 h-16 rounded-full border-2 border-red-500 object-cover"
          />
          <h2 className="text-xl font-semibold mt-2 text-gray-200">{user.username}</h2>
        </div>

        <div className="bg-gray-900 p-6 mt-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Posts</h3>
          <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            {user.posts.map((post, index) => (
              <div key={index} className="border border-orange-500 overflow-hidden rounded-lg">
                <img
                  src={post.media}
                  alt="post"
                  className="w-40 h-40 rounded-lg p-1 object-cover max-sm:w-full max-sm:h-80"
                />
                <p className="text-gray-200 text-sm mt-3 text-center">{post.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
