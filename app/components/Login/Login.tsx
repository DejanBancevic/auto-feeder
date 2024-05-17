"use client"

import { signIn} from "next-auth/react";
import backgroundImage from '../../../public/assets/LandingPageArt.png';
import Image from 'next/image';

const Login = () => {

    const handleSignIn = () => {
        const callbackUrl = `${window.location.origin}/home`;
        return signIn('github', { callbackUrl });
    };

    return (
      <div>
          <h1 className="text-3xl md:text-4xl mb-2 md:mb-4 text-center">Welcome to Auto Feeder</h1>

          <p className="flex justify-center mt-10 md:mt-14 text-xl">
              A website for planning and organizing your meals ahead of time.
          </p>
          <p className="flex justify-center mt-3 text-xl">
              Sign in below and enjoy!
          </p>

          <div className="relative flex justify-center my-16 md:my-18 w-full h-64 md:h-96">
              <button
                  className="btn-land text-xl px-6 py-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  onClick={handleSignIn}
              >
                  Sign in
              </button>
              <Image
                  src={backgroundImage}
                  alt="Background"
                  layout="fill"
                  objectFit="contain"
                  className="z-0"
              />
          </div>
      </div>
  )
}

export default Login