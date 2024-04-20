const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mealsdb',
    password: 'dada',
    port: 5432,
});

//get all Meals our database
const getMeals = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM meals", (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};
//create a new Meal record in the databsse
const createMeal = (body) => {
    return new Promise(function (resolve, reject) {
        const { name, ingredients, recipe, date } = body;
        pool.query(
            "INSERT INTO Meals (name, ingredients, recipe, date) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, ingredients, recipe, date],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(
                        `A new Meal has been added: ${JSON.stringify(results.rows[0])}`
                    );
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};
//delete a Meal
const deleteMeal = (id) => {
    return new Promise(function (resolve, reject) {
        pool.query(
            "DELETE FROM Meals WHERE id = $1",
            [id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(`Meal deleted with ID: ${id}`);
            }
        );
    });
};
//update a Meal record
const updateMeal = (id, body) => {
    return new Promise(function (resolve, reject) {
        const { name, ingredients, recipe, date } = body;
        pool.query(
            "UPDATE Meals SET name = $1, ingredients = $2, recipe = $3 date = $4 WHERE id = $5 RETURNING *",
            [name, ingredients, recipe, date],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(`Meal updated: ${JSON.stringify(results.rows[0])}`);
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};
module.exports = {
    getMeals,
    createMeal,
    deleteMeal,
    updateMeal
};