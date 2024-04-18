import React from "react";
import DUMMY_MEALS from "../assests/dummy-meals";
import Card from "./Card";
const MealList = () => {
  return (
    <div className="meals">
      <ul>
        <Card>
          {DUMMY_MEALS.map((meal) => {
            return <ul key={meal.id}>{meal.name}</ul>;
          })}
        </Card>
      </ul>
    </div>
  );
};

export default MealList;
