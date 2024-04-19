import React from 'react'
import Link from "next/link";
import Logo from './logo.webp';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>

      <Image
        src={Logo}
        alt='Auto Feeder Logo'
        width={30}
        quality={100}
      />

      <h1>Auto Feeder</h1>

      <Link href='/' >Home</Link>
      <Link href='/Upcoming'>Upcoming Meals</Link>
      <Link href='/Insert'>Insert</Link>
      <Link href='/About'>About</Link>
      <Link href='/Test'>test</Link>
    </nav>
  )
}

export default Navbar