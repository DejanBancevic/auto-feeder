import React from "react";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center md:justify-start p-18">
      <div className="text-center md:mx-48">
        <div className="grid justify-center gap-2 pb-6">
          <h1>Don't know what you're gonna eat every day?</h1>
          <h2>Well, you're in luck!</h2>
        </div>
        <div className="card">
          <h3>What we provide</h3>
          <p>
            Every day on the home page a new recipe for a meal will be
            displayed that you inserted for that date, also a week of
            meals ahead will be displayed on the upcoming page, so that you can get your
            ingredients in time.
          </p>
        </div>
        <div className="card">
          <h3>What technologies were used</h3>
          <p>Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, Vercel</p>
        </div>
        <div className="card">
          <h3>Made by</h3>
          <p><a href="https://www.linkedin.com/in/dejan-bancevic-9973b5238/">Dejan Bančević</a></p>
        </div>
      </div>
    </main>
  );
};

export default About;
