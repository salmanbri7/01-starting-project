import React from "react";
import DUMMY_MEALS from "../assests/dummy-meals";
const MealList = () => {
  return (
    <div>
      {DUMMY_MEALS.map((meal) => {
        return <li key={meal.id}>{meal.name}</li>;
      })}
    </div>
  );
};

export default MealList;
