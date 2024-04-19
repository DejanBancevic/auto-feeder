"use client"

import Link from "next/link";
import React, { useState, useEffect } from 'react'
import MealTransfer from './MealTransfer/MealTransfer';

const Home = () => {

  const { MealIngredients, MealRecipe, MealName } = MealTransfer();
  const mealIngredients = MealIngredients();
  const mealRecipe = MealRecipe();
  const mealName = MealName();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div>
        {/* Names */}
        <h1 className="flex justify-center text-4xl mb-4">MEAL OF THE DAY</h1>
        <h2 className="flex justify-center text-4xl mb-4">{mealName}</h2>  
        {/* Cards */}
        <div className="flex justify-center space-x-4">
          {/* Right Ingredients Card */}
          <div className="card-home flex flex-wrap justify-left items-left overflow-auto">
            <div>
              <h3 className="pt-2 pr-2">Ingredients</h3>
              <div className="p-4">
                {mealIngredients}
              </div>
            </div>
          </div>
          {/* Left Recipe Card */}
          <div className="card-home flex flex-wrap justify-left items-left overflow-auto">
            <div>
              <h3 className="pt-2 pr-2">Recipe</h3>
              <div className="p-4">
                {mealRecipe}
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3>Adding a New Recipe</h3>
          <p>If you'd like to add your own recipe, just click on the button below, it will lead you to an insert page! </p>
          <div className='flex justify-center my-5'>
            <Link href="/insert">
              <button className="btn-primary">View Insert Page</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home