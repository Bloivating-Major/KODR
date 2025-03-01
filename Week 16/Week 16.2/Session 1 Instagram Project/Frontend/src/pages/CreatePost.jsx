import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(""); // Store error messages

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show preview
    }
  };

  // Handle post submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please select an image to post.");
      return;
    }
    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append("media", image); // Append file
    formData.append("caption", caption); // Append caption

    try {
      const res = await axios.post("http://localhost:3000/v1/api/posts/create", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Post created:", res.data);

      // Reset form after successful upload
      setCaption("");
      setImage(null);
      setPreview(null);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create post");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      <Link to="/profile" className="text-blue-500 absolute top-10">
        Back to Home
      </Link>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Create Post</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Image Preview */}
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-600 rounded-md cursor-pointer">
              <FaPlus className="text-gray-400 text-2xl mb-2" />
              <span className="text-gray-400 text-sm">Add an Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}

          {/* Caption Input */}
          <textarea
            className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded-md text-white"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-semibold"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
