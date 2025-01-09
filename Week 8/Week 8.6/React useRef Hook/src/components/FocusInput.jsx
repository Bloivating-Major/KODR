import React, { useRef } from "react";

const FocusInput = () => {
  const input = useRef(null);
  // storing a useRef variable in a element.

  // this is the function that will run when button is clicked.
  const handleFocus = () => {
    if (input.current) {
      input.current.focus();
      input.current.value = "Sambhav Here";
    }
  };

  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={handleFocus}>This is Focus Input</button>
    </div>
  );
};

export default FocusInput;
