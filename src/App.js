import React from "react";
import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import MealsList from "./components/MealsList";
function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <MealsList />
    </div>
  );
}

export default App;
