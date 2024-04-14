import React from 'react'
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div>
        <div className='flex justify-center'>
          <h1>Dont know what you're gonna eat every day?</h1>
        </div>

        <div className='flex justify-center mb-12'>
          <h2 className=''>Well, you're in luck!</h2>
        </div>

        <div className="card">
          <h3>What we provide...</h3>
          <p>Every day on the main page a new recipe for a meal will be displayed that you inserted.</p>
        </div>

        <div className="card">
          <h3>Who are we...</h3>
          <p>Kerovi - Pazzovi</p>
        </div>

      </div>
    </main>
  )
}

