// In components/Test.js
import React, { useState, useEffect } from 'react';
import prisma from "../../lib/prisma";

const testda = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const da = await prisma.entry.findMany();
                setMeals(da);
            } catch (error) {
                console.error("Error fetching entries:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only once, similar to componentDidMount

    // Render loading or placeholder if meals are not fetched yet
    if (meals.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {meals.map(meal => (
                <div key={meal.id}>
                    <h1>{meal.name}</h1>
                </div>
            ))}
        </div>
    );
};

export default testda;
