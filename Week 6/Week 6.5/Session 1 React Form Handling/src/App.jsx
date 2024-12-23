import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import RegisterForm from './components/RegisterForm';
import SubmittedForm from './components/SubmittedForms';
import FavoriteForm from './components/FavoriteForms';

const App = () => {
  return (
    <main className="bg-backgroundPrimary h-screen w-screen flex flex-col items-center">
      <Header />
      <Routes>
        <Route path="/" element={<Form />} >
        <Route path="/" element={<RegisterForm/>} />
        <Route path="/submitted" element={<SubmittedForm />} />
        <Route path="/favorites" element={<FavoriteForm />} />
        </Route>     
      </Routes>
    </main>
  );
};

export default App;
