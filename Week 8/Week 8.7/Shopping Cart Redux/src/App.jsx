import React from "react";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectDarkMode } from './store/reducer/themeSlice';

const App = () => {
  const isDarkMode = useSelector(selectDarkMode);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-800">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:slug" element={<Detail />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
