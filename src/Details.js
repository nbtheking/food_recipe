import React from "react";
import DetailsStyles from "./RecipesStyles/DetailsStyles.css";

function Details({ strMeal, strMealThumb, strInstructions }) {
  return (
    <div className="container">
      <div className="items">
        <h2 className="header">{strMeal}</h2>
        <img src={strMealThumb} className="image" />
        <p className="instructions">{strInstructions}</p>
      </div>
    </div>
  );
}

export default Details;
