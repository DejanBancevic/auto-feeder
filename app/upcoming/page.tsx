//"use client";

import React from "react";
import MealTransfer from "../components/MealTransfer/MealTransfer";

const Upcoming = async () => {
  const { MealIngredients, MealName } = await MealTransfer();

  const mealName1 = MealName("1");
  const mealIngredients1 = MealIngredients("1");

  const mealName2 = MealName("2");
  const mealIngredients2 = MealIngredients("2");

  const mealName3 = MealName("3");
  const mealIngredients3 = MealIngredients("3");

  const mealName4 = MealName("4");
  const mealIngredients4 = MealIngredients("4");

  const mealName5 = MealName("5");
  const mealIngredients5 = MealIngredients("5");

  const mealName6 = MealName("6");
  const mealIngredients6 = MealIngredients("6");

  const upcomingMeal = (meal, ingredients) => {
    return (
      <div className="card-home flex justify-left items-left overflow-auto">
        <div>
          <h1>{meal}</h1>
          <h3 className="pt-2 pr-2">Ingredients</h3>
          <div className="p-4">{ingredients}</div>
        </div>
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div className="grid md:grid-cols-3 grid-rows-auto gap-6 ">
        {upcomingMeal(mealName1, mealIngredients1)}
        {upcomingMeal(mealName2, mealIngredients2)}
        {upcomingMeal(mealName3, mealIngredients3)}
        {upcomingMeal(mealName4, mealIngredients4)}
        {upcomingMeal(mealName5, mealIngredients5)}
        {upcomingMeal(mealName6, mealIngredients6)}
      </div>
    </main>
  );
};

export default Upcoming;
