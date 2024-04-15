import React, { useState } from 'react'
import CalendarApp from '../CalendarApp/CalendarApp'


export default function Insert() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div className='flex flex-row-2'>
        <div className='grid-flow-col'>

          {/* Name */}
          <div className='grid justify-center items-center mr-20 mt-4'>
            <h1 className="text-center">Write the name of the meal</h1>
            <textarea className='card w-80 h-12 text-center' />
          </div>

          {/* Ingredients */}
          <div className='grid mr-20 mt-4  '>
            <h1 className='text-center'>Write you ingredients here</h1>
            <textarea className='card-textarea w-80 h-96 justify-start' />
          </div>
        </div>

        <div className='grid-flow-col-dense'>
          {/* Calendar */}
          <div className='grid justify-items-center mt-4 '>
            <h1 className='text-center pb-4'>Calendar</h1>
            <CalendarApp/>
          </div>

          {/* Recipe */}
          <div className='grid pt-4 justify-items-center'>
            <h1>Write your recipe for the meal here</h1>
            <textarea className='card-textarea w-80 h-96 ' />
          </div>
        </div>
      </div>


    </main>
  )
}
