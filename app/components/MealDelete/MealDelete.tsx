
const mealDelete = async ( name, recipe, ingredients, date) => {
    try {
        const body = { name, recipe, ingredients, date };
        const response = await fetch('/api/post', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            window.alert("There's no meal on this date");
        }
        else if (response.ok) {
            window.alert("Meal successfully deleted!");
        }
    } catch (e) {
        console.log(e);
    }
};

export default mealDelete