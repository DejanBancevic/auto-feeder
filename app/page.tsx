import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
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
  );
}

