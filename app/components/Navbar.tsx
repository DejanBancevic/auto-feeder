"use client"

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo.webp";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const AuthButton=() =>{
    const { data: session } = useSession();

    if (session) {
      return (
        <div>
          <button className="p-0 text-base" onClick={() => signOut()}> {session?.user?.name} | Sign out</button>
        </div>
      );
    }
    return (
      <div>
        <button className="p-0  text-base" onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <nav>
      <div className="flex items-center space-x-4">
        <div className="flex items-left space-x-2">
          <Image src={Logo} alt="Auto Feeder Logo" width={30} quality={100} />
          <h1 className="text-xl">Auto Feeder</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/upcoming" onClick={closeMenu}>
            Upcoming Meals
          </Link>
          <Link href="/insert" onClick={closeMenu}>
            Insert
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/test" onClick={closeMenu}>
            Test
          </Link>
        </div>
        <div className="md:hidden absolute right-5">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          {isOpen && (
            <div className=" z-50 grid absolute top-full bg-white mt-1 shadow-lg rounded-md p-2 right-4">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/upcoming" onClick={closeMenu}>
                Upcoming Meals
              </Link>
              <Link href="/insert" onClick={closeMenu}>
                Insert
              </Link>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
              <Link href="/test" onClick={closeMenu}>
                Test
              </Link>
              <AuthButton />
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:block">
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;