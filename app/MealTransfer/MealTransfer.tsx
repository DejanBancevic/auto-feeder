import dayjs from "dayjs";
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

    ////////////////////// Time Comparison

    const datePrep = (date,num) => {

        const lastCharacter = date.substring(0, 10).slice(-1);
        const lastCharacterPlus = String(parseInt(lastCharacter) + num);
        const finalDate = date.substring(0, 9) + lastCharacterPlus;

        return finalDate
    }

    const dateComp = (dateFilter) => {

        const currentDate = String(new Date());
        const formatedCurrentDate = dayjs(currentDate).format("YYYY MM DD").replaceAll(" ", "-");

        if (dateFilter == "today") {
            const filteredMeals = meals.filter(meal => { return datePrep(meal.date,1) === formatedCurrentDate });
            return filteredMeals
        } else if (dateFilter == "1") {
            const filteredMeals = meals.filter(meal => { return datePrep(meal.date,1) === datePrep(formatedCurrentDate,1)});
            return filteredMeals
        } else if (dateFilter === "2") {
            const filteredMeals = meals.filter(meal => { return datePrep(meal.date, 1) == datePrep(formatedCurrentDate,2)});
            return filteredMeals
        }
    }

    ////////////////////// Format and Return Requested Info

    const displayListElements = (list) => {
        const listElement = list.split(",");
        return (<ul className="list-disc">
            {listElement.map((element, index) => (
                <li key={index}>{element.trim()}</li>
            ))}
        </ul>);
    }

    useEffect(() => {
        getMeal();
    }, []);

    const MealName = (dateFilter) => {

        return (
            <div className='list-disc'>
                {dateComp(dateFilter).map((meal) => (
                    <div key={meal.id}>{meal.name}</div>
                ))
                }
            </div >
        )
    }

    const MealIngredients = (dateFilter) => {
        return (
            <div >
                {dateComp(dateFilter).map((meal) => (
                    <div>
                        {displayListElements(meal.ingredients) }
                    </div>
                ))
                }
            </div >
        )
    }

    const MealRecipe = (dateFilter) => {

        return (
            <div >
                {dateComp(dateFilter).map((meal) => (
                    <div>
                        {displayListElements(meal.recipe)}
                    </div>
                ))
                }
            </div >
        )
    }

    return { getMeal, CreateMeal, MealIngredients, MealRecipe, MealName };

};


export default MealTransfer


