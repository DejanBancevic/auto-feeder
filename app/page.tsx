import Link from "next/link";
import MealTransfer from "./components/MealTransfer/MealTransfer";

const Home = async () => {
  const { MealIngredients, MealRecipe, MealName } = await MealTransfer();
  const mealIngredients = MealIngredients("today");
  const mealRecipe = MealRecipe("today");
  const mealName = MealName("today");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-18">
      <div>
        {/* Names */}
        <h1 className="text-3xl md:text-4xl mb-2 md:mb-4 text-center">MEAL OF THE DAY</h1>
        <h2 className="text-3xl md:text-4xl mb-2 md:mb-4 text-center">{mealName}</h2>
        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center md:space-x-4">
          {/* Right Ingredients Card */}
          <div className="card-home flex flex-wrap md:justify-start md:items-start overflow-auto">
            <div>
              <h3 className="pt-2 pr-2 text-center md:text-left">Ingredients</h3>
              <div className="p-2 md:p-4">{mealIngredients}</div>
            </div>
          </div>
          {/* Left Recipe Card */}
          <div className="card-home flex flex-wrap   md:justify-start md:items-start overflow-auto">
            <div>
              <h3 className="pt-2 pr-2 text-center md:text-left">Recipe</h3>
              <div className="p-2 md:p-4">{mealRecipe}</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Adding a New Recipe</h3>
          <p className="text-center md:text-left">
            If you'd like to add your own recipe, just click on the button
            below, it will lead you to an insert page!
          </p>
          <div className="flex justify-center my-3 md:my-5">
            <Link href="/insert">
              <button className="btn-primary">View Insert Page</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export const dynamic = 'force-dynamic';
export default Home;
