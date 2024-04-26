"use client";

import React, { useState } from "react";
import CalendarApp from "../components/CalendarApp/CalendarApp";


const Insert = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [date, setDate] = useState("2011-1-1");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, recipe, ingredients, date };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetDate = (value) => {
    setDate(value);
  };

  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-18  ">
      <div className=" md:flex flex-row-2 ">
        <div className="grid-flow-col">
          {/* HowTo Large */}
          <div className="hidden md:block card md:mr-20 md:mt-4 ">
            <h3 className=" max-w-44 mx-auto md:max-w-64 md:mx-auto">
              How To...
            </h3>
            <p className=" max-w-44 mx-auto md:max-w-64 md:mx-auto">
              Fill out the meal that you want, click the date on the Calendar
              for when you want the meal to show up on the Home page and when
              you're done click the Confirm Button.
            </p>
            <p className="max-w-44 mx-auto md:max-w-64 md:mx-auto">
              Put a comma (",") after each ingredient and recipe instruction.
            </p>
          </div>

          {/* HowTo Small */}
          <div className=" md:hidden card m-16">
            <h3 className=" max-w-44 mx-auto md:max-w-64 md:mx-auto">
              How To...
            </h3>
            <p className=" max-w-44 mx-auto md:max-w-64 md:mx-auto">
              Fill out the meal that you want, click the date on the Calendar
              for when you want the meal to show up on the Home page and when
              you're done click the Confirm Button.
            </p>
            <p className="max-w-44 mx-auto md:max-w-64 md:mx-auto">
              Put a comma (",") after each ingredient and recipe instruction.
            </p>
          </div>

          {/* Name */}
          <div className=" grid justify-center md:items-center md:mr-20 md:mt-8">
            <h1 className="text-center">Write the name of the meal</h1>
            <textarea
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="card w-80 h-12 text-center"
            />
          </div>

          {/* Ingredients */}
          <div className="grid justify-center md:items-center md:mr-20 md:mt-8 ">
            <h1 className="text-center">Write you ingredients here</h1>
            <textarea
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              className="card-textarea w-80 h-96 justify-start"
            />
          </div>

          {/* Confirm Button */}
          <div className="grid justify-center md:items-center md:mr-20 md:mt-8">
            <h1 className="text-center pb-4">Confirm your meal</h1>
            <form onSubmit={handleSubmit}>
              <button type="submit" className="btn-primary w-full">
                Confirm
              </button>
            </form>
          </div>
        </div>

        <div className=" grid-flow-col-dense md:grid-flow-col-dense">
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