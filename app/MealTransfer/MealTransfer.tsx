
import { useState, useEffect } from 'react';

const MealTransfer = () => {
    const [meals, setMeals] = useState([]);

    const getMeal = () => {
        fetch('http://localhost:3001')
            .then(response => response.json())
            .then(data => setMeals(data));
    };

    const createMeal = () => {
        let name = prompt('Enter meal name');
        let ingredients = prompt('Enter meal ingredients');
        let recipe = prompt('Enter meal recipe');
        fetch('http://localhost:3001/meals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, ingredients, recipe }),
        })
            .then(response => response.text())
            .then(data => {
                alert(data);
                getMeal();
            });
    };

    const filteredMeals = meals.filter(meal => { return (meal.date).substring(0, 10) == '2022-07-06' });

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
            <ul className='list-disc'>
                {meals.map((meal) => (
                    <li key={meal.id}>{meal.ingredients}</li>
                ))
                }
            </ul >
        )
    }

    const MealRecipe = () => {

        return (
            <ul className='list-disc'>
                {meals.map((meal) => (
                    <li key={meal.id}>{meal.recipe}</li>
                ))
                }
            </ul >
        )
    }

    return { meals, getMeal, createMeal, MealIngredients, MealRecipe, MealName };

};


export default MealTransfer


