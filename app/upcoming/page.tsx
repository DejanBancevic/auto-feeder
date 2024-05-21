//"use client";

import React from "react";
import MealTransfer from "../components/MealTransfer/MealTransfer";
import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const Upcoming = async () => {
  const { MealIngredients, MealName, MealDate } = await MealTransfer();

  const mealName1 = MealName("1");
  const mealDate1 = MealDate("1");
  const mealIngredients1 = MealIngredients("1");

  const mealName2 = MealName("2");
  const mealDate2 = MealDate("2");
  const mealIngredients2 = MealIngredients("2");

  const mealName3 = MealName("3");
  const mealIngredients3 = MealIngredients("3");

  const mealName4 = MealName("4");
  const mealIngredients4 = MealIngredients("4");

  const mealName5 = MealName("5");
  const mealIngredients5 = MealIngredients("5");

  const mealName6 = MealName("6");
  const mealIngredients6 = MealIngredients("6");

  const upcomingMeal = (meal, ingredients, date?) => {
    return (
      <div className="card w-full h-full border-4 border-green-400 grid-col-1 justify-left items-left overflow-auto">
        <div className="">
          <h1 className=" flex justify-center text-4xl">{meal}</h1>
          <h2 className="flex justify-end py-2">{date}</h2>
          <h3 className="pt-2 pr-2 ">Ingredients:</h3>
          <div className="p-4 break-words">{ingredients}</div>
        </div>
      </div>
    );
  };

  const OPTIONS: EmblaOptionsType = { containScroll: false }

  const SLIDES = [upcomingMeal(mealName1, mealIngredients1, mealDate1), upcomingMeal(mealName2, mealIngredients2, mealDate2),
  upcomingMeal(mealName3, mealIngredients3), upcomingMeal(mealName4, mealIngredients4),
  upcomingMeal(mealName5, mealIngredients5), upcomingMeal(mealName6, mealIngredients6)
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  );
};

export const dynamic = 'force-dynamic';
export default Upcoming;
