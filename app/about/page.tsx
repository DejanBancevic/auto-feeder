import React from "react";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center md:justify-start p-18">
      <div className="text-center">
        <div className="grid justify-center gap-2 pb-6">
          <h1>Don't know what you're gonna eat every day?</h1>
          <h2>Well, you're in luck!</h2>
        </div>

        <div className="max-w-60 mx-auto">
          {/* Added container with max-width and center alignment */}
          <div className="card">
            <h3>What we provide...</h3>
            <p>
              Every day on the main page a new recipe for a meal will be
              displayed that you inserted.
            </p>
          </div>
          <div className="card">
            <h3>Who are we...</h3>
            <p>Kerovi - Pacovi</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
