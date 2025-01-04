import React from "react";
import axios from "axios";

const App = () => {
  // const getProducts = () => {
  //   const api = "https://fakestoreapi.com/products";
  //   axios
  //     .get(api)
  //     .then((products) => {
  //       console.log(products);
  //     })
  //     .catch((err) => console.log(err));
  // }; This is Normally done using then() and catch().

  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
  };

  return (
    <div className="pt-[5%] pl-[5%]">
      <button className="rounded-lg px-5 bg-red-300 py-3" onClick={getProducts}>
        Call Product Api
      </button>
    </div>
  );
};

export default App;
