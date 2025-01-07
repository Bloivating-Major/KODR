import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, resetAsync } from "./store/reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-center text-3xl font-bold text-red-900">
        Let's Start Redux ToolKit
      </h1>
      <h2 className="text-center text-2xl mt-20 text-violet-700 font-medium">
        Current Counter Value: {value}
      </h2>

      <div className="text-center space-x-5">
        <button
          className="py-3 px-4 bg-green-500 rounded-md mt-10"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="py-3 px-4 bg-red-500 rounded-md mt-10"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="py-3 px-4 bg-yellow-500 rounded-md mt-10"
          onClick={() => dispatch(resetAsync(0))}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
