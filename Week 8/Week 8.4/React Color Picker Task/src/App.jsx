import React, { useRef } from 'react';

const App = () => {
  const mainRef = useRef(null);

  const handleColorChange = (event) => {
    console.log(mainRef);
    if (mainRef.current) {
      mainRef.current.style.backgroundColor = event.target.value;
    }
  };

  return (
    <main
      ref={mainRef}
      className="h-screen w-full flex justify-center items-center"
    >
      <input
        type="color"
        className="h-10 w-20 bg-transparent"
        onChange={handleColorChange}
      />
    </main>
  );
};

export default App;
