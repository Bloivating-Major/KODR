import React, { useState } from "react";
import axios from "axios";

const CodeReview = ({ code }) => {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://your-backend-url/api/review", {
        code,
      });

      setReview(response.data.review);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setReview("Failed to get a review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white h-full">
      <h2 className="text-xl font-semibold mb-4">AI Code Review</h2>

      <button
        onClick={handleReview}
        className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition mb-4"
        disabled={loading}
      >
        {loading ? "Reviewing..." : "Review Code"}
      </button>

      <div className="mt-4 p-3 bg-gray-800 rounded-md min-h-[150px]">
        {loading ? (
          <p className="text-gray-400">Analyzing code...</p>
        ) : (
          <p className="whitespace-pre-wrap">{review || "Click 'Review Code' to get feedback."}</p>
        )}
      </div>
    </div>
  );
};

export default CodeReview;
