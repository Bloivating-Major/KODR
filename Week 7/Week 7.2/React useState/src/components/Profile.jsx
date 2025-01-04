import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    setProfile({ name: "", age: "" }); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div>
          <label className="block text-lg font-medium pt-2 px-3 max-sm:text-sm max-sm:pt-1 text-red-500">
            Name:
          </label>
          <input
            className="w-full p-3 rounded-lg bg-[#424669] text-white focus:outline-none max-sm:text-sm"
            type="text"
            name="name" // Set the name attribute for easy access in handleChange
            value={profile.name}
            onChange={handleChange} // Call handleChange for every input change
          />
        </div>
        <div>
          <label className="block text-lg font-medium pt-2 px-3 max-sm:text-sm max-sm:pt-1 text-red-500">
            Age:
          </label>
          <input
            className="w-full p-3 rounded-lg bg-[#424669] text-white focus:outline-none max-sm:text-sm"
            type="number"
            name="age" // Set the name attribute for easy access in handleChange
            value={profile.age}
            onChange={handleChange} // Call handleChange for every input change
          />
        </div>
        <button
          type="submit"
          className="w-1/3 bg-orange-500 hover:bg-orange-600 transition-colors py-3 rounded-lg text-white font-semibold shadow-lg max-sm:py-1 cursor-pointer"
        >
          Submit
        </button>
      </form>

      <div className="text-white py-5">
        <h2>Profile Information:</h2>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
