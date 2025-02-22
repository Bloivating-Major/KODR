import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const naviagate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token"); // Retrieve token for authentication
  
    try {
      const response = await axios.post(
        "http://localhost:3000/posts/create",
        { media: imageUrl, caption }, // ✅ Use "media" instead of "imageUrl"
        { headers: { "Authorization": `Bearer ${token}` } } // ✅ "Bearer" with capital "B"
      );
  
      console.log("Post created:", response.data);
      setImageUrl("");
      setCaption("");
      naviagate("/profile"); // Redirect to profile page after successful post creation
    } catch (err) {
      console.error("Error creating post:", err.response?.data || err);
    }
  };
  

  return (
    <div className="flex flex-col  items-start min-h-screen p-5 bg-gray-950">

    <div className="text-center my-4 ">
        <Link to="/profile" className="text-blue-500 hover:underline">
          Back to Profile
        </Link>
      </div>

      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Create a Post</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Image URL:</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Caption:</label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption..."
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Create Post
          </button>

      
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
