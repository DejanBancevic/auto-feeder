"use client";

import React, { useState } from "react";
import CalendarApp from "../components/CalendarApp/CalendarApp";
import MealTransfer from "../components/MealTransfer/MealTransfer";

const Insert = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [date, setDate] = useState("2011-1-1");

  const { CreateMeal } = MealTransfer();

  const handleSubmit = (event) => {
    event.preventDefault();
    return CreateMeal(name, ingredients, recipe, date);
  };

  const handleSetDate = (value) => {
    setDate(value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div className="flex flex-row-2">
        <div className="grid-flow-col">
          {/* HowTo */}
          <div className="card mr-20 mt-4">
            <h3>How To...</h3>
            <p className="w-64">
              Fill out the meal that you want, click the date on the Calendar
              for when you want the meal to show up on the Home page and when
              you're done click the Confirm Button.
            </p>
            <p className="w-64">
              Put a comma (",") after each ingredient and recipe instruction.
            </p>
          </div>

          {/* Name */}
          <div className="grid justify-center items-center mr-20 mt-8">
            <h1 className="text-center">Write the name of the meal</h1>
            <textarea
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="card w-80 h-12 text-center"
            />
          </div>

          {/* Ingredients */}
          <div className="grid mr-20 mt-4  ">
            <h1 className="text-center">Write you ingredients here</h1>
            <textarea
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              className="card-textarea w-80 h-96 justify-start"
            />
          </div>

          {/* Confirm Button */}
          <div className="grid justify-center items-center mr-20 mt-4">
            <h1 className="text-center pb-4">Confirm your meal</h1>
            <form onSubmit={handleSubmit}>
              <button type="submit" className="btn-primary w-full">
                Confirm
              </button>
            </form>
          </div>
        </div>

        <div className="grid-flow-col-dense">
          {/* Calendar */}
          <div className="grid justify-items-center mt-4 ">
            <h1 className="text-center pb-4">Calendar</h1>
            <CalendarApp mealDate={handleSetDate} />
          </div>

          {/* Recipe */}
          <div className="grid pt-12 justify-items-center">
            <h1>Write your recipe for the meal here</h1>
            <textarea
              value={recipe}
              onChange={(event) => setRecipe(event.target.value)}
              className="card-textarea w-80 h-96 "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Insert;
