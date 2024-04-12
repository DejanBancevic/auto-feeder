import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div>
        <h1>Intro</h1>
        <div className="card">
          <h2>What am i doing here ?</h2>
          <p>On this website you can input your own recipts and they will be displayed</p>
        </div>

        <h2>Kerovi pacovi DA</h2>

        <div className="card">
          <h3>New member of the web dev team...</h3>
          <p>Kerovi pacovi Kerovi pacovi Kerovi pacovi Kerovi pacovi Kerovi pacovi Kerovi paovi pacovi Kerovi pacovi </p>
          <div className='flex justify-center my-8'>
            <Link href="/about">
              <button className="btn-primary">View About</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <h3>New website live!</h3>
          <p> Kerovi pacovi Kerovi pacovi Kerovi pacovi Kvi pacovi Kerovi paovi pacovi Kerovi pacovi</p>
        </div>
      </div>
    </main>
  );
}

