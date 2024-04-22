

const express = require('express');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/api/meals', async (req, res) => {
    try {
        const meals = await prisma.entry.findMany();
        res.json(meals);
    } catch (error) {
        console.error('Error fetching meals:', error);
        res.status(500).json({ error: 'Error fetching meals' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});









/*

const express = require('express')
const app = express()
const port = 3001

const meal_model = require('./mealModel');

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});


// Ovo dalje ti nista ne treba za front, ovo je samo gledanje za back


app.get('/', (req, res) => {
    meal_model.getMeals()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.post('/meals', (req, res) => {
    meal_model.createMeal(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.delete('/meals/:id', (req, res) => {
    meal_model.deleteMeal(req.params.id)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
app.put("/meals/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    meal_model
        .updateMeal(id, body)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});
///////////////////////////////////////////////////////

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


*/