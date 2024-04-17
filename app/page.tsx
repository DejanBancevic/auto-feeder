"use client"

import Link from "next/link";
import React, { useState, useEffect } from 'react'

const Home = () => {


  const [meals, setMeals] = useState("");

  function getMeal() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setMeals(data);
      });
  }

  function createMeal() {
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
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMeal();
      });
  }


 useEffect(() => {
    getMeal();
  }, []);



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div>
        {meals ? meals : 'There is no meal data available'}
        <br />
        <button onClick={createMeal}>Add meal</button>
        <br />
      </div>

      <div>

        <h1 className="flex justify-center text-4xl mb-4">MEAL OF THE DAY</h1>
        <div className="flex justify-center space-x-4">
          <div className="card w-80 h-96 flex justify-center items-center">
            <h2 className="">MEAL DISPLAY</h2>
          </div>


          <div className="card w-80 h-96 flex justify-center items-center">
            <h2 className="">MEAL DISPLAY</h2>
          </div>
        </div>


        <div className="card">
          <h3>Adding a New Recipe</h3>
          <p>If you'd like to add your own recipe, just click on the button below, it will lead you to an insert page! </p>
          <div className='flex justify-center my-5'>
            <Link href="/insert">
              <button className="btn-primary">View Insert Page</button>
            </Link>
          </div>
        </div>



      </div>
    </main>
  )
}

export default Home