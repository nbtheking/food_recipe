import "./App.css";
import React, { useState, useEffect } from "react";
import Details from "./Details";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("fish");
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const { meals } = await data;
      setRecipes(meals);
      console.log(meals);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  useEffect(() => {
    getData();
  }, [query]);

  return (
    <div className="App">
      <h1>Food Recipe app</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="search" />
      </form>
      <div>
        {recipes
          ? recipes.map((recipe) => (
              <Details
                key={recipe.idMeal}
                strMeal={recipe.strMeal}
                strMealThumb={recipe.strMealThumb}
                strInstructions={recipe.strInstructions}
              />
            ))
          : "No recipes"}
      </div>
    </div>
  );
}

export default App;
