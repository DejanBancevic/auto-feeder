const submitMeal = async (name, recipe, ingredients, date) => {
    try {
        const body = { name, recipe, ingredients, date };
        const response = await fetch('/api/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            window.alert("Meal successfully inserted");
        }
        else if (!response.ok) {
            window.alert('You already have a meal set to this date, please either delete the meal on this date or select a new date.');
        }
    }
    catch (e) {
        window.alert(e)
    }
};

export default submitMeal