import React, { useContext, useState } from "react";
import { FormContext } from "../../utils/FormContext";

const RegisterForm = () => {
  const { submitForm } = useContext(FormContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [submitted , setSubmitted] = useState("");

  const validateName = (name) => /^[a-zA-Z\s]{3,50}$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, number, isfavorite: checked };

    if (!name || !email || !number) {
      setError("Please fill all the fields.");
    } else if (!validateName(name)) {
      setError(
        "Name must be 3-50 characters and contain only letters or spaces."
      );
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else if (!validatePhoneNumber(number)) {
      setError("Phone number must be a 10-digit number.");
    } else {
      submitForm(formData);
      setSubmitted("Form Submitted")
      setName("");
      setEmail("");
      setNumber("");
      setChecked(false);
      setError("");
      setTimeout(() => setSubmitted(""), 1000);
      return;
    }
    setTimeout(() => setError(""), 2000);
  };

  return (
    <div className="text-white flex flex-col items-center justify-center h-full gap-10 font-raleway max-sm:gap-5 max-sm:py-5 max-sm:h-full">
      <h1 className="text-3xl font-medium max-sm:text-sm">
        Fill Out the Form!
      </h1>

      <form
        className="flex flex-col gap-5 w-4/5 max-sm:gap-3"
        onSubmit={handleSubmit}
      >
        <div className="bg-[#424669] rounded-sm text-[#676f9d] hover:border-l-4 hover:border-orange-400 transition-all">
          <label className="block text-lg font-medium pt-2 px-3 max-sm:text-sm max-sm:pt-1">
            Name
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-[#424669] text-white focus:outline-none max-sm:text-sm"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="bg-[#424669] rounded-sm text-[#676f9d] hover:border-l-4 hover:border-orange-400 transition-all">
          <label className="block text-lg font-medium pt-2 px-3 max-sm:text-sm max-sm:pt-1">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 rounded-lg bg-[#424669] text-white focus:outline-none max-sm:text-sm"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="bg-[#424669] rounded-sm text-[#676f9d] hover:border-l-4 hover:border-orange-400 transition-all">
          <label className="block text-lg font-medium pt-2 px-3 max-sm:text-sm max-sm:pt-1">
            Contact
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-[#424669] text-white focus:outline-none max-sm:text-sm"
            placeholder="Enter your contact details"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <label className="flex gap-3 items-center max-sm:text-sm max-sm:pt-1 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-orange-500 bg-black border-black rounded-lg"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          Add to Favorites
        </label>

        <button
          type="submit"
          className="w-1/3 bg-orange-500 hover:bg-orange-600 transition-colors py-3 rounded-lg text-white font-semibold shadow-lg max-sm:py-1 cursor-pointer"
        >
          Submit
        </button>
      </form>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {submitted && <p className="text-green-500 text-sm">{submitted}</p>}
    </div>
  );
};

export default RegisterForm;
