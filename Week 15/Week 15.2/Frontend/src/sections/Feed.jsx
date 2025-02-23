import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/feed", {
        headers: {
          authorization: "bearer " + token,
        },
      });
      console.log(response);
      setPosts(response.data.feed);
      setUser(response.data.username)
    } catch (error) {
      console.error("Error fetching feed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`http://localhost:3000/posts/like/${postId}`, {}, {
        headers: {
          authorization: "bearer " + token,
        },
      });
      fetchFeed(); // Refresh feed after like/unlike
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  if (loading) {
    return <h1 className="text-center text-gray-200 mt-10">Loading Feed...</h1>;
  }


  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 p-6">
      {/* Link to Profile */}
      <Link to="/profile" className="text-blue-500 hover:underline mb-10">
          Profile
        </Link>
         

      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Feed  {user}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="bg-gray-900 rounded-2xl shadow-lg p-4 ">
              <div className="flex items-center mb-4">
                <img
                  src={post.author.profileImage || "/defaultProfilePic.jpg"}
                  alt="author"
                  className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover"
                />
                <div className="ml-4">
                  <h2 className="font-semibold">{post.author.username}</h2>
                </div>
              </div>
              <img
                src={post.media}
                alt="post"
                className="w-full h-64 object-cover rounded-lg mb-4 border border-orange-500"
              />
              <p className="text-sm mb-4">{post.caption}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleLike(post._id)}
                  className="bg-violet-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
                >
                  ❤️ {post.likesCount} Likes {post.likedBy.includes(user) ? `${user}` : ""}
                </button>
                <span className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Feed;

