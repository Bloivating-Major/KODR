import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Definitions from "./components/Definitions/Definitions";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/search/:word" element={<Definitions />} />
      </Routes>
    </div>
  );
};

export default App;
