import dayjs from "dayjs";
import { only } from "node:test";
import { useState, useEffect } from 'react';

const MealTransfer = () => {
    const [meals, setMeals] = useState([]);

    const getMeal = () => {
        fetch('http://localhost:3001')
            .then(response => response.json())
            .then(data => setMeals(data));
    };

    const CreateMeal = (name, ingredients, recipe, date) => {
        fetch('http://localhost:3001/meals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, ingredients, recipe, date }),
        })
            .then(response => response.text())
            .then(data => {
                alert(data);
                getMeal();
            });
    };

    ////////////////////// Time Compare

    const datePrep = (date) => {

        const lastCharacter = date.substring(0, 10).slice(-1);
        const lastCharacterPlus = String(parseInt(lastCharacter) + 1);
        const finalDate = date.substring(0, 9) + lastCharacterPlus;

        return finalDate
    }

    const currentDate = String(new Date());
    const formatedCurrentDate = dayjs(currentDate).format("YYYY MM DD").replaceAll(" ", "-");
    const filteredMeals = meals.filter(meal => { return datePrep(meal.date) == formatedCurrentDate });


    ////////////////////// 

    useEffect(() => {
        getMeal();
    }, []);

    const MealName = () => {

        return (
            <div className='list-disc'>
                {filteredMeals.map((meal) => (
                    <div key={meal.id}>{meal.name}</div>
                ))
                }
            </div >
        )
    }

    const MealIngredients = () => {

        return (
            <div >
                {filteredMeals.map((meal) => (
                    <p key={meal.id}>{meal.ingredients}
                    </p>
                ))
                }
            </div >
        )
    }

    const MealRecipe = () => {

        return (
            <div >
                {filteredMeals.map((meal) => (
                    <p key={meal.id}>{meal.recipe}
                    </p>
                ))
                }
            </div >
        )
    }

    return { meals, getMeal, CreateMeal, MealIngredients, MealRecipe, MealName };

};


export default MealTransfer


