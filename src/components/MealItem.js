import React from "react";
const MealItem = (props) => {
  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <div>{props.description} </div>
        <div>{props.price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
