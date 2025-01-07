import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { IoLogoGithub, IoSearchSharp } from "react-icons/io5";
import  {useNavigate}  from "react-router-dom"
const Home = () => {

  const [word, setWord] = useState("");
  const navigate = useNavigate();

  
  

  const handleSubmit = (e)=> {
    e.preventDefault();
    const trimmedWord = word.trim();
    if(!trimmedWord || trimmedWord.split(" ").length > 1) return
    navigate(`/search/${trimmedWord}`)
    
  }

  return (
    <main className="flex flex-col justify-center items-center p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 font-raleway">
      <div className="flex flex-col items-center px-10 py-10 space-y-6 w-full bg-gradient-to-tr rounded-xl max-w-96 from-violet-900/20 to-gray-600/20 hover:from-gray-900/20 hover:to-violet-600/20">
        {/* Image container with gradient overlay */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <div className="absolute"></div>
          <img
            src="./book.png"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>

        {/* Text content */}
        <h1 className="text-4xl font-bold text-transparent text-violet-600 bg-clip-text bg-gradient-to-r from-red-500 to-red-700 md:text-5xl">
          Dictionary
        </h1>
        <p className="text-sm text-center text-gray-400 md:text-base">
          Find meanings and save for quick reference
        </p>

        {/* Search container */}
        <div className="w-full">
          <div className="flex relative">
            <form className="w-full" onSubmit={handleSubmit}>
              <IoSearchSharp className="absolute top-2 left-2 text-3xl text-gray-500" />
              <input
                type="text"
                placeholder="Enter Word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                className="px-4 pl-10 py-3 w-full placeholder-gray-500 text-gray-200 rounded-md border border-gray-700 bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent] "
              />
            </form>
          </div>
        </div>

        {/* Bookmark button */}
        <button className="p-4 bg-gradient-to-r from-violet-500 to-violet-600 rounded-md shadow-lg transition-all duration-300 hover:from-violet-600 hover:to-violet-700 hover:shadow-black/35">
          <FaBookmark className="text-xl text-white" />
        </button>
      </div>
    </main>
  );
};

export default Home;
