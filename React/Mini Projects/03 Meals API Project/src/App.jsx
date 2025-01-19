import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(
        (response) => (
          setItems(response.data.meals), console.log(response.data.meals)
        )
      )
      .catch((error) => console.error(error));
  }, []);

  const showItems = items.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <p>{strMeal}</p>
        <p>${idMeal}</p>
      </section>
    );
  });

  return <div className="items-container">{showItems}</div>;
};

export default App;
