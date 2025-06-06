
import { getSession } from "./actions/getCurrentUser";
import { redirect } from "next/navigation";
import Login from "./components/Login/Login"

const Landing = async () => {

  const session = await getSession();

  if (session) {
    redirect('/home');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-18">
      <Login />
    </main>
  );
}

//test 2
export default Landing;
