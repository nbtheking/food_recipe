import React from "react";
import DetailsStyles from "./RecipesStyles/DetailsStyles.css";

function Details({ strMeal, strMealThumb, strInstructions }) {
  return (
    <div className="container">
      <h2 className="header">{strMeal}</h2>
      <img src={strMealThumb} className="image" />
    </div>
  );
}
//  {/* <p className="instructions">{strInstructions}</p>
export default Details;
