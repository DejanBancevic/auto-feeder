import React from 'react'
import Link from "next/link";
import Logo from './logo.webp';
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>

      <Image
        src={Logo}
        alt='Auto Feeder Logo'
        width={30}
        quality={100}
        placeholder='blur'
      />

      <h1>Auto Feeder</h1>

      <Link href='/' >Home</Link>
      <Link href='/insert'>Insert</Link>
      <Link href='/about'>About</Link>
      <Link href='/test'>test</Link>
    </nav>
  )
}