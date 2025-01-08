import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "@fontsource/poppins";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(URL.createObjectURL(file));
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile || !prompt) {
      setGeneratedText("Please upload an image and provide a prompt.");
      return;
    }

    setLoading(true);
    setGeneratedText("");

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      const base64Image = await fileToBase64(imageFile);

      const imagePart = {
        inlineData: {
          data: base64Image,
          mimeType: imageFile.type,
        },
      };

      const result = await model.generateContent([prompt, imagePart]);
      const response = await result.response;
      const text = await response.text();
      setGeneratedText(text);
    } catch (error) {
      console.error("Error analyzing image:", error);
      setGeneratedText("Error analyzing image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const formatResponseToJSX = (response) => {
    const steps = response.split(/\d+\.\s\*\*/).slice(1); // Split by numbered steps
    const intro = response.split(/\d+\.\s\*\*/)[0]; // Extract introduction before steps

    return (
      <div className="space-y-4 p-4 bg-gray-800 rounded-lg text-gray-300">
        <p className="mb-4">{intro.trim()}</p>
        <ol className="list-decimal space-y-2 pl-5">
          {steps.map((step, index) => (
            <li key={index} className="text-gray-200">
              <span className="font-semibold">{step.split(":")[0]}:</span>
              <span>{step.split(":").slice(1).join(":").trim()}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <div className="p-4 min-h-screen text-white bg-gray-900 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1
            className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500 md:text-4xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Image to Text Generator
          </h1>
          <p className="text-gray-400">
            Create unique descriptions using artificial intelligence
          </p>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 mb-3"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Type your prompt here..."
              className="px-4 py-3 pr-24 w-full bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              className="absolute right-2 top-1/2 px-4 py-1.5 bg-blue-600 rounded-md transition-colors -translate-y-1/2 hover:bg-blue-700"
              type="submit"
            >
              Generate
            </button>
          </div>
        </form>
        <div className="space-y-6 mt-3">
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center min-h-[400px] flex flex-col gap-4">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="max-w-full max-h-[300px] object-contain mx-auto rounded-lg"
                />
              )}

              {loading ? (
                <div className="flex flex-col gap-3 items-center">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-500 animate-spin border-t-transparent"></div>
                  <p className="text-gray-400">Analyzing image...</p>
                </div>
              ) : generatedText ? (
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="mb-2 text-lg font-semibold">
                    Generated Description:
                  </h3>
                  {formatResponseToJSX(generatedText)}
                </div>
              ) : (
                <p className="text-gray-400">
                  Upload an image to generate its description
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
