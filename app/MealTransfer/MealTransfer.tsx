
import { useState } from 'react';

const MealTransfer = () => {
    const [meals, setMeals] = useState([]);

    const getMeal = () => {
        fetch('http://localhost:3001')
            .then(response => response.text())
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

    return { meals, getMeal, createMeal };
};


export default MealTransfer