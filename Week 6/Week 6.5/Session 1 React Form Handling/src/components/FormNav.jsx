import React from "react";
import { NavLink } from "react-router-dom";

const FormNav = () => {
  return (
    <nav className="flex gap-10 justify-center p-4 border-b border-gray-700 font-raleway font-medium text-xl max-sm:text-sm max-sm:w-full max-sm:gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-b-4 text-white border-orange-400 rounded-md ease-in-out duration-100 py-1" : "text-white py-1"
        }
      >
        Register
      </NavLink>
      <NavLink
        to="submitted"
        className={({ isActive }) =>
          isActive ? "border-b-4 text-white border-orange-400 rounded-md ease-in-out duration-100 py-1" : "text-white py-1"
        }
      >
        Submitted Forms
      </NavLink>
      <NavLink
        to="favorites"
        className={({ isActive }) =>
         isActive ? "border-b-4 text-white border-orange-400 rounded-md ease-in-out duration-100 py-1" : "text-white py-1"
        }
      >
        Favorite Forms
      </NavLink>

    
    </nav>
  );
};

export default FormNav;
