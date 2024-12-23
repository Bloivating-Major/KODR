import React from "react";
import FormNav from "./FormNav";
import { Outlet } from "react-router-dom";

const Form = () => {
  return (
    <div className="bg-primary w-3/5 h-3/4 flex rounded-3xl overflow-hidden max-sm:flex-col max-sm:w-11/12 max-sm:h-3/5">
      <div id="leftSection" className="w-1/2 flex flex-col max-sm:w-full max-sm:h-full ">
        <FormNav />
        <Outlet />
      </div>
      <div id="rightSection" className="w-1/2 overflow-hidden max-sm:w-full max-sm:h-1/2 max-sm:hidden">
        <img src="/img/Mountain.jpg" className="h-full w-full object-cover max-sm:hidden" alt="" />
      </div>
    </div>
  );
};

export default Form;
