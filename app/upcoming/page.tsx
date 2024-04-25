//"use client";

import React from "react";
import MealTransfer from "../components/MealTransfer/MealTransfer";

const Upcoming = async () => {
  const { MealIngredients, MealName } = await MealTransfer();
  const mealIngredients = MealIngredients("1");
  const mealName = MealName("1");

  const mealName2 = MealName("2");
  const mealIngredients2 = MealIngredients("2");

  const mealName3 = MealName("2");
  const mealIngredients3 = MealIngredients("2");


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div className="flex gap-4">
        {/* Today +1 */}
        <div className="card-home flex justify-left items-left overflow-auto">
          <div>
            <h1>{mealName}</h1>
            <h3 className="pt-2 pr-2">Ingredients</h3>
            <div className="p-4">{mealIngredients}</div>
          </div>
        </div>

        {/* Today +2 */}
        <div className="card-home flex justify-left items-left overflow-auto">
          <div>
            <h1>{mealName2}</h1>
            <h3 className="pt-2 pr-2">Ingredients</h3>
            <div className="p-4">{mealIngredients2}</div>
          </div>
        </div>

        {/* Today +3 */}
        <div className="card-home flex justify-left items-left overflow-auto">
          <div>
            <h1>{mealName3}</h1>
            <h3 className="pt-2 pr-2">Ingredients</h3>
            <div className="p-4">{mealIngredients3}</div>
          </div>
        </div>
      </div>
    </main>
  );
};
export const dynamic = 'force-dynamic'
export default Upcoming;
