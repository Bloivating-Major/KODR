import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [Rotate, setRotate] = useState(0);
  const deadPoolImage = useRef(null);

  useEffect(() => {
    deadPoolImage.current.style.top = Y + "%";
    deadPoolImage.current.style.left = X + "%";
    deadPoolImage.current.style.rotate = Rotate + "deg";
  }, [X,Y, Rotate]);

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-y-hidden">
      <img
        src="https://i.pinimg.com/736x/76/a7/0f/76a70f50208522e860bcd7d84d53d2c9.jpg"
        alt=""
        className="h-[30vh] w-[15vw] rounded-full absolute "
        ref={deadPoolImage}
      />
      <button
        className="py-4 px-6 bg-violet-700 rounded-md absolute"
        onClick={() => {
          setX(Math.random() * 90);
          setY(Math.random() * 90);
          setRotate(Math.random() * 360);
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default App;
