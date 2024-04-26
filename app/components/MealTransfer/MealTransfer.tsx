import dayjs from "dayjs";
import prisma from "../../../lib/prisma";

const MealTransfer = async () => {
  const meals = await prisma.post.findMany();

  ////////////////////// Time Comparison

  const datePrep = (date) => {
    const stringDate = String(date);
    const formatedCurrentDate = dayjs(stringDate)
      .format("YYYY MM DD")
      .replaceAll(" ", "-");

    return formatedCurrentDate;
  };

  const dateComp = (dateFilter) => {
    const currenDate = new Date();

    if (dateFilter == "today") {
      const filteredMeals = meals.filter((meal) => {
        return meal.date === datePrep(currenDate);
      });
      return filteredMeals;
    } else if (dateFilter == "1") {
      currenDate.setDate(currenDate.getDate() + 1);
      const filteredMeals = meals.filter((meal) => {
        return meal.date === datePrep(currenDate);
      });
      return filteredMeals;
    } else if (dateFilter === "2") {
      currenDate.setDate(currenDate.getDate() + 2);
      const filteredMeals = meals.filter((meal) => {
        return meal.date === datePrep(currenDate);
      });
      return filteredMeals;
    } else if (dateFilter === "3") {
      currenDate.setDate(currenDate.getDate() + 3);
      const filteredMeals = meals.filter((meal) => {
        return meal.date === datePrep(currenDate);
      });
      return filteredMeals;
    } else if (dateFilter === "4") {
      currenDate.setDate(currenDate.getDate() + 4);
      const filteredMeals = meals.filter((meal) => {
        return meal.date === datePrep(currenDate);
      });
      return filteredMeals;
    } else if (dateFilter === "5") {
      currenDate.setDate(currenDate.getDate() + 5);
      const filteredMeals = meals.filter((meal) => {
        return meal.date === datePrep(currenDate);
      });
      return filteredMeals;
    } else if (dateFilter === "6") {
      currenDate.setDate(currenDate.getDate() + 6);
      const filteredMeals = meals.filter((meal) => {
        return meal.date === datePrep(currenDate);
      });
      return filteredMeals;
    } else if (dateFilter === "7") {
      currenDate.setDate(currenDate.getDate() + 7);
      const filteredMeals = meals.filter((meal) => {
        return meal.date === datePrep(currenDate);
      });
      return filteredMeals;
    }
  };

  ////////////////////// Format and Return Requested Info

  const displayListElements = (list) => {
    const listElement = list.split(",");
    return (
      <ul className="list-disc">
        {listElement.map((element, index) => (
          <li key={index}>{element.trim()}</li>
        ))}
      </ul>
    );
  };

  const MealName = (dateFilter) => {
    return (
      <div className="list-disc">
        {dateComp(dateFilter).map((meal) => (
          <div key={meal.id}>{meal.name}</div>
        ))}
      </div>
    );
  };

  const MealIngredients = (dateFilter) => {
    return (
      <div>
        {dateComp(dateFilter).map((meal) => (
          <div key={meal.id}>{displayListElements(meal.ingredients)}</div>
        ))}
      </div>
    );
  };

  const MealRecipe = (dateFilter) => {
    return (
      <div>
        {dateComp(dateFilter).map((meal) => (
          <div key={meal.id}>{displayListElements(meal.recipe)}</div>
        ))}
      </div>
    );
  };

  return { MealIngredients, MealRecipe, MealName };
};

export default MealTransfer;
