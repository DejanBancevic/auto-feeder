import React from 'react'

export default function Insert() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div className='flex flex-row-2'>
        <div className='grid grid-col-2'>

          {/* Name */}
          <div className='grid justify-center items-center mr-20 mt-4'>
            <h1 className="text-center">Write the name of the meal</h1>
            <textarea className='card w-80 text-center ' />
          </div>

          {/* Ingredients */}
          <div className='grid mr-20 mt-4'>
            <h1 className='text-center'>Write you ingredients here</h1>
            <textarea className='card w-80 h-80 justify-start ' />
          </div>
        </div>
        
        <div className='grid grid-col-2'>
          {/* Calendar */}
          <div>
            <h1>Calendar</h1>
          </div>

          {/* Recipe */}
          <div>
            <h1>Write your recipe for the meal here</h1>
            <textarea className='card w-80 h-96 ' />
          </div>
        </div>
      </div>

      
    </main>
  )
}
