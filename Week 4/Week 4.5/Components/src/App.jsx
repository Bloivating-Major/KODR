import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="max-sm:w-full max-sm:px-5 max-sm:overflow-x-hidden max-sm:h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
